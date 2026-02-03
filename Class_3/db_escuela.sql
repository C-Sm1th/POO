create database dbEscuela;

use dbEscuela;

create table Alumnos(
id int primary key auto_increment,
nombre varchar(50),
apellido varchar(50),
edad int,
grado varchar(100),
correo varchar(100)
);

create table Profesores(
id int primary key auto_increment,
nombre varchar(50),
apellido varchar(50),
edad int,
especialidad varchar(50),
correo varchar(100),
telefono int
);

create table Aulas(
id int primary key auto_increment,
nombre varchar(20),
capacidad int,
edificio varchar(50)
);