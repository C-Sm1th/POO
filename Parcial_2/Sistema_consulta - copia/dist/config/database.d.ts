import mysql from "mysql2/promise";
declare class Database {
    private static instance;
    private connection;
    private constructor();
    static getInstance(): Database;
    getConnection(): mysql.Pool;
}
export default Database;
//# sourceMappingURL=database.d.ts.map