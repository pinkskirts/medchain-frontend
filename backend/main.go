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
			err := updatePrescription()
			if err != nil {
				log.Fatal(err)
			}
		case 4:
			res, err := deletePrescription()
			if err != nil {
				log.Fatal(err)
			} else if res == 1 {
				fmt.Println("Operation aborted!")
			} else {
				fmt.Println("Prescription removed!")
			}

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

// CRUD methods------------------------------
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

// UPDATE
// Search prescription by ID and overwrite info
func updatePrescription() error { // todo: debug and refactor method
	var idInput int64

	// Checks for inexistent ids
	for okInput := false; !okInput; {
		fmt.Println("Select a prescription to modify: ")
		readPrescriptions()
		fmt.Scan(&idInput)

		row := db.QueryRow("SELECT id FROM prescriptions WHERE id = ?", idInput)

		if err := row.Scan(); err != nil {
			if err == sql.ErrNoRows {
				fmt.Print("Please enter a valid ID!\n\n")
			} else {
				okInput = true
				updateByID(idInput)
			}
		}
	}

	return nil
}

func updateByID(id int64) error {
	var textInput string

	for exit := false; !exit; {
		fmt.Println("\nWhat field would you like to modify?")
		fmt.Println("Enter any key to cancel")
		fmt.Println("1 -> Medicine's name")
		fmt.Println("2 -> Expiration Date")
		fmt.Println("3 -> Patient's name")
		fmt.Scan(&input)

		switch input {
		case 1:
			fmt.Print("New medicine name: ")
			fmt.Scan(&textInput)

			_, err := db.Exec("UPDATE prescriptions SET _name = ? WHERE id = ?", textInput, id)
			if err != nil {
				return fmt.Errorf("updatePrescription: %v", err)
			} else {
				exit = repeatUpdateOption()
			}
		case 2:
			fmt.Print("New expiration date (YYYY-MM-DD): ")
			fmt.Scan(&textInput)

			_, err := db.Exec("UPDATE prescriptions SET exp_date = ? WHERE id = ?", textInput, id)
			if err != nil {
				return fmt.Errorf("updatePrescription: %v", err)
			} else {
				exit = repeatUpdateOption()
			}
		case 3:
			fmt.Print("New patient name: ")
			fmt.Scan(&textInput)

			_, err := db.Exec("UPDATE prescriptions SET patient = ? WHERE id = ?", textInput, id)
			if err != nil {
				return fmt.Errorf("updatePrescription: %v", err)
			} else {
				exit = repeatUpdateOption()
			}
		default:
			fmt.Println("Operation aborted!")
			exit = true
		}
	}

	return nil
}

func repeatUpdateOption() bool {
	var input string
	exit := false

	fmt.Println("Would you like to modify any other field?")
	fmt.Println("Please enter either y to confirm or any key to cancel")
	fmt.Scan(&input)

	input = strings.TrimSpace(input)

	if input != "y" {
		exit = true
	}

	return exit
}

// DELETE
func deletePrescription() (int, error) {
	var input int64
	var confirmInput string

	fmt.Println("Select a prescription to remove: ")
	readPrescriptions()
	fmt.Scan(&input)

	fmt.Print("Please confirm your selection (y/any key):")
	fmt.Scan(&confirmInput)

	// Trims input whitespace
	confirmInput = strings.TrimSpace(confirmInput)

	for len(confirmInput) != 1 {
		fmt.Println("Please enter either y to confirm or any key to cancel")
	}

	if confirmInput == "y" {
		// Search prescription by ID and remove it
		err := removeByID(input)
		if err != nil {
			log.Fatal("deletePrescription: ", err)
		}
	} else {
		return 1, nil // Cancel prescription removal, no error issued
	}

	return 0, nil
}

// Removes a prescription based on its ID
func removeByID(id int64) error {
	_, err := db.Exec("DELETE FROM prescriptions WHERE id = ?", id)
	if err != nil {
		log.Fatal(err)
	}
	return nil
}

