
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER(11) auto_increment NOT NULL,
    product_name VARCHAR(100) NULL,
    department_name VARCHAR(50) NULL,
    price DECIMAL(10,4) NULL,
	stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Bucket Head Vacuum", "Home and Garden", 19.99, 100);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Extension Cord", "Home and Garden", 9.99, 500);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Instant Pot", "Home and Garden", 159.99, 500);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Dominion", "Board Games", 49.99, 70);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Settlers of Catan", "Board Games", 29.99, 100);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Zombie Dice", "Board Games", 13.13, 500);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Wizard of London", "Books", 5.99, 100);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Micromessaging", "Books", 9.99, 100);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Pride and Prejudice", "Books", 4.99, 1000);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Ziploc Sandwich Bags", "Consumables", 3.99, 2000);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Dishwasher Detergent Packs", "Consumables", 9.99, 5000);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES("Toilet Paper", "Consumables", 12.99, 10000);
