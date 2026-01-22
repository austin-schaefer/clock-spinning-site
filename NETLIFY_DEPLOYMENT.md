# Netlify Deployment Guide for Clock Spinning

This guide covers deploying the Clock Spinning Gatsby site to Netlify with a custom domain.

## Recent Updates

The site has been migrated from Gatsby Cloud to Netlify with the following updates:

### Dependency Updates
- **Gatsby**: 3.14.2 → 5.13.7 (latest stable)
- **React**: 17.0.1 → 18.3.1
- **All Gatsby plugins**: Updated to v5.x for Gatsby 5 compatibility
- **Google Analytics**: Migrated from deprecated `gatsby-plugin-google-analytics` to `gatsby-plugin-google-gtag`
- **MDX**: Updated to v2.x
- **Fonts**: Migrated from deprecated typeface packages to Google Fonts CDN

### Configuration Changes
- Updated GraphQL queries to use new Gatsby 5 syntax
- Fixed deprecated sort syntax in `gatsby-node.js` and `gatsby-config.js`
- Added RSS feed title (required in Gatsby 5)
- Added Google Fonts import to `style.css`
- Removed deprecated font packages

## Prerequisites

1. A Netlify account (sign up at https://netlify.com)
2. Access to the GitHub repository
3. Access to the clockspinning.com domain DNS settings

## Deployment Steps

### 1. Connect Repository to Netlify

1. Log in to your Netlify account
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub account
5. Select the `clock-spinning-site` repository

### 2. Configure Build Settings

Netlify should auto-detect the Gatsby configuration, but verify these settings:

- **Branch to deploy**: `main` (or your preferred branch)
- **Build command**: `npm run build`
- **Publish directory**: `public`
- **Node version**: 22 (configured in netlify.toml)

These settings are already configured in the `netlify.toml` file at the root of the project.

### 3. Environment Variables

The site uses Google Analytics. If you need to update the tracking ID:

1. Go to Site Settings → Environment Variables in Netlify
2. Add any necessary environment variables (currently none required)

The GA tracking ID is in `gatsby-config.js` and can be updated there if needed.

### 4. Deploy the Site

1. Click "Deploy site"
2. Netlify will start building your site
3. The first build may take 3-5 minutes
4. Once complete, you'll receive a temporary Netlify URL (e.g., `random-name-123.netlify.app`)
5. Verify the site works correctly at this URL

### 5. Set Up Custom Domain

#### Option A: Domain managed by Netlify (Recommended)

1. In Netlify, go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Enter `clockspinning.com`
4. Netlify will provide DNS records to configure
5. Update your domain registrar's DNS settings with Netlify's nameservers:
   - `dns1.p01.nsone.net`
   - `dns2.p01.nsone.net`
   - `dns3.p01.nsone.net`
   - `dns4.p01.nsone.net`

#### Option B: External DNS

1. In Netlify, go to Site Settings → Domain Management
2. Click "Add custom domain"
3. Enter `clockspinning.com`
4. Choose "Use external DNS"
5. Add the following DNS records at your domain registrar:
   - **A Record**: `@` → `75.2.60.5` (Netlify's load balancer)
   - **CNAME Record**: `www` → `[your-site-name].netlify.app`

### 6. Enable HTTPS

1. Once the domain is connected, go to Site Settings → Domain Management → HTTPS
2. Click "Verify DNS configuration"
3. Click "Provision certificate"
4. Netlify will automatically provision a free Let's Encrypt SSL certificate
5. Enable "Force HTTPS" to redirect all HTTP traffic to HTTPS

### 7. Configure Redirects (Optional)

The `netlify.toml` file includes a commented-out HTTPS redirect. Once your custom domain is configured and HTTPS is enabled:

1. Open `netlify.toml`
2. Uncomment the HTTPS redirect section:
   ```toml
   [[redirects]]
     from = "http://clockspinning.com/*"
     to = "https://clockspinning.com/:splat"
     status = 301
     force = true
   ```
3. Also add a www redirect if desired:
   ```toml
   [[redirects]]
     from = "https://www.clockspinning.com/*"
     to = "https://clockspinning.com/:splat"
     status = 301
     force = true
   ```
4. Commit and push the changes

## Post-Deployment Checklist

- [ ] Site loads correctly at Netlify URL
- [ ] All pages render properly
- [ ] Images load correctly
- [ ] RSS feed is accessible at `/rss.xml`
- [ ] Custom domain is connected
- [ ] HTTPS is enabled and forced
- [ ] Google Analytics is tracking (check in GA dashboard)
- [ ] 404 page works correctly
- [ ] Test site on mobile devices
- [ ] Check site performance with Lighthouse

## Netlify Features Configured

### Performance Optimizations
- **Asset Optimization**: CSS/JS bundling and minification enabled
- **Image Compression**: Automatic image optimization
- **Caching Headers**: Static assets cached for 1 year, page data for 1 day
- **Pretty URLs**: Enabled for clean URLs without .html extensions

### Security Headers
The following security headers are configured in `netlify.toml`:
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information
- `Permissions-Policy` - Restricts access to browser features

### 404 Handling
Custom 404 page redirect configured to `/404.html`

## Continuous Deployment

Once set up, Netlify will automatically:
1. Build and deploy when you push to the configured branch
2. Create deploy previews for pull requests
3. Roll back to previous versions if needed

## Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Verify Node version is set to 22 in `netlify.toml`
- Ensure all dependencies are in `package.json`

### Images Not Loading
- Verify the Sharp library is building correctly (Netlify handles this automatically)
- Check browser console for errors

### Custom Domain Not Working
- Verify DNS records are correct (use `dig clockspinning.com` or `nslookup`)
- DNS propagation can take up to 48 hours
- Check Netlify's DNS verification status

### Google Analytics Not Tracking
- Verify the tracking ID in `gatsby-config.js`
- Check browser console for GA loading errors
- Ensure ad blockers aren't interfering during testing

## Maintenance

### Updating Dependencies
```bash
npm outdated
npm update
npm audit fix
```

### Rebuilding the Site
Netlify automatically rebuilds on git push, but you can also:
1. Go to Netlify dashboard → Deploys
2. Click "Trigger deploy" → "Deploy site"

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [Netlify Gatsby Plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify/)
- [Custom Domain Setup](https://docs.netlify.com/domains-https/custom-domains/)

## Migration Notes

### From Gatsby Cloud
- Gatsby Cloud is being sunset, so this migration to Netlify ensures continued hosting
- Build times on Netlify are comparable to Gatsby Cloud
- Netlify offers additional features like form handling, edge functions, and serverless functions if needed in the future

### Potential Future Enhancements
- **Netlify Forms**: Replace external form services
- **Netlify Functions**: Add serverless API endpoints
- **Netlify Analytics**: Server-side analytics (paid feature)
- **Deploy Previews**: Automatic previews for pull requests
- **Branch Deploys**: Deploy different branches to different URLs for testing
