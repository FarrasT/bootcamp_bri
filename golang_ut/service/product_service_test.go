package service

import (
	"golang_ut/entity"
	"golang_ut/repository"

	"testing"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/mock"
)

var productRepository = &repository.ProductRepositoryMock{Mock: mock.Mock{}}
var productService = ProductService{Repository: productRepository}

func TestProductServiceGetOneProductNotFound(t *testing.T) {
	productRepository.Mock.On("FindById", "1").Return(nil)

	product, err := productService.GetOneProduct("1")

	assert.Nil(t, product)
	assert.NotNil(t, err)
	assert.Equal(t, "product not found", err.Error(), "error response has to be 'product not found'")
}

func TestProductServiceGetOneProduct(t *testing.T) {
	product := entity.Product{
		Id:   "2",
		Name: "Kaca mata",
	}

	productRepository.Mock.On("FindById", "2").Return(product)

	result, err := productService.GetOneProduct("2")

	assert.Nil(t, err)
	assert.NotNil(t, result)

	assert.Equal(t, product.Id, result.Id, "result has to be '2'")
	assert.Equal(t, product.Name, result.Name, "result has to be 'KacaMata'")
	assert.Equal(t, &product, result, "result has to be a product data with id '2'")
}

func TestProductServiceGetAllProducts(t *testing.T) {
	products := []entity.Product{
		{
			Id:   "1",
			Name: "Kaca mata",
		},
		{
			Id:   "2",
			Name: "Baju",
		},
		{
			Id:   "3",
			Name: "Celana",
		},
	}

	t.Run("Expected Success", func(t *testing.T) {
		productRepository.Mock.On("FindAll").Return(products).Once()

		result, err := productService.GetAllProduct()

		assert.Nil(t, err)
		assert.NotNil(t, result)

		for i, v := range result {
			assert.Equal(t, products[i].Id, v.Id, "result has to be "+products[i].Id)
			assert.Equal(t, products[i].Name, v.Name, "result has to be "+products[i].Name)
			assert.Equal(t, products[i], v, "result has to be a product data with id "+products[i].Id)
		}
	})
	t.Run("Expected Failed", func(t *testing.T) {
		productRepository.Mock.On("FindAll").Return([]entity.Product{}).Once()

		result, err := productService.GetAllProduct()

		assert.NotNil(t, err)
		assert.Nil(t, result)
	})
}
