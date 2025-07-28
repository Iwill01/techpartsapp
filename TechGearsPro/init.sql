-- Initialize TechParts Pro Database
CREATE DATABASE IF NOT EXISTS techparts_db;
USE techparts_db;

-- Users table
CREATE TABLE users (
    id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    description TEXT,
    image VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products table
CREATE TABLE products (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    original_price DECIMAL(10,2),
    category_id VARCHAR(255),
    image VARCHAR(500),
    images JSON,
    specifications JSON,
    features JSON,
    stock INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Services table
CREATE TABLE services (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(255),
    features JSON,
    icon VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cart items table
CREATE TABLE cart_items (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    product_id VARCHAR(255),
    quantity INTEGER NOT NULL DEFAULT 1,
    session_id VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(id),
    INDEX idx_session (session_id),
    INDEX idx_user (user_id)
);

-- Contact inquiries table
CREATE TABLE contact_inquiries (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Testimonials table
CREATE TABLE testimonials (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    company VARCHAR(255),
    message TEXT NOT NULL,
    rating INTEGER DEFAULT 5,
    image VARCHAR(500),
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Orders table (for future use)
CREATE TABLE orders (
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'pending',
    shipping_address JSON,
    billing_address JSON,
    payment_status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Order items table (for future use)
CREATE TABLE order_items (
    id VARCHAR(255) PRIMARY KEY,
    order_id VARCHAR(255),
    product_id VARCHAR(255),
    quantity INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Insert sample data
INSERT INTO categories (id, name, slug, description) VALUES
('cat1', 'CPUs & Processors', 'cpus', 'High-performance processors for all computing needs'),
('cat2', 'Memory (RAM)', 'memory', 'Fast and reliable memory modules'),
('cat3', 'Storage Devices', 'storage', 'SSDs, HDDs, and storage solutions'),
('cat4', 'Graphics Cards', 'graphics', 'Powerful GPUs for gaming and professional work'),
('cat5', 'Motherboards', 'motherboards', 'Quality motherboards for system builds');

INSERT INTO services (id, name, description, price, category, features, icon) VALUES
('srv1', 'Server Setup & Configuration', 'Complete server setup and configuration services', 15000.00, 'Infrastructure', '["Hardware installation", "OS configuration", "Security setup", "Performance optimization"]', 'server'),
('srv2', 'Network Infrastructure', 'Design and implement robust network solutions', 25000.00, 'Networking', '["Network design", "Router configuration", "Switch setup", "WiFi installation"]', 'network-wired'),
('srv3', 'Cloud Migration Services', 'Migrate your infrastructure to cloud platforms', 35000.00, 'Cloud', '["AWS migration", "Azure setup", "GCP deployment", "Data migration"]', 'cloud'),
('srv4', 'Technical Support', '24/7 technical support and maintenance', 8000.00, 'Support', '["24/7 support", "Remote assistance", "Hardware maintenance", "Software updates"]', 'tools');

INSERT INTO testimonials (id, name, title, company, message, rating) VALUES
('test1', 'Rajesh Kumar', 'IT Manager', 'Tech Solutions Pvt Ltd', 'Excellent service and high-quality products. Their team helped us upgrade our entire infrastructure.', 5),
('test2', 'Priya Sharma', 'CTO', 'Digital Innovations', 'Professional service and competitive pricing. Highly recommend for enterprise solutions.', 5),
('test3', 'Amit Patel', 'System Administrator', 'Global Tech Corp', 'Quick delivery and genuine products. Great support team that really understands technology.', 5);