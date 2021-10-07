<template>
  <v-container class="home">
    <h1>HOME</h1>
    <v-container id="timeline-container">
      <v-timeline align-top dense id="timeline">
        <v-timeline-item
          id="item-1"
          icon="fas fa-shopping-bag"
          color="error"
          icon-color="white"
          fill-dot
          @click.native="expandTransaction(0)"
        >
          <v-card color="error">
            <v-card-title class="transaction-card-title">
              <h3>Shopping</h3>
            </v-card-title>
            <v-card-text class="transaction-card-info white">
              <v-container class="dates-container">
                <h3>07/10/21</h3>
                <h3>12:59</h3>
              </v-container>
              <h2>R$ 45,00</h2>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item
          id="item-1"
          icon="fas fa-utensils"
          color="error"
          icon-color="white"
          fill-dot
          >Food</v-timeline-item
        >
        <v-timeline-item
          id="item-1"
          icon="fas fa-dollar-sign"
          color="success"
          icon-color="white"
          fill-dot
          >Salary</v-timeline-item
        >
      </v-timeline>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
  data: {
    transactions: [
      {
        name: 'Shopping',
        icon: 'fas fa-shopping-bag',
        color: 'error',
      },
    ],
  },
  methods: {
    expandTransaction(index) {
      console.log(index);
    },
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
#timeline-container {
  width: 60%;
}

.transaction-card-title {
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.transaction-card-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.dates-container {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
}
</style>
