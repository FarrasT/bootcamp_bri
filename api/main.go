package main

import (
	"net/http"
	"strconv"

	"encoding/json"
)

type Employee struct {
	Name           string
	Address        string
	Age            int
	PersonalNumber int
}

var employees = []Employee{
	{
		Name:           "Farras",
		Address:        "Depok",
		Age:            27,
		PersonalNumber: 342792,
	},
	{
		Name:           "Juan",
		Address:        "Rawamangun",
		Age:            26,
		PersonalNumber: 342793,
	},
}

func main() {
	http.HandleFunc("/employee/get", getEmployees)
	http.HandleFunc("/employee/create", createEmployees)
	http.ListenAndServe(":8080", nil)
}

func getEmployees(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application/json")

	if r.Method == "GET" {
		json.NewEncoder(w).Encode(employees)
		return
	}

	http.Error(w, "Invalid Method", http.StatusBadRequest)
}

func createEmployees(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application/json")

	if r.Method == "POST" {
		convertAge, err := strconv.Atoi(r.FormValue("age"))
		if err != nil {
			http.Error(w, "Invalid Age", http.StatusBadRequest)
			return
		}

		convertPN, err := strconv.Atoi(r.FormValue("personal_number"))
		if err != nil {
			http.Error(w, "Invalid PN", http.StatusBadRequest)
			return
		}

		employees = append(employees, Employee{
			Name:           r.FormValue("name"),
			Address:        r.FormValue("address"),
			Age:            convertAge,
			PersonalNumber: convertPN,
		})
		json.NewEncoder(w).Encode(employees[len(employees)-1])
		return
	}

	http.Error(w, "Invalid Method", http.StatusBadRequest)
}
