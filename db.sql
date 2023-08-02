--DDL for the creation of a table

create table greetings(
id integer PRIMARY KEY AUTOINCREMENT,
language text,
greeting text
);

--DML to use and insert
SELECT * FROM greetings;


SELECT count(*) FROM greetings;

insert into greetings (language, greeting) 
values ('Zulu', 'Sawubona');

insert into greetings (language, greeting) 
values ('Xhosa', 'Molo qwedin');

insert into greetings (language, greeting) 
values ('Sestho', 'Dumelang');


