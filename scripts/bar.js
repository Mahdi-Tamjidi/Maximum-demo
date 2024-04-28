$(window).on("scroll", function () {
    $(".progress").each(function (index, progress) {
        var progressBar = $(progress).find(".progress-bar");
        var progressPercent = parseInt($(progressBar).attr("data-progress"));
        if ($(window).scrollTop() > 1300) {
            $(progressBar)
                .css("width", progressPercent + "%")
        }
    });
});




