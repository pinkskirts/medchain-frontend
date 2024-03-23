package crud

import (
	"database/sql"
	"fmt"
	"time"
	"log"

	view "medchainbackend/util/view"
)

func Menu(db *sql.DB) {
	// Menu
	for exit := false; !exit; {
		var menuInput int

		view.ShowMainMenu()

		fmt.Scan(&menuInput)
		fmt.Print("\n\n")

		switch menuInput {
		case 1:
			prescID, err := CreatePrescription(db)

			if err != nil || prescID == 0 {
				fmt.Printf("%v", err)
			} else {
				fmt.Println("Prescription built!")
				fmt.Printf("ID of added prescription: %v\n", prescID)
			}

			time.Sleep(2 * time.Second)
		case 2:
			fmt.Println("Available data:")
			err := ReadPrescriptions(db)
			if err != nil {
				log.Fatal(err)
			}
			fmt.Println("Press any key to continue...")
			fmt.Scan(&input)
		case 3:
			err := UpdatePrescription(db)
			if err != nil {
				log.Fatal(err)
			}
		case 4:
			res, err := DeletePrescription(db)
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