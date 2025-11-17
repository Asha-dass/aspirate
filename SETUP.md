# Setup Instructions

## Important: Assets Folder Location

For the React application to work correctly, the `assets` folder must be located in the `public` directory.

### Current Structure (needs adjustment):
```
aspiratechnology/
├── assets/          ← Currently here
├── public/
└── src/
```

### Required Structure:
```
aspiratechnology/
├── public/
│   └── assets/     ← Should be here
└── src/
```

## Steps to Set Up:

1. **Move the assets folder:**
   
   **On Windows (PowerShell):**
   ```powershell
   Move-Item -Path assets -Destination public\assets
   ```
   
   **On Mac/Linux:**
   ```bash
   mv assets public/assets
   ```
   
   Or manually move the `assets` folder from the root directory into the `public` folder.
   The final path should be: `public/assets/`

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Verify:**
   - The application should load at http://localhost:3000
   - All images, CSS, and vendor scripts should load correctly
   - Check browser console for any 404 errors

## Asset Paths

All asset references in the code use paths like:
- `/assets/images/logo/logo.webp`
- `/assets/css/style.css`
- `/assets/vendor/jquery-3.6.0.min.js`

These paths work because React serves everything in the `public` folder from the root URL (`/`).

## Troubleshooting

If assets don't load:
1. Verify `assets` folder is in `public/assets/`
2. Check browser console for 404 errors
3. Ensure file paths start with `/assets/` (leading slash is important)
4. Clear browser cache and reload

