package main

import "fmt"

func main() {
	var unitKerjaUnit kanca = unit{}

	unitKerjaUnit.(unit).kupedes()
	unitKerjaUnit.(unit).simpedes()
}

type kanca interface {
	kur()
	tabungan()
}

type kcp struct {
	Nama   string
	Alamat string
	Cs     string
}

type unit struct {
	Nama   string
	Alamat string
	Cs     string
}

func (c kcp) kur() {
	fmt.Println("ini kur")
}

func (c kcp) tabungan() {
	fmt.Println("Ini tabungan")
}

func (c unit) kur() {
	fmt.Println("ini kur")
}

func (c unit) tabungan() {
	fmt.Println("Ini tabungan")
}

func (c unit) kupedes() {
	fmt.Println("ini kupedes")
}

func (c unit) simpedes() {
	fmt.Println("Ini simpedes")
}
