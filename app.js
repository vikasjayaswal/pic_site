$(document).ready(function() {
    $(".icon-file-picture").click(function() {
        $(this).toggleClass("active");
        $(".icon-earth").toggleClass("active");
        $(".address").toggleClass("hidden");
        $(".file_dialog").toggleClass("hidden");
    });
    $(".icon-earth").click(function() {
        $(this).toggleClass("active");
        $(".icon-file-picture").toggleClass("active");
        $(".address").toggleClass("hidden");
        $(".file_dialog").toggleClass("hidden");
    });
});
