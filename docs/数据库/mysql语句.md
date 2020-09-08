## 数据库相关操作
- 连接数据库
```
mysql -u root -p password
```
- 创建数据库
```
create database 数据库名;
```
- 显示所有数据库
```
show databases;
```
- 使用数据库
```
use 数据库名;
```
- 删除数据库
```
drop database 数据库名;
```
## 表相关操作
- 创建数据库表
```
create table 表名 (
  列名1 数据类型1,
  列命2 数据类型2,
  ...
  列名n 数据类型n,
  primary key 列名(主键)
);
```
- 查看数据库中的所有表
```
show tables;
```
- 查看数据库表结构
```
desc 表名;
```
- 删除表
```
drop table 表名;
```
- 修改数据库表名
```
alter table 表名 rename to 新表名;
```
- 添加列
```
alter table 表名 add 列名 数据类型;
```
- 删除列
```
alter table 表名 drop 列名;
```
## 数据相关操作
- 添加数据
```
insert into 表名(列名1,列名2,...列名n) values(值1,值2,...值n);
添加列要和值相对应

insert into 表名 values(值1,值2,...值n);
值要包含表中所有的列
```
- 删除数据
```
delete from 表名 where 条件;
删除满足条件的数据。

delete from 表名;
默认删除表里的所有数据
```
- 修改数据
```
update 表名 set 列名1 = 值1, 列名2 = 值2,... where 条件
修改满足条件的数据

update 表名 set 列名1 = 值1, 列名2 = 值2,...;
如果是不加条件，则修改所有的数据。
```
- 查询数据
```
select 列命 from 表名，
查询某列的数据

select * from 表名
查询所有列的数据

select distinct 列命 from 表名，
查询去重后的数据
```
- 条件语句
  - and
  ```
  select * from 表名 where 条件1 and 条件2;
  查询同时满足条件1和条件2的数据
  ```
  - or
  ```
  select * from 表名 where 条件1 or 条件2;
  查询满足条件1或条件2的数据
  ```
  - not
  ```
  select * from 表名 where not 条件1;
  查询不满足条件1的数据
  ```
  - is null
  ```
  select * from 表名 where 列名 is null;
  查询某列为空的数据
  ```
  - is not null
  ```
  select * from 表名 where 列名 is not null;
  查询某列非空的数据
  ```
  - between 
  ```
  select * from 表名 where 列名 between 值1 and 值2;
  查询某列在值1和值2之间的数据
  ```
  - like 
  ```
  select * from 表名 where 列名 like 'hello%';
  查询所有以hello开头的数据，like结合%使用，其中%代表0到任意个字符

  select * from 表名 where 列名 like 'hello_';
  查询所有以hello开头并且后面只跟一个字符的数据，like结合_使用，_代表1个字符
  ```
  - in
  ```
  select * from 表名 where 列名in (值1,值2,...);
  查询某列在某区域内的数据
  ```
- 排序和分页
```
select* from 表名 order by 列名;
通过该列进行升序排序

select* from 表名 order by 列名 desc;
通过该列进行降序排序

select* from 表名 limit offset,pagesize;
查询索引从offset(第一个数据索引是0)开始，每页显示pagesize个元素

select* from user limit 0,10;
查询出的用户表数据，从第1个用户开始显示，每页显示10个

select* from user limit 10,10;
查询出的用户表数据，从第10个用户开始显示，每页显示10个
```
- 分组查询
```
select 字段名 from 表名 group by 字段名
select 字段名 count(字段名) from 表名 group by 字段名
```
- 联表查询
```
select 字段名 from 表名A inner join 表名B on 条件
select 字段名 from 表名A left join 表名B on 条件
select 字段名 from 表名A rigth join 表名B on 条件
```
## MySql 事物
- 开启事物`start transaction;`
- 提交事物，数据写回磁盘`commit;`
- 回滚事物`rollback;`
- 查看事物是否开启自动提交`show variables like 'autocommit';`
- 关闭事物自动提交`set autocommit=off;`
- 查看事物隔离级别`select @@transaction_isolation;`
- 设置隔离级别为读未提交`set session transaction isolation level read uncommitted;`
- 设置隔离界别为读已提交`set session transaction isolation level read committed;`
- 设置隔离级别为可重复读`set session transaction isolation level repeatable read;`
- 设置隔离界别为可串行化`set session transaction isolation level serializable;`

## MySql 索引
> 索引分为主键索引，唯一索引，普通索引，组合索引，全文索引。
- 查看表中数据数量`select count(*) from 表名;`
- 查看表中索引`show index from 表名;`
- 删除索引`drop index 索引名 on 表名;`
- 删除主键索引，也就是删除了该字段`alter table 表名 drop 主键字段名;`
- 主键索引
```
表结构
create table test(
   id int(11),
   name varchar(25),
   primary key (id)
);

创建表的时候添加索引
alter table test add constraint id primary key(id);
```
- 唯一索引
```
表结构
create table test(
	id int(11),
	name varchar(25),
	unique index_unique_test_name (name)
);

创建表之后创建唯一索引
create unique index index_unique_test_name on test(name);

修改表结构为唯一索引
alter table test add unique index index_unique_test_name (name);
```
- 普通索引
```
表结构
create table test(
	id int(11),
	name varchar(25),
	index index_test_name (name)
);

创建表之后创建普通索引
create index index_test_name on test(name);

修改表结构为普通索引
alter table test add index index_test_name (name);
```
- 组合索引
```
表结构

create table test(
	id int(11),
	name varchar(25),
	index index_test_id_name (id,name)
);

创建表之后创建组合索引
create index index_test_id_name on test(id,name);

修改表结构为普通索引
alter table test add index index_test_id_name (id,name);
```
- 
全文索引
```
表结构
create table test(
	id int(11),
	name varchar(25),
	content text,
	fulltext (text)
);

创建表之后创建组合索引
create fulltext index index_content on test(content);

修改表结构为普通索引
alter table test add fulltext index index_content (content);
```