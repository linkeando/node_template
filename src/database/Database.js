const mysql = require('mysql2/promise');
require('dotenv').config();

class MySQLConnection {
    constructor() {
        this.pool = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }

    async query(sql, args) {
        try {
            const [rows, fields] = await this.pool.query(sql, args);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    async close() {
        try {
            await this.pool.end();
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MySQLConnection;
