<template>
  <div class="modal-mask">
    <div class="modal-container">
      <div class="card">
        <div class="id">예약번호 : {{ ids[0].id }}</div>
        <div class="name">{{ ids[0].name }}</div>
        <div class="birth">생년월일 : {{ ids[0].date }}</div>
        <div class="birth">몸무게 : {{ ids[0].weight }} kg</div>

        <br />
      </div>
      <div class="text">진료항목</div>
      <span class="text">{{ ids[0].diagnosis }} 견적비용 :: </span>
      <input type="number" class="textInput" v-model="cost" /><span
        class="text"
      >
        원
      </span>
      <button @click="cancel" type="button" class="but1">
        취소
      </button>
      <button @click="confirm" type="button" class="but1">
        제출
      </button>
      <button @click="toggle" class="but2">X</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import EventBus from "./eventBus/EventBus";

export default Vue.extend({
  props: {
    example: Array,
    extimate: Object,
    showModal: Boolean,
    ids: Object,
  },
  data() {
    return {
      cost: 0 as Number,
    };
  },
  methods: {
    cancel() {
      alert("취소하였습니다");
      this.$emit("click", "cancel");
      this.$emit("click", "toggle");
    },
    confirm(e: any) {
      e.preventDefault();
      if (!this.cost) alert(" 비용을 입력해주세요 ");
      else {
        alert(" 견적서 응답을 보냈습니다");
        this.$emit("click", "confirm");
        this.$emit("click", "toggle");
      }
    },
    toggle() {
      this.$emit("click", "toggle");
    },
  },
});
</script>

<style scoped>
.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.365);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 800px;
  height: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.card {
  /* Rectangle 237 */

  position: relative;
  width: 300px;
  height: 200px;
  top: 20;
  /* text-align: left; */

  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
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
.id {
  position: relative;
  width: 300px;
  height: 36px;
  left: 1px;
  top: 20px;

  font-family: NanumGothic;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
}

.name {
  position: relative;
  width: 100px;
  height: 20px;
  top: 25px;
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
  width: 300px;
  height: 40px;
  top: 70px;
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
.textInput {
  position: relative;
  width: 150px;
  height: 40px;
  top: 70px;
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
.but1 {
  position: relative;
  width: 90px;
  height: 40px;
  top: 190px;
  left: 110px;
  background: #fec544;
  border-radius: 40px;
  margin: 15px;
}
.but2 {
  position: relative;
  width: 40px;
  height: 40px;
  top: -250px;
  left: 110px;
  background: #fec544;
  border-radius: 40px;
}
</style>
