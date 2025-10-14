# Suviksan Chatbot Web App - Design Guidelines

## Design Approach
**Reference-Based Design**: This application draws direct inspiration from Suviksan Technologies' corporate identity, maintaining visual consistency with their main landing page while creating an interactive chatbot experience.

## Core Design Elements

### A. Color Palette

**Primary Colors:**
- Primary Blue: `#004C97` (203 100% 30%)
- Accent Orange: `#F58220` (26 92% 54%)
- Background Gray: `#F5F7FA` (216 33% 97%)
- White: `#FFFFFF`

**Dark Mode:**
- Dark Background: `#0A0E27` (230 60% 9%)
- Dark Surface: `#1A1F3A` (230 35% 17%)
- Maintain Primary Blue and Accent Orange with adjusted opacity for dark backgrounds

### B. Typography
- **Font Families**: Inter or Poppins (Google Fonts via CDN)
- **Hierarchy**:
  - Hero Headline: 3xl-5xl, font-bold
  - Section Titles: 2xl-3xl, font-semibold
  - Card Titles: xl, font-semibold
  - Body Text: base-lg, font-normal
  - Chat Messages: sm-base, font-normal

### C. Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20 (p-4, m-6, gap-8, py-12, px-16, mb-20)

**Container Widths**:
- Main content: max-w-7xl mx-auto
- Service cards: grid gap-6 (3 columns desktop, 1 column mobile)
- Chatbot panel: w-96 desktop, w-full mobile

### D. Component Library

**Navigation**:
- Fixed top navbar with glass effect (backdrop-blur-lg)
- Logo left, nav links center/right, theme toggle right
- Hover states with Primary Blue underline
- Mobile: Hamburger menu with slide-in drawer

**Hero Section**:
- Full-width banner with abstract blue tech texture background image
- Centered content: Headline + Tagline + CTA button
- Height: min-h-[500px] desktop, min-h-[400px] mobile
- CTA button: Orange background, white text, hover lift animation

**Service Cards**:
- Grid layout: 3 columns (lg), 2 columns (md), 1 column (sm)
- Card style: white background (dark mode: dark surface), rounded-2xl, shadow-lg
- Hover effect: lift (translateY -4px) + enhanced shadow (Framer Motion)
- Icon + Title + 2-line description structure
- Icons: BarChart3, ShieldCheck, Database (Lucide-React, Primary Blue)

**Floating Chatbot**:
- Circular button: Primary Blue background, white chat icon (MessageCircle)
- Position: fixed bottom-20px right-20px
- Size: 60x60px with shadow-xl
- Panel slides in from bottom-right (Framer Motion)
- Panel dimensions: w-96 h-[600px] desktop, full-screen mobile

**Chatbot Panel**:
- Header: Primary Blue background, white text, "💬 Suviksan Assistant"
- Status indicator: Green dot "🟢 Active" or Red "🔴 Offline"
- Chat area: Scrollable, white background messages (user: right-aligned gray, bot: left-aligned Primary Blue)
- 4 Quick Questions: Rounded pills, border Primary Blue, text Primary Blue, hover: filled
- Input: White background, border, rounded-lg, with send icon button (Orange)
- Delete button: Red text, trash icon, bottom of panel

**Footer**:
- Background: Primary Blue (#004C97)
- White text, 3-column layout (desktop), stacked (mobile)
- Left: Company info and copyright
- Center: Navigation links (white, hover: Orange)
- Right: Social icons (LinkedIn, X, Facebook) - white, hover: Orange

### E. Animations
**Framer Motion Effects**:
- Hero CTA: Hover scale (1.05) + shadow enhancement
- Service cards: Hover lift (y: -8) with transition duration 0.3s
- Chatbot panel: Slide-in from right (x: 100%) to (x: 0)
- Quick question buttons: Tap scale (0.95)
- Page transitions: Fade-in with stagger for cards

**Interaction States**:
- Buttons: Smooth color transition (0.2s), scale on hover
- Links: Underline slide-in from left (0.3s)
- Theme toggle: Rotate icon 180deg on switch

## Responsive Design

**Breakpoints**:
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md/lg)
- Desktop: > 1024px (xl)

**Key Adaptations**:
- Navbar: Collapse to hamburger menu on mobile
- Service cards: Stack vertically on mobile
- Chatbot: Full-screen modal on mobile (slide up from bottom)
- Hero text: Reduce font sizes, adjust padding
- Footer: Stack columns vertically

## Images

**Hero Background Image**:
- Abstract blue technology texture or circuit board pattern
- Overlay: Linear gradient (Primary Blue at 60% opacity to transparent)
- Position: Cover, center
- Alternative: Geometric blue shapes with slight blur effect

**Approach**: Use a professional tech-themed stock image that complements the corporate blue aesthetic. The image should suggest innovation, security, and data analytics without being too literal.

## Dark Mode Implementation
- Toggle using Tailwind's `dark:` prefix classes
- Smooth transition (0.3s) between themes
- Maintain Primary Blue and Orange in both modes
- Adjust text contrast: white text on dark backgrounds, dark text on light
- Chatbot panel: Dark surface with lighter message bubbles
- Ensure WCAG AA contrast ratios in both modes