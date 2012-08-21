// Student Checkoff Tiles
//
$(document).ready(function() {
    var list_items = $('.scroll-list-item'), 
        checkoff = $('#checkoff-submit'), 
        form = $('#checkoff-form');

    $(checkoff).click(function(e) {
        e.preventDefault();
        form.submit();
    });

    list_items.each(function(i, l) {
        var chk = $(l).children('.scroll-list-item-checkbox'), 
            tile = $(l).children('a'),
            status = (chk.checked === undefined) ? false : chk.checked;

        $(tile).click(function (e) {
            e.preventDefault();
            status = !status;
            if(status) {
                $(chk).attr('checked', 'checked');
                $(tile).addClass('checked');
            }
            else {
                $(chk).removeAttr('checked');
                $(tile).removeClass('checked');
            }
        });
    });
});