import * as types from './mutation-types'
import {CourtFinder} from '@/api/index'

export default {
  fetchCourts: ({commit, state}) => {
    CourtFinder.fetch()
      .then((availableCourts) => {
        commit(types.FETCH_COURT, availableCourts)
      })
      .catch(err => {
        throw err
      })
  },
  changePeriod: ({commit, state}, code) => {
    commit(types.CHANGE_PERIOD, code)
  },
  changeWeek: ({commit, state}, code) => {
    commit(types.CHANGE_WEEK, code)
  },
  toggleSelect: ({commit, state}, {id, courtId}) => {
    commit(types.SELECT_COURT, { id, courtId })
  }
}
