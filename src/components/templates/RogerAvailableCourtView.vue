<template>
  <div>
    <RogerHeader/>
    <div class="main-content">
      <section class="l-form-search">
        <div class="c-form-search__title l-form-search__title">検索条件</div>
        <RogerSearchForm/>
      </section>
      <section class="l-form-search">
        <div class="c-form-search__title l-form-search__title">コート一覧</div>
        <RogerAvailableCourtList :courts="getCourt()"/>
      </section>
    </div>
    <RogerFooter/>
  </div>
</template>

<script>
import RogerHeader from '@/components/organisms/RogerHeader'
import RogerFooter from '@/components/organisms/RogerFooter'
import RogerAvailableCourtList from '@/components/organisms/RogerAvailableCourtList'
import RogerSearchForm from '@/components/organisms/RogerSearchForm'
// import formatter from '@/utils/dateformatter'

export default {
  name: 'RogerAvailableCourtView',
  components: {RogerSearchForm, RogerAvailableCourtList, RogerFooter, RogerHeader},
  data: function () {
    return {
      intervalId: undefined
    }
  },
  /*
    computed: {
      filterCourt () {
        /*
          const now = new Date()

          now.setDate(now.getDate() + parseInt(this.$store.state.searchCondition.period))
          const filteredCourtsByPeriod = courts
            .filter(court => (court.date <= formatter.formatDateZeroPad(now, 'yyyyMMdd')))
          return this.filterByWeek(filteredCourtsByPeriod)
          return this.filterByWeek(courts)
        const courts = this.$store.state.availableCourts
        return courts
        //      return !courts ? [] : courts
      }
    },
  */
  methods: {
    getCourt () {
      return this.$store.state.availableCourts
    },
    filterByWeek (list) {
      const weeks = this.$store.state.searchCondition.week
      console.log(weeks)
      if (weeks.size > 0) {
        return list.filter(court => weeks.has(court.week))
      }
      return list
    }
  },
  beforeMount () {
    this.$store.dispatch('fetchCourts')
    /*
        this.intervalId = setInterval(function () {
          _store.dispatch('fetchCourts')
        }, 3000)
         */
  },
  beforeDestroy () {
    //    clearInterval(this.intervalId)
  }
}
</script>

<style scoped>
  .main-content {
    margin-top: 80px;
  }

  .l-form-search {
    padding-top: 50px;
    width: 80%;
    margin: 0 auto;
  }
  .c-form-search__title {
    font-size: 1.5em;
  }
  .l-form-search__title {
    text-align: left;
  }
  .l-list-court {

  }
  .c-form-search__title {

  }
  .l-form-search__title {
  }
</style>
