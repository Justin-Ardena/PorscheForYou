# 🏁 PorscheForYou - Find Your Perfect Porsche Match

A sleek, modern web application that matches users to their ideal Porsche model through a personalized 10-question quiz. Built with Next.js, React, and Tailwind CSS with beautiful animations and transitions.

## Features

✨ **10-Question Personalized Quiz** - Answer thoughtful questions about your personality, lifestyle, and driving style

🏎️ **Intelligent Matching Algorithm** - Get matched to one of 10 iconic Porsche models

📊 **Detailed Results** - Receive an explanation of why you're paired with your specific Porsche

🌍 **Community Results** - See what other enthusiasts are matched with in a beautiful, interactive dashboard

💎 **Sleek Modern Design** - Gradient backgrounds, smooth animations, and professional styling

⚡ **Smooth Transitions** - Every interaction has fluid animations for a premium feel

📱 **Responsive Design** - Perfect experience on desktop, tablet, and mobile devices

## Porsche Models Included

1. **911 Turbo** - The ultimate performance machine
2. **Cayman GT4** - The purist's mid-engine precision
3. **Taycan Turbo S** - The electric future of Porsche
4. **Panamera Turbo S** - Luxury sedan performance
5. **Macan Turbo** - Sporty adventure SUV
6. **918 Spyder Hybrid** - Rare limited-edition hypercar
7. **Boxster Spyder** - Pure joy of open-air driving
8. **911 Dakar** - Off-road capable explorer
9. **Carrera GT** - Legendary racing heritage
10. **Cayenne E-Hybrid** - Eco-conscious luxury

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The app will be available at `http://localhost:3000`

## Pages

- **Home** (`/`) - Landing page with quiz introduction
- **Quiz** (`/quiz`) - 10-question personality quiz
- **Result** (`/result/[id]`) - Individual Porsche match result
- **Community Results** (`/results`) - Global results dashboard
- **About** (`/about`) - Information about PorscheForYou
- **Contact** (`/contact`) - Contact form and information

## Technology Stack

- **Framework**: Next.js 16.1.0
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4 with custom animations
- **Database**: Client-side localStorage (no backend required)
- **Animations**: CSS keyframes with smooth transitions

## Project Structure

```
PorscheForYou/
├── app/
│   ├── components/          # React components
│   │   ├── header.js
│   │   └── footer.js
│   ├── quiz/
│   │   └── page.tsx        # Quiz page
│   ├── results/
│   │   └── page.tsx        # Community results page
│   ├── result/
│   │   └── [id]/
│   │       └── page.tsx    # Individual result page
│   ├── about/
│   │   └── page.js         # About page
│   ├── contact/
│   │   └── page.js         # Contact page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── not-found.tsx       # 404 page
├── lib/
│   └── porscheData.ts      # Quiz questions, Porsche data, explanations
├── public/
│   └── image/              # Image assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

## How It Works

1. **Quiz Flow**: Users answer 10 questions, each answer is linked to a Porsche
2. **Scoring**: Points accumulate for each Porsche based on answers
3. **Matching**: The Porsche with the highest score is the user's match
4. **Storage**: Results are saved to localStorage for the community dashboard
5. **Results Page**: Users see their match, explanation, and all community results

## Customization

### Adding New Porsche Models

Edit `lib/porscheData.ts`:

```typescript
export const porsches: Porsche[] = [
  {
    id: 'unique-id',
    name: 'Porsche Name',
    model: '2024',
    description: 'Description...',
    personality: 'Personality type',
    image: '/image/porsche.jpg',
    color: '#hexcolor',
    traits: ['trait1', 'trait2', 'trait3', 'trait4']
  },
  // ... more porsches
];
```

### Modifying Quiz Questions

Also in `lib/porscheData.ts`, update the `quizQuestions` array with new questions and answers.

### Styling

Global styles are in `app/globals.css`. CSS variables at the root control the color scheme:

```css
:root {
  --bg: #0a0e27;           /* Background */
  --accent: #ef2b2d;       /* Red accent */
  --accent-2: #ffd700;     /* Gold accent */
  --text: #f8fafc;         /* Text color */
  /* ... more variables */
}
```

## Performance Tips

- Quiz results are stored in client-side localStorage (no network calls)
- CSS animations use GPU acceleration for smooth performance
- Images should be optimized before adding to `/public`
- Use Next.js Image component for image optimization

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Backend database for persistent results
- User accounts and profiles
- Sharing results on social media
- Advanced analytics dashboard
- API for third-party integration
- Dark/Light mode toggle

## License

This project is open source and available for personal and commercial use.

## Support

For questions or feedback, use the contact form on the website.

---

**Built with ❤️ for Porsche enthusiasts worldwide** 🏎️
