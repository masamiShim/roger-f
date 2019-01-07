<template>
  <div>
    <span v-for="week in weeks" :key="week.id">
      <label>
        {{ week.label }}
      </label>
      <RogerCheck :click="handleCheck(week.code)"/>
    </span>
  </div>
</template>
<script>
import RogerCheck from '@/components/RogerCheck'

let weeks = [
  {
    id: 1,
    code: 1,
    label: '月'
  },
  {
    id: 2,
    code: 2,
    label: '火'
  },
  {
    id: 3,
    code: 3,
    label: '水'
  },
  {
    id: 4,
    code: 4,
    label: '木'
  },
  {
    id: 5,
    code: 5,
    label: '金'
  },
  {
    id: 6,
    code: 6,
    label: '土'
  },
  {
    id: 7,
    code: 7,
    label: '日'
  }
]
export default {
  name: 'RogerSearchWeekCondition',
  components: {RogerCheck},
  data () {
    return {
      weeks: weeks
    }
  },
  methods: {
    handleCheck (code) {
      this.$store.dispatch('changeWeek', code)
    }
  }

}
</script>

<style scoped>

</style>
