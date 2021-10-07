<template>
  <v-timeline-item
    id="item-1"
    :icon="transaction.icon"
    :color="transaction.type === 'income' ? 'success' : 'error'"
    icon-color="white"
    fill-dot
  >
    <v-card :color="transaction.type === 'income' ? 'success' : 'error'">
      <v-card-title class="transaction-card-title">
        <h3>{{ transaction.name }}</h3>
      </v-card-title>
      <v-card-text class="transaction-card-info white">
        <v-container class="dates-container">
          <h3>{{ transaction.date }}</h3>
          <h3>{{ transaction.time }}</h3>
        </v-container>
        <h2>$ {{ transaction.value.toFixed(2) }}</h2>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Component, Vue } from 'vue-property-decorator';
import { ITransaction } from '@finances-app/types';

@Component({
  name: 'Transaction',
  components: {},
  props: {
    transaction: { type: Object as PropType<ITransaction> },
  },
})
export default class Transaction extends Vue {}
</script>

<style>
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
  margin: 5px 0 0 0;
}
</style>
