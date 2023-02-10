const sql = require('mssql')

const sql_config = {
    user: 'SA',
    password: 'OPTICAL',
    server: 'PC-112\\SQL2014',
    database: 'FRESHERS_DB',
    pool: {
        idleTimeoutMillis: 300000,
        max: 100,
        min: 100,
    },
    options: {
        encrypt: false,
        trustServerCertificate: true,
        enableArithAbort: false,
    },
}

sql.on('error', err => {
    console.log('SQL ERROR:');
    console.log(err);
})

var conx;
sql.connect(sql_config).then(pool => {
    conx = pool;
});
