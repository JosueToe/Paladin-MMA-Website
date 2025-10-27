# ✅ EmailJS Setup Checklist

## Quick Setup (Do This Now - 5 Minutes)

- [ ] **Step 1:** Create `.env.local` file in project root
  ```bash
  # Just create a new file named: .env.local
  ```

- [ ] **Step 2:** Go to [EmailJS.com](https://www.emailjs.com/) and sign up (FREE)

- [ ] **Step 3:** Connect your email (Gmail recommended)
  - Dashboard → Email Services → Add New Service
  - Choose Gmail and follow instructions
  - **Copy your Service ID**

- [ ] **Step 4:** Create email template
  - Dashboard → Email Templates → Create New Template
  - Name: `paladin_contact_form`
  - Subject: `New Lead: {{from_name}} - Paladin MMA`
  - Paste the HTML template from `EMAILJS_QUICKSTART.md`
  - Set "To Email" to: `contact@paladinmma.com`
  - **Copy your Template ID**

- [ ] **Step 5:** Get your Public Key
  - Dashboard → Account → API Keys
  - **Copy your Public Key**

- [ ] **Step 6:** Add credentials to `.env.local`
  ```env
  NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_your_id_here
  NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_your_id_here
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
  ```

- [ ] **Step 7:** Restart dev server
  ```bash
  # Press Ctrl+C to stop
  npm run dev
  ```

- [ ] **Step 8:** Test the contact form on your site!

## 📚 Help Files

- **Quick Start:** `EMAILJS_QUICKSTART.md` (5 min setup)
- **Detailed Guide:** `EMAILJS_SETUP.md` (with troubleshooting)
- **Implementation Details:** `CONTACT_FORM_IMPLEMENTATION.md`

## 🎯 What You Get

✅ Contact form sends emails to: `contact@paladinmma.com`  
✅ Success/error messages for users  
✅ Form validation  
✅ 200 free emails per month  
✅ No server setup needed  

---

**Need help?** Check `EMAILJS_QUICKSTART.md` for step-by-step instructions!

