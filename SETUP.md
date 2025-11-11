# GlobalEdu Gateway - Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://globaledugateway.com
NEXT_PUBLIC_WHATSAPP_NUMBER=8801234567890
NEXT_PUBLIC_CONTACT_EMAIL=info@globaledugateway.com
```

### Update Contact Information

1. **WhatsApp Number**: Update in `components/WhatsAppButton.tsx`
2. **Contact Details**: Update in `app/contact/page.tsx` and `components/Footer.tsx`
3. **Sitemap URL**: Update in `app/sitemap.ts` and `app/robots.ts`

### Tawk.to Integration

To enable live chat:

1. Sign up at [Tawk.to](https://www.tawk.to)
2. Get your Property ID and Widget ID
3. Update `components/ChatWidget.tsx` with your IDs
4. Uncomment the script loading code

### Google Maps

To add Google Maps to the contact page:

1. Get your Google Maps API key
2. Replace the placeholder in `app/contact/page.tsx` with:
   ```tsx
   <iframe
     src="YOUR_GOOGLE_MAPS_EMBED_URL"
     width="100%"
     height="100%"
     style={{ border: 0 }}
     allowFullScreen
     loading="lazy"
   />
   ```

## Features

✅ Fully responsive design  
✅ SEO optimized with metadata  
✅ Smooth animations with Framer Motion  
✅ Multi-step application form  
✅ WhatsApp integration  
✅ Student dashboard with localStorage  
✅ Blog system  
✅ Contact forms  

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Cloudflare Pages

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Output directory: `.next`
4. Add environment variables
5. Deploy!

## Customization

### Colors

Edit `tailwind.config.ts` to change the primary color scheme.

### Content

- Pages: Edit files in `app/` directory
- Components: Edit files in `components/` directory
- Sections: Edit files in `components/sections/` directory

## Notes

- Login uses demo authentication (password: `demo123`)
- Dashboard is protected with localStorage
- All forms redirect to WhatsApp/Email (no backend required)
- Images use placeholder gradients (replace with actual images)

## Support

For issues or questions, contact: info@globaledugateway.com

