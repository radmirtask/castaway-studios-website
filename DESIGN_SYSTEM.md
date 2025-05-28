# Castaway Studios Design System

## Overview

The Castaway Studios design system is a modern, vibrant, dark-themed interface with neon-inspired accent colors. It's built using Astro.js, React, and TailwindCSS to create an immersive gaming experience that reflects our brand identity.

## Color Palette

### Primary Colors
- **Background Primary**: `#1B031B` - Main dark background
- **Text Primary**: `#F5F5F5` - Primary text color on dark backgrounds

### Accent Colors
- **Accent Violet**: `#B316D5` - Primary brand color
- **Accent Pink**: `#CD2373` - Secondary brand color  
- **Accent Pink Alt**: `#EC509E` - Alternative pink for buttons and highlights
- **Accent Yellow**: `#FFEE34` - Highlight color for cards and accents

### Text Colors
- **Text on Yellow**: `#000000` - Text color for yellow backgrounds
- **Text Secondary**: `rgba(245, 245, 245, 0.8)` - Dimmed text
- **Text Muted**: `rgba(245, 245, 245, 0.6)` - Very dimmed text

## Typography

### Font Family
- **Primary**: Poppins (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

### Typography Scale
- **H1**: 4rem (64px) - Bold, line-height 1.2
- **H2**: 3rem (48px) - Semi-bold, line-height 1.3
- **H3**: 2.25rem (36px) - Semi-bold, line-height 1.4
- **H4**: 1.5rem (24px) - Medium, line-height 1.5
- **Body**: 1rem (16px) - Regular, line-height 1.6
- **Body Large**: 1.125rem (18px) - Regular, line-height 1.6
- **Caption**: 0.875rem (14px) - Regular, line-height 1.5
- **Button**: 1rem (16px) - Medium, line-height 1.5

### CSS Classes
```css
.heading-1, .heading-2, .heading-3, .heading-4
.body-text, .body-text-lg, .caption-text
```

## Components

### Buttons

#### Primary Button
```html
<button class="btn-primary">Get Started</button>
```
- Background: `accent-pink-alt` (#EC509E)
- Text: `text-primary` (#F5F5F5)
- Hover: Darker pink with glow effect

#### Secondary Button
```html
<button class="btn-secondary">Learn More</button>
```
- Background: Transparent
- Border: `accent-pink-alt` (#EC509E)
- Text: `accent-pink-alt` (#EC509E)
- Hover: Filled background

#### Outline Violet Button
```html
<button class="btn-outline-violet">Explore</button>
```
- Background: Transparent
- Border: `accent-violet` (#B316D5)
- Text: `accent-violet` (#B316D5)
- Hover: Filled background

### Cards

#### Game Card
```html
<div class="card-game">
  <!-- Yellow background cards for games -->
</div>
```
- Background: `accent-yellow` (#FFEE34)
- Text: `text-on-yellow` (#000000)
- Hover: Lift effect with glow

#### Dark Card
```html
<div class="card-dark">
  <!-- Dark cards with violet border -->
</div>
```
- Background: `background-primary` (#1B031B)
- Border: `accent-violet/20`
- Hover: Enhanced border and shadow

### Navigation

#### Navigation Links
```html
<a class="nav-link">Home</a>
```
- Color: `text-primary` (#F5F5F5)
- Hover: `accent-yellow` (#FFEE34) with underline animation

### Input Fields

#### Standard Input
```html
<input class="input-field" type="text" placeholder="Enter text">
```
- Background: `background-primary` (#1B031B)
- Border: `text-secondary/30`
- Focus: `accent-violet` border with glow

## Layout & Spacing

### Container
- **Max Width**: 1280px
- **Class**: `container-custom`
- **Responsive Padding**: 1rem (mobile) to 2rem (desktop)

### Section Spacing
- **Standard**: `section-padding` - 4rem top/bottom (mobile) to 6rem (desktop)
- **Small**: `section-padding-sm` - 3rem top/bottom (mobile) to 4rem (desktop)

### Spacing Scale
- Based on 8px increments
- Custom spacing: `18` (72px), `22` (88px), `26` (104px), `30` (120px)

## Effects & Animations

### Glow Effects
```css
.glow-violet, .glow-pink, .glow-yellow
.shadow-glow-violet, .shadow-glow-pink, .shadow-glow-yellow
```

### Animations
- **Glow**: Pulsing glow effect for interactive elements
- **Float**: Subtle floating animation for background elements
- **Hover Transitions**: 300ms ease-in-out for all interactive elements

### Gradients
```css
.text-gradient-violet-pink
.text-gradient-pink-yellow
.bg-gradient-violet-pink
.bg-gradient-pink-yellow
```

## Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Typography Responsive Behavior
- H1 scales from 5xl (mobile) to 4rem (desktop)
- H2 scales from 4xl (mobile) to 3rem (desktop)
- H3 scales from 3xl (mobile) to 2.25rem (desktop)

## Usage Guidelines

### Do's
- Use the defined color palette consistently
- Maintain proper contrast ratios
- Apply hover effects to interactive elements
- Use the spacing scale for consistent layouts
- Implement proper focus states for accessibility

### Don'ts
- Don't use colors outside the defined palette
- Don't mix different button styles inconsistently
- Don't ignore responsive behavior
- Don't forget hover and focus states
- Don't use low contrast color combinations

## Component Examples

### Hero Section
```astro
<HeroSection 
  title="VISIONS OF TOMORROW"
  subtitle="Game Development Studio"
  description="Creating unforgettable gaming experiences..."
  primaryButtonText="Explore Games"
  secondaryButtonText="Our Story"
/>
```

### Game Card
```astro
<GameCard 
  title="Game Title"
  description="Game description..."
  image="/path/to/image.jpg"
  href="/games/game-slug"
/>
```

### Process Timeline
```astro
<ProcessTimeline 
  title="Our Development Process"
  subtitle="From concept to launch..."
  items={timelineItems}
/>
```

## File Structure

```
src/
├── styles/
│   └── global.css          # Global styles and component classes
├── components/
│   ├── HeroSection.astro   # Hero component
│   ├── GameCard.astro      # Game card component
│   ├── ProcessTimeline.astro # Timeline component
│   └── Nav.jsx             # Navigation component
├── layouts/
│   └── Layout.astro        # Main layout with footer
└── pages/
    └── *.astro             # Page implementations
```

## Tailwind Configuration

The design system is configured in `tailwind.config.mjs` with:
- Custom color palette
- Typography scale
- Spacing units
- Border radius values
- Box shadows and glow effects
- Animation keyframes

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- CSS custom properties support required
- Backdrop-filter support for navigation blur effects 