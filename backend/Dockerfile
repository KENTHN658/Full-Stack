# ใช้ base image สำหรับ Go
FROM golang:1.21-alpine

# ตั้ง working directory
WORKDIR /app

# คัดลอกโค้ดทั้งหมดเข้าไปใน image
COPY . .

# ดาวน์โหลด dependencies
RUN go mod download

# สร้าง binary ชื่อ main
RUN go build -o main .

# เปิดพอร์ต 3000
EXPOSE 3000

# คำสั่งรัน container
CMD ["./main"]
