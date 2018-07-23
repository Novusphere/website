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
                    <a href="https://www.cryptopia.co.nz/Exchange/?market=ATMOS_BTC" data-toggle="tooltip" data-animation="false" data-placement="top" title="Trade">
                      <font-awesome-icon :icon="['fab', 'btc']" ></font-awesome-icon>
                    </a>
                  </li>
                </ul>
            </div>
          </div>
          <div class="row">
            <div class="offset-md-4 col-md-4 col-xs-12 text-center">
              <object data="static/img/logo.svg" type="image/svg+xml">
              </object>
            </div>
          </div>
          <div class="row">
            <div class="offset-md-4 col-md-4 col-xs-12 text-center mb-1">
              <span class="title">NOVUSPHERE</span>
            </div>
          </div>
          <div class="row">
            <div class="offset-md-4 col-md-4 col-xs-12 text-center mb-2">
              <span class="sub-title">INSTANT UNLIMITED ACCESS TO ANYTHING</span>
            </div>
          </div>
          <div class="row">
            <div class="offset-md-4 col-md-4 col-xs-12 text-center mb-4">
              <a href="https://docs.google.com/document/d/e/2PACX-1vSBdM9mqS8QYrv50mqXP7tYdDhl9EcXdr8UnunqGOr43m_9Ka4cOdZRBV6eMllnBAipP_L3kTm0kzKV/pub" class="btn btn-outline-light">WHITEPAPER</a>
            </div>
          </div>
          <div class="row">
            <div class="footer">
                <div class="row">
                    <div class="col-md-3 col-xs-12">
                        <h1><font-awesome-icon :icon="['fas', 'balance-scale']" ></font-awesome-icon></h1>
                        <h5>Free Usage</h5>
                        <p>Novusphere is entirely free to use, no mandatory paywalls to access content you can otherwise find elsewhere for free.</p>
                    </div>
                    <div class="col-md-3 col-xs-12">
                        <h1><font-awesome-icon :icon="['fas', 'globe']" ></font-awesome-icon></h1>
                        <h5>Decentralized Governance</h5>
                        <p>Important decisions are made final by ATMOS holders. The community governs the direction of development.</p>
                    </div>
                    <div class="col-md-3 col-xs-12">
                        <h1><font-awesome-icon :icon="['fas', 'code']" ></font-awesome-icon></h1>
                        <h5>Open Source</h5>
                        <p>We strive to produce open source software that is free to use and anyone can audit.</p>
                    </div>
                    <div class="col-md-3 col-xs-12">
                        <h1><font-awesome-icon :icon="['fas', 'unlock']" ></font-awesome-icon></h1>
                        <h5>Uncensorable</h5>
                        <p>Anyone can add content to the database via the EOS blockchain. Anyone can self-host a Novusphere decentralized application.</p>
                    </div>
                </div>
            </div>
          </div>
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
  name: 'Index',
  mounted() {
    //jQuery('[data-toggle="tooltip"]').tooltip();
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