package main

import "fmt"

func main() {
	fmt.Println(kondisi_saya("senyum", "cemberut"))
	fmt.Println(kondisi_saya("cemberut", "senyum"))
	fmt.Println(kondisi_saya("cemberut", "cemberut"))
	fmt.Println(kondisi_saya("senyum", "senyum"))

	fmt.Println(saya_aman(true, 9))
	fmt.Println(saya_aman(true, 3))
	fmt.Println(saya_aman(true, 25))

	find_my_name("rosa")
}

func kondisi_saya(monyetSatu, monyetDua string) string {
	switch {
	case (monyetSatu == "senyum" && monyetDua == "cemberut") || (monyetSatu == "cemberut" && monyetDua == "senyum"):
		return "aman"
	default:
		return "masalah"
	}
}

func saya_aman(is_berkokok bool, jam_berkokok int) string {
	jam_berkokok %= 24
	if is_berkokok && (jam_berkokok >= 0 && jam_berkokok <= 3) {
		return "saya tidak aman"
	}
	return "saya aman"
}

func find_my_name(name string) {
	var array [4][5]string = [4][5]string{
		{"alvin", "arif", "reza", "rinaldi", "nina"},      //0
		{"noel", "dilla", "rosa", "juan michel", "teguh"}, //1
		{"septyan", "farras", "giyanda", "afin", "azwar"}, //2
		{"dionysius", "rifki", "raffi", "zain"},           //3
	}

	for i, v := range array {
		for j, v2 := range v {
			if v2 == name {
				fmt.Println(i, v, j, v2)
			}
		}
	}
}
