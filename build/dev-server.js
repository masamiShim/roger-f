const bodyParser = require('body-parser')

/**
 * API・永続化のモック
 *
 * @param app
 */
module.exports = app => {
  app.use(bodyParser.json())

  const courts = [
    {
      id: 1,
      courtId: 1,
      courtName: '□□□□コート',
      time: '13:00',
      courtNum: 2,
      week: 6,
      date: '20190107'
    },
    {
      id: 2,
      courtId: 1,
      courtName: '□□□□コート',
      time: '10:00',
      courtNum: 1,
      week: 7,
      date: '20190121'
    },
    {
      id: 3,
      courtId: 2,
      courtName: '△△△△コート',
      time: '12:00',
      courtNum: 2,
      week: 1,
      date: '20190128'
    },
    {
      id: 4,
      courtId: 3,
      courtName: '〇〇〇〇コート',
      time: '14:00',
      courtNum: 1,
      week: 2,
      date: '20190129'
    },
    {
      id: 5,
      courtId: 3,
      courtName: '〇〇〇〇コート',
      time: '10:00',
      courtNum: 1,
      week: 2,
      date: '20190101'
    },
  ]

  let groupByDate = (res, cur) => {
      const elem = res.find((item) => item.date === cur.date);
      if (elem) {
        elem.courts.push(cur)
      } else {
        res.push({
          date: cur.date,
          week: cur.week,
          courts: [cur]
        })
      }
      return res
  }

  // 利用可能コート取得APIモック
  app.get('/lists', (req, res) => {
    const courtByDate = courts.reduce(groupByDate, []);

    const sortedByDate = courtByDate.sort((pre, cur) => {
      return pre.date > cur.date
    });
    res.json({list: courtByDate})
  })
}

