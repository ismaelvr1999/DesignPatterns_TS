class DataBaseSingleton {
    private static instance: DataBaseSingleton | null = null;

    private constructor(
        private host: string = "localhost",
        private port: string = "8080",
        private pass: string = "admin"
    ) {
        console.log("Database connection established.");
    }

    static getConnection(): DataBaseSingleton {
        if (this.instance === null) {
            this.instance = new DataBaseSingleton();
        }
        return this.instance;
    }

    // Example method to show usage
    query(sql: string) {
        console.log(`Running query on ${this.host}:${this.port} — ${sql}`);
    }
}

// Usage
const db1 = DataBaseSingleton.getConnection();
const db2 = DataBaseSingleton.getConnection();

console.log(db1 === db2);