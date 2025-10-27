# Full-Stack Developer Portfolio

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, dark-themed design with smooth animations
- 📱 Fully responsive across all devices
- ⚡ Built with Next.js 16 for optimal performance
- 🎯 Easy to customize and update
- 📊 Sections for projects, experience, skills, and contact
- 🔗 Social media integration
- 📝 Contact form with validation

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or download the ZIP file
2. Install dependencies:

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### 1. Update Personal Information

Edit `lib/portfolio-data.ts` to update your personal information, projects, experience, and skills.

### 2. Update Images

Replace the placeholder images in the `public` folder with your own project screenshots.

### 3. Update Social Links

Update social media links in:
- `components/hero-section.tsx`
- `components/contact-section.tsx`
- `components/footer.tsx`

### 4. Customize Colors

The color scheme is defined in `app/globals.css`. Modify the CSS variables to change the theme.

### 5. Add Your Resume

Place your resume PDF in the `public` folder as `resume.pdf` or update the link in the navigation.

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── navigation.tsx      # Navigation bar
│   ├── hero-section.tsx    # Hero/About section
│   ├── projects-section.tsx # Projects showcase
│   ├── experience-section.tsx # Experience timeline
│   ├── skills-section.tsx  # Skills & tech stack
│   ├── contact-section.tsx # Contact form
│   └── footer.tsx          # Footer
├── lib/
│   └── portfolio-data.ts   # Centralized data file
└── public/
    └── *.png               # Project images
\`\`\`

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

Build the project:

\`\`\`bash
npm run build
\`\`\`

The output will be in the `.next` folder, ready for deployment.

## Adding a Backend (Optional)

To make the contact form functional, you can:

1. **Use a form service:** Formspree, Getform, or Web3Forms
2. **Add API routes:** Create API routes in `app/api/contact/route.ts`
3. **Use Firebase:** Integrate Firebase for form submissions and data storage
4. **Use Supabase:** Add Supabase for database and authentication

### Example: Firebase Integration

1. Install Firebase:
\`\`\`bash
npm install firebase
\`\`\`

2. Create `lib/firebase.ts`:
\`\`\`typescript
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  // Your Firebase config
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
\`\`\`

3. Update the contact form to save to Firebase

## Future Enhancements

- [ ] Add blog section
- [ ] Add testimonials
- [ ] Add dark/light mode toggle
- [ ] Add animations with Framer Motion
- [ ] Add CMS integration (Sanity, Contentful)
- [ ] Add analytics (Google Analytics, Vercel Analytics)
- [ ] Add SEO optimization
- [ ] Add multilingual support

## License

This project is open source and available under the MIT License.

## Support

If you need help customizing your portfolio, feel free to reach out or open an issue.

---

Built with ❤️ using Next.js and Tailwind CSS
\`\`\`
