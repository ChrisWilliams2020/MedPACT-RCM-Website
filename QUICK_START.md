# Quick Start: Creating a New Website from Template

## ⚡ 5-Minute Quick Start

### Option 1: Automated (Recommended)

```bash
# Run the automated script
./create-new-site.sh "Your Company Name" "folder-name"

# Follow the prompts, then:
cd ../folder-name
npm install
npm run dev
```

### Option 2: Manual

```bash
# 1. Copy the project
cp -r "MedPACT RCM Website" "../New Company Website"
cd "../New Company Website"

# 2. Install dependencies
npm install

# 3. Create branding config
cp config/branding.example.ts config/branding.ts

# 4. Edit branding (MOST IMPORTANT)
# Open config/branding.ts and update all values

# 5. Run development server
npm run dev
```

---

## 📋 Essential Customization Checklist

### Must Do (Before Launch)
- [ ] **Edit `config/branding.ts`** - All company info, colors, content
- [ ] **Update `package.json`** - Name, description, version
- [ ] **Replace logo** - `public/logo.png`
- [ ] **Replace favicon** - `public/favicon.ico`
- [ ] **Add team photos** - Upload to `public/team-photos/`
- [ ] **Update team info** - Edit `pages/about.tsx`
- [ ] **Test all pages** - Click through entire site
- [ ] **Update contact info** - Email, phone, address
- [ ] **Configure forms** - Set up form submission endpoints

### Should Do (For Best Results)
- [ ] **Customize colors** - Match your brand
- [ ] **Update metrics** - Use your real data
- [ ] **Add case studies** - Real customer stories
- [ ] **Setup analytics** - Google Analytics, etc.
- [ ] **SEO optimization** - Meta tags, descriptions
- [ ] **Social media links** - Add your profiles
- [ ] **Legal pages** - Privacy policy, terms

### Nice to Have
- [ ] **Blog section** - Add content marketing
- [ ] **Video content** - Embed demo videos
- [ ] **Live chat** - Intercom, Drift, etc.
- [ ] **Email signup** - Newsletter integration
- [ ] **Custom domain** - Connect your domain

---

## 🎨 Common Customizations

### Change Primary Color

```typescript
// config/branding.ts
colors: {
  primary: "purple-600",  // Change from blue-600
  primaryHover: "purple-700",
  primaryLight: "purple-50",
}
```

Then search/replace in components:
```bash
# Find all blue-600 references
grep -r "blue-600" pages/ components/

# Replace (be careful!)
find pages/ -type f -exec sed -i '' 's/blue-600/purple-600/g' {} +
```

### Change Background Gradient

```typescript
// config/branding.ts
colors: {
  background: "from-teal-50 via-emerald-50 to-cyan-100"
}
```

### Update Banner Message

```typescript
// config/branding.ts
banner: {
  enabled: true,
  icon: "🚀",
  message: "Your custom message here"
}
```

### Change Hero Headline

```typescript
// config/branding.ts
hero: {
  headline: "Your Value Prop.\nSecond Line.\nThird Line.",
  subheadline: "Supporting message"
}
```

---

## 🏭 Industry Templates

Choose the closest match to your business:

| Industry | Primary Color | Example Company |
|----------|---------------|-----------------|
| **Tech/SaaS** | `blue-600` or `purple-600` | GrowthMetrics (Marketing SaaS) |
| **Finance** | `slate-700` or `emerald-600` | PayFlow (FinTech) |
| **Legal** | `slate-700` + `blue-600` | Sterling & Associates |
| **Healthcare** | `teal-600` or `cyan-600` | Wellness Partners |
| **Real Estate** | `amber-600` or `orange-600` | Skyline Properties |
| **Consulting** | `indigo-600` or `slate-600` | Generic Professional Services |

See [TEMPLATE_EXAMPLES.md](TEMPLATE_EXAMPLES.md) for full configurations.

---

## 🚀 Deployment

### Quick Deploy to Vercel (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to connect to your GitHub and deploy
```

### Deploy to Netlify

```bash
# Build the site
npm run build

# Drag and drop the 'out' folder to Netlify
# Or connect GitHub repo
```

### Traditional Hosting

```bash
# Build
npm run build

# Export static files
npm run export

# Upload 'out' folder to any web host
```

See [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) for detailed instructions.

---

## 📖 Documentation Index

- **[TEMPLATE_GUIDE.md](TEMPLATE_GUIDE.md)** - Complete template documentation
- **[TEMPLATE_EXAMPLES.md](TEMPLATE_EXAMPLES.md)** - Industry-specific examples
- **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Production deployment
- **[IMAGE_UPLOAD_GUIDE.md](IMAGE_UPLOAD_GUIDE.md)** - Team photo uploads
- **[README.md](README.md)** - Project overview

---

## ❓ Common Questions

### Q: Can I change the page structure?
**A:** Yes! Add, remove, or modify pages in the `pages/` directory.

### Q: Do I need to know React?
**A:** Basic knowledge helps, but you can customize most content by editing the branding config.

### Q: Can I use this for clients?
**A:** Absolutely! This template is designed for creating multiple client websites.

### Q: How do I update content after launch?
**A:** Edit files, commit to git, and redeploy. Or integrate a CMS for non-technical updates.

### Q: What if I want a completely different design?
**A:** You can customize CSS in `styles/globals.css` or modify component styles directly.

---

## 🛠️ Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Colors not updating
```bash
# Make sure you're updating Tailwind classes, not hard-coded colors
# Restart dev server after changing tailwind.config.js
```

### Images not loading
```bash
# Make sure images are in public/ directory
# Use /image.png not ./image.png in src attributes
```

### Port already in use
```bash
# Use a different port
PORT=3001 npm run dev
```

---

## 💡 Pro Tips

1. **Start with branding.ts** - Get this right and the rest is easy
2. **Test on mobile** - Use browser dev tools to check responsive design
3. **Use real content early** - Don't wait to add actual copy and images
4. **Keep it simple** - Don't over-customize until you validate the core offering
5. **Get feedback** - Show stakeholders early and often

---

## 🎯 Success Metrics

Track these to measure your new website's performance:

- **Traffic**: Google Analytics visitors
- **Conversion**: Demo requests / visitors
- **Engagement**: Time on site, pages per session
- **Lead Quality**: Demo-to-customer rate
- **SEO**: Search rankings for target keywords

---

## ✨ Next Steps After Launch

1. **Monitor Analytics** - Install Google Analytics/Tag Manager
2. **A/B Testing** - Test different headlines, CTAs
3. **Content Marketing** - Add blog, case studies
4. **SEO Optimization** - Improve meta tags, add keywords
5. **Performance** - Optimize images, enable caching
6. **Feedback Loop** - Collect user feedback, iterate

---

**Need help?** Check the full documentation in TEMPLATE_GUIDE.md or review the examples in TEMPLATE_EXAMPLES.md.

**Ready to build?** Run `./create-new-site.sh` and you'll have a new website in minutes! 🚀
