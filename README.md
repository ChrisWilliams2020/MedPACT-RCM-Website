# MedPACT RCM Website

> **🎯 This website is also a professional corporate website template!**  
> See [TEMPLATE_SUMMARY.md](TEMPLATE_SUMMARY.md) to create new websites from this template in 30 minutes.

---

## Overview
MedPact RCM is an intelligence-driven revenue cycle platform that unifies pricing transparency, payer intelligence, workflow automation, compliance, and analytics into a single operating layer — replacing fragmented tools and manual processes.

**Mission**: Fix execution where private equity struggled — turning complex operational and financial data into action.

**Value Proposition**: Healthcare practices lose profitability to payment leakage, labor inefficiency, and disconnected data. MedPact delivers up to 30% profitability improvement over 3 years, starting with near-term cash lift and compounding into durable EBITDA.

---

## 🚀 Template System

This website serves as a **reusable template** for creating professional corporate websites:

### Quick Start (New Website in 30 Minutes)
```bash
# Automated setup
./create-new-site.sh "Company Name" "folder-name"

# Manual setup
cp -r "MedPACT RCM Website" "../New Company"
cd "../New Company"
npm install
# Edit config/branding.ts
npm run dev
```

### Template Documentation
- **[TEMPLATE_SUMMARY.md](TEMPLATE_SUMMARY.md)** - Complete overview & value proposition
- **[QUICK_START.md](QUICK_START.md)** - 5-minute setup guide
- **[TEMPLATE_GUIDE.md](TEMPLATE_GUIDE.md)** - Comprehensive technical documentation
- **[TEMPLATE_EXAMPLES.md](TEMPLATE_EXAMPLES.md)** - 6 industry-specific examples
- **[config/branding.example.ts](config/branding.example.ts)** - Configuration template

### Industry Examples Included
✅ FinTech (PayFlow Solutions)  
✅ Law Firm (Sterling & Associates)  
✅ SaaS Marketing (GrowthMetrics)  
✅ Healthcare Clinic (Wellness Partners)  
✅ Real Estate (Skyline Properties)  
✅ Healthcare Tech (MedPACT RCM - this site)

---

## Tech Stack
- **Framework**: Next.js 14.0.0 (Pages Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.18
- **UI Components**: shadcn/ui (Button, Card, Badge)
- **Icons**: Lucide React 0.263.0
- **Utilities**: class-variance-authority, clsx, tailwind-merge

## Project Structure
```
├── components/
│   ├── ImageUpload.tsx          # Team photo upload component
│   ├── PublicHeader.tsx         # Site navigation header
│   ├── PublicFooter.tsx         # Site footer
│   └── ui/
│       ├── button.tsx           # Reusable button component
│       ├── card.tsx             # Card components
│       └── badge.tsx            # Badge components
├── pages/
│   ├── index.tsx                # Landing page
│   ├── about.tsx                # Team & advisors page
│   ├── mission.tsx              # Mission statement
│   ├── platform.tsx             # RCM value chain coverage
│   ├── outcomes.tsx             # Proven results & metrics
│   ├── innovations.tsx          # Platform innovations
│   ├── payer-provider.tsx       # Payer intelligence page
│   ├── contact.tsx              # General contact form
│   ├── become-user.tsx          # User signup form
│   ├── become-partner.tsx       # Partner inquiry form
│   ├── book-demo.tsx            # Demo scheduling
│   └── api/
│       ├── contact.ts           # Form submission handler
│       └── upload-image.ts      # Image upload API
├── public/
│   └── team-photos/             # Team member photos
└── lib/
    └── utils.ts                 # Utility functions
```

## Key Features

### 10-Page Marketing Website
1. **Landing Page** - Hero, features, problem/solution, quick navigation
2. **About** - Leadership team & advisors with photo upload
3. **Mission** - Company mission and value proposition
4. **Platform** - Complete RCM value chain coverage
5. **Outcomes** - Proven results and success metrics
6. **Innovations** - Platform differentiators
7. **Payer-Provider** - Intelligence for both sides
8. **Contact** - General inquiry form
9. **Become a User** - User signup form
10. **Book Demo** - Demo scheduling with date/time picker

### Lead Generation Forms
- Contact form with context tracking
- User signup form
- Partner inquiry form
- Demo booking with scheduling preferences

### Image Upload System
- Hover-to-upload interface for all team members
- Client-side preview with FileReader
- File validation (type & size)
- Ready for production server-side upload

### Design System
- Gradient backgrounds: `from-blue-50 via-indigo-50 to-purple-50`
- Brand colors: Cyan-600, Emerald-600
- Rounded corners: `rounded-2xl` standard
- Consistent spacing and typography

## Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
# or specify a port
PORT=3001 npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or your specified port) to view.

### Build for Production
```bash
npm run build
npm start
```

## Key Messaging

### Core Positioning
- **"Private equity scaled ownership — but struggled to scale execution. MedPact fixes that."**
- **"Not reports — results."**
- Addresses payment leakage, labor inefficiency, and disconnected data
- Up to 30% profitability improvement over 3 years

### RCM Value Chain
1. **Pre-Service (Revenue Protection)** - Price transparency, eligibility, contract modeling
2. **Point of Care (Revenue Capture)** - Charge capture, coding optimization
3. **Post-Service (Revenue Recovery)** - Claims management, denials intelligence
4. **Strategic Intelligence (Revenue Optimization)** - Analytics, payer negotiation
5. **Compliance & Risk (Always-On)** - CMS, HIPAA, audit readiness

### GTM Logic
- **Core Bundle**: Price Transparency + Eligibility + Claims + Dashboards
- **Expansion Modules**: Coding Optimization, Workflow Automation, Patient Engagement
- **Enterprise Upsell**: Contract Intelligence + Payer Negotiation AI

## Team

### Leadership
- Dr. Christopher Williams - Founder & CEO
- Dave Davis - Chief Operating Officer
- Terrence Duckett - Chief Strategy and Marketing Officer
- Robert Ostovich - Director of Sales
- Dr. Jason Bacharach - Medical Director
- Bill Williams - Executive Advisor
- Lindsay Saddic - Communications Director

### Advisors
- Dr. Scott Edmonds - Clinical Innovation
- Julia Lee - Practice Optimization
- Brian Murphy - Strategy & Product Messaging

## Image Upload Guide
See [IMAGE_UPLOAD_GUIDE.md](./IMAGE_UPLOAD_GUIDE.md) for detailed instructions on:
- How to upload team photos
- Image requirements and specifications
- Team member IDs
- Production deployment setup

## API Endpoints

### POST /api/contact
Handles form submissions from contact, become-user, and become-partner pages.

**Payload:**
```json
{
  "name": "string",
  "email": "string",
  "company": "string (optional)",
  "message": "string",
  "context": "contact|become-user|become-partner"
}
```

### POST /api/upload-image (Future)
Handles team photo uploads (requires formidable package for production).

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Deployment
```bash
npm run build
# Deploy .next/ and public/ directories to your hosting provider
```

## Environment Variables
Currently none required. For production:
- Add email service API keys
- Add CRM integration credentials
- Add analytics tracking IDs

## Contributing
This is a private company website. Contact the development team for contribution guidelines.

## License
Proprietary - MedPACT RCM © 2025

## Support
For technical issues or questions:
- Contact: [Your contact info]
- Documentation: See guides in project root
- Repository: https://github.com/ChrisWilliams2020/MedPACT-RCM-Website

---

**Last Updated**: December 30, 2025
**Version**: 1.0.0
**Status**: Production Ready
# Deployment trigger
# Deployment trigger
