<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      msg: "무엇을 도와드릴까요?",
    };
  },
});
</script>
