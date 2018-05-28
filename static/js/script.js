$('.scrolling').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$('[data-toggle="tooltip"]').tooltip();

(function () {
    function restartVideo() {
        var video = $("#video-bg video")[0];
        video.currentTime = 0;
        setTimeout(restartVideo, 1000*60*4);
    }

    function resize() {
        var options = { ratio: 16/9 };

        var width = $(window).width(),
            pWidth, // player width, to be defined
            height = $(window).height(),
            pHeight, // player height, tbd
            $tubularPlayer = $('#video-bg');

        // when screen aspect ratio differs from video, video must center and underlay one dimension

        if (width / options.ratio < height) { // if new video height < window height (gap underneath)
            pWidth = Math.ceil(height * options.ratio); // get new player width
            $tubularPlayer.width(pWidth).height(height).css({left: (width - pWidth) / 2, top: 0}); // player width is greater, offset left; reset top
        } else { // new video width < window width (gap to right)
            pHeight = Math.ceil(width / options.ratio); // get new player height
            $tubularPlayer.width(width).height(pHeight).css({left: 0, top: (height - pHeight) / 2}); // player height is greater, offset top; reset left
        }

    }

    restartVideo();
    resize();
    $(window).resize(resize);
})();