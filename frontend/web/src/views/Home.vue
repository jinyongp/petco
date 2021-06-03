<template>
  <div class="hello">
    <img class="img" src="../assets/Flying_iPhone_X_Mockups.png" />
    <div v-if="loginP" class="text">
      {{ vet.name }}그레이스 동물병원 님 환영합니다 :)
    </div>
    <div v-else>
      <SignIn v-on:show-log="loginDone" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import SignIn from "../components/SignIn.vue";
import gql from "graphql-tag";

export default Vue.extend({
  props: {
    login: Boolean,
  },
  components: {
    SignIn,
  },
  data() {
    return {
      msg: "my page" as string,
      vet: {} as object,
      loginP: false as boolean,
      loginProp: true as boolean,
    };
  },
  apollo: {
    vets: gql`
      query {
        vetProfile {
          vet {
            name
          }
          result
          message
        }
      }
    `,
  },
  methods: {
    loginDone() {
      this.loginP = this.loginProp;
      this.$emit("loginDo", this.login);
    },
  },
});
</script>

<style scoped>
.img {
  /* Mask Group */

  position: absolute;
  width: 434px;
  height: 453px;
  left: 159px;
  top: 280px;

  /* Rectangle 245 */

  position: absolute;
  width: 434px;
  height: 453px;
  left: 159px;
  top: 280px;

  background: #c4c4c4;

  /* image 12 */

  position: absolute;
  width: 788px;
  height: 729px;
  left: -5px;
  top: 135px;

  background: url(/src/assets/Flying_iPhone_X_Mockups.png);
}
.text {
  /* 환영합니다 :) */

  position: absolute;
  left: 60.42%;
  right: 10.49%;
  top: 60.23%;
  bottom: 55.08%;
  width: 400px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  /* identical to box height */
  letter-spacing: -0.3px;

  color: #000000;
}
</style>
