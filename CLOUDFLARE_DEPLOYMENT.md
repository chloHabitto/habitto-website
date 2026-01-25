# Cloudflare Pages Deployment Guide

Quick guide to deploy the Habitto website to Cloudflare Pages.

## 🚀 Quick Deploy Steps

### Method 1: Direct Upload (Easiest)

1. **Go to Cloudflare Dashboard**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com)
   - Sign up or log in

2. **Create Pages Project**
   - Click **Pages** in the sidebar
   - Click **Create a project**
   - Select **Upload assets**

3. **Upload Your Files**
   - Drag and drop the entire `HabittoWebsite` folder
   - Or click to browse and select the folder
   - Cloudflare will automatically detect it's a static site

4. **Configure Project**
   - **Project name**: `habitto-website` (or any name you prefer)
   - **Production branch**: Leave as default (not needed for direct upload)
   - Click **Save and Deploy**

5. **Wait for Deployment**
   - Deployment usually takes 1-2 minutes
   - Your site will be live at `habitto-website.pages.dev`

### Method 2: Git Integration (Recommended for Updates)

1. **Push to GitHub/GitLab**
   ```bash
   cd HabittoWebsite
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/habitto-website.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - In Cloudflare Pages, click **Create a project**
   - Select **Connect to Git**
   - Authorize Cloudflare to access your repository
   - Select your repository
   - Configure build settings:
     - **Framework preset**: None (static site)
     - **Build command**: (leave empty)
     - **Build output directory**: `/` (root)
   - Click **Save and Deploy**

3. **Automatic Deployments**
   - Every push to `main` branch will automatically deploy
   - Preview deployments are created for pull requests

## 🌐 Connect Custom Domain

### If Your Domain is on Cloudflare:

1. **Add Domain to Pages**
   - Go to your Pages project
   - Click **Custom domains** → **Set up a custom domain**
   - Enter `habitto.nl` and click **Continue**
   - Cloudflare will automatically configure DNS

2. **Add www Subdomain (Optional)**
   - Click **Set up a custom domain** again
   - Enter `www.habitto.nl`
   - Cloudflare will create a redirect to `habitto.nl`

### If Your Domain is Elsewhere (e.g., Squarespace):

1. **Get CNAME from Cloudflare**
   - In Pages project, go to **Custom domains**
   - Click **Set up a custom domain**
   - Enter `habitto.nl`
   - Cloudflare will show you a CNAME record like: `habitto-website.pages.dev`

2. **Add DNS Records**
   - Log into your domain registrar (Squarespace, etc.)
   - Go to DNS settings
   - Add CNAME record:
     - **Name**: `@` (or root domain)
     - **Value**: `habitto-website.pages.dev`
   - Add another CNAME for www:
     - **Name**: `www`
     - **Value**: `habitto-website.pages.dev`

3. **Wait for DNS Propagation**
   - Usually takes 24-48 hours
   - Check status at [whatsmydns.net](https://www.whatsmydns.net)

## 🔒 SSL/HTTPS

- Cloudflare automatically provides free SSL certificates
- HTTPS is enabled by default
- No configuration needed - it just works!

## ⚡ Cloudflare Features

### Automatic CDN
- Your site is cached on Cloudflare's global network
- Faster loading times worldwide
- Automatic optimization

### Analytics
- Built-in analytics in Cloudflare dashboard
- See page views, visitors, and more
- No code changes needed

### Custom Headers
- The `_headers` file in your project configures security headers
- Automatically applied to all requests

## 📝 Configuration Files

Your project includes:
- `_headers` - Security and caching headers
- `wrangler.toml` - Optional Cloudflare Workers configuration

## 🔄 Updating Your Site

### If Using Direct Upload:
- Upload the updated folder again
- Cloudflare will create a new deployment

### If Using Git:
- Push changes to your repository
- Cloudflare automatically deploys updates
- Preview deployments for pull requests

## ✅ Verification Checklist

After deployment, verify:
- ✅ Site loads at `habitto-website.pages.dev`
- ✅ Custom domain works (if configured)
- ✅ HTTPS is enabled (green lock icon)
- ✅ All pages load correctly
- ✅ Mobile responsive design works
- ✅ All links and buttons function

## 🆘 Troubleshooting

**Site not deploying?**
- Check that all files are in the root directory
- Verify `index.html` exists
- Check Cloudflare dashboard for error messages

**Custom domain not working?**
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check domain status in Cloudflare dashboard

**HTTPS not working?**
- Wait a few hours after DNS propagates
- Cloudflare SSL usually activates automatically
- Check SSL/TLS settings in Cloudflare dashboard

## 🎉 You're Done!

Your Habitto website is now live on Cloudflare Pages with:
- ✅ Global CDN for fast loading
- ✅ Free SSL certificate
- ✅ Automatic deployments (if using Git)
- ✅ Built-in analytics
- ✅ DDoS protection



