#!/bin/bash

# Corporate Website Template Generator
# Usage: ./create-new-site.sh "Company Name" "company-folder"

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║  Corporate Website Template Generator  ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

# Get inputs
if [ -z "$1" ]; then
  read -p "Enter new company name: " COMPANY_NAME
else
  COMPANY_NAME="$1"
fi

if [ -z "$2" ]; then
  FOLDER_NAME=$(echo "$COMPANY_NAME" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')
else
  FOLDER_NAME="$2"
fi

TEMPLATE_DIR="."
NEW_DIR="../$FOLDER_NAME"

echo -e "${YELLOW}Creating new website for: ${COMPANY_NAME}${NC}"
echo -e "${YELLOW}Folder name: ${FOLDER_NAME}${NC}"
echo ""

# Step 1: Copy template
echo -e "${BLUE}[1/6] Copying template files...${NC}"
cp -r "$TEMPLATE_DIR" "$NEW_DIR"
cd "$NEW_DIR"

# Step 2: Clean up
echo -e "${BLUE}[2/6] Cleaning up...${NC}"
rm -rf .git
rm -rf .next
rm -rf node_modules
rm -f create-new-site.sh

# Step 3: Update package.json
echo -e "${BLUE}[3/6] Updating package.json...${NC}"
PACKAGE_NAME=$(echo "$FOLDER_NAME" | tr '[:upper:]' '[:lower:]')
sed -i '' "s/\"name\": \"medpact-rcm-website\"/\"name\": \"$PACKAGE_NAME\"/" package.json
sed -i '' "s/\"description\": \".*\"/\"description\": \"$COMPANY_NAME corporate website\"/" package.json

# Step 4: Create branding config
echo -e "${BLUE}[4/6] Creating branding configuration...${NC}"
if [ -f "config/branding.example.ts" ]; then
  cp config/branding.example.ts config/branding.ts
  echo -e "${GREEN}✓ Created config/branding.ts${NC}"
  echo -e "${YELLOW}  → Edit this file to customize your website${NC}"
fi

# Step 5: Update README
echo -e "${BLUE}[5/6] Updating README...${NC}"
cat > README.md << EOF
# $COMPANY_NAME Website

Corporate marketing website built with Next.js, React, and TypeScript.

## Quick Start

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## Customization

1. **Branding**: Edit \`config/branding.ts\` to update company information, colors, and content
2. **Team Photos**: Add team member photos to \`public/team-photos/\`
3. **Logo**: Replace \`public/logo.png\` and \`public/favicon.ico\`
4. **Content**: Update page content in \`pages/\` directory

## Documentation

- [Template Guide](TEMPLATE_GUIDE.md) - How to use this template
- [Deployment Checklist](DEPLOYMENT_CHECKLIST.md) - Production deployment guide
- [Image Upload Guide](IMAGE_UPLOAD_GUIDE.md) - Team photo upload feature

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React

## Project Structure

\`\`\`
pages/           # All website pages
components/      # Reusable React components
config/          # Branding and configuration
public/          # Static assets (images, fonts)
styles/          # Global CSS and Tailwind
\`\`\`

## Need Help?

- Check [TEMPLATE_GUIDE.md](TEMPLATE_GUIDE.md) for detailed instructions
- Review the [Next.js documentation](https://nextjs.org/docs)
- See [Tailwind CSS docs](https://tailwindcss.com/docs) for styling

---

Built with the Corporate Website Template
EOF

# Step 6: Initialize git
echo -e "${BLUE}[6/6] Initializing git repository...${NC}"
git init
git add .
git commit -m "Initial commit: $COMPANY_NAME website from template"

echo ""
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║         Setup Complete! ✓               ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo -e "  1. cd ../$FOLDER_NAME"
echo -e "  2. npm install"
echo -e "  3. Edit ${BLUE}config/branding.ts${NC} with your company information"
echo -e "  4. npm run dev"
echo -e "  5. Visit http://localhost:3000"
echo ""
echo -e "${YELLOW}Customization checklist:${NC}"
echo -e "  □ Update config/branding.ts (MOST IMPORTANT)"
echo -e "  □ Add team photos to public/team-photos/"
echo -e "  □ Replace public/logo.png"
echo -e "  □ Replace public/favicon.ico"
echo -e "  □ Review and update pages/ content"
echo -e "  □ Test all pages and links"
echo -e "  □ Deploy (see DEPLOYMENT_CHECKLIST.md)"
echo ""
echo -e "${GREEN}Happy building! 🚀${NC}"
