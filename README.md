# Kai Wang - Portfolio Website

A clean and modern portfolio website inspired by contemporary design principles.

## Features

- **Responsive Design**: Works seamlessly on all devices
- **Modern UI/UX**: Clean, minimalist design with smooth animations
- **Portfolio Gallery**: Showcase your work with filterable categories
- **Modal Views**: Detailed project views with image and video support
- **About Section**: Professional bio, skills, experience, and education
- **Contact Section**: Easy ways to get in touch

## Structure

```
portfolio/
│
├── index.html          # Landing page
├── about.html          # About me page
├── works.html          # Portfolio/works page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── assets/             # Create this folder for your images/videos
    ├── profile.jpg     # Your profile photo
    ├── project-1.jpg   # Project images
    ├── project-2.jpg
    └── ...
```

## Setup Instructions

1. **Add Your Images**:
   - Create an `assets` folder in the same directory as your HTML files
   - Add your profile photo as `profile.jpg`
   - Add project images as `project-1.jpg`, `project-2.jpg`, etc.
   - Recommended image sizes:
     - Profile photo: 400x400px
     - Project images: 1200x800px

2. **Customize Content**:
   - Update personal information in `index.html`
   - Edit the About Me section in `about.html`
   - Add your projects in `works.html`
   - Update project data in `script.js` (projectData object)

3. **Update Contact Information**:
   - Change email address in all pages
   - Update social media links (LinkedIn, GitHub, Instagram)

4. **Color Scheme** (optional):
   - Edit CSS variables in `styles.css` under `:root` to change colors
   - Current accent color: `#3b82f6` (blue)

## Customization Tips

### Adding New Projects

1. In `works.html`, duplicate a work-item div:
```html
<div class="work-item" data-category="design" id="project7">
    <!-- content -->
</div>
```

2. In `script.js`, add project data:
```javascript
7: {
    title: 'Your Project',
    category: 'Design',
    description: 'Description here',
    // ... other fields
}
```

### Changing Colors

Edit these CSS variables in `styles.css`:
```css
--primary-color: #000000;      /* Main black color */
--accent-color: #3b82f6;       /* Accent blue color */
--text-primary: #1a1a1a;       /* Main text color */
```

### Adding Videos

In `script.js`, add a video path to any project:
```javascript
1: {
    // ... other fields
    video: 'assets/project-1-video.mp4'
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

Design inspired by modern portfolio trends and clean aesthetics.

## License

Free to use for personal portfolio projects.
