<template>
  <div>
    <RogerSearchPeriodCondition />
    <RogerSearchWeekCondition />
    <RogerButton :click="handleClick" >
      検索
    </RogerButton>
  </div>
</template>

<script>
import RogerSearchPeriodCondition from '@/components/molecules/RogerSearchPeriodCondition'
import RogerSearchWeekCondition from '@/components/molecules/RogerSearchWeekCondition'
import RogerButton from '@/components/atoms/RogerButton'
export default {
  name: 'RogerSearchForm',
  components: {RogerButton, RogerSearchWeekCondition, RogerSearchPeriodCondition},
  computed: {
    canSearch () {
      return (this.$store.state.searchCondition.period || this.$store.state.searchCondition.week)
    }
  },
  methods: {
    handleClick () {
      if (!this.canSearch()) { return }
      this.$store.dispatch('fetchCourts')
    }
  }
}
</script>

<style scoped>

</style>
