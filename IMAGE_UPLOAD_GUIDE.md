# Image Upload Feature

## Overview
The About page now includes an image upload feature for all team members and advisors.

## How to Use

### 1. Uploading Images
- Navigate to the About page at `/about`
- Hover over any team member or advisor photo placeholder
- Click on the photo area when the upload icon appears
- Select an image file (JPG, PNG, GIF, etc.)
- The image will be displayed immediately

### 2. Image Requirements
- **File Type**: Any image format (JPG, PNG, GIF, WebP, etc.)
- **File Size**: Maximum 5MB
- **Recommended Dimensions**: 400x400px square for best results

### 3. Team Member IDs
Each person has a unique ID for image storage:

**Leadership Team:**
- christopher-williams (Dr. Christopher Williams)
- dave-davis (Dave Davis)
- terrence-duckett (Terrence Duckett)
- robert-ostovich (Robert Ostovich)
- jason-bacharach (Dr. Jason Bacharach)
- bill-williams (Bill Williams)
- lindsay-saddic (Lindsay Saddic)

**Advisors:**
- scott-edmonds (Dr. Scott Edmonds)
- julia-lee (Julia Lee)
- brian-murphy (Brian Murphy)

### 4. Storage Location
Images are stored locally in the browser using FileReader API. For production:
- Uncomment the API upload code in `/components/ImageUpload.tsx`
- Images will be saved to `/public/team-photos/`
- Files will be named using the person's ID (e.g., `christopher-williams.jpg`)

### 5. Making It Permanent (Production Setup)

To enable server-side image storage:

1. Install the formidable package:
   ```bash
   npm install formidable
   npm install --save-dev @types/formidable
   ```

2. Uncomment the upload code in `/components/ImageUpload.tsx` (lines 36-44)

3. The API endpoint at `/pages/api/upload-image.ts` will handle the server upload

4. Images will persist across page refreshes and deployments

## Features
- ✅ Hover to upload interface
- ✅ Instant preview after selection
- ✅ File validation (type and size)
- ✅ User-friendly icons (shows user icon when no photo)
- ✅ Responsive design
- ✅ Ready for production deployment

## Current State
- Images are stored in browser memory (session-based)
- To persist images permanently, enable server-side upload (see step 5 above)
