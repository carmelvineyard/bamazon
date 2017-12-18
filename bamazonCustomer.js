var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "M3anwh!Il3",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Mischief Managed!");
  readProducts();
});

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    var legible = JSON.stringify(res, null, 2);
    console.log(legible);
    connection.end();
  });
}
//connection.end();