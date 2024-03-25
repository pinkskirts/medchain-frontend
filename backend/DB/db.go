package DB

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/go-sql-driver/mysql"
	"github.com/gofor-little/env"
)

type envType struct {
	DB_USER string
	DB_PASSWORD string
	DB_ADDR string
	DB_NAME string
}

// Stores the main ref of the DB
var DbRef *sql.DB

func Init() (*sql.DB, error) { 

	// Gets config attributes by .env
	DB_vars := getDBEnv()

	// Capture connection properties.
	cfg := mysql.Config{
		User:                 DB_vars.DB_USER,
		Passwd:               DB_vars.DB_PASSWORD,
		Net:                  "tcp",
		Addr:                 DB_vars.DB_ADDR,
		DBName:               DB_vars.DB_NAME,
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

	return db, nil
}

func getDBEnv() envType {

	var _envType envType

	// Load .env variables
	if err := env.Load(".env"); err != nil {
		panic(err)
	}

	_DB_USER, err := env.MustGet("DB_USER")
	if err != nil {
		fmt.Errorf("could not get .env var: DB_USER, %v", err)
	} else {
		_envType.DB_USER = _DB_USER
	}

	_DB_PASSWORD, err := env.MustGet("DB_PASSWORD")
	if err != nil {
		fmt.Errorf("could not get .env var: DB_PASSWORD, %v", err)
	} else {
		_envType.DB_PASSWORD = _DB_PASSWORD
	}

	_DB_ADDR, err := env.MustGet("DB_ADDR")
	if err != nil {
		fmt.Errorf("could not get .env var: DB_ADDR, %v", err)
	} else {
		_envType.DB_ADDR = _DB_ADDR
	}

	_DB_NAME, err := env.MustGet("DB_NAME")
	if err != nil {
		fmt.Errorf("could not get .env var: DB_NAME, %v", err)
	} else {
		_envType.DB_NAME = _DB_NAME
	}

	return _envType
}