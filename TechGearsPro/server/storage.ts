import { 
  type User, type InsertUser,
  type Category, type InsertCategory,
  type Product, type InsertProduct,
  type Service, type InsertService,
  type Testimonial, type InsertTestimonial,
  type CartItem, type InsertCartItem,
  type ContactInquiry, type InsertContactInquiry
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Categories
  getCategories(): Promise<Category[]>;
  getCategory(id: string): Promise<Category | undefined>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  
  // Products
  getProducts(): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getProductsByCategory(categoryId: string): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  
  // Services
  getServices(): Promise<Service[]>;
  getServicesByCategory(category: string): Promise<Service[]>;
  getService(id: string): Promise<Service | undefined>;
  getServiceBySlug(slug: string): Promise<Service | undefined>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  
  // Cart
  getCartItems(sessionId: string): Promise<(CartItem & { product: Product })[]>;
  addToCart(item: InsertCartItem): Promise<CartItem>;
  updateCartItem(id: string, quantity: number): Promise<CartItem | undefined>;
  removeFromCart(id: string): Promise<boolean>;
  clearCart(sessionId: string): Promise<boolean>;
  
  // Contact
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private categories: Map<string, Category> = new Map();
  private products: Map<string, Product> = new Map();
  private services: Map<string, Service> = new Map();
  private testimonials: Map<string, Testimonial> = new Map();
  private cartItems: Map<string, CartItem> = new Map();
  private contactInquiries: Map<string, ContactInquiry> = new Map();

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Seed categories
    const categories = [
      { id: "cat1", name: "CPUs & Processors", slug: "cpus-processors", description: "Latest Intel & AMD processors", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400" },
      { id: "cat2", name: "RAM & Memory", slug: "ram-memory", description: "High-performance memory modules", image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400" },
      { id: "cat3", name: "Storage & SSDs", slug: "storage-ssds", description: "Fast storage solutions", image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400" },
      { id: "cat4", name: "Graphics Cards", slug: "graphics-cards", description: "High-end graphics cards", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400" },
      { id: "cat5", name: "Motherboards", slug: "motherboards", description: "Quality motherboards", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400" },
      { id: "cat6", name: "Power Supplies", slug: "power-supplies", description: "Reliable power supplies", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400" }
    ];
    categories.forEach(cat => this.categories.set(cat.id, cat));

    // Seed products
    const products = [
      {
        id: "prod1",
        name: "Intel Core i7-13700K Processor",
        slug: "intel-core-i7-13700k",
        description: "16 cores, 24 threads, 3.4 GHz base, 5.4 GHz boost. Perfect for gaming and professional workloads.",
        price: "35999.00",
        originalPrice: "42499.00",
        image: "https://pixabay.com/get/g789b03fad34b5b9b666348f8a78fcbe7c3be3a61c1284b12e0790215b3ed50c0a7947d13c2724cddd74492366c3ba0c42ba6496b2fc99fc6df2eaf4e8da434ba_1280.jpg",
        categoryId: "cat1",
        inStock: true,
        featured: true,
        specifications: JSON.stringify({
          cores: 16,
          threads: 24,
          baseClock: "3.4 GHz",
          boostClock: "5.4 GHz",
          socket: "LGA1700",
          tdp: "125W"
        }),
        rating: "4.8",
        reviewCount: 127
      },
      {
        id: "prod2",
        name: "Corsair Vengeance RGB Pro 32GB DDR4",
        slug: "corsair-vengeance-rgb-pro-32gb",
        description: "3200MHz, CL16, RGB lighting, Dual kit (2x16GB). Premium performance memory with stunning RGB.",
        price: "12999.00",
        originalPrice: null,
        image: "https://pixabay.com/get/gf52a9d119ca9c4a69ede0d1ceb2da4cd8150a4c9bbe40147aecbe702c3a90b6ec95e86fe630892e2fcde26131844ca8aec8761c3d633a56980690072993d930a_1280.jpg",
        categoryId: "cat2",
        inStock: true,
        featured: true,
        specifications: JSON.stringify({
          capacity: "32GB",
          speed: "3200MHz",
          latency: "CL16",
          kit: "2x16GB",
          lighting: "RGB"
        }),
        rating: "4.9",
        reviewCount: 89
      },
      {
        id: "prod3",
        name: "Samsung 980 PRO 1TB NVMe SSD",
        slug: "samsung-980-pro-1tb",
        description: "PCIe 4.0, 7000MB/s read, 5000MB/s write, M.2 2280. Lightning-fast storage for demanding applications.",
        price: "8999.00",
        originalPrice: "11499.00",
        image: "https://pixabay.com/get/g44fb3b1d76cc25324acc5c85ba85e5f48a8e9b74cc2c4c3d4605d343796e0e378bce94c7f0eb59c4a1b130621ca351c945fcd7367c1cfdcb4e5feb53f07b9ab3_1280.jpg",
        categoryId: "cat3",
        inStock: true,
        featured: true,
        specifications: JSON.stringify({
          capacity: "1TB",
          interface: "PCIe 4.0",
          readSpeed: "7000 MB/s",
          writeSpeed: "5000 MB/s",
          formFactor: "M.2 2280"
        }),
        rating: "4.9",
        reviewCount: 203
      },
      {
        id: "prod4",
        name: "NVIDIA RTX 4070 Ti Graphics Card",
        slug: "nvidia-rtx-4070-ti",
        description: "12GB GDDR6X, Ray Tracing, DLSS 3. Ultimate gaming performance for 1440p and 4K.",
        price: "62999.00",
        originalPrice: "68999.00",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400",
        categoryId: "cat4",
        inStock: true,
        featured: true,
        specifications: JSON.stringify({
          memory: "12GB GDDR6X",
          rayTracing: true,
          dlss3: true,
          maxResolution: "4K",
          powerConsumption: "285W"
        }),
        rating: "4.7",
        reviewCount: 156
      },
      {
        id: "prod5",
        name: "AMD Ryzen 7 7700X Processor",
        slug: "amd-ryzen-7-7700x",
        description: "8 cores, 16 threads, 4.5 GHz base, 5.4 GHz boost. Exceptional performance for gaming and content creation.",
        price: "28999.00",
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400",
        categoryId: "cat1",
        inStock: true,
        featured: false,
        specifications: JSON.stringify({
          cores: 8,
          threads: 16,
          baseClock: "4.5 GHz",
          boostClock: "5.4 GHz",
          socket: "AM5",
          tdp: "105W"
        }),
        rating: "4.6",
        reviewCount: 98
      },
      {
        id: "prod6",
        name: "G.Skill Trident Z5 RGB 16GB DDR5",
        slug: "gskill-trident-z5-rgb-16gb",
        description: "5600MHz, CL36, RGB lighting, Dual kit (2x8GB). Next-gen DDR5 performance.",
        price: "8499.00",
        originalPrice: null,
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
        categoryId: "cat2",
        inStock: true,
        featured: false,
        specifications: JSON.stringify({
          capacity: "16GB",
          speed: "5600MHz",
          latency: "CL36",
          kit: "2x8GB",
          lighting: "RGB"
        }),
        rating: "4.8",
        reviewCount: 67
      }
    ];
    products.forEach(prod => this.products.set(prod.id, prod));

    // Seed services
    const services = [
      {
        id: "srv1",
        name: "Server Setup & Configuration",
        slug: "server-setup-configuration",
        description: "Professional server installation, configuration, and optimization for maximum performance and reliability.",
        shortDescription: "Complete server setup and configuration services",
        price: "15000.00",
        features: JSON.stringify([
          "Windows & Linux Server Setup",
          "Database Configuration",
          "Security Implementation",
          "Performance Optimization",
          "24/7 Support for 30 days"
        ]),
        icon: "server",
        category: "infrastructure"
      },
      {
        id: "srv2",
        name: "Network Installation & Maintenance",
        slug: "network-installation-maintenance",
        description: "Complete networking solutions from planning to implementation and ongoing maintenance.",
        shortDescription: "Professional network setup and maintenance",
        price: "8000.00",
        features: JSON.stringify([
          "LAN/WAN Setup",
          "Wireless Network Design",
          "Security Configuration",
          "Network Monitoring",
          "Regular Maintenance"
        ]),
        icon: "network-wired",
        category: "infrastructure"
      },
      {
        id: "srv3",
        name: "Computer & Laptop Repair",
        slug: "computer-laptop-repair",
        description: "Expert repair services for all computer and laptop issues with quick turnaround times.",
        shortDescription: "Fast and reliable repair services",
        price: "500.00",
        features: JSON.stringify([
          "Hardware Diagnostics",
          "Component Replacement",
          "Software Troubleshooting",
          "Data Recovery",
          "Warranty on Repairs"
        ]),
        icon: "tools",
        category: "support"
      },
      {
        id: "srv4",
        name: "AWS Cloud Migration",
        slug: "aws-cloud-migration",
        description: "Complete AWS cloud migration and management services with certified architects.",
        shortDescription: "Professional AWS cloud services",
        price: "25000.00",
        features: JSON.stringify([
          "Cloud Architecture Design",
          "EC2 & S3 Setup",
          "Database Migration",
          "Security Implementation",
          "Cost Optimization"
        ]),
        icon: "cloud",
        category: "cloud"
      },
      {
        id: "srv5",
        name: "Google Cloud Platform Services",
        slug: "gcp-services",
        description: "GCP infrastructure setup, BigQuery analytics, and Kubernetes orchestration services.",
        shortDescription: "Complete GCP cloud solutions",
        price: "30000.00",
        features: JSON.stringify([
          "Compute Engine Setup",
          "BigQuery Analytics",
          "Kubernetes Management",
          "Cloud Storage",
          "Monitoring & Logging"
        ]),
        icon: "cloud",
        category: "cloud"
      },
      {
        id: "srv6",
        name: "Microsoft Azure Solutions",
        slug: "azure-solutions",
        description: "Azure cloud solutions, Office 365 integration, and enterprise application deployment.",
        shortDescription: "Enterprise Azure cloud services",
        price: "28000.00",
        features: JSON.stringify([
          "Virtual Machines Setup",
          "Azure SQL Database",
          "Active Directory Integration",
          "Office 365 Migration",
          "Enterprise Security"
        ]),
        icon: "cloud",
        category: "cloud"
      }
    ];
    services.forEach(srv => this.services.set(srv.id, srv));

    // Seed testimonials
    const testimonials = [
      {
        id: "test1",
        name: "Rajesh Kumar",
        title: "CTO",
        company: "TechCorp India",
        content: "Excellent service and high-quality products. Their server setup service helped us migrate our entire infrastructure seamlessly. Highly recommended for enterprise solutions.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        rating: 5
      },
      {
        id: "test2",
        name: "Priya Sharma",
        title: "Software Developer",
        company: null,
        content: "Fast delivery and genuine products. Built my gaming PC with components from TechParts Pro. The prices are competitive and customer support is excellent.",
        avatar: "https://pixabay.com/get/gc9def9de74c056d813fcacb5674c326ef2e326a4c617bf947cad9c82e07dbd7309b4ef7a9dadecc4577eeb024e689adbb597beba979556637ca4d5bb0391ad25_1280.jpg",
        rating: 5
      },
      {
        id: "test3",
        name: "Amit Patel",
        title: "IT Director",
        company: "StartupXYZ",
        content: "Professional cloud migration service. They helped us move to AWS with zero downtime. Their team is knowledgeable and responsive to our needs.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100",
        rating: 5
      }
    ];
    testimonials.forEach(test => this.testimonials.set(test.id, test));
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Category methods
  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategory(id: string): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(cat => cat.slug === slug);
  }

  // Product methods
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.featured);
  }

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(product => product.categoryId === categoryId);
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    return Array.from(this.products.values()).find(product => product.slug === slug);
  }

  // Service methods
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }

  async getServicesByCategory(category: string): Promise<Service[]> {
    return Array.from(this.services.values()).filter(service => service.category === category);
  }

  async getService(id: string): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    return Array.from(this.services.values()).find(service => service.slug === slug);
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  // Cart methods
  async getCartItems(sessionId: string): Promise<(CartItem & { product: Product })[]> {
    const items = Array.from(this.cartItems.values()).filter(item => item.sessionId === sessionId);
    return items.map(item => {
      const product = this.products.get(item.productId!);
      return { ...item, product: product! };
    }).filter(item => item.product);
  }

  async addToCart(item: InsertCartItem): Promise<CartItem> {
    const id = randomUUID();
    const cartItem: CartItem = { 
      ...item, 
      id,
      productId: item.productId || null,
      quantity: item.quantity || 1
    };
    this.cartItems.set(id, cartItem);
    return cartItem;
  }

  async updateCartItem(id: string, quantity: number): Promise<CartItem | undefined> {
    const item = this.cartItems.get(id);
    if (item) {
      item.quantity = quantity;
      this.cartItems.set(id, item);
      return item;
    }
    return undefined;
  }

  async removeFromCart(id: string): Promise<boolean> {
    return this.cartItems.delete(id);
  }

  async clearCart(sessionId: string): Promise<boolean> {
    const items = Array.from(this.cartItems.values()).filter(item => item.sessionId === sessionId);
    items.forEach(item => this.cartItems.delete(item.id));
    return true;
  }

  // Contact methods
  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const contactInquiry: ContactInquiry = { 
      ...inquiry, 
      id, 
      phone: inquiry.phone || null,
      service: inquiry.service || null,
      createdAt: new Date() 
    };
    this.contactInquiries.set(id, contactInquiry);
    return contactInquiry;
  }
}

export const storage = new MemStorage();
