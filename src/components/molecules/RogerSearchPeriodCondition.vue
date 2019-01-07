<template>
  <div>
    <span v-for="period in periods" :key="period.id">
      <label>
        {{ period.label }}
      </label>
      <RogerCheck :click="handleCheck(period.code)"/>
    </span>
  </div>
</template>

<script>
import RogerCheck from '@/components/atoms/RogerCheck'

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
  components: {RogerCheck},
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

</style>
