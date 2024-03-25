package main

import (
	"medchainbackend/DB"
	"medchainbackend/util/api"
	"medchainbackend/util/crud"
)

func main() {
	// Connects to DB so its reference can be used in CRUD menu
	db, err := DB.Init()
	if err != nil {
		panic(err)
	}

	crud.Menu(db)

	// Runs API router
	api.ServerInit()
}
