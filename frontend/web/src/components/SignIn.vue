<template>
  <div>
    <div class="textLogIn">LOGIN</div>
    <br />
    <div class="text username">username</div>
    <input type="text" class="inputUser" v-model="hospital_id" />
    <p v-if="error1.length">
      <b v-for="error in error1" :key="error" class="errorText usernameError">{{
        error
      }}</b>
    </p>
    <br />
    <div class="text password">password</div>
    <input type="password" class="inputPassword" v-model="password" />
    <p v-if="error2.length">
      <b v-for="error in error2" :key="error" class="errorText passwordError">{{
        error
      }}</b>
    </p>
    <br />
    <button class="logInButton" @click="checkForm">로그인 하기</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import gql from "graphql-tag";
// import { SignInInput } from "./type/index";

export default Vue.extend({
  data() {
    return {
      loginDone: false as boolean,
      error1: [] as any,
      error2: [] as any,
      hospital_id: "" as string,
      password: "" as string,
    };
  },
  // apollo: {
  //   vets: gql` query{
  //     vets{
  //       hospital_id
  //       password
  //     }
  //   }`,
  // },
  methods: {
    loginAlert() {
      this.loginDone = true;
      alert("펫코에 오신 것을 환영합니다");
      this.$router.push("/appointment");
    },
    checkForm(e: any) {
      e.preventDefault();
      this.error1 = [];
      this.error2 = [];
      if (!this.hospital_id) {
        this.error1.push("아이디를 입력해주세요");
      }
      if (!this.password) {
        this.error2.push("비밀번호를 입력해주세요");
      }
      if (!this.error1.length && !this.error2.length) return this.loginAlert();
    },
    // async logIn() {
    //   const result = await this.$apollo.mutate({
    //     mutation: gql`
    //       mutation Login($hospital_id: String!, $password: String!) {
    //         login(hospital_id: $hospital_id, password: $password) {
    //           ok
    //           token
    //           error
    //         }
    //       }
    //     `,
    //     variables: {
    //       hospital_id: this.id,
    //       password: this.password,
    //     },
    //   });
    // },
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
  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: -0.3px;

  color: #000000;
}
.errorText {
  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.3px;

  color: red;
}
.username {
  position: absolute;
  width: 120px;
  height: 26px;
  left: 897px;
  top: 377px;
}
.usernameError {
  position: absolute;
  width: 200px;
  height: 26px;
  left: 897px;
  top: 500px;
}
.password {
  /* Passward */

  position: absolute;
  width: 111px;
  height: 26px;
  left: 897px;
  top: 540px;
}
.passwordError {
  position: absolute;
  width: 200px;
  height: 26px;
  left: 897px;
  top: 660px;
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
