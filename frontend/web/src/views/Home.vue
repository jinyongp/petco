<template>
  <div class="hello">
    <img class="img" src="../assets/Flying_iPhone_X_Mockups.png" />
    <div v-if="login">{{ vet.name }} 환영합니다 :)</div>
    <div if-else>
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
    loginDone(p) {
      this.$emit("login", p);
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
</style>
