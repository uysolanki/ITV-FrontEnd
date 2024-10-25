create table actor(
ano int(5) auto_increment,
aname varchar(20) not null,
gender varchar(1) check(gender in('m','f')),
age int(3) check(age>=18),
primary key (ano));

create table movie(
mno int(5) auto_increment,
mname varchar(20) not null,
ryear int(3),
revenue int(4) check(revenue>0),
primary key (mno));

create table imdb(
ano int(5),
mno int(5),
fees int(5) check(fees>0),
primary key(mno,ano),
foreign key(ano) references actor(ano),
foreign key(mno) references movie(mno));


insert into actor(aname,gender,age) values
('SRK','m',58),
('AK','m',55),
('DP','f',40),
('PC','f',38);


insert into movie(mname,ryear,revenue) values
('CE',2010,500),
('CCTC',2005,150),
('DON',2012,300);


insert into imdb(ano,mno,fees) values
(1,1,100),
(1,3,80),
(3,1,60),
(2,2,20),
(3,2,10),
(4,3,60);