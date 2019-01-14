<template>
  <div class="clear-fix">
    <ul class="week-list" v-for="week in weeks" :key="week.id">
      <li class="week-list-item">
        <RogerCheck :id="week.id" :name="'week'" :click="handleCheck(week.code)">
          {{ week.label }}
        </RogerCheck>
      </li>
    </ul>
  </div>
</template>
<script>
import RogerCheck from '@/components/atoms/RogerCheck'

let _weeks = [
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
      weeks: _weeks
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
