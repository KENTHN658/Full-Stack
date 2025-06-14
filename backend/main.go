package main

import (
    "github.com/gofiber/fiber/v2"
    "log"
    "fullstack/config"
    "fullstack/handlers"
)

func main() {
    app := fiber.New()
    config.ConnectDB()

    app.Get("/data", handlers.GetData)
    app.Post("/data", handlers.CreateData)

    log.Fatal(app.Listen(":3000"))
}