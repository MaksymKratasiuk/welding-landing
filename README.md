# WeldingHub - Professional TIG Welding Courses Landing Page

A modern, responsive landing page for professional TIG welding courses with multi-language support (Polish, Ukrainian, English).

## 🚀 Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Multi-language Support**: Polish (PL), Ukrainian (UA), and English (EN)
- **Interactive Elements**: Smooth scrolling, mobile menu, language switcher
- **Modern UI/UX**: Dark theme with orange accent colors, hover effects, and animations
- **Contact Form**: Ready for integration with form handling services
- **SEO Optimized**: Semantic HTML structure with proper meta tags

## 📁 Project Structure

```
welding-landing/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality
├── translations.js     # Multi-language translation data
└── README.md          # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: `#ff6b35` (Orange)
- **Dark**: `#1a1a1a` (Dark Gray)
- **Darker**: `#0d0d0d` (Very Dark Gray)
- **Light**: `#f4f4f4` (Light Gray)
- **Steel**: `#4a5568` (Steel Gray)
- **Accent**: `#fbbf24` (Gold)

### Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Font Weights**: 400 (normal), 500 (medium), 700 (bold)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Language Support

The website supports three languages:
- **Polish (PL)** - Default language
- **Ukrainian (UA)**
- **English (EN)**

Language preference is saved in localStorage and persists across sessions.

## 🛠️ Technical Details

### HTML Structure
- Semantic HTML5 elements
- Accessibility-friendly markup
- Data attributes for internationalization (`data-i18n`)

### CSS Architecture
- CSS Custom Properties (CSS Variables) for theming
- Mobile-first responsive design
- Modern CSS features (Grid, Flexbox, CSS Transitions)
- Component-based styling approach

### JavaScript Features
- ES6+ syntax
- Event delegation
- Local storage for language preferences
- Smooth scrolling navigation
- Mobile menu toggle
- Form handling

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Open** `index.html` in a web browser
3. **Customize** content, colors, or translations as needed

### Local Development
For local development, you can use any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

## 📝 Customization

### Adding New Languages
1. Add new language object to `translations.js`
2. Add language button to navigation in `index.html`
3. Update language switcher logic in `script.js`

### Modifying Colors
Update CSS custom properties in `styles.css`:
```css
:root {
    --primary: #your-color;
    --dark: #your-color;
    /* ... other variables */
}
```

### Adding New Sections
1. Add HTML structure to `index.html`
2. Add corresponding styles to `styles.css`
3. Add translations to `translations.js` if needed

## 📧 Contact Form Integration

The contact form is ready for integration with services like:
- **Formspree**: Add action URL to form tag
- **EmailJS**: Add EmailJS script and configuration
- **Netlify Forms**: Add `netlify` attribute to form
- **Custom Backend**: Modify form submission handler in `script.js`

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different browsers and devices
5. Submit a pull request

## 📞 Support

For questions or support, please contact the development team or create an issue in the project repository.

---

**WeldingHub** - Professional TIG Welding Courses
© 2025 All rights reserved.
