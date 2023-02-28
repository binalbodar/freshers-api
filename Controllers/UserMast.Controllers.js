const sql = require("mssql");
const jwt = require('jsonwebtoken');

var { _tokenSecret } = require('../Config/token/TokenConfig.json');

// http://localhost:3000/api/UserMast/UserMastFill
exports.UserMastFill = async (req, res) => {
    try {
        var request = new sql.Request();

        request = await request.execute('USP_USERMAST_FILL');

        if (request.recordset) {
            res.json({ success: 1, data: request.recordset })
        } else {
            res.json({ success: 0, data: "Not Found" })
        }

    } catch (err) {
        res.json({ success: 0, data: err })
    }
}

// http://localhost:3000/api/UserMast/UserMastSave
// {
//     USER_ID :"asdasd"
//     PASS : "asdd"
//     CAT :"s"
//     MAIL :"agmailc.om "
//     CHECKBOX : true
// }
exports.UserMastSave = async (req, res) => {
    try {
        var request = new sql.Request();

        request.input('USER_ID', sql.VarChar(128), req.body.USER_ID)
        request.input('PASS', sql.VarChar(256), req.body.PASS)
        request.input('CAT', sql.VarChar(8), req.body.CAT)
        request.input('MAIL', sql.VarChar(1256), req.body.MAIL)
        request.input('CHECKBOX', sql.Bit, req.body.CHECKBOX)

        request = await request.execute('USP_USER_MAST_SAVE_UPDATE');

        res.json({ success: 1, data: '' })

    } catch (err) {
        res.json({ success: 0, data: err })
    }
}

// http://localhost:3000/api/UserMast/UserMastDelete
// {
//     USER_ID :"asdasd"
// }
exports.UserMastDelete = async (req, res) => {
    try {
        var request = new sql.Request();


        request.input('USER_ID', sql.VarChar(64), req.body.USER_ID)

        request = await request.execute('USP_USERMAST_DELETE');

        res.json({ success: 1, data: '' })

    } catch (err) {
        res.json({ success: 0, data: err })
    }
}

//https://www.tutorialspoint.com/nodejs/nodejs_quick_guide.htm
//https://www.javatpoint.com/nodejs-stringdecoder