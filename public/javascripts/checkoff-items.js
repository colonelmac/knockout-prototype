// Checkoff Items Tiles
//
$(document).ready(function() {

    if(!$.autograder)
        $.autograder = {}; 
    
    $.autograder.notify = (function(){
        var notification = $("#checkoff-items-selector-notification"),
           notificationUp = false, 
           timerId = null;

        return function(text, timeout){
            timeout = timeout || 2000;

            $(notification).text(text);

            if(!notificationUp) {
                notification.slideDown();
                notificationUp = true;
            }

            if(notificationUp) {
                clearTimeout(timerId);
                timerId = setTimeout(function() {
                    notification.slideUp();
                    notificationUp = false;
                }, timeout); 
            }
        };
    })();

    var selectorTiles = $("#checkoff-items-selector td a");
        
    selectorTiles.each(function(i, l) {
        var $this = $(l), 
                chk = $this.siblings('.scroll-list-item-checkbox'),
                status = (chk.checked === undefined) ? false : chk.checked;

        $this.click(function(e) {
            e.preventDefault();
            status = !status;
            
            if(status)
                $(chk).attr('checked', 'checked');
            else 
                $(chk).removeAttr('checked');

            $this.toggleClass('selected'); 
            
            var txt = this.attributes['alt'].nodeValue,
                action = ($(this).hasClass('selected')) ? ' selected.' : ' removed.';
            
            $.autograder.notify(txt + action);
        });
    });
});
