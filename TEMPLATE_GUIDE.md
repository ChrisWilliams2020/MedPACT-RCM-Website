# Corporate Website Template Guide

This website serves as a **reusable template** for creating corporate marketing sites with the same structure, design, and functionality but different content.

## Template Features

### Design System
- **Light metallic blue gradient background** (customizable colors)
- **Apple-inspired clean aesthetic** with semi-transparent cards
- **Professional typography** with strong hierarchy
- **Responsive grid layouts** for all screen sizes
- **Smooth animations** and hover effects
- **Backdrop blur effects** for modern glass morphism

### Page Structure (10 Pages Total)

1. **Landing Page** (`/pages/index.tsx`)
   - Prominent goal/mission banner
   - Hero section with tagline
   - Three core pillars/values
   - Product/service features grid
   - Results/metrics showcase
   - Quick navigation links

2. **About** (`/pages/about.tsx`)
   - Company story
   - Team members with photo upload
   - Advisors section
   - Company values

3. **Mission** (`/pages/mission.tsx`)
   - Vision statement
   - Core mission
   - Strategic objectives

4. **Platform/Product** (`/pages/platform.tsx`)
   - Product/service overview
   - Key features
   - Technical capabilities

5. **Outcomes/Results** (`/pages/outcomes.tsx`)
   - Case studies
   - Success metrics
   - Client testimonials

6. **Innovations/Technology** (`/pages/innovations.tsx`)
   - Unique differentiators
   - Technology stack
   - Innovation pipeline

7. **Industry-Specific** (`/pages/payer-provider.tsx`)
   - Vertical/industry solutions
   - Specialized offerings

8. **Contact** (`/pages/contact.tsx`)
   - Contact form
   - Office locations
   - Support information

9. **Become User/Client** (`/pages/become-user.tsx`)
   - Onboarding process
   - Pricing (optional)
   - Sign-up form

10. **Become Partner** (`/pages/become-partner.tsx`)
    - Partnership opportunities
    - Integration options
    - Partner benefits

11. **Book Demo** (`/pages/book-demo.tsx`)
    - Demo request form
    - Meeting scheduler
    - Product preview

## How to Create a New Website from Template

### Step 1: Copy the Project
```bash
# Clone or copy the entire project
cp -r "MedPACT RCM Website" "New Company Website"
cd "New Company Website"

# Install dependencies
npm install
```

### Step 2: Update Configuration File

Create a `config/branding.ts` file with your company's information:

```typescript
export const siteConfig = {
  // Company Info
  companyName: "Your Company Name",
  tagline: "Your Company Tagline",
  description: "Brief company description",
  
  // Brand Colors (Tailwind classes)
  colors: {
    primary: "blue-600",      // Main brand color
    secondary: "slate-600",   // Secondary color
    accent: "indigo-600",     // Accent color
    background: "from-blue-50 via-slate-50 to-blue-100", // Gradient
  },
  
  // Banner Message
  banner: {
    icon: "🎯",
    message: "Your key value proposition or goal"
  },
  
  // Hero Section
  hero: {
    headline: "Main Value Prop.\nSecond Line.\nThird Line.",
    subheadline: "Supporting description of your value proposition",
    primaryCTA: "Get Started",
    secondaryCTA: "Watch Demo"
  },
  
  // Three Core Pillars
  pillars: [
    {
      title: "First Pillar",
      description: "Description of first core value",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
    },
    {
      title: "Second Pillar",
      description: "Description of second core value",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
    },
    {
      title: "Third Pillar",
      description: "Description of third core value",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
    }
  ],
  
  // Platform Features
  features: [
    {
      title: "Feature Category 1",
      description: "What this feature does",
      items: ["Item 1", "Item 2", "Item 3"]
    },
    {
      title: "Feature Category 2",
      description: "What this feature does",
      items: ["Item 1", "Item 2", "Item 3"]
    },
    {
      title: "Feature Category 3",
      description: "What this feature does",
      items: ["Item 1", "Item 2", "Item 3"]
    },
    {
      title: "Feature Category 4",
      description: "What this feature does",
      items: ["Item 1", "Item 2", "Item 3"]
    }
  ],
  
  // Results/Metrics
  metrics: [
    { value: "30%", label: "Metric Name", description: "Time period" },
    { value: "95%+", label: "Metric Name", description: "Context" },
    { value: "40%", label: "Metric Name", description: "Comparison" }
  ],
  
  // Navigation Links
  quickLinks: [
    { href: "/platform", title: "Platform", description: "Short desc", icon: "Cpu" },
    { href: "/outcomes", title: "Outcomes", description: "Short desc", icon: "BarChart3" },
    { href: "/innovations", title: "Innovation", description: "Short desc", icon: "Sparkles" },
    { href: "/about", title: "About Us", description: "Short desc", icon: "Star" },
    { href: "/contact", title: "Contact", description: "Short desc", icon: "ArrowRight" },
    { href: "/book-demo", title: "Book Demo", description: "Short desc", icon: "ChevronRight" }
  ],
  
  // Footer
  footer: {
    description: "Company footer description",
    sections: [
      {
        title: "Platform",
        links: [
          { label: "Overview", href: "/platform" },
          { label: "Results", href: "/outcomes" },
          { label: "Technology", href: "/innovations" }
        ]
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Mission", href: "/mission" },
          { label: "Contact", href: "/contact" }
        ]
      },
      {
        title: "Resources",
        links: [
          { label: "Book Demo", href: "/book-demo" },
          { label: "Become a Client", href: "/become-user" },
          { label: "Partners", href: "/become-partner" }
        ]
      }
    ]
  },
  
  // Contact Info
  contact: {
    email: "contact@yourcompany.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345"
  },
  
  // Social Media
  social: {
    linkedin: "https://linkedin.com/company/yourcompany",
    twitter: "https://twitter.com/yourcompany",
    facebook: "https://facebook.com/yourcompany"
  }
};
```

### Step 3: Content Customization Checklist

#### Global Updates
- [ ] Update `package.json` (name, description, author)
- [ ] Update `README.md` with new company info
- [ ] Replace logo/favicon files in `/public`
- [ ] Create `config/branding.ts` with company details
- [ ] Update meta tags in `pages/_app.tsx` or `pages/_document.tsx`

#### Page-by-Page Content
- [ ] **Landing Page** - Update hero, pillars, features, metrics
- [ ] **About** - Replace team members, advisors, company story
- [ ] **Mission** - Write new mission/vision statements
- [ ] **Platform** - Describe your product/service
- [ ] **Outcomes** - Add your case studies and results
- [ ] **Innovations** - Detail your technology/approach
- [ ] **Industry Pages** - Customize for your verticals
- [ ] **Contact** - Update contact form and information
- [ ] **CTAs** - Update all call-to-action copy
- [ ] **Forms** - Customize form fields for your needs

#### Design Customization
- [ ] Update color scheme in Tailwind config
- [ ] Adjust gradient backgrounds
- [ ] Customize icon set (if needed)
- [ ] Update typography (font family, sizes)
- [ ] Modify card styles/shadows
- [ ] Adjust spacing/padding

### Step 4: Component Reusability

All components are designed to be reusable:

**Shared Components:**
- `PublicHeader` - Top navigation
- `PublicFooter` - Footer with links
- `ImageUpload` - Team photo upload
- `ui/button` - Styled buttons
- `ui/card` - Card containers
- `ui/badge` - Badge elements

**Icons from Lucide React:**
- Easily swap icons by changing imports
- Consistent icon system across all pages

### Step 5: Testing Your New Site

```bash
# Development
npm run dev
# Visit http://localhost:3000

# Production Build
npm run build
npm start

# Deployment
# Follow DEPLOYMENT_CHECKLIST.md
```

## Template Variations

### Color Schemes

**Tech Startup (Blue/Purple)**
```typescript
background: "from-blue-50 via-purple-50 to-indigo-100"
primary: "blue-600"
accent: "purple-600"
```

**Finance/Professional (Navy/Gold)**
```typescript
background: "from-slate-50 via-gray-50 to-blue-50"
primary: "slate-800"
accent: "amber-600"
```

**Healthcare/Wellness (Green/Teal)**
```typescript
background: "from-teal-50 via-emerald-50 to-cyan-100"
primary: "teal-600"
accent: "emerald-600"
```

**Creative/Agency (Pink/Orange)**
```typescript
background: "from-rose-50 via-orange-50 to-amber-100"
primary: "rose-600"
accent: "orange-600"
```

**Legal/Consulting (Gray/Blue)**
```typescript
background: "from-gray-50 via-slate-50 to-zinc-100"
primary: "slate-700"
accent: "blue-600"
```

## Advanced Customizations

### Adding New Features

1. **Blog/News Section**
   - Create `/pages/blog/index.tsx`
   - Add blog post pages
   - Integrate CMS (optional)

2. **Customer Portal**
   - Add authentication
   - Create protected routes
   - Build dashboard

3. **E-commerce**
   - Add product pages
   - Integrate payment
   - Shopping cart

4. **Multi-language**
   - Setup i18n
   - Translate content
   - Language switcher

### Integration Options

- **Analytics:** Google Analytics, Mixpanel, Segment
- **Forms:** Formspree, Netlify Forms, SendGrid
- **CMS:** Contentful, Sanity, Strapi
- **Search:** Algolia, Meilisearch
- **Chat:** Intercom, Drift, Crisp
- **Email:** Mailchimp, ConvertKit, SendGrid

## File Structure Reference

```
project/
├── pages/                    # All page routes
│   ├── index.tsx            # Landing page (customize heavily)
│   ├── about.tsx            # About page (team, story)
│   ├── mission.tsx          # Mission/vision
│   ├── platform.tsx         # Product/service details
│   ├── outcomes.tsx         # Results/case studies
│   ├── innovations.tsx      # Technology/innovation
│   ├── contact.tsx          # Contact form
│   ├── become-user.tsx      # Client onboarding
│   ├── become-partner.tsx   # Partnership info
│   └── book-demo.tsx        # Demo request
├── components/              # Reusable components
│   ├── PublicHeader.tsx     # Navigation (update links)
│   ├── PublicFooter.tsx     # Footer (update links)
│   ├── ImageUpload.tsx      # Photo upload (reusable)
│   └── ui/                  # shadcn components (reusable)
├── config/                  # Configuration (CREATE THIS)
│   └── branding.ts          # Company-specific content
├── public/                  # Static assets
│   ├── logo.png             # Replace with company logo
│   ├── favicon.ico          # Replace with company favicon
│   └── team-photos/         # Team member images
├── styles/                  # Global styles
│   └── globals.css          # Tailwind + custom CSS
├── package.json             # Update name/description
├── README.md                # Update with company info
└── tailwind.config.js       # Customize colors/theme
```

## Quick Start Commands

```bash
# Clone template
cp -r "MedPACT RCM Website" "NewCo Website"

# Update branding
# Edit config/branding.ts (create this file)

# Find and replace company name globally
find . -type f -name "*.tsx" -exec sed -i '' 's/MedPact RCM/NewCo/g' {} +

# Update colors (example: blue to purple)
find . -type f -name "*.tsx" -exec sed -i '' 's/blue-600/purple-600/g' {} +

# Test
npm run dev
```

## Support & Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Security patches: `npm audit fix`
- Next.js upgrades: Follow official migration guides

### Best Practices
- Always test in development before deploying
- Use environment variables for sensitive data
- Keep branding config separate from components
- Document any custom changes
- Version control with Git

## Example: Creating a New Site in 30 Minutes

1. **Copy project** (2 min)
2. **Create branding config** (10 min)
3. **Update team photos** (5 min)
4. **Replace company name globally** (2 min)
5. **Customize colors** (3 min)
6. **Test all pages** (5 min)
7. **Deploy** (3 min)

Total: ~30 minutes for a fully functional corporate website!

## Need Help?

- Review the original MedPACT RCM site for reference
- Check `DEPLOYMENT_CHECKLIST.md` for deployment
- See `IMAGE_UPLOAD_GUIDE.md` for photo features
- Read Next.js documentation for advanced features

---

**This template is production-ready and battle-tested!**

Built with:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide Icons
