<template>
  <div class="hello">
    <div>{{ result }}</div>
    <hr />
    <hr />
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
  result = "펫코 시스템을 이용하시려면 로그인이 필요합니다";
}
</script>
