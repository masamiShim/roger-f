import * as types from './mutation-types'

export default {
  [types.CHANGE_PERIOD] (state, period) {
    state.searchCondition.period = period
  },
  [types.CHANGE_WEEK] (state, week) {
    if (state.has(week)) {
      state.searchCondition.week.delete(week)
    } else {
      state.searchCondition.week.add(week)
    }
  },
  [types.SELECT_COURT] (state, payload) {
    const {id, courtId} = payload
    if (state.selectedCourts.has({id, courtId})) {
      state.selectedCourts.delete({id, courtId})
    } else {
      state.selectedCourts.add({id, courtId})
    }
  },
  [types.FETCH_COURT] (state, payload) {
    state.availableCourts = payload
  }
}
