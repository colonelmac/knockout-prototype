$(document).ready(function() {
    var container = $("ul.ul-scroll-list:first"),
        items = $("li.scroll-list-item"),
        defaultText = $("input.search-input").val(),
        timeoutDuration = 500,
        itemTexts = {},
        keypause = (function(){
            var timer;
            return function(timeout, fun){
                clearTimeout(timer);
                timer = setTimeout(fun, timeout);
            };

        })();

    items.each(function(){
        itemTexts[$("span.scroll-list-item-title", this).text().trim().toLowerCase()] = this;
    });
        
    $("input.search-input").focus(function() {
        if ($(this).val() === defaultText) {
            $(this).attr("value", "").css("font-style", "normal");
        }
    }).blur(function() {
        if (!$(this).val()) {
            $(this).attr("value", defaultText).css("font-style", "italic");
        }
    }).keyup(function() {
        var $this = $(this);
        keypause(timeoutDuration, function(){
            var terms = $this.val().trim().toLowerCase().split(" "),
                checked = $('a[class="checked"]').parent(),
                matched;

            if (terms.length !== 0) {
                matched = $.map(itemTexts, function(val, key){
                    var i;
                    for (i=0; i<terms.length; i++){
                        if (key.indexOf(terms[i]) != -1){
                            return val;
                        }
                    }
                    return null;
                });
            }

            var hidden = items.not(checked.add(matched)).slideUp();
            if ((items.not(hidden).slideDown()).length === 0) {
                $.autograder.notify("Your search did not match any students", 5000);
            }
        });
    });
});
