package view

import (
	"fmt"
)

func ShowMainMenu() {
	fmt.Println("\n\n------------------------")
	fmt.Println("WELCOME -- CRUD TEST")
	fmt.Println("------------------------")
	fmt.Println("Select an option (enter any other input to exit): ")
	fmt.Println("1 -> ADD PRESCRIPTION")             // CREATE
	fmt.Println("2 -> VIEW AVAILABLE PRESCRIPTIONS") // READ
	fmt.Println("3 -> UPDATE A PRESCRIPTION")        // UPDATE
	fmt.Println("4 -> DELETE A PRESCRIPTION")        // DELETE
}

func ShowUpdateMenu() {
	fmt.Println("\nWhat field would you like to modify?")
	fmt.Println("Enter any key to cancel")
	fmt.Println("1 -> Medicine's name")
	fmt.Println("2 -> Expiration Date")
	fmt.Println("3 -> Patient's name")
}

func ShowRepeatQuery() {
	fmt.Println("Would you like to modify any other field?")
	fmt.Println("Please enter either y to confirm or any key to cancel")
}
