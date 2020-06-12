create database usuario;

create table cadastro(
id_cadastro int primary key auto_increment,
nome varchar (50),
dt_Nasc date,
sexo varchar (15),
email varchar (50),
senha char (8)
);
