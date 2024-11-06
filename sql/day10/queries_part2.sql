use itvAmazon2;

-- 05.11.2024


INSERT INTO  category  ( cat_id ,  cat_name ) VALUES
(1, 'BOOKS'),
(2, 'GAMES'),
(3, 'GROCERIES'),
(4, 'ELECTRONIC'),
(5, 'CLOTHES');


INSERT INTO  product  ( pro_id ,  pro_name ,  pro_desc ,  cat_id ) VALUES
(1, 'GTA V', 'Windows 7 and above with i5 processor and 8GB RAM', 2),
(2, 'TSHIRT', 'SIZE-L with Black, Blue and White variations', 5),
(3, 'ROG LAPTOP', 'Windows 10 with 15inch screen, i7 processor, 1TB SSD', 4),
(4, 'OATS', 'Highly Nutritious from Nestle', 3),
(5, 'HARRY POTTER', 'Best Collection of all time by J.K Rowling', 1),
(6, 'MILK', '1L Toned MIlk', 3),
(7, 'Boat EarPhones', '1.5Meter long Dolby Atmos', 4),
(8, 'Jeans', 'Stretchable Denim Jeans with various sizes and color', 5),
(9, 'Project IGI', 'compatible with windows 7 and above', 2),
(10, 'Hoodie', 'Black GUCCI for 13 yrs and above', 5),
(11, 'Rich Dad Poor Dad', 'Written by RObert Kiyosaki', 1),
(12, 'Train Your Brain', 'By Shireen Stephen', 1);



INSERT INTO  supplier  ( supp_id ,  supp_name ,  supp_city ,  supp_phone ) VALUES
(1, 'Rajesh Retails', 'Delhi', '1234567890'),
(2, 'Appario Ltd.', 'Mumbai', '2589631470'),
(3, 'Knome products', 'Banglore', '9785462315'),
(4, 'Bansal Retails', 'Kochi', '8975463285'),
(5, 'Mittal Ltd.', 'Lucknow', '7898456532');


INSERT INTO  supplier_pricing  ( pricing_id ,  pro_id ,  supp_id ,  supp_price ) VALUES
(1, 1, 2, 1500),
(2, 3, 5, 30000),
(3, 5, 1, 3000),
(4, 2, 3, 2500),
(5, 4, 1, 1000),
(6, 12, 2, 780),
(7, 12, 4, 789),
(8, 3, 1, 31000),
(9, 1, 5, 1450),
(10, 4, 2, 999),
(11, 7, 3, 549),
(12, 7, 4, 529),
(13, 6, 2, 105),
(14, 6, 1, 99),
(15, 2, 5, 2999),
(16, 5, 2, 2999);

select * from supplier_pricing;



INSERT INTO  customer  ( cus_id ,  cus_name ,  cus_phone ,  cus_city ,  cus_gender ) VALUES
(1, 'AAKASH', '9999999999', 'DELHI', 'M'),
(2, 'AMAN', '9785463215', 'NOIDA', 'M'),
(3, 'NEHA', '9999999999', 'MUMBAI', 'F'),
(4, 'MEGHA', '9994562399', 'KOLKATA', 'F'),
(5, 'PULKIT', '7895999999', 'LUCKNOW', 'M'),
(6, 'VIRAT', '9890989065', 'DELHI', 'M'),
(7, 'ROHIT', '8888111222', 'MUMBIA', 'M');

INSERT INTO  payment_mode  (payment_name ) VALUES
('COD'),
('Online');

INSERT INTO  delivery_boy  (db_name ,  db_phone ,  db_dlno ,  db_address ) VALUES
('AADITYA', '9978965223','A1234', 'DELHI'),
('AMIT', '7785463215','B1234', 'NOIDA'),
('MAHESH', '8995789999','C1234' ,'MUMBAI'),
('SAURABH', '9894762399','D1234', 'KOLKATA');

INSERT INTO order_masters(ord_date ,cus_id ,payment_id ,db_id ) VALUES
('2024-11-05', 1, 1, 1),
('2024-11-05', 1, 1, 1),
('2024-11-04', 1, 1, 2),
('2024-11-04', 2, 2, 3),
('2024-11-02', 3, 1, 1),
('2024-10-30', 3, 2, 4),
('2024-04-04', 4, 2, 2);



select * from order_masters;

-- Q. Display count of orders delivered by AADITYA

select  count(*) as 'Total count of orders'
from delivery_boy
join
order_masters
using(db_id)
where db_name like 'AADITYA';

-- display count of orders by each delivery boy
select  db_name as 'Delivery boy', count(*) as 'Total count of orders'
from delivery_boy
join
order_masters
using(db_id)
group by db_name;



-- display the total count of cod orders by each delivery boy
select  db_name as 'Delivery boy', count(*) as 'Total count of cod'
from delivery_boy
join
order_masters
using(db_id)
join payment_mode
using(payment_id)
where payment_name like 'COD'
group by db_name;


-- Display the total number of orders  delivered by each delivery boy delivered to 'MUMBAI city' where payment mode was 'ONLINE'

select db_name, count(*) as 'Number of orders to Mumbai online'
from
delivery_boy db
join order_masters
using(db_id)
join customer c
using(cus_id)
join payment_mode pm
using (payment_id)
where cus_city like 'MUMBAI' AND payment_name like 'Online'
group by db_name;


select * from supplier_pricing;

INSERT INTO order_details(ord_id,pricing_id,quantity )VALUES
(1, 1, 1),
(1, 2, 2),
(3, 3,1),
(3, 4,1),
(4, 2,1),
(4, 3,1),
(4,4,1);

select * from order_details;

-- Q. Display the total order amount of order no 1

select ord_id, sum(quantity*supp_price) as 'Total order value'
from order_masters
join order_details
using (ord_id)
join supplier_pricing
using(pricing_id)
where ord_id = 1;


-- Q. Display the total order amount of each order

select ord_id, sum(quantity*supp_price) as 'Total order value'
from order_masters
join order_details
using (ord_id)
join supplier_pricing
using(pricing_id)
group by ord_id;


-- Display name of products delivered by AADITYA
select pro_name
 from
delivery_boy db
join order_masters om
using (db_id)
join order_details od
using(ord_id)
join supplier_pricing sp
using (pricing_id)
join product
using(pro_id)
where db_name like 'AADITYA';


-- display total cash AADITYA have

select sum(quantity * supp_price) as 'Total Cash'
 from
delivery_boy db
join order_masters om
using (db_id)
join payment_mode
using (payment_id)
join order_details
using (ord_id)
join supplier_pricing 
using (pricing_id)
where db_name like 'AADITYA' AND payment_name like 'cod';


select * from order_details;

INSERT INTO rating(ord_id ,pricing_id ,stars ,comments)  values
(1, 2, 1, 'Very poor quality'),
(4, 2, 5, 'Very good quality'),
(4,3,3, 'Not as per expectation'),
(4, 4, 1, 'Product delivered was not as shown on website'),
(3, 4, 5, 'Awsome');


-- display the rating of products along with supplier name

select supp_name, pro_name, stars, comments
from
supplier
join supplier_pricing sp
using (supp_id)
join product p
using (pro_id)
join order_details od
using (pricing_id)
join rating r
using(ord_id, pricing_id);


-- dispaly suppliers with their average rating of customers
select supp_name, avg(stars)
from
supplier
join supplier_pricing sp
using (supp_id)
join product p
using (pro_id)
join order_details od
using (pricing_id)
join rating r
using(ord_id, pricing_id)
group by supp_name;


--  dispaly categorywise suppliers

select supp_name, avg(stars), 
CASE
when avg(stars)>=4 then 'Excellent!'
when avg(stars)>=3 then 'Very good'
when avg(stars)>=2 then 'Good'
when avg(stars)>=1 then 'OK'
else 'NOT OK'
END as 'Supplier category'
from
supplier
join supplier_pricing sp
using (supp_id)
join product p
using (pro_id)
join order_details od
using (pricing_id)
join rating r
using(ord_id, pricing_id)
group by supp_name;