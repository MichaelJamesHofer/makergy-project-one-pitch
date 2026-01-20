# Makergy Project One Pitch

Investor pitch site for Makergy Project One (Palermo concept build).

## Live Site
TBD

## Development

### Setup
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Access at http://localhost:5173

### Build for Production
```bash
npm run build
```

## 🚨 IMPORTANT: Deployment Instructions

**CRITICAL**: After making any changes to the source code, you MUST build and commit the production files for GitHub Pages deployment.

### Step-by-Step Deployment Process:

1. **Make your code changes** in the `src/` directory

2. **Test locally** with development server:
   ```bash
   npm run dev
   ```

3. **Build production files**:
   ```bash
   npm run build
   ```
   This creates/updates files in the `dist/` folder

4. **Copy production files to root** (GitHub Pages serves from root):
   ```bash
   cp dist/index.html index.html
   cp -r dist/assets .
   cp -r dist/images .
   ```

5. **Commit ALL files**:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

### Common Issues & Solutions

#### White Page on Production Site
**Problem**: Site shows white page after deployment

**Cause**: The `dist/` folder wasn't built or committed after source changes

**Solution**: 
1. Run `npm run build`
2. Commit the `dist/` folder
3. Push to GitHub

#### Development vs Production Files
- **Development**: Uses `index.html` in root with `<script type="module" src="/src/main.tsx"></script>`
- **Production**: Uses `dist/index.html` with built assets like `/assets/index-XXXXX.js`

**Never** commit the root `index.html` with production script tags!

### File Structure
```
makergy-project-one-pitch/
├── src/           # Source code (development)
├── dist/          # Built files (production) - MUST be committed for GitHub Pages
├── docs/          # Documentation
├── index.html     # Development entry point
└── package.json   # Project configuration
```

### GitHub Pages Configuration
- GitHub Pages serves from the `main` branch root folder
- Custom domain: TBD
- CNAME file must be in root directory if custom domain is used
- Production files must be copied from `dist/` to root after building

### Quick Deploy Checklist
- [ ] Made changes to source files
- [ ] Tested locally with `npm run dev`
- [ ] Ran `npm run build`
- [ ] Verified `dist/` folder updated
- [ ] Copied production files from `dist/` to root
- [ ] Committed ALL changes
- [ ] Pushed to GitHub
- [ ] Verified live site works

## Documentation
See `/docs` folder for design and plan references.
