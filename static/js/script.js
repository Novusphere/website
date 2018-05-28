$('.scrolling').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$('[data-toggle="tooltip"]').tooltip();

(function () {
    var path = document.querySelector('#wave');
    var animation = document.querySelector('#moveTheWave');
    var m = 0.512286623256592433;
    var waving = true;

    function buildWave(w, h) {
        var a = h / 4;
        var y = h / 2;
        var pathData = ['M', w * 0, y + a / 2, 'c', a * m, 0, -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a, 's', -(1 - a) * m, a, a, a, 's', -(1 - a) * m, -a, a, -a].join(' ');
        path.setAttribute('d', pathData);
    }

    function stopWave() {
        if (!waving)
            return;
        waving = false;
        $(".loading-page").delay(100).fadeOut("slow");
    }

    buildWave(90, 60);
    setTimeout(stopWave, 5000);

    var options = {
        videoId: 'dd4Lnrn26oI',
        start: 0,
        mute: true,
        onPlayerStateChange: function (state, player) {
            if (state.data === YT.PlayerState.PLAYING) {
                stopWave();

                function restartVideo() {
                    player.seekTo(0);
                    setTimeout(restartVideo, 1000 * 60 * 4);
                }

                restartVideo();
            }
        }
    };

    $('#youtubeBg').tubular(options);
})();