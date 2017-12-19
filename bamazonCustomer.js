var mysql = require("mysql");
var inquirer = require("inquirer");
var choice = 0;
var quantity = 0;
var order = [choice, quantity];

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
  console.log(":::::::::::::::::::::::::\nWelcome to Bamazon!\n:::::::::::::::::::::::::");
  readProducts();
});

function readProducts() {
  console.log("Loading product list...\n:::::::::::::::::::::::::");
  connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
          console.log("Item ID: " + res[i].item_id + " || Name: " + res[i].product_name + " || Price: " + res[i].price + "\n");
    }
    // Log all results of the SELECT statement
   // var legible = JSON.stringify(res, null, 2);
   // console.log(legible);
    takeOrder();
  });
}

function takeOrder() {
	inquirer
	.prompt([
		{
			name: "userChoice",		    
		    type: "input",
		    message: "Which item number would you like to order?",
		    validate: function(value) {
		      	if (isNaN(value) === false) {
		      		return true;
		      		choice = (this.value);
		      	}
		      	return false;
		    }
	    },
	    {
	    	name: "userQuantity",
	    	type: "input",
	    	message:"How many would you like?",
	    	validate: function(value) {
	    		if (isNaN(value) === false) {
	    			return true;
	    			quantity = (this.value);
	    		}
	    		return false;
	    	}
	    }
	])  // .prompt end
	.then(function(order))
	console.log("Order = [choice, quantity]: " + order);
	connection.end();
}

//connection.end();
/*
pseudocode:::::::

functions needed:
	user starts program.
	<done>program displays all items available for sale:
		(item_id, name, price)
	<done>Inquirer asks the ID of the product they want to buy
	<done>Inquirer asks what quantity of the item they want

	Program checks to see if store has enough of the item
		if not, program should console.log "Insufficient Quantity!"
			and stop order.
		if so, program should "fulfill the order":
			update database to reflect remaining quantity
			show user total cost of purchase
*/