CREATE DATABASE mypass;

USE mypass;

DROP TABLE account;
DROP TABLE user;
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    pass VARCHAR(255) NOT NULL
);


CREATE TABLE account (
    id INT AUTO_INCREMENT PRIMARY KEY,
    service VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    logo_image VARCHAR(1000),
    pass VARCHAR(500) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

INSERT INTO user VALUES (NULL, 'renancavichi@gmail.com', '123teste');
INSERT INTO account VALUES (NULL, 'Gmail', 'renanc@gmail.com', 'url', '123Teste', 1);
INSERT INTO account VALUES (NULL, 'Instagram', '@renancavichi', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png', '123Teste', 1);
INSERT INTO account VALUES (NULL, 'Github', '@renancavichi', 'https://cdn-icons-png.flaticon.com/512/25/25231.png', '123Teste', 1);