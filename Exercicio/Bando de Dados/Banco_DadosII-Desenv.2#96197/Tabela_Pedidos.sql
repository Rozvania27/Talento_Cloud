select *from cadastro;
use cadastro;
create table Pedido (
id serial primary key,
fk_id_cliente int not null,
fk_id_produto int not null,
quantidade int not null,
constraint fk_cliente foreign key (fk_id_cliente) references cliente (idCliente),
constraint fk_produto foreign key (fk_id_produto) references produtos (id_produto)
);
insert into pedido (id, fk_id_cliente, fk_id_produto, quantidade) values (1,2,1,1);
insert into pedido (id, fk_id_cliente, fk_id_produto, quantidade) values (1,3,2,5);
insert into pedido (id, fk_id_cliente, fk_id_produto, quantidade) values (1,4,3,12);
insert into pedido (id, fk_id_cliente, fk_id_produto, quantidade) values (1,5,2,3);
insert into pedido (id, fk_id_cliente, fk_id_produto, quantidade) values (1,2,3,24);
insert into pedido (id, fk_id_cliente, fk_id_produto, quantidade) values (1,4,1,12);


