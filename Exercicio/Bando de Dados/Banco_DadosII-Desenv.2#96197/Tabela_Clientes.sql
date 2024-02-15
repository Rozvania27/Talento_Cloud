create database cadastro;
Select * From cadastro;
use cadastro;

CREATE TABLE `cliente` (
  `idCliente` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(10) DEFAULT NULL,
  `Sobrenome` varchar(20) DEFAULT NULL,
  `CPF` char(11) NOT NULL,
  `logradouro` varchar(45) DEFAULT NULL,
  `Número` int NOT NULL,
  `Bairro` varchar(45) DEFAULT NULL,
  `Cidade` varchar(15) DEFAULT NULL,
  `Estado` varchar(10) DEFAULT NULL,
  `País` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`idCliente`)
);

INSERT INTO `` (`idCliente`,`Nome`,`Sobrenome`,`CPF`,`logradouro`,`Número`,`Bairro`,`Cidade`,`Estado`,`País`) VALUES (2,'Antônio','Souza','45678912345','Rua Juazeiro',100,'Satelite','João Monlevade','MG','Brasil');
INSERT INTO `` (`idCliente`,`Nome`,`Sobrenome`,`CPF`,`logradouro`,`Número`,`Bairro`,`Cidade`,`Estado`,`País`) VALUES (3,'Maria','Neves','12345678901','Rua Santa Rita',29,'Jacuí','João Monlevade','MG','Brasil');
INSERT INTO `` (`idCliente`,`Nome`,`Sobrenome`,`CPF`,`logradouro`,`Número`,`Bairro`,`Cidade`,`Estado`,`País`) VALUES (4,'José','Silva','78456952135','Rua Jequitibá',62,'Santa Barbara','João Monlevade','MG','Brasil');
INSERT INTO `` (`idCliente`,`Nome`,`Sobrenome`,`CPF`,`logradouro`,`Número`,`Bairro`,`Cidade`,`Estado`,`País`) VALUES (5,'Joaquim','Cruz','78912345678','Rua Parauna',78,'Castelo','João Monlevade','MG','Brasil');
