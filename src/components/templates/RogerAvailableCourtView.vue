<template>
  <div>
    <RogerHeader/>
    <div>
      <RogerAvailableCourtList :courts="filterCourt"/>
    </div>
    <RogerFooter/>
  </div>
</template>

<script>
import RogerHeader from '@/components/organisms/RogerHeader'
import RogerFooter from '@/components/organisms/RogerFooter'
import RogerAvailableCourtList from '@/components/organisms/RogerAvailableCourtList'
// import formatter from '@/utils/dateformatter'

export default {
  name: 'RogerAvailableCourtView',
  components: {RogerAvailableCourtList, RogerFooter, RogerHeader},
  data: function () {
    return {
      intervalId: undefined
    }
  },
  computed: {
    filterCourt () {
      /*
      const now = new Date()

      now.setDate(now.getDate() + parseInt(this.$store.state.searchCondition.period))
      const filteredCourtsByPeriod = courts
        .filter(court => (court.date <= formatter.formatDateZeroPad(now, 'yyyyMMdd')))
      return this.filterByWeek(filteredCourtsByPeriod)
      return this.filterByWeek(courts)
      */
      const courts = this.$store.state.availableCourts.availableCourts
      return courts
      //      return !courts ? [] : courts
    }
  },
  methods: {
    filterByWeek (list) {
      const weeks = this.$store.state.searchCondition.week
      console.log(weeks)
      if (weeks.size > 0) {
        return list.filter(court => weeks.has(court.week))
      }
      return list
    }
  },
  created () {
    const _store = this.$store
    this.intervalId = setInterval(function () {
      _store.dispatch('fetchCourts')
    }, 3000)
  },
  beforeDestroy () {
    clearInterval(this.intervalId)
  }
}
</script>

<style scoped>

</style>
