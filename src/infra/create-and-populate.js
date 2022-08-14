/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3 from "sqlite3";
const db = new sqlite3.Database("./database.db");

//==== Ativando foreign key


//==== Usuários

const criaTabelaUsr = () => {
  const USUARIOS_SCHEMA = `
  CREATE TABLE IF NOT EXISTS "USUARIOS" (
      "ID" VARCHAR(50) PRIMARY KEY ,
      "NOME" varchar(64),
      "EMAIL" varchar(64),
      "SENHA" varchar(64)
    );`;

  db.run(USUARIOS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de usuários");
  });
};

//==== Tarefas

const criaTabelaTarefas = () => {
  const TAREFAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS TAREFAS (
    ID VARCHAR(50) PRIMARY KEY, 
    TITULO VARCHAR(64),
    DESCRICAO TEXT,
    STATUS VARCHAR(32),
    DATACRIACAO DATETIME,
    ID_USUARIO VARCHAR(50),
    FOREIGN KEY(ID_USUARIO) REFERENCES USUARIOD(ID)
);`;

  db.run(TAREFAS_SCHEMA, (error) => {
    if (error) console.log("Erro ao criar tabela de Tarefas");
  });
};

db.serialize(() => {
  criaTabelaUsr();
  criaTabelaTarefas();
});
