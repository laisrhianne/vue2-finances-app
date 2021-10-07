<template>
  <v-container>
    <h1>Timeline</h1>
  </v-container>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { Component, Vue } from 'vue-property-decorator';
import { ITransaction } from '@finances-app/types';

@Component({
  name: 'TransactionsTimeline',
  components: {},
  props: {
    transactions: { type: Array as PropType<ITransaction[]> },
  },
})
export default class Details extends Vue {}
</script>

<style></style>
