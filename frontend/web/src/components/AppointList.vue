<template>
  <div>
    <div v-for="appoint in appoints" :key="appoint.id" class="col" cols="12" lg="3" md="3">
      <div class="card">
        <div class="name">{{ appoint.name }}</div>
        <div class="birth">생년월일 : {{ appoint.date }}</div>
        <div class="text">몸무게 : {{ appoint.weight }} kg</div>
        <div class="text">중성화 여부 : {{ isTrue(appoint.neutralization) }}</div>
        <div class="text">백신접종 여부 : {{ isTrue(appoint.vaccination) }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      appoints: [
        {
          id: 1,
          name: "초코",
          date: "2013.03.17",
          weight: 3.8,
          neutralization: true,
          vaccination: true
        },
        {
          id: 2,
          name: "나비",
          date: "2017.05.27",
          weight: 2.1,
          neutralization: false,
          vaccination: true
        }
      ]
    };
  },
  methods: {
    isTrue(prop: any) {
      return prop === true ? "O" : "X";
    }
  }
});
</script>

<style scoped>
.col {
  position: relative;
  display: flex;
  top: 100px;
  left: 160px;
  margin: 40px;
}
.card {
  /* Rectangle 237 */

  position: relative;
  width: 220px;
  height: 284px;
  top: 20;

  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}
.name {
  position: relative;
  width: 58px;
  height: 20px;
  top: 20px;
  left: 40px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;

  text-align: center;
  letter-spacing: -0.3px;

  color: #000000;
}
.birth {
  position: relative;
  width: 147px;
  height: 15px;
  top: 50px;
  left: 30px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 15px;

  letter-spacing: -0.3px;

  color: #000000;
}
.text {
  position: relative;
  width: 120px;
  height: 40px;
  top: 70px;
  left: 40px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 15px;

  text-align: center;
  letter-spacing: -0.3px;

  color: #000000;
}
</style>
