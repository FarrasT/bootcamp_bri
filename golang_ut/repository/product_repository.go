package repository

import "golang_ut/entity"

type ProductRepository interface {
	FindById(id string) *entity.Product
	FindAll() []entity.Product
}
