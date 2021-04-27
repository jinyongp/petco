<template>
  <div>
    <input type="text" />
    <br />
    <input type="password" />
    <br />
    <button @click="loginAlert">로그인</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    loginAlert() {
      alert("펫코에 오신 것을 환영합니다");
      this.$router.push("/hospital");
    },
  },
});
</script>
