CREATE database treatyoself_DB;

USE treatyoself_DB;

CREATE TABLE subscriptions (
  sub_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  description VARCHAR(2500) NOT NULL,
  link VARCHAR(500) NOT NULL,
  price VARCHAR(100) NOT NULL,
  frequency VARCHAR(200) NOT NULL,
  category VARCHAR(50) NOT NULL,
  PRIMARY KEY (sub_id)
);

SELECT * FROM subscriptions;