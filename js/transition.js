function visible(el) {
    var bottom_of_object = $(el).offset().top + $(el).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it in */

    return( bottom_of_window > bottom_of_object );
}

var win = $(window);
var notifs = $(".entry");

win.scroll(function(event) {

    notifs.each(function(i, el) {
        var el = $(el);
        if (visible(el)) {
            el.css("visibility","visible");
            el.addClass("show-notif");
        }
    });

});