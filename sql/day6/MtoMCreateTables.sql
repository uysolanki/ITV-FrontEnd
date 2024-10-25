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


--display movienames of SRK
select mname
from Actor a, Movie m, imdb i
where a.ano=i.ano
and
m.mno = i.mno
and
aname like 'SRK';


select *
from Actor a, Movie m, imdb i
where a.ano=i.ano
and
m.mno = i.mno;



select aname,sum(fees) as 'Networth'
from Actor a, Movie m, imdb i
where a.ano=i.ano
and
m.mno = i.mno
group by aname;


--display the networth of each actor show richest actor on top
SELECT aname, sum( fees ) AS 'Networth'
FROM Actor a, Movie m, imdb i
WHERE a.ano = i.ano
AND m.mno = i.mno
GROUP BY aname
ORDER BY Networth DESC


SELECT aname, sum( fees ) AS 'Networth'
FROM Actor a, Movie m, imdb i
WHERE a.ano = i.ano
AND m.mno = i.mno
GROUP BY aname
ORDER BY Networth DESC
limit 1;


select mname, 
case
when revenue >=500 then 'Excellent'
when revenue >=400 then 'V Good'
when revenue >=300 then 'Average'
when revenue >=200 then 'OK'
else
'Poor'
end as rating
from movie;



SELECT mname,
CASE
WHEN revenue >=500
THEN 'Excellent'
WHEN revenue >=400
THEN 'V Good'
WHEN revenue >=300
THEN 'Average'
WHEN revenue >=200
THEN 'OK'
ELSE 'Poor'
END AS rating
FROM movie
ORDER BY revenue DESC , ryear DESC;