package service

import (
	"errors"
	"golang_ut/entity"
	"golang_ut/repository"
)

type ProductService struct {
	Repository repository.ProductRepository
}

func (service ProductService) GetOneProduct(id string) (*entity.Product, error) {
	product := service.Repository.FindById(id)
	if product == nil {
		return nil, errors.New("product not found")
	}

	return product, nil
}

func (service ProductService) GetAllProduct() ([]entity.Product, error) {
	products := service.Repository.FindAll()
	if len(products) == 0 {
		return nil, errors.New("product not found")
	}

	return products, nil
}
