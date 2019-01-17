// import dateUtil from '@/utils/dateformatter.js'
export default {
  filteredWeek: (court, weeks) => {
    return true
    /*
    if (weeks.size < 1) {
      return true
    }
    console.log(`filter week => ${weeks.has(court.week)}`)
    return weeks.has(court.week)
    */
  },
  filteredPeriod: (court, period) => {
    if (!period) {
      return true
    }
    /*
    const now = new Date()
    let until = new Date()
    until.setDate(now.getDate() + period)
    console.log(now)
    console.log(until)
    const nowYMD = dateUtil.formatDateZeroPad(now, 'yyyyMMdd')
    const untilYMD = dateUtil.formatDateZeroPad(until, 'yyyyMMdd')
    console.log(`filter period => ${court.date >= nowYMD && court.date <= untilYMD}`)
    return court.date >= nowYMD && court.date <= untilYMD
    */
    return true
  }
}
