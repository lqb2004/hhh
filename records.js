let db = require('../db/index')

exports.get = (req, res) => {
    var sql = 'select * from records order by date desc'
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}