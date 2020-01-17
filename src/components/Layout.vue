<template>
  <div>
    <div id="video-bg">
        <img src="static/img/background.png">
        <video muted defaultMuted autoplay playsinline>
            <source src="https://cdn.novusphere.io/static/timelapse.mp4" type="video/mp4">
        </video>
    </div>
    <div class="overlay-bg"></div>
    <div id="homepage">
        <div class="container content">
          <div class="row header mt-2">
            <div class="offset-md-4 col-md-4 col-xs-12 text-center">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="#/" data-toggle="tooltip" data-animation="false" data-placement="top" title="Home">
                      <font-awesome-icon :icon="['fas', 'home']" ></font-awesome-icon>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://discord.gg/PtXzUVr" data-toggle="tooltip" data-animation="false" data-placement="top" title="Discord">
                      <font-awesome-icon :icon="['fab', 'discord']" ></font-awesome-icon>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://twitter.com/thenovusphere" data-toggle="tooltip" data-animation="false" data-placement="top" title="Twitter">
                      <font-awesome-icon :icon="['fab', 'twitter']" ></font-awesome-icon>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://medium.com/@thenovusphere/" data-toggle="tooltip" data-animation="false" data-placement="top" title="Medium">
                      <font-awesome-icon :icon="['fab', 'medium']" ></font-awesome-icon>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://github.com/Novusphere" data-toggle="tooltip" data-animation="false" data-placement="top" title="GitHub">
                      <font-awesome-icon :icon="['fab', 'github']" ></font-awesome-icon>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://github.com/Novusphere/temporary-blockchain/blob/master/PRECOMPILED.MD" data-toggle="tooltip" data-animation="false" data-placement="top" title="Wallet">
                      <font-awesome-icon :icon="['fas', 'wallet']" ></font-awesome-icon>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.cryptopia.co.nz/Exchange/?market=ATMOS_BTC" data-toggle="tooltip" data-animation="false" data-placement="top" title="Trade (BTC)">
                      <font-awesome-icon :icon="['fab', 'btc']" ></font-awesome-icon>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://newdex.io/trade/novusphereio-atmos-eos" data-toggle="tooltip" data-animation="false" data-placement="top" title="Trade (EOS)">
                      <img style="position: relative; left: -14px; top: -3px;" src="https://cdn.novusphere.io/static/eos2.svg" width="40" height="30">
                    </a>
                  </li>
                </ul>
            </div>
          </div>
          <slot></slot>
        </div>
    </div>
  </div>
</template>

<style>
#video-bg {
  position: fixed;
}

#video-bg img {
  position: fixed;
  z-index: 1;
  width: 100%;
  object-fit: fill;
}

#video-bg video {
  position: fixed;
  z-index: 2;
  width: 100%;
  object-fit: fill;
}

.overlay-bg {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background: rgba(20, 20, 20, 0.82);
}

#homepage {
  position: relative;
  height: 100%;
  z-index: 99;
}

#homePage .content {
    display: table;
    position: absolute;
    height: 100%;
    width: 100%;
}

#homepage header {
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    padding-bottom: 15px;
}

#homepage .header a {
  color: white;
  font-size: x-large;
}

.footer {
  color: white;
  text-align: center;
}

.footer h1 {
  font-weight: bolder;
}

.footer h5 {
  font-weight: bold;
}

.title {
  color: #15dcff;
  font-size: x-large;
  font-weight: bolder;
}

.sub-title {
  color: white;
  font-size: medium;
  font-weight: bold;
}

</style>

<script>
import jQuery from 'jquery'

export default {
  name: 'Layout',
  mounted() {
    jQuery(window).resize(this.resize);
    this.resize();
    this.restartVideo();
  },
  methods: {  
    resize() {
      var $videobg = jQuery('#video-bg video, #video-bg img');
      var $window = jQuery(window);
      $videobg.css('width', ($window.width() + 30) + 'px');
      $videobg.css('height', ($window.height() + 100) + 'px');
    },
    restartVideo() {
      var video = jQuery("#video-bg video")[0];
      video.currentTime = 0;
      setTimeout(this.restartVideo, 1000*60*4);
    }
  },
  data () {
    return {
    }
  }
}
</script>