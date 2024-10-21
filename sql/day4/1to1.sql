create table chiefminister(
cmno int(3) auto_increment,
cmname varchar(20) not null,
cmgen varchar(1) check(cmgen in('m','f')),
cmage int(3) check(cmage>=40),
primary key (cmno));

insert into chiefminister(cmname,cmgen,cmage)  values
('Shinde','m',57),
('Banerjee','f',65),
('Atishi','f',55),
('Sharma','m',64);

create table state(
sno int(3) auto_increment,
sname varchar(20) not null,
capcity varchar(20) not null,
geogarea int(4) check(geogarea>100),
cmno int(3) unique,

primary key (sno),
foreign key (cmno) references chiefminister(cmno));

insert into state(sname,capcity,geogarea,cmno)  values
('Mh','Mumbai',500,1),
('Wb','Kolkata',400,2),
('Delhi','New Delhi',200,3),
('Rj','Jaipur',700,4);
