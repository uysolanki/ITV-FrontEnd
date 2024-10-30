create table category(
cat_id int(5) auto_increment,
cat_name varchar(20),
primary key(cat_id));

create table product(
pro_id int(5) auto_increment,
pro_name varchar(20),
pro_desc varchar(200),
cat_id int(5),
primary key(pro_id),
foreign key(cat_id) references category(cat_id));


create table supplier(
supp_id int(5) auto_increment,
supp_name varchar(20),
supp_city varchar(20),
supp_phone varchar(10) CHECK (LENGTH(supp_phone) = 10 AND supp_phone REGEXP '^[0-9]+$'),
primary key(supp_id));

create table supplier_pricing(
pricing_id int(5) auto_increment,
pro_id int(5),
supp_id int(5),
supp_price int(5),
primary key(pricing_id),
foreign key(pro_id) references product(pro_id),
foreign key(supp_id) references supplier(supp_id));

create table customer(
cus_id int(5) auto_increment,
cus_name varchar(20),
cus_phone varchar(10) CHECK (LENGTH(cus_phone) = 10 AND cus_phone REGEXP '^[0-9]+$'),
cus_city varchar(20),
cus_gender varchar(1) check(cus_gender in('m','f')),
primary key(cus_id));


create table orders(
ord_id int(5) auto_increment,
ord_date date,
cus_id int(5),
pricing_id int(5),
primary key(ord_id),
foreign key(cus_id) references customer(cus_id),
foreign key(pricing_id) references supplier_pricing(pricing_id));


create table rating(
ord_id int(5),
stars int(1),
primary key(ord_id,stars));


