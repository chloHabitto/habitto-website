# GitHub Setup Guide

Your website is now ready to push to GitHub! Follow these steps:

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in:
   - **Repository name**: `habitto-website` (or any name you like)
   - **Description**: "Official website for Habitto habit tracking app"
   - **Visibility**: Choose **Public** or **Private**
   - **DO NOT** check "Initialize with README" (we already have files)
4. Click **"Create repository"**

## Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Use these:

```bash
cd /Users/chloe/Desktop/HabittoWebsite

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/habitto-website.git

# Push to GitHub
git push -u origin main
```

**Or if you prefer SSH:**
```bash
git remote add origin git@github.com:YOUR_USERNAME/habitto-website.git
git push -u origin main
```

## Step 3: Connect to Netlify (Now Easier!)

Now that your code is on GitHub:

1. Go back to Netlify
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub**
4. Authorize Netlify to access your GitHub
5. Select your `habitto-website` repository
6. Click **"Deploy site"**

**Benefits:**
- ✅ Automatic deployments when you push changes
- ✅ No need to drag and drop files
- ✅ Version history of all changes
- ✅ Easy collaboration

## Quick Commands Reference

```bash
# Make changes, then commit and push:
git add .
git commit -m "Your commit message"
git push

# Netlify will automatically deploy your changes!
```

## That's It! 🎉

Your website is now on GitHub and can be automatically deployed to Netlify!







