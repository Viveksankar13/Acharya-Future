# Astrology Web Application

## Overview

This is a modern full-stack web application built with React, TypeScript, and Express.js, designed for creating astrology-related features. The application uses a monorepo structure with shared schemas and modern UI components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for client-side routing
- **UI Components**: Radix UI primitives with custom shadcn/ui styling
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Uses connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with tsx and Vite middleware integration

### Project Structure
- **Monorepo Layout**: Shared code between client and server
- **Client**: React application in `/client` directory
- **Server**: Express API in `/server` directory
- **Shared**: Common schemas and types in `/shared` directory

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for type-safe database operations
- **Migrations**: Stored in `/migrations` directory
- **Database Provider**: Neon Database serverless PostgreSQL

### Authentication & User Management
- **User Schema**: Basic user table with id, username, and password fields
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Session Management**: PostgreSQL-based session storage ready for production

### UI System
- **Design System**: shadcn/ui with "new-york" style variant
- **Theme**: Neutral color scheme with CSS variables
- **Responsive**: Mobile-first design with Tailwind CSS
- **Components**: Comprehensive UI library including forms, dialogs, navigation, and data display

### API Architecture
- **RESTful Design**: Express routes with `/api` prefix
- **Type Safety**: Shared TypeScript interfaces between client and server
- **Error Handling**: Centralized middleware for consistent error responses
- **Request Logging**: Built-in request/response logging for API endpoints

## Data Flow

### Client-Server Communication
1. **API Requests**: Client uses TanStack Query for caching and synchronization
2. **Type Safety**: Shared schemas ensure consistent data structures
3. **Error Handling**: Unified error handling across client and server
4. **Session Management**: Cookie-based sessions with PostgreSQL storage

### Database Operations
1. **Schema Definition**: Centralized in `shared/schema.ts`
2. **Type Generation**: Drizzle generates TypeScript types from schema
3. **Query Interface**: Storage abstraction layer for CRUD operations
4. **Validation**: Zod schemas derived from Drizzle tables

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **UI Framework**: Radix UI primitives
- **Styling**: Tailwind CSS with PostCSS
- **Forms**: React Hook Form with Zod resolvers
- **Date Handling**: date-fns library
- **Development**: Replit-specific tooling for hot reload and debugging

### Astrology Features
- **Zodiac Data**: Pre-configured zodiac sign information in `client/src/lib/zodiac-data.js`
- **Specialized Content**: Application appears designed for astrology/divination services

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite dev server with Express middleware integration
- **Database**: PostgreSQL connection via environment variable
- **Session Storage**: Connect-pg-simple for development and production
- **Error Overlay**: Replit-specific error modal for debugging

### Production Build
- **Client Build**: Vite builds optimized React bundle to `dist/public`
- **Server Build**: esbuild compiles Express server to `dist/index.js`
- **Static Assets**: Express serves client build in production mode
- **Environment**: NODE_ENV-based configuration switching

### Database Management
- **Schema Updates**: `npm run db:push` applies schema changes
- **Connection**: Environment variable `DATABASE_URL` for database connection
- **Migrations**: Drizzle Kit manages database schema evolution

The application is structured for scalability with clear separation of concerns, type safety throughout the stack, and modern development practices. The astrology theme suggests features around horoscopes, zodiac signs, and related mystical content.