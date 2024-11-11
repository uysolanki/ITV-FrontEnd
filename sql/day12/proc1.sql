create or replace procedure insertEmployeePro(
    pempno employee.empno%type,
    pempname employee.empname%type,
    psalary employee.salary%type,
    pgender employee.gender%type,
    pdob employee.dob%type,
    pdesg employee.desg%type,
    ppassport employee.passport%type,
    pworkmode employee.workmode%type,
    pbosseno employee.boss_empno%type,
    status out number)
   is
   begin
   insert into employee(empno,empname,salary,gender,dob,desg,passport,workmode,boss_empno)
   values(pempno,pempname,psalary,pgender,pdob,pdesg,ppassport,pworkmode,pbosseno);
   status:=1;
   exception
   when others then
   status:=0;
   end;
   /
   
   
   declare
    ans number(5);
    begin
   insertEmployee(8,'Ramesh',1500,'m','11-Nov-1995','Manager','QWTY123','wfo',6,ans);
    if ans=1 then
    dbms_output.put_line('Record Inserted Successfully');
    else
    dbms_output.put_line('Record Not Inserted');
    end if;
   end;
   /
   
   select * from employee;