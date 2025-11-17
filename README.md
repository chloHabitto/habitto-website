# Habitto Website

A modern, responsive landing page for the Habitto habit tracking app.

## 🚀 Features

- **Modern Design**: Matches Habitto's design system with navy blue primary colors
- **Fully Responsive**: Works beautifully on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects and smooth scrolling
- **Interactive Elements**: Mobile menu, animated habit cards, and parallax effects
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📁 File Structure

```
website/
├── index.html      # Main HTML file
├── styles.css      # All styles matching Habitto design system
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## 🎨 Design System

The website uses Habitto's color palette:
- **Primary**: Navy Blue (#1C274C)
- **Secondary**: Pastel Blue (#B3C4FF)
- **Text Colors**: Various shades of grey and navy
- **Accents**: Success (green), Error (red), Warning (orange)

## 🛠️ How to Use

### Option 1: Open Directly
Simply open `index.html` in your web browser.

### Option 2: Local Server (Recommended)
For the best experience, use a local server:

```bash
# Using Python 3
cd website
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Option 3: Deploy to Web Hosting
Upload the `website` folder contents to any web hosting service:
- Netlify (drag and drop)
- Vercel
- GitHub Pages
- Any traditional web host

## 📝 Customization

### Update App Store Links
Edit the download button in `index.html`:
```html
<a href="YOUR_APP_STORE_LINK" class="download-btn app-store">
```

### Change Colors
Update the CSS variables in `styles.css`:
```css
:root {
    --primary: #1C274C;
    --secondary: #B3C4FF;
    /* ... */
}
```

### Modify Content
All content is in `index.html`. Simply edit the text, headings, and sections as needed.

## 🎯 Sections

1. **Navigation**: Fixed header with logo and menu
2. **Hero**: Main headline with CTA buttons and phone mockup
3. **Features**: 8 key features in a grid layout
4. **How It Works**: 3-step process explanation
5. **Download**: Call-to-action section
6. **Footer**: Links and copyright information

## 📱 Mobile Responsive

The website is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Part of the Habitto project.

## 🆘 Need Help?

If you need to make changes or have questions, the code is well-commented and easy to modify. All styles use CSS variables for easy theming.

