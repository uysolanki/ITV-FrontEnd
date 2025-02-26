create table employee(
empno int(3) primary key auto_increment,
empname varchar(10) not null,
salary int(5) not null check(salary>=1000),
gender varchar(1) not null check(gender in('m','f')),
dob date not null check(dob<'2006-10-15'),
desg varchar(10),
passport varchar(10) unique,
workmode varchar(10) default 'wfo',
boss_empno int(3));


insert into employee(empname,salary,gender,dob,desg,passport,workmode,boss_empno) 
values('Alice',2000,'f','1970-8-12','ceo','A123456','wfo',null);


insert into employee(empname,salary,gender,dob,desg,passport,boss_empno) values
('Ben',1200,'m','1990-8-15','Manager','B123456',1),
('Chris',1000,'m','1990-8-15','Manager','C123456',1),
('Maria',1000,'f','1995-8-15','Developer','M123456',2),
('Jim',1500,'m','2000-8-15','Developer','J123456',2),
('Akshata',800,'f','2001-8-15','Clerk','X123456',3);


insert into employee(empname,salary,gender,dob,desg,passport,workmode,boss_empno) 
values
('George',1200,'m','1990-8-15','Tester','G123456','hybrid',2),
('Angelina',1000,'f','1990-8-15','Tester','K123456','hybrid',2),
('Ana',1000,'f','1995-8-15','Admin','R123456','wfh',3),
('Jack',1500,'m','2000-8-15','Admin','O123456','wfh',3),
('Pooja',800,'f','2001-8-15','Admin','P123456','hybrid',3);


alter table employee
add mobile int(10) unique;

alter table employee
modify salary int(10);

alter table employee
drop column mobile;


rename table employee to empitv;