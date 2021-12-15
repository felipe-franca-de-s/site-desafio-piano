create database site;
use site;

create table usuario(
id_usuario int primary key auto_increment,
prim_nome varchar (20),
sobrenome varchar (50),
email varchar (50),	
senha varchar (30)
);

insert into usuario values
(null, 'Felipe','França','felipe@bandtec.com.br','12345678'),
(null, 'Lucas','Santos','lucas@gmail.com','12345678');

select * from usuario;