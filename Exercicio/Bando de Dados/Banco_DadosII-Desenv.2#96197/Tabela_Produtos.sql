use cadastro;
create table produtos (
id_produto int primary key not null,
preço varchar (10), 
nomeProduto varchar (50),
dataValidade varcharacter (20)
);
select * from produtos;
insert into produtos (id_produto, preço, nomeProduto, dataValidade) values (001, 250.00, 'sadia','09/01/2025');
insert into produtos (id_produto, preço, nomeProduto, dataValidade) values (002, 150.00, 'Perdigão','09/02/2025');
insert into produtos (id_produto, preço, nomeProduto, dataValidade) values (003, 180.00, 'nestlé','25/02/2025');

