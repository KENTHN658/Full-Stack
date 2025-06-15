package main

import (
	"log"

	"github.com/KENTHN658/Full-Stack/backend/config"
	"github.com/KENTHN658/Full-Stack/backend/handlers"
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	config.ConnectDB()

	app.Get("/data", handlers.GetData)
	app.Post("/data", handlers.CreateData)

	log.Fatal(app.Listen(":3000"))
}
