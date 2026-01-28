# Creative Agency Landing Page

Modern, responsive landing page for a creative agency with smooth animations and clean design.

🔗 **[Live Demo on GitHub Pages](https://lena-kononchuk.github.io/creative-agency/)**

## Features

- 🎨 Modern, clean design
- 📱 Fully responsive
- ⚡ Optimized performance
- 🎭 Smooth scroll animations
- 📧 Contact form modal
- 🖼️ Image slider (Swiper.js)

## Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling
- **JavaScript** - Vanilla JS for interactions
- **Gulp** - Build automation & optimization
- **Swiper.js** - Touch slider
- **Font Awesome** - Icons

## Installation

```bash
# Clone repository
git clone https://github.com/lena-kononchuk/creative-agency.git
cd creative-agency

# Install dependencies
npm install

# Start development server with live reload
gulp

# Build for production
gulp build
```

## Deployment to GitHub Pages

```bash
# Build and deploy
npm run deploy
```

The site will be available at: `https://lena-kononchuk.github.io/creative-agency/`

## Project Structure

```
creative-agency/
├── src/
│   ├── images/       # Image assets
│   ├── js/           # JavaScript modules
│   │   ├── script.js
│   │   ├── menu.js
│   │   └── swiper-config.js
│   ├── styles.css    # Tailwind CSS
│   └── index.html    # Main HTML
├── dist/             # Production build (auto-generated)
├── gulpfile.js       # Gulp tasks
└── tailwind.config.js
```

## Development

The project uses Gulp for:
- CSS optimization & minification
- JavaScript bundling & minification
- Image optimization
- Live browser reload
- Production build

## License

MIT
