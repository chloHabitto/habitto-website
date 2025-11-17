# 🚀 Quick Start: Deploy habitto.nl

## Fastest Way: Netlify (5 minutes)

### Step 1: Deploy
1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign up/login (free)
3. Click **"Add new site"** → **"Deploy manually"**
4. Drag the entire `website` folder onto the page
5. ✅ Your site is now live at `habitto-xyz123.netlify.app`

### Step 2: Connect Domain
1. In Netlify, go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `habitto.nl`
4. Netlify shows you DNS records to add

### Step 3: Update Squarespace DNS
1. Log into Squarespace → **Settings** → **Domains** → **habitto.nl**
2. Click **DNS Settings**
3. Add these records:
   ```
   Type: A
   Host: @
   Points to: 75.2.60.5
   
   Type: CNAME
   Host: www
   Points to: [your-netlify-site].netlify.app
   ```
4. Save and wait 24-48 hours

### Step 4: Done! 🎉
Once DNS propagates, `habitto.nl` will work!

---

## Alternative: Vercel (Also 5 minutes)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click **"Add New Project"**
3. Drag `website` folder or connect GitHub
4. Go to **Settings** → **Domains** → Add `habitto.nl`
5. Follow DNS instructions (similar to Netlify)

---

## Need Help?

See `DEPLOYMENT_GUIDE.md` for detailed instructions and troubleshooting.

