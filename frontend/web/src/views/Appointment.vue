<template>
  <div>
    <AppointList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AppointList from "../components/AppointList.vue";

export default Vue.extend({
  components: {
    AppointList,
  },
});
</script>
