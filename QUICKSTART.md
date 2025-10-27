# ⚡ Quick Start Guide - Paladin MMA Website

Get your MMA website up and running in 5 minutes!

## 🎯 What You're Getting

A fully-featured, production-ready MMA website with:
- ✅ Modern dark theme design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO optimized
- ✅ Contact forms
- ✅ Class scheduling
- ✅ Instructor profiles
- ✅ Image gallery
- ✅ Testimonials
- ✅ Google Maps integration
- ✅ Netlify deployment ready

## 🚀 Installation (2 minutes)

### Step 1: Install Node.js
Download and install Node.js v20 from: https://nodejs.org/

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

Open http://localhost:3000 in your browser. Done! 🎉

## ✏️ Quick Customization (10 minutes)

### 1. Update Branding
**File:** `components/layout/Navigation.tsx` (line 47)
```tsx
<span className="text-secondary">YOUR</span>
<span className="text-primary">BRAND</span>
```

### 2. Update Contact Info
**File:** `components/sections/Contact.tsx`
**File:** `components/layout/Footer.tsx`

Replace:
- Address
- Phone number
- Email

### 3. Update Colors (Optional)
**File:** `tailwind.config.ts` (lines 12-16)
```typescript
primary: '#0066FF',    // Your blue
secondary: '#FF0000',  // Your red
```

### 4. Add Your Images
Replace placeholder images in:
- `components/sections/Hero.tsx`
- `components/sections/Classes.tsx`
- `components/sections/Instructors.tsx`

Place your images in `public/images/`

## 🌐 Deploy to Netlify (5 minutes)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Step 2: Deploy
1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repository
4. Click "Deploy site"

Your site will be live in 2-3 minutes! 🚀

## 📋 Essential Customizations Checklist

After deployment, customize these:

- [ ] Update business name and branding
- [ ] Add your logo (`public/logo.png`)
- [ ] Update contact information
- [ ] Add real images
- [ ] Update class schedule
- [ ] Add instructor profiles
- [ ] Update Google Maps location
- [ ] Configure contact form email
- [ ] Update social media links
- [ ] Add your TikTok Shop link (if applicable)

## 🎨 Advanced Customization

For detailed customization:
- **Content & Text:** See [CUSTOMIZATION.md](./CUSTOMIZATION.md)
- **Features:** See [FEATURES.md](./FEATURES.md)
- **Deployment:** See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Installation:** See [INSTALLATION.md](./INSTALLATION.md)

## 📁 Key Files to Edit

### Branding & Contact
- `components/layout/Navigation.tsx` - Logo and menu
- `components/layout/Footer.tsx` - Footer info and links
- `components/sections/Contact.tsx` - Contact details

### Content
- `components/sections/Hero.tsx` - Homepage hero
- `components/sections/About.tsx` - About section
- `components/sections/Classes.tsx` - Programs offered
- `components/sections/Schedule.tsx` - Class schedule
- `components/sections/Instructors.tsx` - Coach profiles

### SEO
- `app/layout.tsx` - Page metadata
- `components/seo/StructuredData.tsx` - Schema markup

### Styling
- `tailwind.config.ts` - Colors and design tokens
- `app/globals.css` - Custom styles

## 🆘 Common Issues

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Build Fails
```bash
rm -rf node_modules .next
npm install
npm run build
```

### Images Not Showing
- Ensure images are in `public/` directory
- Use `/images/your-image.jpg` path format

## 💡 Pro Tips

1. **Test Locally First**: Always run `npm run build` before deploying
2. **Use Real Content**: Replace placeholder text and images ASAP
3. **Mobile First**: Test on mobile devices early
4. **SEO Matters**: Update all metadata in `app/layout.tsx`
5. **Forms**: Test contact form after Netlify deployment

## 📱 Test on Mobile

### iOS (Safari)
1. Open site on iPhone
2. Test navigation, forms, images
3. Add to home screen to test PWA

### Android (Chrome)
1. Open site on Android device
2. Test touch interactions
3. Check form validation

## 🔥 Launch Checklist

Before going live:
- [ ] All content updated
- [ ] Real images added
- [ ] Contact info correct
- [ ] Forms tested
- [ ] Mobile responsive
- [ ] SEO metadata complete
- [ ] Social links working
- [ ] Google Maps configured
- [ ] Performance tested (PageSpeed)
- [ ] SSL enabled (automatic on Netlify)

## 📊 Monitor After Launch

- **Analytics**: Add Google Analytics to track visitors
- **Forms**: Check Netlify dashboard for submissions
- **Performance**: Monitor page speed
- **SEO**: Submit sitemap to Google Search Console

## 🎯 Next Steps

1. ✅ Install and run locally
2. ✅ Customize content
3. ✅ Add your images
4. ✅ Deploy to Netlify
5. ✅ Configure custom domain
6. ✅ Set up analytics
7. ✅ Submit to search engines
8. ✅ Promote on social media

## 📞 Need Help?

- Check [INSTALLATION.md](./INSTALLATION.md) for setup issues
- See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for content changes
- Read [DEPLOYMENT.md](./DEPLOYMENT.md) for hosting questions
- Review [FEATURES.md](./FEATURES.md) for functionality details

## 🚀 Ready? Let's Go!

```bash
npm install    # Install dependencies
npm run dev    # Start development
npm run build  # Build for production
```

**Your MMA website is ready to dominate! 🥊**

