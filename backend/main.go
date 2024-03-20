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
var input int // Aux input for menu selections
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
			prescID, err := createPrescription()

			if err != nil || prescID == 0 {
				fmt.Printf("%v", err)
			} else {
				fmt.Println("Prescription built!")
				fmt.Printf("ID of added prescription: %v\n", prescID)
			}

			time.Sleep(2 * time.Second)
		case 2:
			fmt.Println("Available data:")
			err := readPrescriptions()
			if err != nil {
				log.Fatal(err)
			}
			fmt.Println("Press any key to continue...")
			fmt.Scan(&input)
		case 3:
		case 4:

			time.Sleep(2 * time.Second)
		default:
			exit = true
			fmt.Println("Bye!")
		}
	}
}

// Takes in a prescription and format it to display on the terminal
func formatPrintPrescriptions(prescs []Prescription) {
	fmt.Println("------------------------------------")
	for _, value := range prescs {
		fmt.Printf("- %v: %v, %v, %v\n", value.ID, value._Name, value.ExpDate, value.Patient)
	}
	fmt.Println("------------------------------------")
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

// READ
func readPrescriptions() error {
	// A prescriptions slice to hold data from returned rows
	var prescs []Prescription

	rows, err := db.Query("SELECT * FROM prescriptions")
	if err != nil {
		return fmt.Errorf("readPrescriptions: %w", err)
	}
	defer rows.Close()

	// Loop through rows, using Scan to assign column data to struct fields.
	for rows.Next() {
		var presc Prescription

		if err := rows.Scan(&presc.ID, &presc._Name, &presc.ExpDate, &presc.Patient); err != nil {
			return fmt.Errorf("%w", err)
		}

		// Takes the date string and format it to only display the date, removing the timestamp
		// parsing - string to time.Time
		t, err := time.Parse(time.RFC3339, presc.ExpDate)
		if err != nil {
			return fmt.Errorf("error while parsing the time string: %v", err)
		}

		// Remove timestamp, maintain data
		dateWithoutTime := t.Format(timeLayout)

		// parsing - time.Time to string 
		presc.ExpDate = dateWithoutTime

		prescs = append(prescs, presc)
	}

	if err := rows.Err(); err != nil {
		return fmt.Errorf("readPrescriptions: %w", err)
	}

	formatPrintPrescriptions(prescs)
	return nil
}

