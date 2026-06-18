import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
//Creación de clase
class Database {
    //variables
    private static instance: Database;
    private connection: mysql.Pool;
//constructor que llena variables desde variables de entorno
    private constructor() {
        this.connection = mysql.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: Number(process.env.DB_PORT)
        });
    }
    //metodos
    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public getConnection() {
        return this.connection;
    }
}
export default Database;