create database usuario;

create table cadastro(
id_cadastro int primary key auto_increment,
prim_nome varchar (25),
sobrenome varchar (50),
dt_Nasc date,
sexo varchar (15),
email varchar (50),
senha char (8)
);
