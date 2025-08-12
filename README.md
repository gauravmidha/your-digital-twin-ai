# AI Avatar Landing Page

> **Transform your professional presence with hireable AI avatars that attend meetings, execute tasks, and deliver results in your voice and style.**

## ✨ About This Project

This is a modern, responsive landing page for an AI Avatar service built with cutting-edge web technologies. The application showcases a futuristic platform where professionals can create AI-powered digital twins of themselves to handle meetings, tasks, and client interactions.

### 🎯 Key Features

- **Interactive Hero Section** with dynamic mouse-tracking glow effects
- **Live Demo Component** showcasing AI avatar capabilities
- **Responsive Navigation** with mobile-friendly hamburger menu
- **Statistics Dashboard** displaying platform metrics
- **Customer Testimonials** with star ratings
- **Pricing Plans** with feature comparison
- **Smooth Animations** and modern UI transitions
- **SEO Optimized** with structured data and meta tags
- **Dark/Light Theme Support** with semantic design tokens

## 🛠️ Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui component library
- **Icons**: Lucide React icon library
- **Routing**: React Router DOM
- **State Management**: TanStack Query for server state
- **Animation**: CSS transitions and transforms

## 🎨 Design System

The project features a cohesive design system with:

- **Color Palette**: Neon violet primary (`265 84% 56%`) with cyan accent (`198 93% 60%`)
- **Typography**: Plus Jakarta Sans font family
- **Spacing**: Consistent Tailwind spacing scale
- **Components**: Reusable UI components with variants
- **Dark Mode**: Automatic theme switching support

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Shadcn/ui base components
│   ├── AvatarDemo.tsx      # Interactive demo component
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── PricingCard.tsx     # Pricing plan cards
│   ├── StatsSection.tsx    # Platform statistics
│   ├── TestimonialCard.tsx # Customer review cards
│   └── SEO.tsx            # SEO meta tags component
├── pages/
│   ├── Index.tsx          # Main landing page
│   └── NotFound.tsx       # 404 error page
├── assets/
│   └── ai-avatar-hero.jpg # Hero section image
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── index.css             # Global styles and design tokens
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-avatar-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎯 Key Components

### AvatarDemo
Interactive demo showcasing AI avatar capabilities with video controls and simulated conversation.

### Navbar
Responsive navigation with:
- Desktop menu with smooth hover effects
- Mobile hamburger menu
- Sticky positioning
- Link highlighting

### PricingCard
Flexible pricing component supporting:
- Multiple pricing tiers
- Feature lists
- Popular plan highlighting
- Custom CTA buttons

### SEO Component
Comprehensive SEO optimization with:
- Dynamic meta tags
- JSON-LD structured data
- Social media optimization
- Accessibility features

## 🎨 Customization

### Colors
Update the design system in `src/index.css`:

```css
:root {
  --primary: 265 84% 56%;    /* Main brand color */
  --accent: 198 93% 60%;     /* Accent color */
  --background: 0 0% 100%;   /* Background color */
  /* ... more color tokens */
}
```

### Typography
Font family is defined in `src/index.css` and can be customized:

```css
body {
  font-family: "Plus Jakarta Sans", ui-sans-serif, system-ui, ...;
}
```

### Components
All UI components are located in `src/components/ui/` and can be customized using the class variance authority (CVA) pattern.

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📄 License

This project is part of the Lovable platform. For more information, visit [Lovable.dev](https://lovable.dev).

## 🔗 Deployment

### Lovable Platform
Deploy directly through the Lovable interface by clicking the "Publish" button.

### Manual Deployment
The built application can be deployed to any static hosting service like:
- Vercel
- Netlify
- AWS S3
- GitHub Pages

---

**Built with ❤️ using Lovable** - The future of web development is here.