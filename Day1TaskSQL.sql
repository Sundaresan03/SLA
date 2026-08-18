use studentdb;
-- 2.Create a students , customer, staff, Product ,user table do all ddl & dml opearation (each table min 5 columns)

-- DDL: CREATE
CREATE TABLE student (
    student_id INT ,
    student_name VARCHAR(50),
    age INT,
    department VARCHAR(50),
    email VARCHAR(100),
    city VARCHAR(50)
);

CREATE TABLE customer (
    customer_id INT ,
    customer_name VARCHAR(50),
    age INT,
    department VARCHAR(50),
    email VARCHAR(100),
    city VARCHAR(50)
);

CREATE TABLE staff (
    staff_id INT ,
    staff_name VARCHAR(50),
    age INT,
    department VARCHAR(50),
    email VARCHAR(100),
    city VARCHAR(50)
);

CREATE TABLE product (
    product_id INT ,
    product_name VARCHAR(50),
    age INT,
    department VARCHAR(50),
    email VARCHAR(100),
    city VARCHAR(50)
);

CREATE TABLE Users (
    user_id INT ,
    user_name VARCHAR(50),
    age INT,
    department VARCHAR(50),
    email VARCHAR(100),
    city VARCHAR(50)
);
INSERT INTO students VALUES
(1, 'Arun', 21, 'Computer Science', 'arun@gmail.com', 'Chennai'),
(2, 'Priya', 20, 'Information Technology', 'priya@gmail.com', 'Madurai'),
(3, 'Kavin', 22, 'Computer Science', 'kavin@gmail.com', 'Chennai'),
(4, 'Divya', 21, 'Electronics', 'divya@gmail.com', 'Trichy'),
(5, 'Rahul', 20, 'Mechanical', 'rahul@gmail.com', 'Salem');

UPDATE students
SET city = 'Coimbatore'
WHERE student_id = 1;

DELETE FROM students
WHERE student_id = 2;

ALTER TABLE students
ADD phone VARCHAR(15);

 SELECT * FROM students;

Drop database studentdb;
