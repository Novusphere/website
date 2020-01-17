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
    </Layout>

    <!-- Modal -->
      <div class="modal fade" id="swapModal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">EOS ATMOS Token Swap</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group row">
                  <label class="col-sm-4 col-form-label">EOS Account</label>
                  <div class="col-sm-6">
                    <input v-model="eos_address" type="text" class="form-control" placeholder="EOS Account">
                  </div>
                  <div class="col-sm-2">
                    <button v-on:click="getSwapAddress()" type="button" class="btn btn-primary">Next</button>
                  </div>
                </div>
                <div v-if="swap_error || swap_address">
                  <div class="text-center ml-1 mr-1">
                      <p class="mb-3" v-if="swap_error"><strong>Error:</strong> {{ swap_error }} </p>
                      <p class="mb-3" v-if="swap_address"><strong>{{ swap_address }}</strong></p>
                      <p v-if="swap_address">
                        Send your ATMOS to the address provided to receive the <a target="_blank" href="https://eosflare.io/token/novusphereio/ATMOS">EOS ATMOS token</a> in return. 
                        Please note since there is a compression to 100,000,000 ATMOS you will receive a smaller amount of EOS ATMOS tokens back but percentage wise it will remain the same. Please also note that the swap could take up to 30 minutes to process and confirm. 
                        If you encounter any problems or have any questions, please join our <a target="_blank" href="https://discord.gg/PtXzUVr">discord</a>.
                      </p>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
            </div>
          </div>
        </div>
      </div>
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
    getSwapAddress() {
      jQuery.get(
        "https://legacy.novusphere.io/eos/createswapaddress?eosAccount=" +
          this.eos_address,
        res => {
          if (res.error) {
            this.swap_error = res.error;
            this.swap_address = "";
          } else {
            this.swap_error = "";
            this.swap_address = res.address;
          }
        }
      );
    }
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