create database Constraints;
use Constraints;
-- 6. Create Customer and Orders table Customer Table :CustomerID(pk),CustomerName,Phone Orders Table :OrderID(pk),CustomerID(fk),OrderDate,Amount,OrderStatus Add CustomerID as a Foreign Key in Orders,Add a CHECK constraint to ensure Amount > 0. Set the default OrderStatus as 'Pending'.
CREATE TABLE Customer(CustomerID INT PRIMARY KEY,CustomerName VARCHAR(100),Phone VARCHAR(15));

CREATE TABLE Orders(OrderID INT PRIMARY KEY,CustomerID INT,OrderDate DATE,Amount DECIMAL(10,2),OrderStatus VARCHAR(20) DEFAULT 'Pending',
FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
CHECK (Amount>0)
);

-- 7. Hospital and Doctor Doctor Table : DoctorID(pk),DoctorName,Specialization Patient Table:PatientID(pk),PatientName,Age,DoctorID(fk),Status Add DoctorID as a Foreign Key in Patient.Add a CHECK constraint to ensure Age > 0. Set the default Status as 'Active'.

create table Hospital(DoctorID INT primary key, DoctorName varchar(20), specialization varchar(20));
create table Patient(PatientID INT primary key, DoctorID int, PatientName varchar(20), age int, Pstatus varchar(20) Default 'Active', Foreign key(DoctorID) references Hospital(DoctorID),
check (age>0));

-- 8.Bank and Account Customer Table:CustomerID,CustomerName,Phone Account Table :AccountID,CustomerID,AccountType,Balance,AccountStatus Add CustomerID as a Foreign Key in Account.& Add a CHECK constraint to ensure Balance >= 0. Set the default AccountStatus as 'Active'.
create table Bank(CustomerID INT primary key, CustomerName varchar(20), Phone int);
create table Accounts(AccountId Int primary key, CustomerID int, AccountType varchar(20), balance Int, AcStatus varchar(20) default 'active', foreign key(CustomerID) references Bank(CustomerID),check (balance>=0));

-- 9. Library and Books Publisher Table:PublisherID,PublisherName,City Book Table: BookID,BookName,PublisherID,Price,AvailableCopies Add PublisherID as a Foreign Key in Book & Add a CHECK constraint to ensure Price > 0. Set the default AvailableCopies to 1.
create table Library(PublisherID int primary key, PublisherName varchar(20),city varchar(10));
create table Books(BookId int primary key, publisherID int,BookName varchar(20),price int,availableCopies int Default 1, foreign key(PublisherID) references Library(publisherID), check(price>0));

-- 10.Teacher and Subject Teacher Table:TeacherID,TeacherName,Experience Subject Table:SubjectID,SubjectName,TeacherID,SubjectStatus Add TeacherID as a Foreign Key in Subject & Add a CHECK constraint to ensure Experience >= 0. Set the default SubjectStatus as 'Available'.
create table Teacher(TeacherID int primary key,TeacherName varchar(20),Experience int,check (Experience >=0));
create table Subjects(SubjectID int primary key, SubjectName varchar(20), TeacherID int, SubjectStatus varchar(20) default 'available', foreign key(TeacherID) references Teacher(TeacherID));
