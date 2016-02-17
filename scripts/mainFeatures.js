$(function() {

    $('.dropdown-hamburger').click(function() {
        $(this).next('.menu').toggle();
    });

    $(document).click(function(e) {
        var target = e.target;
        if (!$(target).is('.dropdown-hamburger') && !$(target).parents().is('.dropdown-hamburger')) {
            $('.menu').hide();
        }
    });

});
