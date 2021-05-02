<template>
  <div>
    {{ msg }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import gql from "graphql-tag"

export default Vue.extend({
  data() {
    return {
      msg: "my page",
      vets: {},
    };
  },
  // apollo: {
  //   vets: gql` query{
  //     vets{
  //       hospital_id
  //       name
  //       location
  //       number
  //     }
  //   }`,
  // },
});
</script>
