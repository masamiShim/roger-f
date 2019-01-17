import helper from './getterHelper'
export default {
  filteredCourts: state => {
    const cond = state.searchCondition
    const courts = state.availableCourts
    return courts
      .filter((court) => {
        return (helper.filteredPeriod(court, cond.period) &&
          helper.filteredWeek(court, cond.week))
      })
  }
}
