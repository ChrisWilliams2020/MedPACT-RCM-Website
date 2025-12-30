/**
 * Corporate Website Branding Configuration Template
 * 
 * Copy this file to create a new website:
 * 1. Copy entire project folder
 * 2. Rename this file to branding.ts
 * 3. Update all values below
 * 4. Import and use in your pages
 */

import {
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Cpu,
  BarChart3,
  Star,
  ArrowRight,
  ChevronRight,
  DollarSign,
  Zap,
  Lock,
  Users,
  Target,
  Award
} from "lucide-react";

export const siteConfig = {
  // ==================== COMPANY INFO ====================
  company: {
    name: "Your Company Name",
    legalName: "Your Company Legal Name, Inc.",
    tagline: "Your Company Tagline or Slogan",
    description: "Brief description of what your company does and who you serve",
    founded: "2024",
    employees: "50+",
    headquarters: "San Francisco, CA"
  },

  // ==================== BRAND COLORS ====================
  // Use Tailwind color classes
  colors: {
    // Primary brand color (used for CTAs, links, accents)
    primary: "blue-600",
    primaryHover: "blue-700",
    primaryLight: "blue-50",
    primaryDark: "blue-800",
    
    // Secondary brand color
    secondary: "slate-600",
    secondaryHover: "slate-700",
    
    // Accent color (for highlights, badges)
    accent: "indigo-600",
    accentLight: "indigo-100",
    
    // Background gradient (adjust for different vibes)
    background: "from-blue-50 via-slate-50 to-blue-100",
    // Alternatives:
    // Tech: "from-blue-50 via-purple-50 to-indigo-100"
    // Finance: "from-slate-50 via-gray-50 to-blue-50"
    // Healthcare: "from-teal-50 via-emerald-50 to-cyan-100"
    // Creative: "from-rose-50 via-orange-50 to-amber-100"
    
    // Text colors
    textPrimary: "gray-900",
    textSecondary: "gray-800",
    textMuted: "gray-700",
    textLight: "gray-600"
  },

  // ==================== TOP BANNER ====================
  banner: {
    enabled: true,
    icon: "🎯", // Emoji or remove for no icon
    message: "Our goal for you is 30% increase in [METRIC] over [TIMEFRAME]",
    bgClass: "bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600"
  },

  // ==================== HERO SECTION ====================
  hero: {
    // Main headline (use \n for line breaks)
    headline: "Maximizing [VALUE 1].\n[VALUE 2].\n[VALUE 3].",
    
    // Supporting text
    subheadline: "Transform your [INDUSTRY] with [YOUR SOLUTION] that delivers measurable results.",
    
    // Call-to-action buttons
    primaryCTA: {
      text: "Get Started",
      href: "/book-demo"
    },
    secondaryCTA: {
      text: "Watch Demo",
      href: "#demo-video"
    },
    
    // Trust indicators under hero
    trustIndicators: [
      { icon: "Check", text: "30% [Metric] Improvement" },
      { icon: "Check", text: "Industry Certified" },
      { icon: "Check", text: "Enterprise Ready" }
    ]
  },

  // ==================== THREE CORE PILLARS ====================
  pillars: [
    {
      icon: TrendingUp,
      iconColor: "blue-600",
      title: "First Core Value",
      description: "Detailed explanation of your first core principle and how it benefits clients. Focus on outcomes and impact.",
      features: [
        "Specific benefit or feature #1",
        "Specific benefit or feature #2",
        "Specific benefit or feature #3",
        "Specific benefit or feature #4"
      ]
    },
    {
      icon: Sparkles,
      iconColor: "blue-600",
      title: "Second Core Value",
      description: "Detailed explanation of your second core principle. Emphasize what makes you unique and different.",
      features: [
        "Specific benefit or feature #1",
        "Specific benefit or feature #2",
        "Specific benefit or feature #3",
        "Specific benefit or feature #4"
      ]
    },
    {
      icon: ShieldCheck,
      iconColor: "blue-600",
      title: "Third Core Value",
      description: "Detailed explanation of your third core principle. Highlight trust, reliability, or quality factors.",
      features: [
        "Specific benefit or feature #1",
        "Specific benefit or feature #2",
        "Specific benefit or feature #3",
        "Specific benefit or feature #4"
      ]
    }
  ],

  // ==================== PLATFORM/PRODUCT FEATURES ====================
  platform: {
    sectionTitle: "Complete [PRODUCT/SERVICE] platform",
    sectionSubtitle: "Everything you need to [ACHIEVE OUTCOME], all in one place",
    
    features: [
      {
        icon: ShieldCheck,
        iconColor: "blue-600",
        title: "Feature Category 1",
        description: "What this feature does and why it matters",
        capabilities: [
          "Specific capability #1",
          "Specific capability #2",
          "Specific capability #3"
        ]
      },
      {
        icon: DollarSign,
        iconColor: "blue-600",
        title: "Feature Category 2",
        description: "What this feature does and why it matters",
        capabilities: [
          "Specific capability #1",
          "Specific capability #2",
          "Specific capability #3"
        ]
      },
      {
        icon: BarChart3,
        iconColor: "blue-600",
        title: "Feature Category 3",
        description: "What this feature does and why it matters",
        capabilities: [
          "Specific capability #1",
          "Specific capability #2",
          "Specific capability #3"
        ]
      },
      {
        icon: Cpu,
        iconColor: "blue-600",
        title: "Feature Category 4",
        description: "What this feature does and why it matters",
        capabilities: [
          "Specific capability #1",
          "Specific capability #2",
          "Specific capability #3"
        ]
      }
    ]
  },

  // ==================== RESULTS/METRICS ====================
  results: {
    sectionTitle: "Results that speak for themselves",
    sectionSubtitle: "Real outcomes from real [CUSTOMER TYPE]",
    
    metrics: [
      {
        value: "30%",
        label: "Metric Name",
        description: "Context or timeframe",
        prefix: "", // "$", "+", etc.
        suffix: "" // "%", "x", etc.
      },
      {
        value: "95%+",
        label: "Metric Name",
        description: "Context or comparison",
        prefix: "",
        suffix: ""
      },
      {
        value: "40%",
        label: "Metric Name",
        description: "Context or benefit",
        prefix: "",
        suffix: ""
      }
    ],
    
    ctaText: "See Case Studies",
    ctaHref: "/outcomes"
  },

  // ==================== QUICK NAVIGATION ====================
  quickLinks: {
    sectionTitle: "Explore [COMPANY NAME]",
    
    links: [
      {
        href: "/platform",
        title: "Platform",
        description: "Complete solution overview",
        icon: Cpu,
        iconColor: "blue-600"
      },
      {
        href: "/outcomes",
        title: "Outcomes",
        description: "Proven performance",
        icon: BarChart3,
        iconColor: "blue-600"
      },
      {
        href: "/innovations",
        title: "Innovation",
        description: "Technology & approach",
        icon: Sparkles,
        iconColor: "blue-600"
      },
      {
        href: "/about",
        title: "About Us",
        description: "Our team & mission",
        icon: Star,
        iconColor: "blue-600"
      },
      {
        href: "/contact",
        title: "Contact",
        description: "Get in touch",
        icon: ArrowRight,
        iconColor: "blue-600"
      },
      {
        href: "/book-demo",
        title: "Book Demo",
        description: "See it in action",
        icon: ChevronRight,
        iconColor: "blue-600",
        featured: true // Makes this link stand out
      }
    ]
  },

  // ==================== NAVIGATION ====================
  navigation: {
    logo: {
      text: "Company", // Short name for logo
      showIcon: true,
      iconLetter: "C" // First letter for icon
    },
    
    mainMenu: [
      { label: "Platform", href: "/platform" },
      { label: "Innovation", href: "/innovations" },
      { label: "Outcomes", href: "/outcomes" },
      { label: "About", href: "/about" }
    ],
    
    cta: {
      text: "Get Started",
      href: "/book-demo"
    }
  },

  // ==================== FOOTER ====================
  footer: {
    companyDescription: "Brief company description for footer. One or two sentences max.",
    
    columns: [
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
    ],
    
    legal: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Security", href: "/security" }
    ],
    
    copyright: "[COMPANY NAME] Inc."
  },

  // ==================== CONTACT INFO ====================
  contact: {
    email: "contact@yourcompany.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Main Street",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "USA"
    },
    hours: "Monday - Friday, 9am - 5pm PST"
  },

  // ==================== SOCIAL MEDIA ====================
  social: {
    linkedin: "https://linkedin.com/company/yourcompany",
    twitter: "https://twitter.com/yourcompany",
    facebook: "https://facebook.com/yourcompany",
    instagram: "https://instagram.com/yourcompany",
    youtube: "https://youtube.com/@yourcompany"
  },

  // ==================== SEO ====================
  seo: {
    title: "Company Name - Tagline",
    description: "Company description for search engines (150-160 characters ideal)",
    keywords: "keyword1, keyword2, keyword3, industry, solution",
    ogImage: "/og-image.png", // Open Graph image for social sharing
    twitterHandle: "@yourcompany"
  },

  // ==================== TEAM ====================
  // Note: Team members are typically stored in a separate file or database
  // This is just for reference structure
  team: {
    leadership: [
      {
        name: "Full Name",
        title: "Chief Executive Officer",
        bio: "Brief bio highlighting experience and expertise",
        photo: "/team-photos/person.jpg",
        linkedin: "https://linkedin.com/in/person",
        email: "person@company.com"
      }
      // Add more team members...
    ],
    
    advisors: [
      {
        name: "Full Name",
        title: "Advisor Role",
        bio: "Brief bio and qualifications",
        photo: "/team-photos/advisor.jpg"
      }
      // Add more advisors...
    ]
  }
};

// Helper function to get color classes
export function getColorClass(type: 'primary' | 'secondary' | 'accent', variant: 'default' | 'hover' | 'light' | 'dark' = 'default') {
  const colorMap = {
    primary: {
      default: siteConfig.colors.primary,
      hover: siteConfig.colors.primaryHover,
      light: siteConfig.colors.primaryLight,
      dark: siteConfig.colors.primaryDark
    },
    secondary: {
      default: siteConfig.colors.secondary,
      hover: siteConfig.colors.secondaryHover,
      light: siteConfig.colors.secondary,
      dark: siteConfig.colors.secondary
    },
    accent: {
      default: siteConfig.colors.accent,
      hover: siteConfig.colors.accent,
      light: siteConfig.colors.accentLight,
      dark: siteConfig.colors.accent
    }
  };
  
  return colorMap[type][variant];
}

export default siteConfig;
