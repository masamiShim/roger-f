<template>
  <div>
    <div class="l-form-search__row">
      <div class="c-form-search__label l-form-search__label">期間</div>
      <div class="l-form-search__period">
        <RogerSearchPeriodCondition :selected="periods"/>
      </div>
    </div>
    <div class="l-form-search__row">
      <div class="c-form-search__label l-form-search__label">曜日</div>
      <div class="l-form-search__input">
        <RogerSearchWeekCondition :selected="weeks" />
      </div>
    </div>
    <div class="l-form-search__button">
      <RogerButton :click="handleClick">
        <i class="fas fa-search" style="padding-right: .8em"></i>検索
      </RogerButton>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import RogerSearchPeriodCondition from '@/components/molecules/RogerSearchPeriodCondition'
import RogerSearchWeekCondition from '@/components/molecules/RogerSearchWeekCondition'
import RogerButton from '@/components/atoms/RogerButton'

export default {
  name: 'RogerSearchForm',
  components: {RogerButton, RogerSearchWeekCondition, RogerSearchPeriodCondition},
  computed: mapState({
    periods: state => state.searchCondition.period,
    weeks: state => state.searchCondition.week
  }),
  methods: {
    handleClick () {
      if (!this.canSearch()) {
        return
      }
      this.$store.dispatch('fetchCourts')
    },
    canSearch () {
      return (this.periods.length > 0 || this.weeks.length > 0)
    }
  }
}
</script>

<style scoped>
  .l-form-search__button {
    margin: 80px auto 0 auto;
    width: 50%;
  }
  .c-form-search__label {
    font-size: 1.2em;
    padding-bottom: 1.2em;
  }
  .l-form-search__label {
    padding: 10px;
    text-align: left;
  }
  .l-form-search__input {
  }
  .l-form-search__period {
    width: 80%;
  }
  .l-form-search__row {
    margin-top: 50px;
  }
</style>
