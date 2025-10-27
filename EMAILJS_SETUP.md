# EmailJS Setup Guide for Paladin MMA Contact Form

This guide will walk you through setting up EmailJS for your contact form.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Go to the [Email Services](https://dashboard.emailjs.com/admin) page
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Save your Service ID** - you'll need this later

### Recommended: Gmail Setup
- If using Gmail, you may need to create an "App Password"
- Go to your Google Account → Security → 2-Step Verification → App passwords
- Generate an app password for EmailJS

## Step 3: Create an Email Template

1. Go to the [Email Templates](https://dashboard.emailjs.com/admin/templates) page
2. Click "Create New Template"
3. Use this template structure:

### Template Name
`paladin_contact_form`

### Subject
```
New Contact Form Submission from {{from_name}}
```

### Content (HTML)
```html
<h2>New Contact Form Submission</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{phone}}</p>

<hr>

<p><strong>Program Interest:</strong> {{program}}</p>
<p><strong>Experience Level:</strong> {{experience}}</p>
<p><strong>Preferred Contact Time:</strong> {{preferred_time}}</p>

<hr>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>This email was sent from the Paladin MMA website contact form.</em></p>
```

4. Set the "To Email" to: `contact@paladinmma.com`
5. Click "Save"
6. **Save your Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to [Account Settings](https://dashboard.emailjs.com/admin/account)
2. Find your **Public Key** (also called API Key)
3. Copy this key

## Step 5: Update Environment Variables

1. Open the `.env.local` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Example:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123xyz
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_def456uvw
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ghi789rst_publickeyexample
```

## Step 6: Restart Your Development Server

After updating the `.env.local` file:

```bash
# Stop the current server (Ctrl+C)
# Then restart it:
npm run dev
```

## Step 7: Test the Contact Form

1. Go to your website's contact form
2. Fill out all the fields
3. Click "SEND MESSAGE"
4. You should receive an email at `contact@paladinmma.com`

## Template Variables Reference

The contact form sends these variables to EmailJS:

| Variable | Description |
|----------|-------------|
| `from_name` | User's full name |
| `from_email` | User's email address |
| `phone` | User's phone number |
| `program` | Selected program (MMA Adults, Kids, etc.) |
| `experience` | Experience level (Beginner, Intermediate, etc.) |
| `preferred_time` | Preferred contact time |
| `message` | User's message |
| `to_email` | Your email (contact@paladinmma.com) |

## Troubleshooting

### "Email service is not configured" error
- Make sure all three environment variables are set in `.env.local`
- Restart your development server after updating `.env.local`

### Form submits but no email received
- Check your EmailJS dashboard for failed sends
- Verify your Service is properly connected
- Check spam/junk folder
- Verify the Template ID matches exactly

### "Failed to send message" error
- Check your browser console for detailed error messages
- Verify your Public Key is correct
- Make sure your EmailJS account is active
- Check if you've exceeded the free tier limit (200 emails/month)

## EmailJS Free Tier Limits

- **200 emails per month**
- 2 email services
- 2 email templates
- 50KB maximum attachment size

If you need more, consider upgrading to a paid plan.

## Security Notes

- Never commit `.env.local` to version control (it's already in `.gitignore`)
- The public key is safe to use in client-side code
- EmailJS handles the actual email sending securely

## Support

If you need help:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Created for Paladin MMA Academy**  
Contact: contact@paladinmma.com | (786) 237-4918

