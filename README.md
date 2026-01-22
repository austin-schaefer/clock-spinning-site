# Clock Spinning Podcast Website

This is the website for the Clock Spinning podcast, where we review old Magic: the Gathering sets card by card for cube. Visit us at [clockspinning.com](https://clockspinning.com)!

## Tech Stack

- **Framework**: Gatsby 5 (React-based static site generator)
- **Styling**: Custom CSS with CSS variables
- **Content**: Markdown files with MDX support
- **Hosting**: Netlify
- **Analytics**: Google Analytics (gtag.js)

## Development

### Prerequisites

- Node.js 22 or later
- npm 10 or later

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run develop

# Build for production
npm run build

# Serve production build locally
npm run serve

# Clean cache and public directories
npm run clean
```

### Development Server

The site will be available at `http://localhost:8000` with GraphQL playground at `http://localhost:8000/___graphql`.

## Deployment

This site is deployed on Netlify with automatic deployments from the main branch.

For detailed deployment instructions, custom domain setup, and troubleshooting, see [NETLIFY_DEPLOYMENT.md](./NETLIFY_DEPLOYMENT.md).

### Quick Deploy

1. Connect repository to Netlify
2. Configure build settings (auto-detected from `netlify.toml`)
3. Deploy
4. Configure custom domain and HTTPS

## Project Structure

```
.
├── content/blog/          # Blog posts in Markdown
├── src/
│   ├── components/        # React components
│   ├── pages/            # Page templates
│   ├── templates/        # Blog post template
│   ├── images/           # Images and assets
│   ├── style.css         # Global styles
│   └── normalize.css     # CSS normalization
├── static/               # Static files
├── gatsby-config.js      # Gatsby configuration
├── gatsby-node.js        # Gatsby Node APIs
├── gatsby-browser.js     # Gatsby browser APIs
├── netlify.toml          # Netlify configuration
└── package.json          # Dependencies

```

## Recent Updates (2026)

- Migrated from Gatsby Cloud to Netlify
- Updated from Gatsby 3 to Gatsby 5
- Updated from React 17 to React 18
- Migrated to Google Fonts CDN
- Updated all plugins to latest versions
- Fixed deprecated GraphQL syntax
- Added comprehensive Netlify configuration

## Contributing

This is a personal project, but if you notice any issues, feel free to open an issue or pull request.

## License

0BSD (see LICENSE file)