package models

import (
	"github.com/asaskevich/govalidator"
	"gorm.io/gorm"
)

type Product struct {
	GormModel
	Title       string `json:"title" form:"title" valid:"required~Title of your product is required"`
	Description string `json:"description" form:"description" valid:"required~Description of your product is required"`
	UserId      uint
	User        *User
}

func (p *Product) BeforeCreate(tx *gorm.DB) error {
	if _, err := govalidator.ValidateStruct(p); err != nil {
		return err
	}

	return nil
}
