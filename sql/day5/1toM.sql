create table dept(
dno int(3) auto_increment,
dname varchar(10) not null,
city varchar(10) not null,

PRIMARY key (dno));

insert into dept(dname,city) VALUES
('IT','Pune'),
('Sales','Pune'),
('Mark','Delhi'),
('Finance','Chennai'),
('HR','Jaipur');


create table employee(
eno int(3) auto_increment,
ename varchar(10) not null,
salary int(5) check(salary>0),
gender char(1)check(gender in('m','f')),
dno int(3),

PRIMARY key (eno),
FOREIGN key (dno) REFERENCES dept(dno));

insert into employee(ename,salary,gender,dno) VALUES
('Jack',1000,'m',1),
('Smith',1200,'m',1),
('Jane',1100,'f',1),

('Tom',1000,'m',2),
('Frank',1000,'m',2),


('Deepika',1500,'f',5),
('Jessica',1800,'f',5),
('Priyanka',1600,'f',5);


