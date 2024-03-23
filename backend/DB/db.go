package DB

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/go-sql-driver/mysql"
)

// Stores the main ref of the DB
var DbRef *sql.DB

func Init() *sql.DB { // todo: get config attributes by .env
	// Capture connection properties.
	cfg := mysql.Config{
		User:                 "root",
		Passwd:               "",
		Net:                  "tcp",
		Addr:                 "127.0.0.1:3306",
		DBName:               "medchain",
		AllowNativePasswords: true,
		ParseTime:            true,
	}

	// Database handle
	db, err := sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}

	if pingErr := db.Ping(); pingErr != nil {
		log.Fatal(pingErr)
	}
	fmt.Print("Sucessfully connected to DB!")

	DbRef = db

	return db
}
