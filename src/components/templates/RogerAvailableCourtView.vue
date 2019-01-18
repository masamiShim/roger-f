<template>
  <div>
    <RogerHeader/>
    <div class="main-content">
      <section class="c-form-search l-form-search">
        <div class="c-form-search__title l-form-search__title">検索条件</div>
        <RogerSearchForm/>
      </section>
      <section class="c-search-result l-search-result">
        <div class="c-search-result__title l-search-result__title">コート一覧</div>
        <RogerAvailableCourtList :courts="courts"/>
        <div>
        </div>
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
import { mapGetters } from 'vuex'

export default {
  name: 'RogerAvailableCourtView',
  components: {RogerSearchForm, RogerAvailableCourtList, RogerFooter, RogerHeader},
  data: function () {
    return {
      intervalId: undefined
    }
  },
  computed: mapGetters({
    courts: 'filteredCourts'
  }),
  beforeMount () {
    this.$store.dispatch('fetchCourts')
    /*
    this.intervalId = setInterval(() => {
      this.$store.dispatch('fetchCourts')
    }, 3000)
    */
  },
  beforeDestroy () {
    clearInterval(this.intervalId)
  }
}
</script>

<style scoped>
  .main-content {
    margin-top: 60px;
  }

  .c-form-search {
  }

  .l-form-search {
    width: 80%;
    margin: 0 auto;
  }

  .c-form-search__title {
    font-size: 1.5em;
    font-weight: bold;
    border-bottom: 1px solid black;
    padding-bottom: .75em;
  }

  .l-form-search__title {
    text-align: left;
  }

  .l-search-result {
    width: 80%;
    margin: 100px auto 0 auto;
  }

  .c-search-result {
  }

  .c-search-result__title {
    font-size: 1.5em;
    font-weight: bold;
    border-bottom: 1px solid black;
    padding-bottom: .75em;
  }

  .l-search-result__title {
    text-align: left;
    margin-bottom: 2em;
  }

</style>
