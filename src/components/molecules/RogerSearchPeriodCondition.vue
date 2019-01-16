<template>
  <div class="clear-fix">
    <ul>
      <li class="period-list" v-for="period in periods" :key="period.id">
        <RogerRadio class="period-list-item" :id="period.id" :name="'_period'" :click="handleCheck(period.code)">
          {{ period.label }}
        </RogerRadio>
      </li>
    </ul>
  </div>
</template>

<script>
import RogerRadio from '@/components/atoms/RogerRadio'

let periods = [
  {
    id: 1,
    code: 7,
    label: '1週間'
  },
  {
    id: 2,
    code: 14,
    label: '2週間'
  },
  {
    id: 3,
    code: 30,
    label: '1カ月'
  }
]

export default {
  name: 'RogerSearchPeriodCondition',
  components: {RogerRadio},
  data () {
    return {
      periods: periods
    }
  },
  methods: {
    handleCheck (ev, code) {
      this.$store.dispatch('changePeriod', code)
    }
  }
}
</script>

<style scoped>
  .period-list {
    width: 100%;
    line-height: 30px;
    box-sizing: border-box;
  }

  .period-list-item {
    display: block;
    float: left;
    width: calc(100% / 3);
    box-sizing: border-box;
  }

  .period-list-item:last-child {
    margin-left: 0;
  }
  .clear-fix {
    clear: both;
  }
</style>
