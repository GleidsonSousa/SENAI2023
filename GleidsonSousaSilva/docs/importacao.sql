LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/GITHUB/GleidsonSousaSilva/docs/dados/clientes.csv"
INTO TABLE cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/GITHUB/GleidsonSousaSilva/docs/dados/automoveis.csv"
INTO TABLE automovel
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/GITHUB/GleidsonSousaSilva/docs/dados/concessionarias.csv"
INTO TABLE concessionaria
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/GITHUB/GleidsonSousaSilva/docs/dados/alocacao.csv"
INTO TABLE alocacao
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;