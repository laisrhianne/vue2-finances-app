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
import { Component, Vue, Prop } from 'vue-property-decorator';
import Transaction from './Transaction.vue';
import { ITransaction } from '@finances-app/types';

@Component({
  name: 'TransactionsTimeline',
  components: {
    Transaction,
  },
})
export default class TransactionsTimeline extends Vue {
  @Prop()
  readonly transactions!: ITransaction[];
}
</script>

<style></style>
