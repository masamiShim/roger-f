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
      courtName: '青葉台コート',
      time: '13:00',
      courtNum: 2,
      week: 6,
      date: '20180107'
    },
    {
      id: 2,
      courtId: 1,
      courtName: '青葉台コート',
      time: '10:00',
      courtNum: 1,
      week: 7,
      date: '20180121'
    },
    {
      id: 3,
      courtId: 2,
      courtName: '弁財公園コート',
      time: '12:00',
      courtNum: 2,
      week: 1,
      date: '20180110'
    },
    {
      id: 4,
      courtId: 3,
      courtName: '滝の根公園コート',
      time: '14:00',
      courtNum: 1,
      week: 2,
      date: '20180101'
    },
    {
      id: 5,
      courtId: 3,
      courtName: '滝の根公園コート',
      time: '10:00',
      courtNum: 1,
      week: 2,
      date: '20180101'
    },
  ]

  let groupByDate = (res, cur) => {
      const elem = res.find((item) => item.date === cur.date);
      if (elem) {
        elem.courts.push(cur)
      } else {
        res.push({
          date: cur.date,
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

