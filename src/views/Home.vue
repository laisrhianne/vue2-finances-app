<template>
  <v-container class="home">
    <h1>HOME</h1>
    <v-container id="timeline-container">
      <TransactionsTimeline :transactions="transactions" />
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TransactionsTimeline from '@/components/TransactionsTimeline.vue';

@Component({
  components: {
    TransactionsTimeline,
  },
  data() {
    return {
      transactions: [
        {
          name: 'Shopping',
          icon: 'fas fa-shopping-bag',
          type: 'outcome',
          date: '07/10/21',
          time: '12:59',
          value: 45.86,
        },
        {
          name: 'Food',
          icon: 'fas fa-utensils',
          type: 'outcome',
          date: '07/10/21',
          time: '12:58',
          value: 22.5,
        },
        {
          name: 'Salary',
          icon: 'fas fa-dollar-sign',
          type: 'income',
          date: '07/10/21',
          time: '11:35',
          value: 2500,
        },
      ],
    };
  },
  methods: {
    expand(index) {
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
</style>
