<template>
  <v-timeline-item
    id="item-1"
    :icon="transaction.icon"
    :color="transaction.type === 'income' ? 'success' : 'error'"
    icon-color="white"
    fill-dot
    @click.native="expandToggle"
  >
    <v-card
      v-if="expanded"
      :color="transaction.type === 'income' ? 'success' : 'error'"
    >
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
    <h3 class="transaction-title" v-else>{{ transaction.name }}</h3>
  </v-timeline-item>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ITransaction } from '@finances-app/types';

@Component({
  name: 'Transaction',
  components: {},
})
export default class Transaction extends Vue {
  @Prop()
  readonly transaction!: ITransaction;

  expanded = false;

  public expandToggle(): void {
    this.expanded = !this.expanded;
  }
}
</script>

<style scoped>
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

.transaction-title {
  text-align: left;
}
</style>
