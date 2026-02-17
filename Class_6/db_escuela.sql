create database dbEstudiantes;

use dbEstudiantes;

create table tbl_estudiante(
id int primary key auto_increment,
nombre varchar(200),
apellidos varchar(200),
direccion varchar(200),
telefono int,
dui int,
fecha_registro date
);

SELECT * FROM tbl_estudiante;
-- SELECT nombre, apellidos FROM tbl_estudiante;

INSERT INTO tbl_estudiante 
( id, nombre, apellidos, direccion, telefono, dui, fecha_registro) VALUES(
NULL,
'Christian Smith',
'Cruz Luna',
'Col. Nueva Soria',
79742410,
45092093,
'2026-02-05'
);

INSERT INTO tbl_estudiante 
( id, nombre, apellidos, direccion, telefono, dui, fecha_registro) VALUES(
NULL,
'Adrian Jose',
'Ayala Coreas',
'Col. Palacios',
78295647,
738745637,
'2026-02-05'
);

SELECT nombre as name, telefono as phone, fecha_registro as date from tbl_estudiante;

SELECT * FROM tbl_estudiante where fecha_registro='2026-02-05';
SELECT * FROM tbl_estudiante where id='2';

-- DELETE FROM tbl_estudiante where id=2;

UPDATE tbl_estudiante SET nombre='Manuel Henriquez' where id=5;