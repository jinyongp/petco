<template>
  <span>
    <div v-for="appoint in appoints" :key="appoint.id" class="col">
      <div class="card">
        <div class="id">예약번호 : {{ appoint.id }}</div>
        <div class="name">{{ appoint.name }}({{ appoint.type }})</div>
        <div class="birth">생년월일 : {{ appoint.date }}</div>
        <div class="text">몸무게 : {{ appoint.weight }} kg</div>
        <div class="text">
          중성화 여부 : {{ isTrue(appoint.neutralization) }}
        </div>
        <div class="text">
          백신접종 여부 : {{ isTrue(appoint.vaccination) }}
        </div>
        <br />
        <div class="text">진료과목: {{ appoint.diagnosis }}</div>
        <div class="text">보호자 번호: {{ appoint.userId }}</div>
        <p v-show="appoint.confirm">확정</p>
        <button class="but1" @click="cancel(appoints[index])">예약 취소</button>
        <button class="but2" @click="confirm(appoints[index])">
          예약 확정
        </button>
      </div>
    </div>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
import gql from "graphql-tag";

export default Vue.extend({
  data() {
    return {
      appoints: [
        {
          id: 20110514,
          name: "초코",
          date: "2013.03.18",
          weight: 3.8,
          type: "dog",
          neutralization: true,
          vaccination: true,
          diagnosis: "x-ray",
          userId: 1,
          confirm: false,
        },
        {
          id: 20110515,
          name: "나비",
          date: "2017.05.27",
          weight: 2.1,
          type: "cat",
          neutralization: false,
          vaccination: true,
          diagnosis: "CT 검사",
          userId: 2,
          confirm: false,
        },
      ],
      appointments: null,
    };
  },
  apollo: {
    appointments: gql`
      query {
        showAppointmentList
      }
    `,
  },
  methods: {
    isAppoint() {
      this.appoints.length !== 0;
    },
    isTrue(prop: any) {
      return prop === true ? "O" : "X";
    },
    async cancelAppoint() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation cancelAppoint($id: Int!) {
              cancelAppoint(id: $id) {
                result
                message
                appointment
              }
            }
          `,
          variables: {
            appointments: this.appointments,
          },
        })
        .then((data) => {
          // Result
          console.log(data);
        })
        .catch((error) => {
          // Error
          console.error(error);
        });
    },
    cancel(i) {
      alert("예약을 취소하셨습니다");
      this.appoints.splice(i, 1);
    },
    confirm(i) {
      alert("예약을 확정하였습니다");
      this.appoints[i].confirm = true;
    },
    async confirmAppointment() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation confirmAppointment($id: Int) {
              confirmAppointment(id: $id) {
                result
                appointment
                message
              }
            }
          `,
          variables: {
            appointments: this.appointments,
          },
        })
        .then((data) => {
          // Result
          console.log(data);
        })
        .catch((error) => {
          // Error
          console.error(error);
        });
    },
  },
});
</script>

<style scoped>
.col {
  position: relative;
  float: left;
  display: flex;
  top: 100px;
  left: 160px;
  margin: 40px;
}
.card {
  /* Rectangle 237 */

  position: relative;
  width: 300px;
  height: 350px;
  top: 20;
  /* text-align: left; */

  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}
.id {
  /* 예약번호 : 2021042945655 */

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
  /* identical to box height */
  /* letter-spacing: -0.3px; */

  color: #000000;
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
.but1 {
  position: relative;
  width: 90px;
  height: 40px;
  top: 70px;
  left: 10px;
  background: #fec544;
  border-radius: 40px;
}
.but2 {
  position: relative;
  width: 90px;
  height: 40px;
  top: 70px;
  left: 30px;
  background: #fec544;
  border-radius: 40px;
}
</style>
