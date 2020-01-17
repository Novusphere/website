<template>
  <div>
    <Layout>
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
            <div class="footer">
                <div class="row">
                    <div class="col-md-4 col-xs-12">
                        <img style="max-width: 128px" src="static/img/team/codeblue.jpg" class="rounded-circle img-fluid">
                        <h5>
                            Tzu-Yuan Kao
                            <a style="color:white" href="https://github.com/kodoburu"><font-awesome-icon :icon="['fab', 'github']" ></font-awesome-icon></a>
                        </h5>
                        <h5>"CodeBlue"</h5>
                        <p>Dapp Developer</p>
                    </div>
                    <div class="col-md-4 col-xs-12">
                        <img style="max-width: 128px" src="static/img/team/bootler.png" class="rounded-circle img-fluid">
                        <h5>
                            Xuxu Guanjia
                            <a style="color:white" href="https://github.com/Novusphere"><font-awesome-icon :icon="['fab', 'github']" ></font-awesome-icon></a>
                        </h5>
                        <h5>"asphyxia"</h5>
                        <p>Fullstack Developer</p>
                    </div>
                    <div class="col-md-4 col-xs-12">
                        <img style="max-width: 128px" src="static/img/team/default.gif" class="rounded-circle img-fluid">
                        <h5>Paul Motschall</h5>
                        <h5>"fixed"</h5>
                        <p>Novusphere Foundation</p>
                    </div>
                    <div class="col-md-4 col-xs-12">
                        <img style="max-width: 128px" src="static/img/team/default.gif" class="rounded-circle img-fluid">
                        <h5>Brian Tse</h5>
                        <h5>"BrianT"</h5>
                        <p>Novusphere Foundation</p>
                    </div>
                    <div class="col-md-4 col-xs-12">
                        <img style="max-width: 128px" src="static/img/team/default.gif" class="rounded-circle img-fluid">
                        <h5>Jacques Whales</h5>
                        <h5>"bluabaleno"</h5>
                        <p>Novusphere Foundation</p>
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
  name: "Team",
  components: {
    Layout: Layout
  },
  mounted() {},
  methods: {
  },
  data() {
    return {
    };
  }
};
</script>