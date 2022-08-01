const mysql = require('mysql');
const bluebird = require("bluebird");



const con = mysql.createConnection({
  host: "186.64.116.230",
  user: "nexxosc1_gdm",
  password: "Nexxos.2022",
  database: "nexxosc1_nexxos",
  port: 3306,
});

const db = bluebird.promisifyAll(con);

module.exports.communeAll = async (event) => {
  try{
    con.connect();

    const result = await db.queryAsync("SELECT * FROM comunas");

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  }
  catch(e){

    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
  finally{
    con.end()    ;
  }
};
