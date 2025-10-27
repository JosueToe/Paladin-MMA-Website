# Installation Guide - Paladin MMA Website

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)
- A code editor (VS Code recommended)

## 🚀 Quick Start

### 1. Clone or Download the Project

```bash
# If using Git
git clone <repository-url>
cd paladin-mma-website

# Or download and extract the ZIP file
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Swiper
- React Hook Form
- Lucide React icons
- And more...

### 3. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### 4. Make Your Customizations

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed customization instructions.

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run lint         # Run ESLint to check code quality

# Production
npm run build        # Build for production
npm start           # Start production server
npm run postbuild   # Generate sitemap (runs after build)
```

## 🛠️ Project Structure

```
paladin-mma-website/
├── app/                      # Next.js 14 App Router
│   ├── globals.css          # Global styles & Tailwind
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── store/              # Store redirect page
│   ├── privacy/            # Privacy policy page
│   └── terms/              # Terms of service page
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx  # Header navigation
│   │   └── Footer.tsx      # Footer component
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Classes.tsx
│   │   ├── Schedule.tsx
│   │   ├── Instructors.tsx
│   │   ├── Testimonials.tsx
│   │   ├── News.tsx
│   │   ├── Gallery.tsx
│   │   ├── Location.tsx
│   │   └── Contact.tsx
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Input.tsx
│   │   ├── Textarea.tsx
│   │   └── Select.tsx
│   └── seo/
│       └── StructuredData.tsx
├── public/                 # Static files
│   ├── robots.txt
│   ├── site.webmanifest
│   ├── _redirects
│   └── _headers
├── netlify/
│   └── functions/         # Serverless functions
├── package.json
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind CSS config
├── next.config.js         # Next.js config
├── netlify.toml           # Netlify config
└── next-sitemap.config.js # Sitemap config
```

## 🎨 Technology Stack

### Core
- **Next.js 14.2** - React framework with App Router
- **React 18.3** - UI library
- **TypeScript 5.4** - Type safety

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixes

### Animations
- **Framer Motion 11** - Animation library
- **React Intersection Observer** - Scroll-triggered animations

### Components & UI
- **Swiper 11** - Touch slider/carousel
- **Lucide React** - Icon library
- **React Hook Form 7.51** - Form management

### SEO & Tools
- **next-seo 6.5** - SEO optimization
- **next-sitemap 4.2** - Automatic sitemap generation

## ⚙️ Configuration Files

### TypeScript Configuration (`tsconfig.json`)
Configured for Next.js with path aliases:
```json
{
  "paths": {
    "@/*": ["./*"]
  }
}
```

### Tailwind Configuration (`tailwind.config.ts`)
Custom color scheme and animations configured

### Next.js Configuration (`next.config.js`)
- Image optimization enabled
- Standalone output for deployment

### Netlify Configuration (`netlify.toml`)
- Build settings
- Redirects
- Headers
- Environment variables

## 🔧 Environment Variables

Create a `.env.local` file (optional):

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Email Services (optional)
# SENDGRID_API_KEY=your_key
# MAILGUN_API_KEY=your_key

# Analytics (optional)
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Note:** No environment variables are required for basic functionality.

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### TypeScript Errors

```bash
# Check TypeScript version
npx tsc --version

# Run type check
npx tsc --noEmit
```

### Tailwind Classes Not Working

1. Check `globals.css` imports Tailwind directives
2. Verify `tailwind.config.ts` content paths
3. Restart development server

## 📱 Testing Locally

### Test Responsive Design

1. Open DevTools (F12)
2. Click device toolbar icon
3. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1920px

### Test Forms

1. Fill out contact form
2. Check browser console for submission data
3. For Netlify forms, test after deployment

### Test Navigation

1. Click all navigation links
2. Verify smooth scrolling
3. Test mobile menu
4. Check all internal/external links

## 🔍 Code Quality

### Run Linter

```bash
npm run lint
```

### Format Code (if using Prettier)

```bash
npx prettier --write .
```

## 📖 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🆘 Getting Help

### Common Issues & Solutions

**Issue:** Images not loading
**Solution:** Check image paths and ensure they're in `public/` directory

**Issue:** Styles not applying
**Solution:** Restart dev server, clear `.next` cache

**Issue:** Build takes too long
**Solution:** Check for large dependencies, optimize images

**Issue:** Netlify deployment fails
**Solution:** Check Node version in netlify.toml (should be 20)

### Additional Support

- Check GitHub issues
- Review Next.js documentation
- Visit Netlify support
- Review component documentation in files

## ✅ Pre-Launch Checklist

Before deploying to production:

- [ ] All dependencies installed (`npm install`)
- [ ] Development server runs (`npm run dev`)
- [ ] Production build succeeds (`npm run build`)
- [ ] All images added/replaced
- [ ] Contact information updated
- [ ] Social media links updated
- [ ] Forms tested
- [ ] SEO metadata updated
- [ ] Google Maps configured
- [ ] Mobile responsive tested
- [ ] All links work
- [ ] Performance optimized
- [ ] Linter passes (`npm run lint`)

## 🚀 Ready to Deploy?

Once everything is working locally, proceed to [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions.

---

**Questions?** Check the other documentation files:
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deploy to Netlify
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - Customize content
- [README.md](./README.md) - Project overview

