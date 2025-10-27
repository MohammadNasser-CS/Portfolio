# Contact Form Setup Guide

Your contact form is now functional! Currently, it logs submissions to the console. To receive actual emails, follow one of these setup options:

## Option 1: Resend (Recommended for Vercel)

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Get your API key from the dashboard
3. Add to your environment variables:
   \`\`\`
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   CONTACT_EMAIL=your-email@example.com
   \`\`\`
4. Uncomment the Resend section in `app/api/contact/route.ts`
5. Install the package: The Resend package will be automatically installed when needed

## Option 2: Web3Forms (Easiest - No Code Changes)

1. Sign up at [web3forms.com](https://web3forms.com) (free tier: 250 emails/month)
2. Get your access key
3. Add to your environment variables:
   \`\`\`
   WEB3FORMS_ACCESS_KEY=xxxxx-xxxxx-xxxxx
   \`\`\`
4. Uncomment the Web3Forms section in `app/api/contact/route.ts`

## Option 3: Custom Email Service

You can integrate any email service (SendGrid, Mailgun, etc.) by modifying the API route.

## Testing

The form currently works and logs submissions to the console. Check your browser's developer console or server logs to see submissions.

## Environment Variables

Add your environment variables in:
- **Local development**: Create a `.env.local` file
- **Vercel deployment**: Add in Project Settings → Environment Variables

## Security Notes

- The API route validates all inputs
- Email format is validated
- Rate limiting is recommended for production (add middleware)
- Consider adding CAPTCHA for spam protection
