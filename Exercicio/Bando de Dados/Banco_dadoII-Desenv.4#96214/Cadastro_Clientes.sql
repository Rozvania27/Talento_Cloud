Delimiter $$
CREATE FUNCTION RelatorioDiarioClientes() 
RETURNS INT
BEGIN
  DECLARE total INT
  SELECT COUNT(*) INTO total FROM clientes WHERE DATE(data_cadastro) = CURDATE();     
RETURN total
END//
Delimiter;