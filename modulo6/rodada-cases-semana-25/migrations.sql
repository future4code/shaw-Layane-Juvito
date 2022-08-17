CREATE TABLE  products (
	id VARCHAR(255) PRIMARY KEY,
    name  VARCHAR(100) NOT NULL,
    price FLOAT NOT NULL
);

CREATE TABLE  products_tags (
    productId VARCHAR(255) NOT NULL,
    tag  VARCHAR(100) NOT NULL,
    FOREIGN KEY (productId) REFERENCES products(id)
);