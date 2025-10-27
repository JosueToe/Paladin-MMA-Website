# Customization Guide - Paladin MMA Website

## 🎨 Branding & Colors

### Update Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0066FF',    // Change blue color
  secondary: '#FF0000',  // Change red color
  dark: '#000000',
  light: '#FFFFFF',
}
```

### Update Logo/Branding

Edit `components/layout/Navigation.tsx` (line ~47):

```tsx
<span className="text-secondary">YOUR</span>
<span className="text-primary">BRAND</span>
```

Also update in:
- `components/layout/Footer.tsx`
- `app/store/page.tsx`
- `app/not-found.tsx`

## 📝 Content Updates

### Hero Section
**File:** `components/sections/Hero.tsx`

Update:
- Main headline (line ~30)
- Subtitle (line ~39)
- Stats numbers (lines ~59-78)

### About Section
**File:** `components/sections/About.tsx`

Update:
- Heading text
- Description paragraphs
- Feature cards

### Contact Information

Update in multiple locations:

1. **Footer** (`components/layout/Footer.tsx`):
   - Address (line ~113)
   - Phone (line ~119)
   - Email (line ~126)

2. **Location** (`components/sections/Location.tsx`):
   - Update `contactInfo` array (lines ~14-31)
   - Google Maps embed URL (line ~66)
   - Parking/transit info (lines ~126-141)

3. **Structured Data** (`components/seo/StructuredData.tsx`):
   - Business details (lines ~10-20)
   - Coordinates (lines ~21-25)
   - Hours (lines ~26-38)

### Social Media Links

**Footer** (`components/layout/Footer.tsx`, lines ~93-96):
```tsx
const socialLinks = [
  { icon: <Facebook size={24} />, href: 'YOUR_FACEBOOK_URL', label: 'Facebook' },
  { icon: <Instagram size={24} />, href: 'YOUR_INSTAGRAM_URL', label: 'Instagram' },
  // ... update all URLs
]
```

**Instructors** (`components/sections/Instructors.tsx`):
Update social media links in instructor profiles

## 🥋 Classes/Programs

**File:** `components/sections/Classes.tsx`

Update the `classes` array (starting line ~17):

```tsx
const classes = [
  {
    title: 'Your Class Name',
    description: 'Class description',
    image: 'image-url',
    level: 'Skill Level',
    duration: 'Duration',
    details: 'Detailed description',
  },
  // Add more classes
]
```

## 📅 Schedule

**File:** `components/sections/Schedule.tsx`

### Update Weekly Schedule

Edit `scheduleData` object (lines ~21-75):

```tsx
const scheduleData = {
  Monday: [
    { 
      time: 'TIME', 
      class: 'CLASS NAME', 
      instructor: 'INSTRUCTOR', 
      spots: NUMBER 
    },
    // Add more time slots
  ],
  // Update for each day
}
```

### Update Featured Event

Edit `upcomingEvent` object (lines ~77-93):

```tsx
const upcomingEvent = {
  title: 'EVENT NAME',
  date: 'DATE',
  time: 'TIME',
  venue: 'VENUE',
  fighter1: { /* details */ },
  fighter2: { /* details */ },
}
```

## 👨‍🏫 Instructors/Coaches

**File:** `components/sections/Instructors.tsx`

Update `instructors` array (starting line ~26):

```tsx
const instructors = [
  {
    name: 'COACH NAME',
    title: 'Title',
    specialty: 'Specialty',
    image: 'image-url',
    country: '🇺🇸',
    experience: 'Years',
    achievements: ['Achievement 1', 'Achievement 2'],
    social: {
      instagram: 'URL',
      facebook: 'URL',
      twitter: 'URL',
    },
  },
  // Add more instructors
]
```

## 🖼️ Images

### Replace Placeholder Images

Current images use Unsplash placeholders. Replace with your own:

1. Add images to `public/images/` directory
2. Update image paths in components:
   - Hero section: Background image
   - Classes: Class images
   - Instructors: Coach photos
   - Gallery: Gallery images
   - Testimonials: Client photos

Example:
```tsx
// Before
image: 'https://images.unsplash.com/...'

// After
image: '/images/your-image.jpg'
```

### Add Logo

Place logo files in `public/`:
- `logo.png` (main logo)
- `favicon.ico`
- `apple-touch-icon.png`
- `favicon-32x32.png`
- `favicon-16x16.png`

### Add Open Graph Image

Add `public/og-image.jpg` (1200x630px) for social media sharing

## 💬 Testimonials

**File:** `components/sections/Testimonials.tsx`

Update `testimonials` array (starting line ~16):

```tsx
const testimonials = [
  {
    name: 'Client Name',
    role: 'Program',
    image: 'image-url',
    quote: 'Testimonial text',
    rating: 5,
    transformation: 'Results achieved',
  },
  // Add more testimonials
]
```

## 📰 News/Blog

**File:** `components/sections/News.tsx`

Update `newsArticles` array (starting line ~11):

```tsx
const newsArticles = [
  {
    title: 'ARTICLE TITLE',
    excerpt: 'Brief description',
    image: 'image-url',
    date: 'Date',
    category: 'Category',
  },
  // Add more articles
]
```

## 🗺️ Google Maps

**File:** `components/sections/Location.tsx`

Update the iframe `src` attribute (line ~66) with your location:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the iframe URL
5. Replace in the component

## 📱 Store Link

**File:** `app/store/page.tsx`

Update TikTok Shop URL (lines ~12 and ~45):

```tsx
window.location.href = 'YOUR_TIKTOK_SHOP_URL'
```

Or update to redirect to any other store (Shopify, WooCommerce, etc.)

## 🔍 SEO Metadata

### Page Metadata

**File:** `app/layout.tsx`

Update metadata object (lines ~23-72):
- Title
- Description
- Keywords
- Open Graph tags
- Twitter tags

### Structured Data

**File:** `components/seo/StructuredData.tsx`

Update:
- Business information
- Address and coordinates
- Operating hours
- Social media profiles
- FAQ content

## 📧 Contact Form

### Update Form Fields

**File:** `components/sections/Contact.tsx`

Modify form options:

```tsx
const programOptions = [
  { value: 'program1', label: 'Program Name 1' },
  // Update program list
]
```

### Form Submission

Currently uses Netlify Forms. To use a custom backend:

1. Update `onSubmit` function (line ~68)
2. Add API endpoint
3. Configure email service (SendGrid, Mailgun, etc.)

## 🎭 Animations

### Customize Animation Speeds

**File:** `tailwind.config.ts`

Update animation durations in keyframes section (lines ~42-72)

### Disable Animations

To disable animations for accessibility, wrap motion components:

```tsx
<motion.div
  initial={false} // Disable initial state
  animate={false} // Disable animations
>
```

## 📏 Layout & Spacing

### Container Width

**File:** `app/globals.css` (line ~38)

```css
.container-custom {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  /* Change max-w-7xl to your preferred width */
}
```

### Section Padding

**File:** `app/globals.css` (line ~58)

```css
.section-padding {
  @apply py-16 md:py-24 lg:py-32;
  /* Adjust padding values */
}
```

## 🌐 Multi-Language Support

To add multi-language support:

1. Install next-intl: `npm install next-intl`
2. Create translation files in `locales/`
3. Wrap layout with IntlProvider
4. Update components to use translations

## 🔔 Notifications

To add user notifications (success/error messages):

1. Install React Hot Toast: `npm install react-hot-toast`
2. Add Toaster to layout
3. Use toast() in form submissions

## 📊 Analytics

### Add Google Analytics

1. Get GA4 measurement ID
2. Update `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

### Track Events

Add custom event tracking:

```tsx
const trackEvent = (eventName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName)
  }
}
```

## 💾 Save & Test

After making changes:

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Test production build
npm start

# Deploy
git add .
git commit -m "Customization updates"
git push
```

---

**Need help?** Check component files for inline comments and refer to the main README.md for additional guidance.

