# TechParts Pro - E-commerce Platform

## Overview

TechParts Pro is a full-stack e-commerce platform built for selling computer parts and IT services. The application features a React frontend with a Node.js/Express backend, using PostgreSQL for data persistence. The system includes product catalogs, service listings, shopping cart functionality, and contact inquiry handling.

## User Preferences

Preferred communication style: Simple, everyday language.
Container deployment: User wants to run the application in Docker containers with MySQL database for production deployment.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend, backend, and database layers:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: 
  - Zustand for cart state with persistence
  - TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API endpoints
- **Session Management**: PostgreSQL-based sessions

### Database Architecture
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Drizzle schema with typed models
- **Migration**: Drizzle Kit for schema management

## Key Components

### Data Models
The application uses the following core entities:
- **Users**: Authentication and user management
- **Categories**: Product categorization system
- **Products**: Computer parts inventory with pricing, images, and specifications
- **Services**: IT service offerings with feature lists
- **Cart Items**: Shopping cart management with session tracking
- **Contact Inquiries**: Customer communication handling
- **Testimonials**: Customer feedback display

### Frontend Components
- **Layout**: Header with navigation, footer, and responsive design
- **Product Management**: Product cards, detail views, filtering, and search
- **Shopping Cart**: Sidebar cart with quantity management and persistence
- **Service Display**: Service cards with feature highlighting
- **UI Components**: Complete design system using shadcn/ui

### Backend Services
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **API Routes**: RESTful endpoints for all CRUD operations
- **Error Handling**: Centralized error handling middleware
- **Request Logging**: Detailed API request/response logging

## Data Flow

1. **Product Browsing**: Users browse products by category or search
2. **Cart Management**: Items are added to cart with local state persistence
3. **Service Information**: Users can view detailed service offerings
4. **Contact Handling**: Inquiry forms are submitted and stored in database
5. **Data Fetching**: TanStack Query manages API calls with caching
6. **State Synchronization**: Cart state persists across sessions

## External Dependencies

### Frontend Dependencies
- **UI Library**: Radix UI primitives for accessible components
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation
- **Carousel**: Embla Carousel for image galleries
- **Form Validation**: Zod schema validation

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **Session Store**: connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for request/response validation
- **ORM**: Drizzle ORM for type-safe database operations

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Type Checking**: TypeScript with strict configuration
- **Development**: tsx for TypeScript execution
- **Error Handling**: @replit/vite-plugin-runtime-error-modal for development

## Deployment Strategy

### Development
- **Hot Reload**: Vite dev server with HMR support
- **API Integration**: Express server serves both API and static files
- **Database**: Drizzle migrations for schema management
- **Environment**: NODE_ENV-based configuration

### Production
- **Build Process**: 
  - Frontend: Vite builds optimized React bundle
  - Backend: esbuild creates single Node.js executable
- **Serving**: Express serves built frontend from dist/public
- **Database**: PostgreSQL with connection pooling via Neon
- **Environment Variables**: DATABASE_URL required for database connection

The architecture emphasizes type safety, developer experience, and maintainability while providing a scalable foundation for an e-commerce platform.