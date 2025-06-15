package handlers

import (
	"github.com/KENTHN658/Full-Stack/backend/config"
	"github.com/KENTHN658/Full-Stack/backend/models"
	"github.com/gofiber/fiber/v2"
)

func GetData(c *fiber.Ctx) error {
	rows, err := config.DB.Query("SELECT id, name, value FROM records")
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}
	defer rows.Close()

	var records []models.Record
	for rows.Next() {
		var r models.Record
		rows.Scan(&r.ID, &r.Name, &r.Value)
		records = append(records, r)
	}
	return c.JSON(records)
}

func CreateData(c *fiber.Ctx) error {
	var r models.Record
	if err := c.BodyParser(&r); err != nil {
		return c.Status(400).SendString(err.Error())
	}

	_, err := config.DB.Exec("INSERT INTO records (name, value) VALUES (?, ?)", r.Name, r.Value)
	if err != nil {
		return c.Status(500).SendString(err.Error())
	}

	return c.Status(201).JSON(r)
}
