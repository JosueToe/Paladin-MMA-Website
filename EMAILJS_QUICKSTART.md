# EmailJS Quick Setup for Contact Form

## ⚡ Quick Start (5 minutes)

### Step 1: Create `.env.local` file

In your project root, create a new file called `.env.local` and add:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** This file is already in `.gitignore` and won't be committed to version control.

### Step 2: Get Your EmailJS Credentials

1. **Sign up at [EmailJS](https://www.emailjs.com/)** (Free - 200 emails/month)

2. **Add Email Service:**
   - Dashboard → Email Services → Add New Service
   - Connect Gmail/Outlook/etc.
   - Copy your **Service ID**

3. **Create Email Template:**
   - Dashboard → Email Templates → Create New Template
   - Name it `paladin_contact_form`
   - Copy the template below

4. **Get Public Key:**
   - Dashboard → Account → API Keys
   - Copy your **Public Key**

### Step 3: Email Template

Use this template in your EmailJS dashboard:

**Subject:**
```
New Lead: {{from_name}} - Paladin MMA
```

**Body (HTML):**
```html
<h2>🥊 New Contact Form Submission</h2>

<h3>Contact Information</h3>
<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>

<h3>Program Details</h3>
<p><strong>Interested In:</strong> {{program}}</p>
<p><strong>Experience Level:</strong> {{experience}}</p>
<p><strong>Preferred Time:</strong> {{preferred_time}}</p>

<h3>Message</h3>
<p>{{message}}</p>

<hr>
<p><em>Sent from Paladin MMA Academy website</em></p>
```

**To Email:** `contact@paladinmma.com`

### Step 4: Update `.env.local`

Replace the placeholder values with your actual credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=MjDk8F_abcdefgh
```

### Step 5: Restart Server

```bash
# Stop the server (Ctrl+C)
npm run dev
```

### Step 6: Test It!

1. Go to your contact form
2. Fill out the form
3. Click "SEND MESSAGE"
4. Check your email at `contact@paladinmma.com`

## 🎯 What Happens Now

When someone fills out the contact form:

1. ✅ Form validates all required fields
2. ✅ Data is sent to EmailJS
3. ✅ You receive an email at `contact@paladinmma.com`
4. ✅ User sees a success message
5. ✅ Form resets automatically

## 🔧 Troubleshooting

### "Email service is not configured" error
- Make sure `.env.local` exists in your project root
- All three variables must be filled in
- Restart your dev server after creating `.env.local`

### No email received
- Check spam/junk folder
- Verify Template ID in EmailJS dashboard
- Check EmailJS dashboard for failed sends
- Verify "To Email" is set to `contact@paladinmma.com`

### Still having issues?
See the detailed setup guide in `EMAILJS_SETUP.md`

## 📊 Free Tier Limits

- 200 emails per month
- More than enough for a small business!
- Upgrade available if needed

---

**Need Help?**  
Full documentation: `EMAILJS_SETUP.md`  
EmailJS Docs: https://www.emailjs.com/docs/

