package main

import (
	"medchainbackend/DB"
	"medchainbackend/util/api"
	"medchainbackend/util/crud"
)

func main() {
	// Connects to DB so its reference can be used in CRUD menu
	crud.Menu(DB.Init())
	// Runs API router
	api.ServerInit()
}
