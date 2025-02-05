import db from './database';

// Criação da tabela User
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        address TEXT NOT NULL,
        age INTEGER NOT NULL
    )`);

    console.log('Tabela "users" criada com sucesso!');

});

db.close();
