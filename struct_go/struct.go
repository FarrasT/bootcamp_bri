package main

import (
	"fmt"
)

type Employee struct {
	Nik        string
	Nama       string
	Umur       int
	Divisi     string
	Organisasi Organisasi
}

type Organisasi struct {
	Nama   string
	Alamat string
}

func main() {
	employees := Employee{}
	value := []Employee{
		{
			Nik:    "12345",
			Nama:   "Alfa",
			Umur:   28,
			Divisi: "APP",
			Organisasi: Organisasi{
				Nama:   "FPI",
				Alamat: "Depok",
			},
		},
		{
			Nik:    "67890",
			Nama:   "Arif",
			Umur:   29,
			Divisi: "APP",
			Organisasi: Organisasi{
				Nama:   "HTI",
				Alamat: "Jakarta",
			},
		},
	}
	fmt.Printf("%+v", employees.find_oldest_employee(value))
	fmt.Printf("%+v", employees.find_oldest_employee([]Employee{}))
}

func (c Employee) find_oldest_employee(employees []Employee) Employee {
	if len(employees) == 0 {
		return Employee{}
	}

	var index int
	var oldest = employees[0].Umur
	for i := 1; i < len(employees); i++ {
		if employees[i].Umur > oldest {
			index = i
		}
	}
	return employees[index]
}
