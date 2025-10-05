# 📁 lucasfolder

[![Astro](https://img.shields.io/badge/Astro-5.14-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A modern, fast, and feature-rich personal portfolio and blog built with Astro. Features an interactive photo gallery, travel map, and elegant content presentation.

🌐 **Live Site:** [lucakursawe.xyz](https://lucakursawe.xyz/)

## ✨ Features

- 📝 **Blog System** - Write posts in Markdown/MDX with full syntax highlighting
- 🖼️ **Photo Gallery** - Beautiful justified and masonry layouts with Fancybox integration
- 🗺️ **Travel Map** - Interactive world map showing visited countries, cities, and neighborhoods
- 🎨 **Dark/Light Mode** - Seamless theme switching with system preference detection
- ⚡ **Lightning Fast** - Static site generation with Astro for optimal performance
- 📱 **Responsive Design** - Looks great on all devices
- 🔍 **SEO Optimized** - Automatic sitemap, RSS/Atom feeds, and Open Graph images
- 📊 **Table of Contents** - Auto-generated for long-form content
- 🎯 **TypeScript** - Fully typed for better DX and reliability

## 🚀 Tech Stack

- **Framework:** [Astro](https://astro.build) 5.14
- **UI Components:** React 19
- **Styling:** CSS with custom properties
- **Image Gallery:** [Fancybox](https://fancyapps.com/fancybox/)
- **Maps:** [react-simple-maps](https://www.react-simple-maps.io/)
- **Content:** MDX with remark/rehype plugins
- **Type Checking:** TypeScript
- **Code Quality:** ESLint + Prettier
- **Deployment:** Vercel (adaptable to Netlify)

## 📦 Project Structure

```
lucasfolder/
├── public/              # Static assets
│   ├── fonts/          # Custom fonts
│   ├── og/             # Open Graph images
│   └── cesium/         # Cesium.js assets
├── src/
│   ├── components/     # Reusable components
│   │   ├── examples/   # Example components
│   │   ├── layout/     # Layout components
│   │   ├── ui/         # UI components
│   │   └── widgets/    # Widget components
│   ├── content/        # Content collections
│   │   ├── posts/      # Blog posts
│   │   ├── projects/   # Project showcases
│   │   ├── work/       # Work experience
│   │   └── about/      # About content
│   ├── data/           # Data files
│   │   ├── photos.ts   # Photo gallery data
│   │   ├── visited-countries.ts
│   │   ├── visited-cities.ts
│   │   └── visited-neighborhoods.ts
│   ├── layouts/        # Page layouts
│   ├── pages/          # Routes
│   ├── plugins/        # Remark/Rehype plugins
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript types
│   └── utils/          # Utility functions
├── scripts/            # Build scripts
└── astro.config.ts     # Astro configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/xyzluca/lucasfolder.git
   cd lucasfolder
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:4321
   ```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start development server at `localhost:4321` |
| `pnpm run build` | Build production site to `dist/` |
| `pnpm run preview` | Preview production build locally |
| `pnpm run lint` | Run ESLint on all files |
| `pnpm run lint:fix` | Auto-fix ESLint issues |
| `pnpm run format` | Format code with Prettier |
| `pnpm run format:check` | Check code formatting |
| `pnpm run new` | Create a new blog post |
| `pnpm run update-theme` | Update theme configuration |

## ⚙️ Configuration

Edit `src/config.ts` to customize:

- Site metadata (title, description, author)
- Theme settings (colors, layout, animations)
- Feature toggles (comments, analytics, etc.)
- Social links and navigation

## 📝 Creating Content

### New Blog Post

```bash
pnpm run new
```

This will create a new post in `src/content/posts/` with frontmatter template.

### Add Photos to Gallery

Edit `src/data/photos.ts` and add new photo objects:

```typescript
{
  id: 'unique-id',
  src: 'https://images.unsplash.com/photo-...',
  alt: 'Photo description',
  title: 'Photo Title',
  camera: 'Camera model (optional)',
  date: 'YYYY-MM-DD',
  category: 'Category',
  unsplashProfileUrl: 'https://unsplash.com/@photographer'
}
```

### Update Travel Map

Edit the data files in `src/data/`:
- `visited-countries.ts` - Countries you've visited
- `visited-cities.ts` - Cities with coordinates
- `visited-neighborhoods.ts` - Specific neighborhoods

## 🎨 Customization

### Styling

Global styles are in `src/styles/`:
- `global.css` - Base styles and CSS variables
- `post.css` - Blog post specific styles
- `fonts.css` - Font declarations

### Components

All components are in `src/components/`:
- **Layout:** Header, Footer, BaseHead
- **UI:** Gallery, Map, Cards, Buttons
- **Widgets:** Post lists, Comments, TOC

## 🚀 Deployment

### Vercel (Default)

```bash
pnpm run build
```

Deploy to Vercel via Git integration or CLI.

### Netlify

1. Change adapter in `astro.config.ts`:
   ```typescript
   import netlify from '@astrojs/netlify'
   
   export default defineConfig({
     adapter: netlify()
   })
   ```

2. Build and deploy:
   ```bash
   pnpm run build
   ```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

**Original work** by [3ASH](https://github.com/3ASH)  
**Modified extensively** by [xyzluca](https://github.com/xyzluca)

## 🙏 Acknowledgments

- Original theme design by 3ASH
- Built with [Astro](https://astro.build)
- Photo gallery powered by [Fancybox](https://fancyapps.com/fancybox/)
- Maps by [react-simple-maps](https://www.react-simple-maps.io/)
- Photos from [Unsplash](https://unsplash.com)

## 📬 Contact

- **Website:** [lucakursawe.xyz](https://lucakursawe.xyz/)
- **GitHub:** [@xyzluca](https://github.com/xyzluca)

---

<p align="center">Made with ❤️ and ☕ by Lucas</p>
