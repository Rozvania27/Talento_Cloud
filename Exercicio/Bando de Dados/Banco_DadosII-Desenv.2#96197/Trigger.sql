select *from pedido
use cadastro
delimiter $$
create trigger inserir_dados
after insert ON cliente for each row
begin
If new.CPF is null then 
insert into lembrete(idCliente,mensagem) values(concat('Atualize seu CPF'));
end if;
end $$



