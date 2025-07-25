# Apex Trader - Trading Journal Application

## Overview

Apex Trader is a professional multi-strategy trading journal application built with modern web technologies. It provides traders with comprehensive tools to track, analyze, and optimize their trading performance across various strategies and asset classes. The application features a dark theme with Wall Street aesthetics and advanced analytics capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Component Structure
The application follows a modular component architecture:
- **Layout Component**: Provides consistent navigation and theming
- **Page Components**: Dashboard, Journal, Add Trade, Analytics
- **Feature Components**: Organized by domain (dashboard, journal, etc.)
- **UI Components**: Reusable design system components from shadcn/ui

## Key Components

### Data Model
The core entity is the **Trade** table with comprehensive fields:
- Basic trade info (symbol, strategy, capital, entry/exit dates and prices)
- Technical analysis fields (interval, trend, technical indicators)
- Risk management (risk level, take profit, stop loss)
- DCA (Dollar Cost Averaging) support with grouping
- Calculated fields (P&L, percentage returns)
- Trade status and result tracking

### Trading Strategies
Supports 9 different trading strategies:
- R:R (Risk/Reward)
- DCA T.A (Dollar Cost Averaging Technical Analysis)
- TSL (Trailing Stop Loss)
- Scalp
- R:R Swing
- TSL Scalp
- DCA Scalp
- Breakout
- Reversal

### Core Features
1. **Dashboard**: Real-time portfolio overview with key metrics and performance charts
2. **Trade Journal**: Comprehensive trade management with filtering and search
3. **Add Trade**: Intuitive form with dark theme styling, color-coded inputs, and auto-calculations
4. **Analytics**: Advanced performance metrics and visualizations
5. **Trading Insights**: Personalized trading insights dashboard with animated metrics
6. **DCA Management**: Specialized handling for Dollar Cost Averaging strategies

### Enhanced UI Features (Latest Updates)
1. **Smooth Animated Transitions**: 
   - Page transitions using Framer Motion
   - Animated navigation elements with staggered loading
   - Hover effects and interactive animations
   - Color-coded form elements for better visual feedback

2. **Interactive Color Scheme**:
   - Green for positive values (profits, take profit)
   - Red for negative values (losses, stop loss)
   - Yellow for breakeven values
   - Color-coded Risk:Reward ratios (green ≥2:1, yellow ≥1:1, red <1:1)

3. **Dark Theme Enhancement**:
   - Consistent #080d17 background for all inputs
   - White text for better readability
   - Cyan accent colors for focus states
   - Professional Wall Street terminal aesthetics

## Data Flow

### Client-Server Communication
- RESTful API endpoints for CRUD operations on trades
- React Query for caching, synchronization, and optimistic updates
- Type-safe communication using shared TypeScript schemas

### Database Operations
- Drizzle ORM provides type-safe database queries
- Automated schema migrations with drizzle-kit
- Connection pooling for optimal performance

### State Management Flow
1. Components use React Query hooks to fetch data
2. Mutations automatically invalidate and refetch related queries
3. Optimistic updates provide immediate UI feedback
4. Error boundaries handle and display API errors

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Recharts**: Chart and visualization library

### Backend Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL driver
- **express**: Web framework
- **drizzle-orm**: Type-safe ORM
- **zod**: Schema validation

### Development Tools
- **TypeScript**: Type safety across the stack
- **Vite**: Fast build tool and dev server
- **ESBuild**: Fast bundling for production

## Deployment Strategy

### Development Environment
- Vite dev server with HMR (Hot Module Replacement)
- Express server with development middleware
- Environment variables for database configuration

### Production Build
- Vite builds optimized client bundle to `dist/public`
- ESBuild bundles server code to `dist/index.js`
- Static file serving from Express in production
- Database migrations run via `drizzle-kit push`

### Database Setup
- PostgreSQL database (Neon serverless recommended)
- Environment variable `DATABASE_URL` required
- Automatic schema synchronization in development
- Migration-based deployments for production

### Environment Configuration
- Development: NODE_ENV=development with live reloading
- Production: NODE_ENV=production with optimized builds
- Database URL configuration required for both environments