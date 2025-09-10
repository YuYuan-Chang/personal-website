# Personal Portfolio Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS to showcase projects and professional experience.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach with mobile navigation
- 🚀 Built with Next.js 15 and TypeScript
- 💅 Styled with Tailwind CSS
- 📄 Project portfolio showcase
- 📋 Professional resume display
- ⚡ Optimized for performance and SEO

## Pages

- **Home**: Hero section with introduction and key statistics
- **Projects**: Portfolio showcase with project cards, tech stacks, and links
- **Resume**: Professional experience, skills, education, and contact information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

1. **Update the header name**: Edit `src/components/Header.tsx` and `src/app/layout.tsx`
2. **Home page content**: Edit `src/app/page.tsx` to update hero section, about me, and skills
3. **Projects**: Update the `sampleProjects` array in `src/app/projects/page.tsx`
4. **Resume**: Update the data arrays in `src/app/resume/page.tsx`:
   - `contactInfo`
   - `experiences`
   - `education`
   - `skills`

### Styling

The website uses Tailwind CSS. You can customize:
- Colors: Update the color scheme by modifying Tailwind classes
- Layout: Adjust spacing, sizing, and responsive breakpoints
- Typography: Modify font styles and sizes

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy your site

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to [Netlify](https://netlify.com)

### Other Platforms

The site is a static Next.js application and can be deployed to any static hosting service.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Deployment**: Ready for Vercel, Netlify, or any static host

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── page.tsx        # Homepage
│   ├── projects/       # Projects page
│   ├── resume/         # Resume page
│   └── layout.tsx      # Root layout
├── components/         # Reusable components
│   ├── Header.tsx      # Navigation header
│   └── ProjectCard.tsx # Project display card
└── types/             # TypeScript type definitions
    └── index.ts       # Shared interfaces
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: your.email@example.com
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- GitHub: [Your Username](https://github.com/yourusername)
