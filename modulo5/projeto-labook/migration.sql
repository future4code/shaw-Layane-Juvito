CREATE TABLE labook_users (
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR (255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
    CHECK (LENGTH (password) >= 6)
);

CREATE TABLE labook_posts (
	id VARCHAR(255) PRIMARY KEY,
	photo VARCHAR (255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	created_at DATETIME DEFAULT  NOW(),
    type ENUM ("NORMAL", "EVENT") NOT NULL DEFAULT "NORMAL",
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES labook_users(id)
);

CREATE TABLE labook_friendship (
	user_id VARCHAR(255) NOT NULL,
    friend_id VARCHAR (255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES labook_users(id),
    FOREIGN KEY (friend_id) REFERENCES labook_users(id)
)