<template>
  <div>
    <div class="text">{{ msg }}</div>
    <div class="textField"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      msg: "무엇을 도와드릴까요?"
    };
  }
});
</script>

<style scoped>
.text {
  position: absolute;
  width: 443px;
  height: 48px;
  left: 130px;
  top: 329px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;

  letter-spacing: -0.3px;

  color: #000000;
}
.textField {
  position: absolute;
  width: 459px;
  height: 326px;
  left: 683px;
  top: 316px;

  background: rgba(196, 196, 196, 0.4);
  border-radius: 30px;
}
</style>
