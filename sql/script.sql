
CREATE TABLE usuarios (
	id BIGINT auto_increment NOT NULL,
	login varchar(100) NOT NULL,
	senha varchar(100) NOT NULL,
	CONSTRAINT usuarios_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=latin1
COLLATE=latin1_swedish_ci;

CREATE TABLE test.laboratorios (
	id BIGINT auto_increment NOT NULL,
	nome varchar(100) NOT NULL,
	capacidade varchar(100) NOT NULL,
	computadores varchar(100) NOT NULL,
	CONSTRAINT laboratorios_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=latin1
COLLATE=latin1_swedish_ci;

insert into usuarios (login, senha) values ('admin', 'admin');


