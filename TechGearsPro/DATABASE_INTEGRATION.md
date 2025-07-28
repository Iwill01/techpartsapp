# Database Integration Guide - TechParts Pro

## How Your Website Uses Database

Your e-commerce website is currently using in-memory storage (data stored temporarily). With MySQL integration, all data will be saved permanently.

## What Gets Stored in Database

### 1. Products Catalog
**Table: `products`**
- All computer parts (CPUs, RAM, Graphics Cards, etc.)
- Prices in INR
- Product descriptions and specifications
- Stock quantities
- Images and features

### 2. Shopping Cart
**Table: `cart_items`**
- Items customers add to cart
- Quantities and pricing
- Session tracking (remembers cart even if user refreshes)

### 3. Contact Messages
**Table: `contact_inquiries`**
- All customer inquiries from contact form
- Name, email, phone, message
- Status tracking (pending, responded, etc.)

### 4. Services Offered
**Table: `services`**
- IT services (Cloud migration, Server setup, etc.)
- Pricing for AWS, GCP, Azure services
- Service descriptions and features

### 5. Customer Reviews
**Table: `testimonials`**
- Customer testimonials and ratings
- Company information and feedback

## Current vs Database Storage

### Current (In-Memory)
- ❌ Data lost when server restarts
- ❌ No permanent customer records
- ❌ Cart items disappear
- ❌ Contact messages not saved

### With MySQL Database
- ✅ All data saved permanently
- ✅ Customer cart remembered
- ✅ Contact messages stored safely
- ✅ Business analytics possible
- ✅ Backup and recovery

## Code Changes Needed

Your current website works with in-memory storage. To use MySQL database:

### 1. Install MySQL Driver
Add to your package.json:
```json
"mysql2": "^3.6.0"
```

### 2. Update Database Connection
Current code connects to PostgreSQL/Neon. For MySQL:
```javascript
// Change from:
import { neon } from '@neondatabase/serverless';

// To:
import mysql from 'mysql2/promise';
```

### 3. Connection String Format
```javascript
// MySQL format:
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'techparts',
  password: 'password123',
  database: 'techparts_db'
});
```

## Container Benefits

### Easy Deployment
- One command starts website + database
- No manual database setup needed
- Consistent across different servers

### Data Persistence
- MySQL data stored in Docker volume
- Survives container restarts
- Easy backup and restore

### Professional Setup
- Same setup used by big companies
- Scalable for growing business
- Easy to move to cloud providers

## Business Benefits

### Customer Experience
- Shopping cart remembers items
- Faster page loading
- Reliable contact forms
- Better performance

### Business Management
- Track popular products
- Analyze customer inquiries
- Monitor sales trends
- Generate reports

### Data Security
- Regular automated backups
- Proper data encryption
- Access control
- Audit trails

## Migration Steps

### Step 1: Current State
Your website works with temporary storage

### Step 2: Add Database
Run Docker containers with MySQL

### Step 3: Update Code
Modify storage layer to use MySQL

### Step 4: Test Everything
Verify all features work with database

### Step 5: Deploy
Move to production server

## Sample Database Queries

### See All Products
```sql
SELECT * FROM products WHERE category_id = 'cat1';
```

### Check Contact Messages
```sql
SELECT * FROM contact_inquiries 
WHERE created_at >= CURDATE() 
ORDER BY created_at DESC;
```

### Popular Products in Cart
```sql
SELECT p.name, COUNT(c.id) as times_added
FROM products p
JOIN cart_items c ON p.id = c.product_id
GROUP BY p.id
ORDER BY times_added DESC;
```

### Monthly Revenue Potential
```sql
SELECT SUM(p.price * c.quantity) as potential_revenue
FROM cart_items c
JOIN products p ON c.product_id = p.id;
```

This database integration transforms your website from a demo into a real business platform!