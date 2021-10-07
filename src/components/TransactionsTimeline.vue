<template>
  <v-timeline align-top dense id="timeline">
    <Transaction
      v-for="transaction in transactions"
      :key="transaction.id"
      :transaction="transaction"
    />
  </v-timeline>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Component, Vue } from 'vue-property-decorator';
import Transaction from './Transaction.vue';
import { ITransaction } from '@finances-app/types';

@Component({
  name: 'TransactionsTimeline',
  components: {
    Transaction,
  },
  props: {
    transactions: { type: Array as PropType<ITransaction[]> },
  },
})
export default class TransactionsTimeline extends Vue {}
</script>

<style></style>
