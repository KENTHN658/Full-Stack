package config

import (
    "database/sql"
    _ "github.com/go-sql-driver/mysql"
    "log"
    "os"
)

var DB *sql.DB

func ConnectDB() {
    dsn := os.Getenv("DB_USER") + ":" + os.Getenv("DB_PASSWORD") +
        "@tcp(" + os.Getenv("DB_HOST") + ":" + os.Getenv("DB_PORT") + ")/" + os.Getenv("DB_NAME")

    var err error
    DB, err = sql.Open("mysql", dsn)
    if err != nil {
        log.Fatal("Failed to connect to DB:", err)
    }

    if err = DB.Ping(); err != nil {
        log.Fatal("DB unreachable:", err)
    }

    log.Println("✅ Connected to MariaDB")
}