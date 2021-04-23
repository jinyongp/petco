<template>
  <div class="hello">
    <div>{{ msg }}</div>
    <hr />
    <hr />
    <v-text-field></v-text-field>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  @Prop() private msg!: string;
}
</script>
