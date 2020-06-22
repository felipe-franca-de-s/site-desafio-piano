create database site;
use site;

create table cadastro(
id_cadastro int primary key auto_increment,
prim_nome varchar (20),
sobrenome varchar (50),
email varchar (50),	
senha varchar (30)
);

insert into cadastro values
(null, 'Felipe','França','felipe.sousa@bandtec.com.br','12345678'),
(null, 'Lucas','Santos','lucas.santos@gmail.com','12345678');

select *from cadastro;