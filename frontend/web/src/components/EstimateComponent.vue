<template>
  <div class="modal-mask">
    <div class="modal-container">
      <div>asdasdasdasd</div>
      <div class="id">예약번호 : {{ ids[0].id }}</div>
      <div class="name">{{ ids[0].name }}</div>
      <div class="birth">생년월일 : {{ ids[0].date }}</div>
      <div class="text">몸무게 : {{ ids[0].weight }} kg</div>

      <br />
      <div class="text">진료과목: {{ ids[0].diagnosis }}</div>
      <div class="text">보호자 번호: {{ ids[0].userId }}</div>
      <input type="text" />
      <input type="text" />
      <button @click="cancel" type="button">
        취소
      </button>
      <button @click="confirm" type="button">
        확인
      </button>
      <button @click="toggle">X</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    example: Array,
    extimate: Object,
    showModal: Boolean,
    ids: Object,
  },
  methods: {
    cancel() {
      this.$emit("click", "cancel");
    },
    confirm() {
      this.$emit("click", "confirm");
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
  width: 600px;
  height: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
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
