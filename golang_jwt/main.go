package main

import (
	"golang_jwt/database"
	"golang_jwt/routers"
)

func main() {
	database.StartDB()
	r := routers.StartApp()
	r.Run(":8080")
}
