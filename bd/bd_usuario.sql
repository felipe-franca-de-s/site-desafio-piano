create database usuario;

create table cadastro(
id_cadastro int primary key identity,
prim_nome varchar (20),
sobrenome varchar (50),
email varchar (50),
senha varchar (30)
);
