# Deployment Guide - Paladin MMA Website

## 🚀 Quick Deploy to Netlify

### Option 1: Deploy via Netlify UI

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Paladin MMA website"
   git branch -M main
   git remote add origin https://github.com/yourusername/paladin-mma.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `.next`
     - **Node version:** 20
   - Click "Deploy site"

3. **Configure Custom Domain** (Optional)
   - Go to Site settings → Domain management
   - Add custom domain: `paladinmma.com`
   - Configure DNS settings as instructed

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Deploy to production
netlify deploy --prod
```

## 📋 Pre-Deployment Checklist

- [ ] Install dependencies: `npm install`
- [ ] Test build locally: `npm run build`
- [ ] Test production server: `npm start`
- [ ] Update contact information in components
- [ ] Replace placeholder images with actual photos
- [ ] Update Google Maps coordinates in Location section
- [ ] Configure environment variables (if using email services)
- [ ] Test all forms
- [ ] Test responsive design on multiple devices
- [ ] Check SEO meta tags
- [ ] Verify social media links
- [ ] Test all internal navigation links

## 🔧 Environment Variables

If you need environment variables, create them in Netlify:

1. Go to Site settings → Environment variables
2. Add variables as needed:
   - `NEXT_PUBLIC_SITE_URL=https://paladinmma.com`
   - `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` (if using Google Analytics)

## 📧 Form Configuration

Netlify Forms are already configured in the contact and newsletter forms with `data-netlify="true"`.

To access form submissions:
1. Go to your site dashboard on Netlify
2. Navigate to "Forms" tab
3. View all submissions

Optional: Set up form notifications:
- Site settings → Forms → Form notifications
- Add email or Slack notifications

## 🔍 SEO Post-Deployment

1. **Submit Sitemap to Google Search Console**
   - Your sitemap is at: `https://paladinmma.com/sitemap.xml`
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add property and submit sitemap

2. **Verify Google My Business**
   - Link your website to Google My Business listing

3. **Add Google Analytics** (Optional)
   - Create GA4 property
   - Add tracking ID to environment variables
   - Update layout.tsx with Google Analytics script

4. **Test SEO**
   - Use [Google's Rich Results Test](https://search.google.com/test/rich-results)
   - Check structured data implementation
   - Verify Open Graph tags with Facebook Debugger

## 📊 Performance Optimization

After deployment, check performance:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

Target metrics:
- PageSpeed Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

## 🔄 Continuous Deployment

Netlify automatically deploys when you push to your main branch:

```bash
# Make changes
git add .
git commit -m "Update hero section"
git push

# Netlify will automatically build and deploy
```

## 🐛 Troubleshooting

### Build Fails
- Check Node version (should be 20)
- Verify all dependencies are installed
- Check build logs in Netlify dashboard

### Images Not Loading
- Ensure images are in `public/` directory
- Check image paths are correct
- Verify image optimization settings

### Forms Not Working
- Verify `data-netlify="true"` attribute exists
- Check form `name` attribute is set
- Ensure hidden input with form-name exists

### Styles Not Applied
- Verify Tailwind CSS is configured correctly
- Check that globals.css is imported in layout.tsx
- Clear browser cache

## 📱 Post-Launch Tasks

- [ ] Test website on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Set up Google Analytics
- [ ] Submit to Google Search Console
- [ ] Configure email alerts for form submissions
- [ ] Set up uptime monitoring
- [ ] Create social media posts announcing launch
- [ ] Update Google My Business with website link
- [ ] Monitor Core Web Vitals

## 🔐 Security

Security headers are already configured in `public/_headers`:
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## 💡 Tips

1. **Preview Deploys**: Netlify creates preview deployments for pull requests
2. **Deploy Contexts**: Configure different settings for production/preview/branch deploys
3. **Split Testing**: Use Netlify's split testing for A/B testing
4. **Analytics**: Enable Netlify Analytics for basic traffic insights
5. **Edge Functions**: Consider using Netlify Edge Functions for advanced features

## 📞 Support

For deployment issues:
- Netlify Docs: https://docs.netlify.com/
- Netlify Support: https://www.netlify.com/support/
- Next.js Docs: https://nextjs.org/docs

---

**Ready to deploy?** Run `npm run build` to test, then push to GitHub and connect to Netlify!

