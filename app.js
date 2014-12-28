$(document).ready(function() {
    $(".icon-file-pdf").click(function() {
        $(this).toggleClass("active");
        $(".caption-file").toggleClass("active");
        $(".icon-earth").toggleClass("active");
        $(".caption-url").toggleClass("active");
        $(".address").toggleClass("hidden");
        $(".file_dialog").toggleClass("hidden");
    });
    $(".icon-earth").click(function() {
        $(this).toggleClass("active");
        $(".caption-url").toggleClass("active");
        $(".icon-file-pdf").toggleClass("active");
        $(".caption-file").toggleClass("active");
        $(".address").toggleClass("hidden");
        $(".file_dialog").toggleClass("hidden");
    });
});
