#!/bin/bash

echo "🔧 Setting up Fullstack APISIX Dashboard Project..."

# Step 1: สร้าง Docker network (หากยังไม่มี)
docker network inspect apisix-net >/dev/null 2>&1 || \
  docker network create apisix-net && echo "✅ Created Docker network: apisix-net"

# Step 2: ดึง dependencies React
echo "📦 Installing React dashboard dependencies..."
cd ../dashboard
npm install

# Step 3: ดึง dependencies Go
echo "📦 Preparing Go backend..."
cd ../backend
go mod tidy

# Step 4: กลับไป root โปรเจกต์
cd ..

# Step 5: สั่ง build & run container
echo "🚀 Building and starting Docker containers..."
docker-compose up --build -d

# Step 6: แสดง URL ที่สำคัญ
echo "🌐 Access URLs:"
echo "  - React Dashboard:     http://localhost:5173"
echo "  - WordPress REST API:  http://localhost:8080/wp-json/wp/v2/posts"
echo "  - GoFiber API:         http://localhost:3000/data"
echo "  - APISIX Gateway:      http://localhost:9080"
echo "  - APISIX Admin API:    http://localhost:9180"

echo "✅ Setup complete!"
