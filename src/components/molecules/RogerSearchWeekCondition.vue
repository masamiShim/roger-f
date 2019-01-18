<template>
  <div class="clear-fix">
    <ul class="week-list" v-for="week in weeks" :key="week.id">
      <li class="week-list-item">
        <RogerCheck :id="week.id"
                    :name="'week'"
                    @check="handleCheck(week.code)"
                    :checked="isChecked(week.code)"
        >
          {{ week.label }}
        </RogerCheck>
      </li>
    </ul>
  </div>
</template>
<script>
import RogerCheck from '@/components/atoms/RogerCheck'
import Week from '@/constants/Week.js'

export default {
  name: 'RogerSearchWeekCondition',
  components: {RogerCheck},
  props: {
    selectedWeeks: {
      type: Set,
      required: true
    }
  },
  data () {
    return {
      weeks: Week.items
    }
  },
  methods: {
    handleCheck (code) {
      this.$store.dispatch('changeWeek', code)
      // FIXME: 多分ここでやらずともいけるのはず
      this.$store.dispatch('fetchCourts')
    },
    isChecked (code) {
      return this.selectedWeeks.has(code)
    }
  }

}
</script>

<style scoped>
  .week-list {
    width: 100%;
    line-height: 30px;
    box-sizing: border-box;
  }

  .week-list-item {
    display: block;
    float: left;
    width: calc(100% / 7);
    box-sizing: border-box;
  }

  .week-list-item:last-child {
    margin-left: 0;
  }

  .clear-fix {
    clear: both;
  }

</style>
