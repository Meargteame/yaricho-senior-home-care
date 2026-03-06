# Hostinger Deployment Guide - Yaricho Senior Home Care

## 📦 Deployment Package Created

**File**: `yaricho-hostinger-deployment.zip`
**Location**: `C:\Users\Tesfalem\Desktop\client\yaricho-hostinger-deployment.zip`

## 📋 What's Included in the ZIP

✅ `.next/` - Built production files
✅ `public/` - All images and static assets
✅ `package.json` - Dependencies list
✅ `package-lock.json` - Locked dependency versions
✅ `next.config.mjs` - Next.js configuration
✅ `.env.example` - Environment variables template

## 🚀 Step-by-Step Deployment to Hostinger

### Step 1: Upload to Hostinger
1. Log in to your **hPanel** (Hostinger control panel)
2. Go to **File Manager**
3. Navigate to your website directory (usually `public_html` or `yaricho-senior-home-care`)
4. Click **Upload** button
5. Select `yaricho-hostinger-deployment.zip`
6. Wait for upload to complete

### Step 2: Extract the Files
1. In File Manager, find the uploaded `yaricho-hostinger-deployment.zip`
2. Right-click on it
3. Select **Extract**
4. Choose to extract to the current directory
5. Delete the zip file after extraction (optional)

### Step 3: Install Dependencies via SSH
You need to install Node.js dependencies on the server.

**Option A: Using SSH Terminal (Recommended)**
1. In hPanel, go to **Advanced** → **SSH Access**
2. Enable SSH if not already enabled
3. Connect via SSH (use provided credentials)
4. Navigate to your project directory:
   ```bash
   cd domains/yourdomain.com/public_html/yaricho-senior-home-care
   ```
5. Install dependencies:
   ```bash
   npm install --production
   ```

**Option B: Upload node_modules (Not Recommended - Very Large)**
If SSH is not available, you can zip and upload `node_modules`, but this will be a very large file (100+ MB).

### Step 4: Set Up Environment Variables
1. In File Manager, create a file named `.env.local`
2. Add your environment variables:
   ```
   NODE_ENV=production
   GEMINI_API_KEY=your_api_key_here
   ```

### Step 5: Configure Node.js Application
1. In hPanel, go to **Advanced** → **Node.js**
2. Click **Create Application**
3. Set the following:
   - **Node.js version**: 18.x or higher
   - **Application mode**: Production
   - **Application root**: `/domains/yourdomain.com/public_html/yaricho-senior-home-care`
   - **Application URL**: Your domain
   - **Application startup file**: `node_modules/next/dist/bin/next`
   - **Application startup command**: `start`
   - **Port**: (Hostinger will assign automatically)

### Step 6: Start the Application
1. In the Node.js section, click **Start** on your application
2. Wait for the application to start (may take 30-60 seconds)
3. Visit your domain to see the live site

## 🔧 Alternative: Using PM2 (Advanced)

If Hostinger supports PM2, you can use this method:

1. SSH into your server
2. Install PM2 globally:
   ```bash
   npm install -g pm2
   ```
3. Create a `ecosystem.config.js` file:
   ```javascript
   module.exports = {
     apps: [{
       name: 'yaricho-senior-home-care',
       script: 'node_modules/next/dist/bin/next',
       args: 'start',
       cwd: '/path/to/your/project',
       env: {
         NODE_ENV: 'production',
         PORT: 3000
       }
     }]
   }
   ```
4. Start with PM2:
   ```bash
   pm2 start ecosystem.config.js
   pm2 save
   pm2 startup
   ```

## 📝 Important Notes

### Port Configuration
- Hostinger typically uses port 3000 for Node.js apps
- Make sure your domain is pointed to the correct port
- Check Hostinger's Node.js documentation for specific port requirements

### Domain Setup
1. Go to **Domains** in hPanel
2. Point your domain to the Node.js application
3. Wait for DNS propagation (can take up to 24 hours)

### SSL Certificate
1. In hPanel, go to **SSL**
2. Enable **Free SSL** for your domain
3. Force HTTPS redirect

## 🐛 Troubleshooting

### Application Won't Start
- Check Node.js version (must be 18.x or higher)
- Verify all files were extracted correctly
- Check error logs in hPanel → Node.js → Logs

### Images Not Loading
- Verify `public/` folder was uploaded
- Check file permissions (should be 755 for folders, 644 for files)
- Clear browser cache

### 500 Internal Server Error
- Check `.env.local` file exists and has correct values
- Verify `node_modules` are installed
- Check application logs

### Port Already in Use
- Stop other Node.js applications
- Or change the port in application settings

## 📊 File Structure on Server

After deployment, your structure should look like:
```
yaricho-senior-home-care/
├── .next/              (built files)
├── public/             (images, static files)
├── node_modules/       (after npm install)
├── package.json
├── package-lock.json
├── next.config.mjs
└── .env.local          (create this)
```

## 🔄 Future Updates

When you need to update the site:
1. Run `npm run build` locally
2. Zip only the `.next` folder
3. Upload and extract on Hostinger
4. Restart the Node.js application in hPanel

## 📞 Hostinger Support

If you encounter issues:
- Check Hostinger Knowledge Base: https://support.hostinger.com
- Contact Hostinger Support via Live Chat
- Check Node.js application logs in hPanel

## ✅ Deployment Checklist

- [ ] Upload `yaricho-hostinger-deployment.zip`
- [ ] Extract files in correct directory
- [ ] Install dependencies via SSH (`npm install --production`)
- [ ] Create `.env.local` file
- [ ] Configure Node.js application in hPanel
- [ ] Start the application
- [ ] Point domain to application
- [ ] Enable SSL certificate
- [ ] Test the live site

---

**Good luck with your deployment!** 🚀
