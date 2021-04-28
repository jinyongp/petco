<template>
  <div class="hello">
    <img class="img" src="../assets/Flying_iPhone_X_Mockups.png" />
    <SignIn />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SignIn from "../components/SignIn.vue";

@Component({
  components: {
    SignIn,
  },
})
export default class Home extends Vue {
  @Prop() private msg!: string;
}
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
