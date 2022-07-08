'use strict';
const mysql = require('mysql');

const con = mysql.createConnection({
  host: "186.64.116.230",
  user: "nexxosc1_gdm",
  password: "Nexxos.2022",
  database: "nexxosc1_nexxos",
  port: 3306,
});

module.exports.communeAll = async (event) => {
  try{
    con.connect();

    const result = await con.query("SELECT * FROM comunas");

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
