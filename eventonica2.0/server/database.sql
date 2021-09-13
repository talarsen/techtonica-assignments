/* NOTES ***/

/* psqul -U (which stands for user) postgres is superadmin meaning it has access to everything inside the database. 

\l to see everything in your database

\c move into a database
\dt see data tables



/* psql -U postres // in command line

create database eventonica2;

//define what table is going to look like
//define unique id and the    serial increments each user that will be added
create table user (
  id serial primary key,
  name varchar(255),
  email varchar(255)
);


*/