CREATE DATABASE IF NOT EXISTS medchain;

USE medchain;

CREATE TABLE IF NOT EXISTS prescriptions (
  id         INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
  _name      VARCHAR(128) NOT NULL,
  exp_date   DATE NOT NULL,
  patient    VARCHAR(255) NOT NULL
);

INSERT INTO prescriptions
(_name, exp_date, patient)
VALUES
('Rivotril', '2024-10-14', 'Gustavo'),
('Minoxydil', '2025-07-04', 'Yucai'),
('Paracetamol', '2030-04-14', 'Guilherme'),
('Durateston', '2027-10-28', 'Pietro'),
('Fenazepam', '2028-08-09', 'Carlos Eduardo');
