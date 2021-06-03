<template>
  <div id="EST">
    <div>
      <div class="col">
        <div v-for="est in example" :key="est.id" v-show="!showModal">
          <div id="show-modal" class="textField" @click="handle_toggle(est)">
            <div class="id">예약번호 : {{ est.id }}</div>
            <div class="name">{{ est.name }}</div>
            <div class="birth">생년월일 : {{ est.date }}</div>
            <div class="text">몸무게 : {{ est.weight }} kg</div>

            <br />
            <div class="text">진료과목: {{ est.diagnosis }}</div>
            <div class="text">보호자 번호: {{ est.userId }}</div>
          </div>
        </div>

        <div v-show="showModal">
          <h1 slot="header">견적서 요청</h1>
          <EstimateComponent
            v-on:click="reqAndCancle"
            v-bind:example="example"
            v-bind:ids="ids"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import gql from "graphql-tag";
import EstimateComponent from "../components/EstimateComponent.vue";

export default Vue.extend({
  name: "EST",
  components: {
    EstimateComponent,
  },
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
        },
        {
          id: 20110515,
          name: "나비",
          date: "2017.05.27",
          weight: 2.1,
          sex: "여",
          diagnosis: "CT 검사",
          userId: 2,
        },
      ],
      estimate: null,
      ids: [],
      showModal: false,
    };
  },
  apollo: {
    estimate: gql`
      query {
        Estimate
      }
    `,
  },
  methods: {
    handle_toggle(est) {
      this.showModal = !this.showModal; // #2, #3
      this.ids.pop();
      this.ids.push(est);
    },
    reqAndCancle(prop) {
      if (prop === "confirm") this.requestEstimate();
      else if (prop === "cancel") this.cancelEstimate();
      else if (prop === "toggle") this.handle_toggle();
    },
    async requestEstimate() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation requestEstimate(
              $request_comment: String!
              $vet_id: Int!
              $user_id: Int!
              $pet_id: Int!
            ) {
              requestEstimate(
                request_comment: $request_comment
                vet_id: $vet_id
                user_id: $user_id
                pet_id: $pet_id
              ) {
                status
                estimate
                message
              }
            }
          `,
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
    async cancelEstimate() {
      await this.$apollo
        .mutate({
          mutation: gql`
            mutation cancelEstimate($id: Int!) {
              cancelEstimate(id: $id) {
                status
                estimate
                message
              }
            }
          `,
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
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
