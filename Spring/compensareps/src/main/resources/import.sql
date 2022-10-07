/* Informacion por defecto */
INSERT INTO usuario (usuario_Id, username , nombres, apellidos, password, habilitado) VALUES(1,'admin','andres','caucali','$2a$10$eSB9zqc5uxzwJ2b7VYhkQ.65CwAfogty2eXy0SrXfpRh78WFooJM6',true);

INSERT INTO roles (rol_Id, nombre) values (1,'ROLE_ADMIN');
INSERT INTO roles (rol_Id, nombre) values (2,'ROLE_DOMI');
INSERT INTO roles (rol_Id, nombre) values (3,'ROLE_ALIADO');
INSERT INTO roles (rol_Id, nombre) values (4,'ROLE_USER');


INSERT INTO usuarios_roles (usuario_id, rol_id) values (1,1)



