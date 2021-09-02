$(function () {

    // top으로 =========================================================
    $(".top").on("click", function () {
        $("html,body").stop().animate({ scrollTop: 0 }, 200, "linear");
    });

});