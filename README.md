# Paladin MMA Academy Website

Premier MMA training facility website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🥊 Features

- **Modern, Dark Theme Design** - High-impact boxing/MMA aesthetic
- **Fully Responsive** - Optimized for all devices
- **SEO Optimized** - Complete meta tags, JSON-LD structured data, sitemap
- **Performance** - Optimized images, lazy loading, code splitting
- **Animations** - Smooth scroll animations with Framer Motion
- **Interactive Components** - Schedule system, image gallery, contact forms
- **Netlify Ready** - Configured for seamless Netlify deployment

## 🛠️ Tech Stack

- **Framework:** Next.js 14.2
- **Language:** TypeScript 5.4
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11.0
- **Forms:** React Hook Form 7.51
- **Carousel:** Swiper 11.0
- **Icons:** Lucide React

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Deployment to Netlify

### Method 1: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

### Method 2: GitHub Integration

1. Push code to GitHub
2. Connect repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy!

### Environment Variables

No environment variables required for basic functionality.

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── store/            # Store redirect page
├── components/
│   ├── layout/           # Navigation, Footer
│   ├── sections/         # Page sections
│   ├── seo/             # SEO components
│   └── ui/              # Reusable UI components
├── public/              # Static assets
├── netlify/            # Netlify functions
└── netlify.toml        # Netlify configuration
```

## 🎨 Customization

### Colors

Update `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0066FF',    // Blue
  secondary: '#FF0000',  // Red
  dark: '#000000',       // Black
  light: '#FFFFFF',      // White
}
```

### Content

- **Hero Section:** `components/sections/Hero.tsx`
- **Classes:** `components/sections/Classes.tsx`
- **Schedule:** `components/sections/Schedule.tsx`
- **Contact Info:** `components/sections/Contact.tsx` and `Footer.tsx`

### SEO

Update metadata in:
- `app/layout.tsx` - Page metadata
- `next-seo.config.ts` - SEO configuration
- `components/seo/StructuredData.tsx` - JSON-LD schemas

## 📱 Forms Configuration

Forms are configured to work with Netlify Forms:

1. Contact form: `/` page
2. Newsletter: Footer component

Forms automatically submit to Netlify with `data-netlify="true"` attribute.

## 🔍 SEO Features

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (LocalBusiness, FAQ, Organization)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Image alt tags
- ✅ Performance optimizations

## 📊 Performance

- Image optimization with Next.js Image component
- Lazy loading for images and components
- Code splitting
- Minified CSS and JavaScript
- Optimal font loading

## 🔐 Security Headers

Configured in `public/_headers`:
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## 📄 License

© 2024 Paladin MMA Academy. All rights reserved.

## 🤝 Support

For questions or support, contact: info@paladinmma.com

---

Built with ❤️ for Paladin MMA Academy

