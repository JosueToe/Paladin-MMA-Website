# Image Upload Guide - Paladin MMA Website

## 📁 Directory Structure

Place your images in the `public` folder with this structure:

```
public/
├── images/
│   ├── programs/
│   │   ├── mma-crosstraining.jpg
│   │   ├── mma-kids.jpg
│   │   ├── mma-adults.jpg
│   │   ├── personal-training.jpg
│   │   └── after-school.jpg
│   ├── gallery/
│   │   ├── gallery-1.jpg
│   │   ├── gallery-2.jpg
│   │   ├── gallery-3.jpg
│   │   ├── gallery-4.jpg
│   │   ├── gallery-5.jpg
│   │   ├── gallery-6.jpg
│   │   ├── gallery-7.jpg
│   │   └── gallery-8.jpg
│   ├── hero/
│   │   └── hero-background.jpg
│   └── logo/
│       ├── logo.png
│       └── logo-white.png
├── favicon.ico
├── apple-touch-icon.png
├── favicon-32x32.png
├── favicon-16x16.png
└── og-image.jpg (for social media sharing)
```

## 🖼️ Image Specifications

### 1. **Logo Images**
- **Location:** `public/images/logo/`
- **Files needed:**
  - `logo.png` - Main logo (transparent background)
  - `logo-white.png` - White version for dark backgrounds (optional)
- **Recommended size:** 200-300px wide, transparent PNG
- **Usage:** Navigation header, footer

### 2. **Hero Background Image**
- **Location:** `public/images/hero/hero-background.jpg`
- **Recommended size:** 1920x1080px or larger
- **Format:** JPG (optimized for web)
- **Usage:** Main homepage hero section background

### 3. **Program Card Images**
- **Location:** `public/images/programs/`
- **Files needed:**
  1. `mma-crosstraining.jpg` - MMA/Crosstraining program
  2. `mma-kids.jpg` - Kids MMA program
  3. `mma-adults.jpg` - Adults MMA program
  4. `personal-training.jpg` - Personal training
  5. `after-school.jpg` - After school program
- **Recommended size:** 800x600px (4:3 ratio)
- **Format:** JPG
- **Usage:** Program cards on Programs & Schedule section

### 4. **Gallery Images**
- **Location:** `public/images/gallery/`
- **Files needed:** 8-12 images
  - `gallery-1.jpg` through `gallery-8.jpg` (or more)
- **Recommended size:** 1200x1200px (square/1:1 ratio)
- **Format:** JPG
- **Usage:** Gallery section grid

### 5. **Favicon & Icons**
- **Location:** `public/`
- **Files needed:**
  - `favicon.ico` - Browser tab icon (16x16, 32x32)
  - `apple-touch-icon.png` - iOS home screen (180x180)
  - `favicon-32x32.png` - Standard favicon (32x32)
  - `favicon-16x16.png` - Small favicon (16x16)
- **Format:** ICO or PNG

### 6. **Social Media Image**
- **Location:** `public/og-image.jpg`
- **Recommended size:** 1200x630px
- **Format:** JPG
- **Usage:** Facebook, Twitter, LinkedIn sharing preview

---

## 🔧 How to Update Code to Use Your Images

### 1. **Update Logo in Navigation**

**File:** `components/layout/Navigation.tsx`

Find (around line 55):
```tsx
<span className="text-secondary">PALADIN</span>
<span className="text-primary">MMA</span>
```

Replace with:
```tsx
<img 
  src="/images/logo/logo.png" 
  alt="Paladin MMA" 
  className="h-10 w-auto"
/>
```

### 2. **Update Logo in Footer**

**File:** `components/layout/Footer.tsx`

Find (around line 52):
```tsx
<span className="text-secondary">PALADIN</span>
<span className="text-primary"> MMA</span>
```

Replace with:
```tsx
<img 
  src="/images/logo/logo-white.png" 
  alt="Paladin MMA" 
  className="h-10 w-auto"
/>
```

### 3. **Update Hero Background**

**File:** `components/sections/Hero.tsx`

Find (around line 21):
```tsx
backgroundImage: 'url(https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070)',
```

Replace with:
```tsx
backgroundImage: 'url(/images/hero/hero-background.jpg)',
```

### 4. **Update Program Images**

**File:** `components/sections/ProgramsSchedule.tsx`

Find the `classes` array (around line 20) and update each image:

```tsx
const classes = [
  {
    title: 'MMA / Crosstraining',
    image: '/images/programs/mma-crosstraining.jpg',  // ← Change this
    // ... rest of the code
  },
  {
    title: 'MMA Kids Program',
    image: '/images/programs/mma-kids.jpg',  // ← Change this
    // ... rest of the code
  },
  {
    title: 'MMA Adults',
    image: '/images/programs/mma-adults.jpg',  // ← Change this
    // ... rest of the code
  },
  {
    title: 'Personal Training',
    image: '/images/programs/personal-training.jpg',  // ← Change this
    // ... rest of the code
  },
  {
    title: 'After School Program',
    image: '/images/programs/after-school.jpg',  // ← Change this
    // ... rest of the code
  },
]
```

### 5. **Update Gallery Images**

**File:** `components/sections/Gallery.tsx`

Find the `galleryImages` array (around line 16) and update:

```tsx
const galleryImages = [
  {
    src: '/images/gallery/gallery-1.jpg',  // ← Change all of these
    alt: 'MMA Training Session',
  },
  {
    src: '/images/gallery/gallery-2.jpg',
    alt: 'Boxing Practice',
  },
  {
    src: '/images/gallery/gallery-3.jpg',
    alt: 'MMA Competition',
  },
  {
    src: '/images/gallery/gallery-4.jpg',
    alt: 'Sparring Session',
  },
  {
    src: '/images/gallery/gallery-5.jpg',
    alt: 'Kickboxing Training',
  },
  {
    src: '/images/gallery/gallery-6.jpg',
    alt: 'Championship Fight',
  },
  {
    src: '/images/gallery/gallery-7.jpg',
    alt: 'Gym Facility',
  },
  {
    src: '/images/gallery/gallery-8.jpg',
    alt: 'Team Event',
  },
]
```

### 6. **Update Metadata Images**

**File:** `app/layout.tsx`

Find (around line 46):
```tsx
url: '/og-image.jpg',
```

This will use `public/og-image.jpg` - replace that file with your image.

---

## 📸 Image Tips

### Best Practices:
1. **Optimize images before uploading:**
   - Use tools like [TinyPNG](https://tinypng.com/) or [ImageOptim](https://imageoptim.com/)
   - Target file size: < 200KB for web

2. **Use descriptive filenames:**
   - ✅ Good: `mma-kids-training.jpg`
   - ❌ Bad: `IMG_1234.jpg`

3. **Keep consistent aspect ratios:**
   - Program cards: 4:3 (800x600)
   - Gallery: 1:1 square (1200x1200)
   - Hero: 16:9 widescreen (1920x1080)

4. **Action shots work best:**
   - Show people training, not empty equipment
   - Capture energy and intensity
   - Use good lighting

### Recommended Free Image Tools:
- **Resize:** [Bulk Resize Photos](https://bulkresizephotos.com/)
- **Compress:** [Compressor.io](https://compressor.io/)
- **Edit:** [Photopea](https://www.photopea.com/) (free Photoshop alternative)

---

## 🚀 After Uploading Images

1. Place all your images in the appropriate folders
2. Update the code files as shown above
3. Save all changes
4. Run `npm run dev` to see your images locally
5. Deploy to Netlify - images will be included automatically

**Important:** The `public` folder is served directly, so `/images/logo.png` in your code maps to `public/images/logo.png` on your file system.

---

## ❓ Need Help?

If you have images but need them resized or optimized, you can:
1. Use the free tools mentioned above
2. Ask a designer to prepare them
3. Send them as-is and optimize later

**The most important images to start with:**
1. Logo (for branding)
2. Hero background (first impression)
3. Program images (5 images)

