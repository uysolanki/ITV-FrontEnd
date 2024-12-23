create database itvAmazon2;

use itvAmazon2;

-- table no. 1
create table category(
cat_id BIGINT AUTO_INCREMENT,
cat_name VARCHAR(20),
PRIMARY KEY (cat_id);


-- table no. 2
create table product(
pro_id BIGINT auto_increment,
pro_name varchar(20),
pro_desc varchar(200),
cat_id int(5),
primary key(pro_id),
foreign key(cat_id) references category(cat_id));


-- table no. 3

create table supplier(
supp_id BIGINT auto_increment,
supp_name varchar(20),
supp_city varchar(20),
supp_phone varchar(10) CHECK (LENGTH(supp_phone) = 10 AND supp_phone REGEXP '^[0-9]+$'),
primary key(supp_id));


-- table no. 4

create table supplier_pricing(
pricing_id BIGINT auto_increment,
pro_id int(5),
supp_id int(5),
supp_price int(5),
CONSTRAINT unique_product UNIQUE (pro_id, supp_id),
primary key(pricing_id),
foreign key(pro_id) references product(pro_id),
foreign key(supp_id) references supplier(supp_id));

--ALTER TABLE orders
--ADD CONSTRAINT unique_product UNIQUE (pro_id, supp_id);

-- table no. 5

create table customer(
cus_id BIGINT auto_increment,
cus_name varchar(20),
cus_phone varchar(10) CHECK (LENGTH(cus_phone) = 10 AND cus_phone REGEXP '^[0-9]+$'),
cus_city varchar(20),
cus_gender varchar(1) check(cus_gender in('m','f')),
primary key(cus_id));

-- table no. 6
create table payment_mode(
payment_id BIGINT auto_increment,
payment_name varchar(20) ,
primary key (payment_id)
);



-- table no. 7
create table delivery_boy(
db_id BIGINT auto_increment,
db_name varchar(20),
db_phone varchar(10) CHECK (LENGTH(db_phone) = 10 AND db_phone REGEXP '^[0-9]+$'  AND db_phone REGEXP '^[789][0-9]{9}$'),
db_dlno varchar(20) unique not null,
db_address varchar(50),
job_status int(1) DEFAULT 1,

primary key(db_id)
);


-- table no. 8
create table order_masters(
ord_id BIGINT auto_increment,
ord_date date check (ord_date >= curdate()),
cus_id int(5),
payment_id int(5),
db_id int(5),
ord_status varchar(1) check(ord_status in ('p','d','c','r')) default 'p',
primary key (ord_id),
foreign key(cus_id) references customer(cus_id),
foreign key(payment_id) references payment_mode(payment_id),
foreign key(db_id) references delivery_boy(db_id)
);


-- table no .9

create table order_details(
ord_id BIGINT,
pricing_id int(5),
quantity int(5) check(quantity >0),
primary key(ord_id, pricing_id),
foreign key(ord_id) references order_masters(ord_id),
foreign key(pricing_id) references supplier_pricing(pricing_id)
);


-- table no 10
create table rating(
ord_id BIGINT,
pricing_id int(5),
stars int(1) check(stars between 1 and 5),
comments varchar(200),
foreign key(ord_id, pricing_id) references order_details(ord_id, pricing_id)
);



