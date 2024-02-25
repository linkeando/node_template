const MySQLConnection = require("../database/Database");

class User {
    constructor(id, username, email, age) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.age = age;
    }

    static async getAll() {
        const db = new MySQLConnection();
        return await db.query('SELECT * FROM usuarios');
    }

    static async getByID(id) {
        const db = new MySQLConnection();
        const user = await db.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        return user[0];
    }

    static async getByEmail(email) {
        const db = new MySQLConnection();
        const user = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
        return user[0];
    }

    async save() {
        const db = new MySQLConnection();
        const result = await db.query('INSERT INTO usuarios (username, email, age) VALUES (?, ?, ?)', [this.username, this.email, this.age]);
        this.id = result.insertId;
        return result;
    }

    async update() {
        const db = new MySQLConnection();
        return await db.query('UPDATE usuarios SET username = ?, email = ?, age = ? WHERE id = ?', [this.username, this.email, this.age, this.id]);
    }

    async delete() {
        const db = new MySQLConnection();
        return await db.query('DELETE FROM usuarios WHERE id = ?', [this.id]);
    }
}

module.exports = User;
