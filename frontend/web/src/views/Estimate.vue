<template>
  <div>
    <div class="col">
      <div v-for="est in example" :key="est.id">
        <div id="show-modal" class="textField">
          <div class="id">예약번호 : {{ est.id }}</div>
          <div class="name">{{ est.name }}</div>
          <div class="birth">생년월일 : {{ est.date }}</div>
          <div class="text">몸무게 : {{ est.weight }} kg</div>

          <br />
          <div class="text">진료과목: {{ est.diagnosis }}</div>
          <div class="text">보호자 번호: {{ est.userId }}</div>
          <div class="text">총 비용: {{ est.totalCost }} 원</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import gql from "graphql-tag";

export default Vue.extend({
  data() {
    return {
      example: [
        {
          id: 20110514,
          name: "초코",
          date: "2013.03.18",
          weight: 3.8,
          sex: "남",
          diagnosis: "x-ray",
          userId: 1,
          totalCost: 40000,
        },
        {
          id: 20110515,
          name: "나비",
          date: "2017.05.27",
          weight: 2.1,
          sex: "여",
          diagnosis: "CT 검사",
          userId: 2,
          totalCost: 100000,
        },
      ],
      estimate: null,
    };
  },
  apollo: {
    estimate: gql`
      query {
        ResponseEstimate
      }
    `,
  },
});
</script>

<style scoped>
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
.col {
  position: relative;
  float: left;
  display: flex;
  top: 100px;
  left: 160px;
  margin: 50px;
}
.textField {
  position: relative;
  width: 300px;
  height: 350px;
  top: 20;
  margin: 50px;

  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 30px;

  cursor: pointer;
  /* background: rgba(196, 196, 196, 0.4);
  border-radius: 30px; */
}
</style>
