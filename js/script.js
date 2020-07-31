$(document).ready(function () {
    $(".menu__icon").click(function () {
        $('.menu__icon').toggleClass( "active");
        $('.menu__body').toggleClass( "active");
    });
});