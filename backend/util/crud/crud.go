package crud

import (
	"database/sql"
	"fmt"
	"log"
	"strings"
	"time"

	view "medchainbackend/util/view"
)

type Prescription struct {
	ID      int
	_Name   string
	ExpDate string
	Patient string
}

var input int // Aux input for menu selections
const timeLayout string = "2006-01-02"

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

// Takes in a prescription and format it to display on the terminal
func formatPrintPrescriptions(prescs []Prescription) {
	fmt.Println("------------------------------------")
	for _, value := range prescs {
		fmt.Printf("- %v: %v, %v, %v\n", value.ID, value._Name, value.ExpDate, value.Patient)
	}
	fmt.Println("------------------------------------")
}

// CRUD methods------------------------------
// CREATE - Create prescription and add it to DB
func CreatePrescription(db *sql.DB) (int64, error) { // todo: fix exit status 1 bad user input
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
func ReadPrescriptions(db *sql.DB) error {
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
func UpdatePrescription(db *sql.DB) error { // todo: debug and refactor method
	var idInput int64

	// Checks for inexistent ids
	for okInput := false; !okInput; {
		fmt.Println("Select a prescription to modify: ")
		ReadPrescriptions(db)
		fmt.Scan(&idInput)

		row := db.QueryRow("SELECT id FROM prescriptions WHERE id = ?", idInput)

		if err := row.Scan(); err != nil {
			if err == sql.ErrNoRows {
				fmt.Print("Please enter a valid ID!\n\n")
			} else {
				okInput = true
				updateByID(idInput, db)
			}
		}
	}

	return nil
}

func updateByID(id int64, db *sql.DB) error {
	var textInput string

	for exit := false; !exit; {
		view.ShowUpdateMenu()
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

	view.ShowRepeatQuery()
	fmt.Scan(&input)

	input = strings.TrimSpace(input)

	if input != "y" {
		exit = true
	}

	return exit
}

// DELETE
func DeletePrescription(db *sql.DB) (int, error) {
	var input int64
	var confirmInput string

	fmt.Println("Select a prescription to remove: ")
	ReadPrescriptions(db)
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
		err := removeByID(input, db)
		if err != nil {
			log.Fatal("deletePrescription: ", err)
		}
	} else {
		return 1, nil // Cancel prescription removal, no error issued
	}

	return 0, nil
}

// Removes a prescription based on its ID
func removeByID(id int64, db *sql.DB) error {
	_, err := db.Exec("DELETE FROM prescriptions WHERE id = ?", id)
	if err != nil {
		log.Fatal(err)
	}
	return nil
}
