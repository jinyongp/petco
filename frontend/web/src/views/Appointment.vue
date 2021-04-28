<template>
  <div>{{ msg }}</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      msg: "펫코 예약 시스템입니다",
    };
  },
});
</script>
