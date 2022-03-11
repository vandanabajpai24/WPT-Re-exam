const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "y",
    password: "mysql",
    database: "project10"
};
async function ConnectionCheck() {
    const Connection = mysql.createConnection(dbinfo);
    await Connection.connectAsync();
    console.log("CONNECTION SUCCESS!");
    await connection.endAsync();

}
ConnectionCheck();