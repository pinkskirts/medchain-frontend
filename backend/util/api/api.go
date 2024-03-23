package api

import (
	"encoding/json"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"medchainbackend/util/crud"
)

const port string = ":8080"

func ServerInit() {
	router := httprouter.New()

	// Static route config
	router.GET("/users/", getUser)

	// Start HTTP server
	http.ListenAndServe(port, router)
}

func getUser(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	err := crud.ReadPrescriptions()
	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(err) // todo: null object
}
