import dateUtil from '@/utils/dateformatter.js'
export default {
  filteredWeek: (court, weeks) => {
    if (weeks.size < 1) {
      return true
    }
    return weeks.has(court.week)
  },
  filteredPeriod: (court, period) => {
    if (!period) {
      return true
    }
    const now = new Date()
    let until = new Date()
    until.setDate(now.getDate() + period)
    const nowYMD = dateUtil.formatDateZeroPad(now, 'yyyyMMdd')
    const untilYMD = dateUtil.formatDateZeroPad(until, 'yyyyMMdd')
    return court.date >= nowYMD && court.date <= untilYMD
  }
}
