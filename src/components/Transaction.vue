<template>
  <v-container>
    <h1>Transaction</h1>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ITransaction } from '@finances-app/types';

@Component({
  name: 'Transaction',
  components: {},
})
export default class Details extends Vue {}
</script>

<style></style>
