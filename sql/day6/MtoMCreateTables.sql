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
