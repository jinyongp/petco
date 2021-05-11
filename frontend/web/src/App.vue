<template>
  <div id="app">
    <div class="logo">PETCO</div>
    <div id="example" v-if="isLogin" class="filters">
      <button class="to-log" @click.prevent="logout">Log out</button>
      <router-link to="/home" class="to-home" tag="button">
        <div>홈</div>
      </router-link>
      <router-link to="/appointment" class="to-appointment" tag="button">
        <div>예약 현황</div>
      </router-link>
      <router-link to="/support" class="to-support" tag="button">
        <div>
          견적관리
          <div class="submenu">
            <router-link to="/supportreq" tag="div">견적서 응답</router-link>
            <router-link to="/support" tag="div">견적서 관리</router-link>
          </div>
        </div>
      </router-link>
      <router-link to="/mypage" class="to-mypage" tag="button">
        <div>마이페이지</div>
      </router-link>
    </div>
    <div v-else>
      <router-link to="/" class="to-log" v-on:loginDo="parents">
        <div>Log in</div>
      </router-link>
      <router-link to="/" class="to-home" tag="button">
        <div @click="alertLogin">홈</div>
      </router-link>
      <router-link to="/" class="to-support" tag="button">
        <div>
          견적관리
          <div class="submenu">
            <router-link to="/" tag="div">견적서 응답</router-link>
            <router-link to="/" tag="div">견적서 관리</router-link>
          </div>
        </div>
      </router-link>
      <router-link
        to="/"
        class="to-appointment"
        tag="button"
        @click="alertLogin"
      >
        <div @click="alertLogin">예약 현황</div>
      </router-link>

      <router-link to="/" class="to-mypage" tag="button" @click="alertLogin">
        <div @click="alertLogin">마이페이지</div>
      </router-link>
    </div>

    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import { onLogout } from "./vue-apollo.js";
// import client from "./apollo";

// const postedById = localStorage.getItem(AUTH_TOKEN);

export default Vue.extend({
  data() {
    return {
      isLogin: false as boolean,
    };
  },
  methods: {
    parents() {
      this.isLogin = true;
    },
    alertLogin() {
      alert("로그인이 필요한 서비스입니다");
    },
    logout() {
      // const onLogout = require("./vue-apollo");
      this.isLogin = false;
      onLogout(this.$apollo.provider.defaultClient);
      this.$router.push("/");
    },
  },
});

// export default class App extends Vue {
//   isLogin: boolean = false;

//   // isLoggedIn() {
//   //   if (this.$apollo.provider.defaultClient) return (this.loginDone = true);
//   // }
//   created() {
//     console.log("router", this.$router);
//     console.log("route", this.$route);
//   }
//   parents(log: any) {
//     this.isLogin = log;
//   }
//   alertLogin() {
//     alert("로그인이 필요한 서비스입니다");
//   }
//   logout() {
//     // const onLogout = require("./vue-apollo");
//     this.isLogin = false;
//     onLogout(this.$apollo.provider.defaultClient);
//     this.$router.push("/");
//   }
// }
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
.submenu {
  position: relative;
  display: none;
  width: 78px;
  height: 16px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0.007em;

  background: white;
  border: white;

  cursor: pointer;

  color: #fec544;
}
.to-support:hover .submenu {
  display: block;
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
.to-home {
  position: absolute;
  width: 24px;
  height: 28px;
  left: 462px;
  top: 75px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.3px;

  background: white;
  border: white;

  cursor: pointer;

  color: #000000;
}
.to-appointment {
  position: absolute;
  display: inline-block;
  width: 120px;
  height: 28px;
  left: 708px;
  top: 75px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.3px;

  background: white;
  border: white;

  cursor: pointer;

  color: #000000;
}
.to-support {
  position: absolute;
  display: inline-block;
  width: 120px;
  height: 28px;
  left: 544px;
  top: 75px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.3px;

  background: white;
  border: white;

  cursor: pointer;

  color: #000000;
}
.to-log {
  position: absolute;
  width: 158px;
  height: 61px;
  left: 1021px;
  top: 52px;

  background: #fec544;
  border-radius: 20px;

  position: absolute;
  width: 88px;
  height: 34px;
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
.to-mypage {
  position: absolute;
  width: 140px;
  height: 28px;
  left: 880px;
  top: 75px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.3px;

  background: white;
  border: white;

  cursor: pointer;

  color: #000000;
}
.filters button.router-link-active {
  color: #fec544;
}
</style>
