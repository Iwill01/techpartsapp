# TechParts Pro - Container Setup Guide

## What is a Container?
A container is like a complete package that includes your website and everything it needs to run (code, database, settings). Think of it as a portable box that works the same way on any computer.

## Why Use Containers?
- **Easy Setup**: One command runs everything
- **Consistent**: Works the same on your computer, server, or cloud
- **Isolated**: Doesn't interfere with other software
- **Scalable**: Easy to handle more users

## Prerequisites
1. Install **Docker Desktop** from https://www.docker.com/products/docker-desktop/
2. Download all website files to a folder on your computer

## Quick Start (3 Steps)

### Step 1: Prepare Files
1. Copy all website files to a new folder (e.g., `techparts-website`)
2. Open terminal/command prompt in that folder
3. Make sure these files are present:
   - `Dockerfile`
   - `docker-compose.yml`
   - `init.sql`
   - All your website code

### Step 2: Start Everything
Run this single command:
```bash
docker-compose up -d
```

### Step 3: Access Your Website
- **Website**: http://localhost:3000
- **Database Admin**: http://localhost:8080 (PhpMyAdmin)
- **Database Direct**: localhost:3306

## What Gets Created

### 1. Your Website Container
- Runs on port 3000
- Automatically connects to database
- All your shopping cart, products, services work

### 2. MySQL Database Container
- Stores all data permanently
- Username: `techparts`
- Password: `password123`
- Database: `techparts_db`

### 3. PhpMyAdmin Container (Optional)
- Web interface to manage database
- View all tables, data, queries
- User-friendly database management

## Database Tables Created

Your database will automatically have these tables:

### Products & Categories
- `products` - All computer parts (CPUs, RAM, etc.)
- `categories` - Product categories
- `cart_items` - Shopping cart data

### Customer Data
- `contact_inquiries` - Contact form submissions
- `testimonials` - Customer reviews
- `users` - User accounts (for future login)

### Business Data
- `services` - IT services offered
- `orders` - Customer orders (for future use)
- `order_items` - Order details (for future use)

## How Data Flows

1. **Customer visits website** → Views products from `products` table
2. **Adds to cart** → Stored in `cart_items` table
3. **Submits contact form** → Saved in `contact_inquiries` table
4. **Views services** → Loaded from `services` table

## Managing Your Database

### View Data (Easy Way)
1. Go to http://localhost:8080
2. Login with: `techparts` / `password123`
3. Click `techparts_db` database
4. View any table to see data

### Common Tasks

#### See All Contact Messages
```sql
SELECT * FROM contact_inquiries ORDER BY created_at DESC;
```

#### View Shopping Cart Items
```sql
SELECT ci.*, p.name, p.price 
FROM cart_items ci 
JOIN products p ON ci.product_id = p.id;
```

#### Check Popular Products
```sql
SELECT p.name, COUNT(ci.id) as cart_count 
FROM products p 
LEFT JOIN cart_items ci ON p.id = ci.product_id 
GROUP BY p.id 
ORDER BY cart_count DESC;
```

## Stopping/Starting

### Stop Everything
```bash
docker-compose down
```

### Start Again
```bash
docker-compose up -d
```

### View Logs
```bash
docker-compose logs website
```

## Production Deployment

### For Real Server
1. Change passwords in `docker-compose.yml`
2. Update ports if needed
3. Add SSL certificates
4. Use environment variables for secrets

### Environment Variables
```bash
DATABASE_URL=mysql://techparts:yourpassword@mysql:3306/techparts_db
NODE_ENV=production
```

## Backup Your Data

### Backup Database
```bash
docker exec mysql mysqldump -u techparts -ppassword123 techparts_db > backup.sql
```

### Restore Database
```bash
docker exec -i mysql mysql -u techparts -ppassword123 techparts_db < backup.sql
```

## Troubleshooting

### Container Won't Start
```bash
docker-compose logs
```

### Database Connection Issues
1. Check if MySQL container is running: `docker ps`
2. Verify connection string in logs
3. Ensure database is initialized

### Website Not Loading
1. Check if port 3000 is available
2. Verify all containers are running
3. Check website logs: `docker-compose logs website`

## Adding New Features

### Add New Database Table
1. Update `init.sql` with new table
2. Restart containers: `docker-compose down && docker-compose up -d`

### Modify Website Code
1. Change your code files
2. Rebuild: `docker-compose build website`
3. Restart: `docker-compose up -d`

## Security Notes

### For Production
- Change all default passwords
- Use strong passwords
- Enable firewall
- Regular backups
- Update containers regularly

This setup gives you a complete, professional e-commerce system with persistent data storage!