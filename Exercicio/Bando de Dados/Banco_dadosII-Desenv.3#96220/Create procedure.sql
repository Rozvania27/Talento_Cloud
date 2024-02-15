Delimiter $$
Create Procedure RelatorioDiarioCompras ( )
BEGIN
    Select Sum (quantidade) From Compras
     Where data_compra = curdate( );      
End;
Delimiter;

