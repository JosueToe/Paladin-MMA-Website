# 🔧 Setup Your Credentials

## EmailJS Configuration

### Create `.env.local` File

1. In your project root folder (where `package.json` is), create a new file named `.env.local`

2. Add the following content to the file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_5ggvmit
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_lv83sib
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=WeAfJ5qoW4j5FrIz4
```

3. Save the file

### Restart Your Server

After creating `.env.local`, restart your development server:

```bash
# Press Ctrl+C to stop the server
# Then run:
npm run dev
```

## ✅ What's Configured

### Store Link
- TikTok Shop: https://www.tiktok.com/shop/store/pld-mma/7495640060732869457
- Store page redirects to your actual TikTok Shop

### Contact Form
- Emails will be sent to: `contact@paladinmma.com`
- Using your EmailJS account
- Service ID: `service_5ggvmit`
- Template ID: `template_lv83sib`

### Contact Information
- Email: contact@paladinmma.com
- Phone: (786) 237-4918
- Address: 2091 W 76th St, Hialeah, FL 33016

### Social Media
- Instagram: https://www.instagram.com/pld_mma
- TikTok: http://www.tiktok.com/@sportmmma
- Facebook: https://www.facebook.com/share/1VJnzTy7Sq/
- YouTube: https://www.youtube.com/@Pldshoto

### Coach
- All programs: Jorge Sotolongo

## 🧪 Test Your Contact Form

1. Make sure `.env.local` is created with the credentials above
2. Restart your dev server
3. Go to your website's contact form
4. Fill out the form and click "SEND MESSAGE"
5. Check your email at `contact@paladinmma.com`

## 🔒 Security Note

**IMPORTANT:** The `.env.local` file is already in `.gitignore` and will NOT be committed to GitHub. This keeps your credentials secure.

## ❓ Troubleshooting

### Form shows "Email service is not configured"
- Make sure `.env.local` exists in your project root
- Verify all three variables are spelled exactly as shown above
- Restart your development server

### No email received
- Check your spam/junk folder
- Verify your EmailJS template is set to send to `contact@paladinmma.com`
- Check the EmailJS dashboard for any errors

## 📁 File Structure

Your project should have:
```
Paladin-MMA-Website/
├── .env.local          ← CREATE THIS FILE
├── package.json        ← Already exists
├── app/
├── components/
└── ...
```

---

**Next Steps:**
1. ✅ Create `.env.local` with the credentials above
2. ✅ Restart your dev server
3. ✅ Test the contact form
4. ✅ Deploy to Netlify (credentials will need to be added there too)

