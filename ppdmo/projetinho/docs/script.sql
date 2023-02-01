drop database if exists projeto02;
create database projeto02 charset=UTF8 collate utf8_general_ci;

use projeto02;

create table tarefas(
    id_tarefa integer primary key auto_increment not null,
    descricao varchar(150) not null,
    horario_tarefa time not null,
    horario_encerramento time,
    status integer not null
);

insert into tarefas values (default,"lavar a roupa suja","14:00","",1);

select * from tarefas;


