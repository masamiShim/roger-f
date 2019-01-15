<template>
  <div>
    <div class="l-form-search__row">
      <div class="c-form-search__label l-form-search__label">期間</div>
      <div class="l-form-search__input">
        <RogerSearchPeriodCondition/>
      </div>
    </div>
    <div class="l-form-search__row">
      <div class="c-form-search__label l-form-search__label">曜日</div>
      <div class="l-form-search__input">
        <RogerSearchWeekCondition/>
      </div>
    </div>
    <div class="l-form-search__button">
      <RogerButton :click="handleClick">
        検索
      </RogerButton>
    </div>
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
      if (!this.canSearch()) {
        return
      }
      this.$store.dispatch('fetchCourts')
    }
  }
}
</script>

<style scoped>
  .l-form-search__button {
    margin-top: 80px;
  }
  .c-form-search__label {
    font-size: 1.2em;
  }
  .l-form-search__label {
    padding: 10px;
    text-align: left;
  }
  .l-form-search__input {
  }
  .l-form-search__row {
    margin-top: 50px;
  }
</style>
