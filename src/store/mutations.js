import * as types from './mutation-types'

export default {
  [types.CHANGE_PERIOD] (state, period) {
    console.log('------ change period ')
    state.searchCondition.period = period
  },
  [types.CHANGE_WEEK] (state, week) {
    console.log('------ change week ')
    if (state.searchCondition.week.has(week)) {
      console.log('------ delete week ')
      state.searchCondition.week.delete(week)
      return
    }

    console.log('------ add week ')
    state.searchCondition.week.add(week)
  },
  [types.SELECT_COURT] (state, payload) {
    const {id, courtId} = payload
    if (state.selectedCourts.has({id, courtId})) {
      console.log('------ has court')
      state.selectedCourts.delete({id, courtId})
    } else {
      console.log('------ first court')
      state.selectedCourts.add({id, courtId})
    }
  },
  [types.FETCH_COURT] (state, payload) {
    console.log('------ fetch court ')
    state.availableCourts = payload
  }
}
