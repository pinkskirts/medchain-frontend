package main

import (
	"database/sql"
	"fmt"
	"log"
	"strings"
	"time"

	"github.com/go-sql-driver/mysql"
)

var db *sql.DB
const timeLayout string = "2006-01-02"

type Prescription struct {
	ID      int
	_Name   string
	ExpDate string
	Patient string
}

func main() {
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
	var err error
	db, err = sql.Open("mysql", cfg.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}

	if pingErr := db.Ping(); pingErr != nil {
		log.Fatal(pingErr)
	}
	fmt.Print("Sucessfully connected to DB!\n")

	menu()
}

func menu() {
	// Menu
	for exit := false; !exit; {
		var menuInput int

		fmt.Println("\n\n------------------------")
		fmt.Println("WELCOME -- CRUD TEST")
		fmt.Println("------------------------")
		fmt.Println("Select an option (enter any other input to exit): ")
		fmt.Println("1 -> ADD PRESCRIPTION")             // CREATE
		fmt.Println("2 -> VIEW AVAILABLE PRESCRIPTIONS") // READ
		fmt.Println("3 -> UPDATE A PRESCRIPTION")        // UPDATE
		fmt.Println("4 -> DELETE A PRESCRIPTION")        // DELETE

		fmt.Scan(&menuInput)
		fmt.Print("\n\n")

		switch menuInput {
		case 1:

			time.Sleep(2 * time.Second)
		case 2:
		case 3:
		case 4:

			time.Sleep(2 * time.Second)
		default:
			exit = true
			fmt.Println("Bye!")
		}
	}
}


func buildPrescriptionInput() (Prescription, error) { // todo: input error handling
	var presc Prescription
	var nameInput, expDateInput, patientInput string

	fmt.Println("Please enter the medicine's name: ")
	fmt.Scan(&nameInput)
	presc._Name = nameInput

	fmt.Println("Expiration date (YYYY-MM-DD): ")
	fmt.Scan(&expDateInput)
	presc.ExpDate = expDateInput

	fmt.Println("Patient's name: ")
	fmt.Scan(&patientInput)
	presc.Patient = patientInput

	return presc, nil
}

// CREATE - Create prescription and add it to DB
func createPrescription() (int64, error) { // todo: fix exit status 1 bad user input
	presc, err := buildPrescriptionInput()
	if err != nil {
		return 0, fmt.Errorf("buildPrescriptionInput: %v", err)
	}

	// Parse the date string into a time.Time value so it can be added to DB
	parsedDate, err := time.Parse(timeLayout, presc.ExpDate)
	if err != nil {
		fmt.Println("Error parsing date:", err)
		return 0, nil
	}

	result, err := db.Exec("INSERT INTO prescriptions (id, _name, exp_date, patient) VALUES (?, ?, ?, ?)", presc.ID, presc._Name, parsedDate, presc.Patient)
	if err != nil {
		return 0, fmt.Errorf("createPrescription: %v", err)
	}
	id, err := result.LastInsertId()
	if err != nil {
		return 0, fmt.Errorf("createPrescription: %v", err)
	}
	return id, nil
}

