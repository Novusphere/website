<template>
  <div>
    <Layout>
          <div class="row">
            <div class="offset-md-4 col-md-4 col-xs-12 text-center">
              <object data="static/img/logo.svg" type="image/svg+xml">
              </object>
            </div>
          </div>
          <div class="row" style="position: relative; top: -25px; margin-bottom: -25px;">
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
              <div class="dropdown d-inline">
                <button class="btn btn-outline-light" type="button" id="whitepaper" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  WHITEPAPERS
                </button>
                <div class="dropdown-menu" aria-labelledby="whitepaper">
                  <a class="dropdown-item" href="https://github.com/Novusphere/docs/blob/master/formal/novusphere-db.md">Atmos DB</a>
                  <a class="dropdown-item" href="https://docs.google.com/document/d/1TXVH7RdCTfITMmAVc6vlAxLpvP8Pu_k7_gLHl2cKHwc/edit?usp=sharing">Discussions (EN)</a>
                  <a class="dropdown-item" href="https://docs.google.com/document/d/1XOlFYxoN1XOsc1ySRVJ-e5vtZ69WcY1hfCZj8e4Mokk/edit?usp=sharing">Discussions (中文)</a>
                </div>
              </div>
              <a href="https://beta.discussions.app" class="btn btn-outline-light">DISCUSSIONS</a>
            </div>
          </div>
          <div class="row">
            <div class="footer">
                <div class="row">
                    <div class="col-md-4 col-xs-12">
                        <h1><font-awesome-icon :icon="['fas', 'balance-scale']" ></font-awesome-icon></h1>
                        <h5>Free and Open Source</h5>
                        <p>Novusphere develops free to use open source software.</p>
                    </div>
                    <div class="col-md-4 col-xs-12">
                        <h1><font-awesome-icon :icon="['fas', 'globe']" ></font-awesome-icon></h1>
                        <h5>Decentralized Governance</h5>
                        <p>Novusphere is community driven. ATMOS token holders govern the future of Novusphere.</p>
                    </div>
                    <div class="col-md-4 col-xs-12">
                        <h1><font-awesome-icon :icon="['fas', 'unlock']" ></font-awesome-icon></h1>
                        <h5>Uncensorable</h5>
                        <p>Through the use of blockchain technology, the decentralized applications Novusphere develops are immutable and censorship resistant.</p>
                    </div>
                </div>
            </div>
          </div>
    </Layout>

  </div>
</template>

<script>
import jQuery from "jquery";
import Layout from "@/components/Layout";

export default {
  name: "Index",
  components: {
    Layout: Layout
  },
  mounted() {},
  methods: {
  },
  data() {
    return {
      eos_address: "",
      swap_error: "",
      swap_address: ""
    };
  }
};
</script>