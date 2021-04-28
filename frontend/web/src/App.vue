<template>
  <div id="app">
    <div class="logo">PETCO</div>
    <router-link to="/" class="to-home">
      <div>login</div>
    </router-link>
    <router-link to="/appointment" class="to-appointment">
      <div>예약 현황</div>
    </router-link>
    <router-link to="/support" class="to-support">
      <div>지원</div>
    </router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  created() {
    console.log("router", this.$router);
    console.log("route", this.$route);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  position: absolute;
  width: 88px;
  height: 15px;
  left: 130px;
  top: 65px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;

  color: #000000;
}
.to-appointment {
  position: absolute;
  width: 114px;
  height: 15px;
  left: 784px;
  top: 70px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.3px;

  color: #000000;
}
.to-support {
  position: absolute;
  width: 53px;
  height: 28px;
  left: 953px;
  top: 70px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.3px;

  color: #fec544;
}
.to-home {
  position: absolute;
  width: 158px;
  height: 61px;
  left: 1021px;
  top: 52px;

  background: #fec544;
  border-radius: 30px;

  position: absolute;
  width: 74px;
  height: 29px;
  left: 1068px;
  top: 68px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.3px;

  color: #000000;
}
</style>
