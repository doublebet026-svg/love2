# KHCWW Website - Quick Reference Guide

## Essential Commands

### Development
```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Create production build
npm run preview      # Preview production build locally
```

### Database
```bash
# View Supabase tables in browser
# https://supabase.com/dashboard

# View migrations
# supabase/migrations/
```

### Environment Setup
```bash
# Set environment variables in .env
VITE_SUPABASE_URL=https://0ec90b57d6e95fcbda19832f.supabase.co
VITE_SUPABASE_ANON_KEY=<your-key>
```

---

## Project Structure at a Glance

```
src/
├── components/Navigation.tsx     # Top navigation with logo
├── components/Footer.tsx         # Footer with links
├── pages/HomePage.tsx            # Hero + Stats + Programs
├── pages/GalleryPage.tsx        # Pixieset embed gallery
├── pages/AboutPage.tsx          # Mission/Vision/Timeline
├── pages/LeadershipPage.tsx     # Leadership team profiles
├── pages/MembershipPage.tsx     # Membership info + FAQ
├── pages/ContactPage.tsx        # Contact form (Supabase)
├── context/AuthContext.tsx      # Auth state management
├── lib/supabase.ts             # Supabase client
├── lib/api.ts                  # Database functions
└── App.tsx                      # Main router component
```

---

## Database Tables Overview

| Table | Purpose | Key Fields | RLS |
|-------|---------|-----------|-----|
| **members** | User profiles | id, email, department, status | User's own |
| **events** | Events | title, date, capacity, status | Public read |
| **blog_posts** | News/articles | title, content, slug, published_at | Public read |
| **event_registrations** | Registrations | event_id, member_id, status | Member's own |
| **contact_messages** | Contact form | name, email, subject, message | Public write |

---

## API Functions Quick Guide

### Members
```typescript
import { getMembers, getMemberById, createMember, updateMember } from '@/lib/api';

// Get all members
const members = await getMembers();

// Get specific member
const member = await getMemberById('uuid');

// Create new member
const newMember = await createMember({
  user_id: 'auth-id',
  first_name: 'John',
  email: 'john@example.com',
});

// Update member
const updated = await updateMember('member-id', {
  phone: '123-456-7890'
});
```

### Events
```typescript
import { getEvents, getUpcomingEvents, getEventById } from '@/lib/api';

// Get all events
const allEvents = await getEvents();

// Get next 6 events
const upcoming = await getUpcomingEvents(6);

// Get specific event
const event = await getEventById('event-id');
```

### Blog Posts
```typescript
import { getBlogPosts, getBlogPostBySlug } from '@/lib/api';

// Get published posts
const posts = await getBlogPosts();

// Get post by slug
const post = await getBlogPostBySlug('post-slug');
```

### Contact Messages
```typescript
import { submitContactMessage } from '@/lib/api';

// Submit contact form
await submitContactMessage({
  name: 'John',
  email: 'john@example.com',
  subject: 'membership',
  message: 'Hello!',
});
```

### Event Registration
```typescript
import { registerForEvent, checkEventRegistration } from '@/lib/api';

// Register for event
await registerForEvent('event-id', 'member-id');

// Check if registered
const registration = await checkEventRegistration('event-id', 'member-id');
```

---

## Component Usage

### Navigation
```tsx
import Navigation from '@/components/Navigation';

// Auto-includes mobile menu toggle
<Navigation />
```

### Footer
```tsx
import Footer from '@/components/Footer';

// Auto-includes social links and contact
<Footer />
```

### Pages
```tsx
import HomePage from '@/pages/HomePage';
import GalleryPage from '@/pages/GalleryPage';

// All pages work with React Router
<Route path="/" element={<HomePage />} />
<Route path="/gallery" element={<GalleryPage />} />
```

---

## Styling Quick Tips

### Colors
```tsx
// Primary theme colors
className="text-primary-500"  // Main color
className="text-secondary-500" // Secondary
className="text-accent-500"    // Accent (bright cyan)
className="text-success"       // Success (green)
className="text-gold"          // Gold accent
className="text-light"         // Light background

// Dark variants available (e.g., primary-900)
```

### Common Patterns
```tsx
// Hero gradient
className="hero-gradient text-white"

// Smooth transitions
className="smooth-transition hover:text-primary-600"

// Responsive grid
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"

// Mobile-first spacing
className="px-4 sm:px-6 lg:px-8"
```

---

## Common Tasks

### Add New Page
1. Create `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Update navigation links in `src/components/Navigation.tsx`

### Add Database Function
1. Add query in `src/lib/api.ts`
2. Import in your component
3. Call with `await functionName(params)`

### Add Form Field
1. Add state in component: `const [field, setField] = useState('')`
2. Create input element
3. Handle with `onChange={e => setField(e.target.value)}`
4. Use in submit handler

### Deploy Changes
```bash
npm run build    # Verify build succeeds
git add .
git commit -m "Your message"
git push origin main
# Auto-deploys if using Vercel
```

---

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Supabase Connection Issues
- Check `.env` file has correct URL and key
- Verify CORS settings in Supabase dashboard
- Check RLS policies in Database → Policies

### Contact Form Not Working
- Verify Supabase connection in console
- Check `contact_messages` table exists
- Ensure RLS policy allows inserts

### Styling Issues
- Verify Tailwind classes are correct
- Check `tailwind.config.ts` has all colors
- Ensure CSS is being imported in `App.tsx`

---

## File Locations Reference

| What | Where |
|------|-------|
| Environment Variables | `.env` |
| Supabase Client | `src/lib/supabase.ts` |
| Database Functions | `src/lib/api.ts` |
| Authentication | `src/context/AuthContext.tsx` |
| Navigation | `src/components/Navigation.tsx` |
| Footer | `src/components/Footer.tsx` |
| Homepage | `src/pages/HomePage.tsx` |
| Gallery | `src/pages/GalleryPage.tsx` |
| About | `src/pages/AboutPage.tsx` |
| Leadership | `src/pages/LeadershipPage.tsx` |
| Membership | `src/pages/MembershipPage.tsx` |
| Contact | `src/pages/ContactPage.tsx` |
| Global Styles | `src/index.css` |
| Tailwind Config | `tailwind.config.ts` |
| Vite Config | `vite.config.ts` |

---

## Important Links

- **Supabase Dashboard:** https://supabase.com/dashboard
- **Vercel Dashboard:** https://vercel.com
- **Project GitHub:** [Your GitHub URL]
- **Live Site:** [Your deployed URL]

---

## Contact Information

**Developer:** Dennis Murimi
**Organization:** KHCWW
**Email:** info@khcww.org
**Support:** See DEPLOYMENT_GUIDE.md

---

**Last Updated:** 2026-05-30
**Status:** Production Ready ✅
