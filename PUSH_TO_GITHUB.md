# Push HabittoWebsite to GitHub - Step by Step

## Step 1: Create the Repository on GitHub

1. Go to **https://github.com/new** (or click the **"+"** icon → **"New repository"**)
2. Fill in:
   - **Repository name**: `habitto-website`
   - **Description**: "Official website for Habitto habit tracking app"
   - **Visibility**: Choose **Public** or **Private**
   - **IMPORTANT**: Do NOT check any boxes (no README, no .gitignore, no license)
3. Click the green **"Create repository"** button

## Step 2: Copy the Repository URL

After creating the repo, GitHub will show you a page with setup instructions. You'll see a URL like:
- `https://github.com/YOUR_USERNAME/habitto-website.git`

**Copy this URL** - you'll need it in the next step.

## Step 3: Push Your Code

Open Terminal and run these commands (replace YOUR_USERNAME with your actual GitHub username):

```bash
cd /Users/chloe/Desktop/HabittoWebsite

# Add GitHub as remote (use the URL from Step 2)
git remote add origin https://github.com/YOUR_USERNAME/habitto-website.git

# Push your code to GitHub
git push -u origin main
```

## Step 4: Verify

1. Go back to GitHub and refresh the page
2. You should now see all your files: `index.html`, `styles.css`, `script.js`, etc.

## Troubleshooting

**If you get "remote origin already exists" error:**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/habitto-website.git
```

**If you get authentication errors:**
- You may need to use a Personal Access Token instead of password
- Or use SSH: `git@github.com:YOUR_USERNAME/habitto-website.git`

**If the branch name is different:**
```bash
git branch  # Check current branch name
git push -u origin master  # If it's 'master' instead of 'main'
```







