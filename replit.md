# TravelGo - Travel Booking Platform

## Overview

TravelGo is a full-stack web application for booking travel services including buses, hotels, and other travel-related services. The platform provides a unified interface for users to search, compare, and book various travel services with authentication, booking management, and real-time availability tracking.

## System Architecture

### Technology Stack
- **Frontend**: React 18 with TypeScript, Vite build tool
- **Backend**: Express.js with TypeScript (Node.js 20)
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS
- **Authentication**: Replit Auth with OpenID Connect
- **State Management**: TanStack React Query
- **Routing**: Wouter (client-side)
- **Session Management**: Express sessions with PostgreSQL store

### Architecture Pattern
- **Full-Stack Monorepo**: Client and server code in the same repository
- **Shared Schema**: Common TypeScript types and Zod schemas between client and server
- **API-First Design**: RESTful API with clear separation between frontend and backend
- **Component-Based UI**: Modular React components with reusable UI library

## Key Components

### Frontend Architecture (`client/`)
- **Pages**: Landing, Home, Search, Booking, Dashboard, Not Found
- **Components**: Modular UI components organized by feature
  - Layout components (Navbar, Footer)
  - Service components (ServiceCard, ServiceDetailModal)
  - Booking components (BookingForm)
  - Dashboard components (BookingList)
  - Search components (SearchForm, SearchFilters, SearchResults)
- **Hooks**: Custom React hooks for authentication and mobile detection
- **Utils**: Utility functions and API client configuration

### Backend Architecture (`server/`)
- **Express Server**: Main application server with middleware
- **Database Layer**: Drizzle ORM with PostgreSQL
- **Authentication**: Replit Auth integration with session management
- **Storage Layer**: Abstracted database operations with interfaces
- **API Routes**: RESTful endpoints for services and bookings

### Shared Layer (`shared/`)
- **Database Schema**: Drizzle schema definitions for all tables
- **Type Definitions**: TypeScript types exported from schema
- **Validation Schemas**: Zod schemas for API request/response validation

## Data Flow

### Authentication Flow
1. User accesses the application
2. Unauthenticated users see landing page
3. Login redirects to Replit Auth OIDC provider
4. Successful authentication creates/updates user session
5. User data stored in PostgreSQL sessions table
6. Authenticated users access protected routes

### Booking Flow
1. User searches for services with filters
2. Results fetched from services API endpoint
3. User selects service and views details
4. Booking form submission creates booking record
5. Real-time availability checking prevents overbooking
6. Booking confirmation and management in dashboard

### Data Storage
- **Users**: Authentication data and profile information
- **Services**: Travel services (hotels, buses) with pricing and amenities
- **Bookings**: User bookings with status tracking
- **Sessions**: Express session data for authentication

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Database ORM and query builder
- **express**: Web application framework
- **passport**: Authentication middleware
- **openid-client**: OpenID Connect authentication
- **@tanstack/react-query**: Server state management
- **react**: Frontend framework
- **vite**: Build tool and development server

### UI Dependencies
- **@radix-ui/**: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: CSS class variance utility
- **lucide-react**: Icon library

### Development Dependencies
- **TypeScript**: Type safety across the stack
- **tsx**: Node.js TypeScript runner
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with Vite dev server
- **Database**: PostgreSQL 16 (Replit managed)
- **Port Configuration**: Server runs on port 5000, proxied to port 80
- **Hot Reloading**: Vite HMR for frontend, tsx for backend

### Production Build
- **Frontend**: Vite build outputs to `dist/public`
- **Backend**: esbuild bundles server to `dist/index.js`
- **Static Assets**: Served by Express in production
- **Environment**: Production mode with optimized builds

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Deployment**: Autoscale deployment target
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`

## Changelog

```
Changelog:
- June 19, 2025. Enhanced mobile responsiveness across all components
- June 18, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Mobile compatibility: Responsive design for PC and mobile devices.
```