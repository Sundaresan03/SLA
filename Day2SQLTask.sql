create database StudentDB;
use StudentDB;
-- 1. Create a table orders (id, product_name, quantity, price).
-- 2. Insert 5 orders with different values.
-- 3. Select all orders where quantity > 2.
-- 4. Select orders where price is between 100 and 500.
-- 5. Fetch orders with product_name starting with 'A'.

create table orders(id INT, product_name varchar(20),quantity INT, price INT);

INSERT INTO orders values(1,'AppleIphone',3,500),(2,'Laptop',3,165),(3,'Computer',1,124),(4,'Tablet',2,40000),(5,'Speaker',2,30000);

select*from orders where quantity > 2;

select product_name from orders where price >=100 && price<=500;

select product_name from orders where product_name LIKE "A%";
