<template>
  <div>
    <div v-if="isEmptyCourt">
      空きコートが存在しません。
    </div>
    <div v-else>
      <div class="c-list-court__row l-list-court__row" v-for="item in courts" :key="item.date">
        <div class="c-list-courts__title l-list-courts__title">{{ item.date
          }}<span>{{item.week | convertWeekLabel}}</span></div>
        <ul class="c-list-courts l-list-courts">
          <li v-for="court in item.courts"
              :key="court.id">
            <RogerCourtItem
              :id="court.id"
              :courtId="court.courtId"
              :courtName="court.courtName"
              :time="court.time"
              :courtNum="court.courtNum"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import RogerCourtItem from '@/components/molecules/RogerCourtItem'
import Week from '@/constants/Week'

export default {
  name: 'RogerAvailableCourtList',
  components: {RogerCourtItem},
  filters: {
    // これこそGetterにしたほうが良いのでは
    convertWeekLabel: (code) => {
      const elem = Week.items.find((w) => w.code === code)
      return !elem ? '' : `(${elem.label})`
    }
  },
  props: {
    courts: {
      type: Array,
      required: true
    }
  },
  computed: {
    isEmptyCourt () {
      return !this.courts || this.courts.length < 1
    }
  }
}
</script>

<style scoped>
  .c-list-court__title {
    text-align: left;
    font-weight: bold;
    font-size: 1.3em;
    margin-bottom: 2em;
  }

  .c-list-courts {
    overflow: hidden;
  }

  .l-list-court {
    width: 80%;
    margin: 50px auto 0 auto;
  }

  .l-list-courts {
  }

  .c-list-courts__title {
    font-size: 1.3em;
    letter-spacing: .1em;
  }

  .l-list-courts__title {
    text-align: left;
    letter-spacing: .1em;
    margin-bottom: 1.2em;
  }

  .c-list-court__row {
    border-bottom: 1px dotted #ababab;
    padding-bottom: 1.2em;
  }

  .c-list-court__row:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .l-list-court__row {
    margin-bottom: 1.5em;
  }
</style>
