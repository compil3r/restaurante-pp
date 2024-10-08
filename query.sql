create database pp;

use pp;

create table restaurantes (
	id int primary key auto_increment,
    nome varchar(255),
    endereco longtext,
    imagem longtext,
    telefone varchar(255)
);