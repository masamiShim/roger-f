<template>
  <div class="clear-fix">
    <ul>
      <li class="period-list" v-for="period in periods" :key="period.id">
        <RogerRadio class="period-list-item"
                    :id="period.id"
                    :name="'_period'"
                    @check="handleCheck(period.code)"
                    :checked="isChecked(period.code)"
        >
          {{ period.label }}
        </RogerRadio>
      </li>
    </ul>
  </div>
</template>

<script>
import RogerRadio from '@/components/atoms/RogerRadio'
import Period from '@/constants/Period'
export default {
  name: 'RogerSearchPeriodCondition',
  components: {RogerRadio},
  props: {
    selected: {
      type: Number
    }
  },
  data () {
    return {
      periods: Period.items
    }
  },
  methods: {
    handleCheck (code) {
      this.$store.dispatch('changePeriod', code)
    },
    isChecked (code) {
      return this.selected === code
    }
  }
}
</script>

<style scoped>
  .period-list {
    width: 100%;
    line-height: 30px;
    box-sizing: border-box;
  }

  .period-list-item {
    display: block;
    float: left;
    width: calc(100% / 3);
    box-sizing: border-box;
  }

  .period-list-item:last-child {
    margin-left: 0;
  }
  .clear-fix {
    clear: both;
  }
</style>
