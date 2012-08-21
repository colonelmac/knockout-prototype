$(document).ready(function(){
    var scrollable = $("#scrollable"),
        froyo = /Android\s+2/.test(navigator.userAgent);

    if (froyo){
        scrollable.removeClass("overflow");
    }

    $(window).resize(function(){
        if (!froyo){
            scrollable.css("height", $(window).height() - ($("#header").outerHeight() + $("#subheader").outerHeight() + 30));
        }
    }).resize();
});
