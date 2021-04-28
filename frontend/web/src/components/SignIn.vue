<template>
  <div>
    <div class="textLogIn">LOGIN</div>
    <br />
    <div class="text username">username</div>
    <input type="text" class="inputUser" />
    <br />
    <div class="text password">password</div>
    <input type="password" class="inputPassword" />
    <br />
    <button class="logInButton" @click="loginAlert">로그인 하기</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    loginAlert() {
      alert("펫코에 오신 것을 환영합니다");
      this.$router.push("/appointment");
    },
  },
});
</script>

<style scoped>
.textLogIn {
  position: absolute;
  width: 194px;
  height: 63px;
  left: 900px;
  top: 230px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 63px;
  letter-spacing: -0.3px;

  color: #000000;
}
.text {
  /* 메인 카피 제목 */
  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  /* identical to box height */
  letter-spacing: -0.3px;

  color: #000000;
}
.username {
  position: absolute;
  width: 120px;
  height: 26px;
  left: 897px;
  top: 377px;
}
.password {
  /* Passward */

  position: absolute;
  width: 111px;
  height: 26px;
  left: 897px;
  top: 540px;
}
.inputUser {
  position: absolute;
  width: 200px;
  height: 45px;
  left: 888px;
  top: 440px;

  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}
.inputPassword {
  position: absolute;
  width: 200px;
  height: 45px;
  left: 888px;
  top: 600px;

  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}

.logInButton {
  position: absolute;
  width: 200px;
  height: 45px;
  left: 888px;
  top: 720px;

  background: #fec544;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  /* 메인 카피 제목 */
  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;
  /* identical to box height */
  letter-spacing: -0.3px;

  color: #000000;
}
</style>
