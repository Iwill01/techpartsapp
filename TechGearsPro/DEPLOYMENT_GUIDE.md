# Easy Container Deployment for TechParts Pro

## Simple 3-Step Setup

### Step 1: Install Docker
Download and install Docker Desktop from: https://www.docker.com/products/docker-desktop/

### Step 2: Download Files
Get all your website files and put them in one folder

### Step 3: Run One Command
Open terminal in your folder and run:
```bash
docker-compose up -d
```

## What You Get

✅ **Website**: http://localhost:3000
✅ **Database**: MySQL with all your data
✅ **Admin Panel**: http://localhost:8080 (to manage database)

## Database Integration

Your website automatically saves:
- **Shopping cart items** → `cart_items` table
- **Contact form messages** → `contact_inquiries` table  
- **Product information** → `products` table
- **Service listings** → `services` table
- **Customer testimonials** → `testimonials` table

## Database Connection

The website connects to MySQL using this format:
```
mysql://username:password@hostname:port/database_name
```

In containers, it becomes:
```
mysql://techparts:password123@mysql:3306/techparts_db
```

## Managing Data

### View Database (Easy Way)
1. Go to http://localhost:8080
2. Login: `techparts` / `password123`
3. See all your data in tables

### See Contact Messages
Click `contact_inquiries` table to see all customer messages

### Check Shopping Carts
Click `cart_items` table to see what customers added

### View Products
Click `products` table to see your computer parts inventory

## Key Benefits

### For You (Business Owner)
- All customer data saved safely
- Easy to see contact messages
- Track popular products
- Backup your business data

### For Customers
- Shopping cart remembers items
- Fast website loading
- Contact forms work properly
- Smooth browsing experience

## Production Tips

### Change Passwords
Before using on real server, update passwords in `docker-compose.yml`

### Backup Data
```bash
docker exec mysql mysqldump -u techparts -ppassword123 techparts_db > backup.sql
```

### Stop/Start
Stop: `docker-compose down`
Start: `docker-compose up -d`

This setup gives you a professional website with real database storage!