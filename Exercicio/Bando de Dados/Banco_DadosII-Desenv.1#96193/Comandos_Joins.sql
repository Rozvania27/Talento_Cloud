Select * From pedido
right join cliente
on pedido.fk_id_cliente=cliente.idCliente;

Select cliente.idCliente,cliente.Nome , produtos.nomeProduto, pedido.quantidade from pedido
inner join cliente
on pedido.fk_id_cliente=cliente.idCliente
inner join produtos
on fk_id_produto=produtos.id_produto
order by idCliente;


