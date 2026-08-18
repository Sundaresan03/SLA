use StudentDB;
-- 1. Create a Student table with: StudentID,StudentName,Email,Age,Address Make StudentID the Primary Key & ake Email a Unique Key.

create table student(id INT primary key, student_name varchar(20),email varchar(20) unique,age INT, address varchar(20));

-- 2.Create an Employee table with: EmployeeID,EmployeeName,Desg,Salary,Email,Phone.Set EmployeeID as the Primary Key.Set both Email and Phone as Unique Keys.

create table Employee(id INT primary key, employee_name varchar(20),desg varchar(20),salary int,email varchar(30) unique,phone INT unique);

-- 3. Create a Product table with: ProductID,ProductName,ProductCode,ProdDescription,Price.Make ProductID the Primary Key & Make ProductCode a Unique Key.Insert 5 products and try inserting a duplicate ProductCode.

create table Product(id INT primary key, product_name varchar(20),Product_code int unique,ProdDescription varchar(30),Price INT );

insert into Product values(1,'phone',101, 'smart phone', 25000),(2,'pendrive',102, 'pendrive', 2500),(3,'speaker',103, 'speaker', 25000),(4,'Tablet',104, 'tablet', 25000),(5,'laptop',105, 'laptop', 28000);
-- 4. Create a Course table with: courseID,CourseName,CourseCode,Duration,CourseFee.Set CourseID as the Primary Key & Set CourseCode as a Unique Key.Try inserting two courses with the same CourseCode.

CREATE TABLE Course (CourseID INT PRIMARY KEY,CourseName VARCHAR(50),CourseCode VARCHAR(20) UNIQUE,Duration VARCHAR(20),CourseFee INT);

INSERT INTO Course
VALUES (1, 'Java Full Stack', 'JFS101', '6 Months', 30000);

INSERT INTO Course
VALUES (2, 'Python Full Stack', 'JFS101', '6 Months', 28000);
-- 5. Create a Users table with: UserID,Username,Email,PasswordMake UserID the Primary Key & Make both Username and Email Unique Keys.Insert sample users and test duplicate Username and Email values.

CREATE TABLE Users (UserID INT PRIMARY KEY,Username VARCHAR(50) UNIQUE,Email VARCHAR(100) UNIQUE,Password VARCHAR(100));

INSERT INTO Users VALUES
(1, 'arun', 'arun@gmail.com', 'arun000'),
(2, 'priya', 'priya@gmail.com', 'priya111'),
(3, 'kavin', 'kavin@gmail.com', 'kavin999');

SELECT * FROM Users;

INSERT INTO Users VALUES
(4, 'arun', 'arun1@gmail.com', 'arun111');