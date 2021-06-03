<template>
<div>
  <div v-if="login">
    {{ vets }}
  </div>
  <div v-else ></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import gql from "graphql-tag";

export default Vue.extend({
  props:{
    login: Boolean
  },
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
  methods:{
    back(){
      this.$router.push("/")
    }
  }
});
</script>
