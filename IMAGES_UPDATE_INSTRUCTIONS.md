# Image Update Instructions

## How to Add New Images

1. **Create the update folder:**
   - Navigate to `public/images/`
   - Create a new folder called `update`

2. **Add your images:**
   - Place all your new images in `public/images/update/`
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

3. **Update the image list:**
   - Open `src/components/UpdateGallery.tsx`
   - Find the `updateImages` array (around line 7)
   - Update the image paths to match your actual filenames

   Example:
   ```typescript
   const updateImages = [
     '/images/update/photo1.jpg',
     '/images/update/photo2.jpg',
     '/images/update/photo3.jpg',
     // Add as many as you need
   ];
   ```

## Changes Made

✅ **Logo background changed to white** with rounded corners
✅ **Logo text size increased** from `text-2xl` to `text-3xl`
✅ **New gallery section created** - displays in a responsive grid
✅ **Lightbox feature added** - click any image to view full size

## New Section Features

- Responsive masonry grid (1 column mobile, 2 tablet, 3 desktop)
- Smooth animations on scroll
- Hover effects with zoom
- Click to view full-size images in lightbox
- Maintains existing images in other galleries

## Section Order

1. Hero
2. Video Section
3. Services
4. Gallery (existing)
5. Secondary Gallery (existing)
6. **Update Gallery (NEW)** ← Your new images here
7. Locations
8. Footer
