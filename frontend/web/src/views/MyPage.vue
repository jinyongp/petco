<template>
  <div>
    {{ vets }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import gql from "graphql-tag";

export default Vue.extend({
  data() {
    return {
      msg: "my page" as string,
      vets: {} as object,
    };
  },
  apollo: {
    vets: gql`
      query {
        vetProfile {
          vet
          result
          message
        }
      }
    `,
  },
});
</script>
