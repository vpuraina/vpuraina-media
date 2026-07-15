# Vpuraina Media — Website

Built with **Next.js 15** · **Tailwind CSS** · **Sanity CMS** · **Vercel**

---

## Project Structure

```
src/
├── app/                    # All pages (Next.js App Router)
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── portfolio/page.tsx
│   ├── pricing/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   ├── studio/[[...tool]]/ # Sanity CMS Studio (live at /studio)
│   └── api/contact/        # Contact form API route
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, Services, Process, Results, etc.
│   ├── forms/              # ContactForm
│   └── ui/                 # Button, Logo, SectionLabel, Orb
├── lib/
│   ├── utils.ts            # cn() helper
│   └── sanity.ts           # Sanity client + GROQ queries
sanity/
└── schemas/                # CMS content types
    ├── post.ts             # Blog posts
    ├── project.ts          # Portfolio projects
    ├── testimonial.ts      # Testimonials
    ├── teamMember.ts       # Team members
    └── service.ts          # Services
```

---

## Local Development

```bash
npm install
cp .env.local.example .env.local
# Fill in your keys (see Environment Variables below)
npm run dev
# → http://localhost:3000
```

---

## Environment Variables

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | sanity.io/manage after creating a project |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` (default) |
| `SANITY_API_TOKEN` | sanity.io/manage → API → Tokens |
| `RESEND_API_KEY` | resend.com → API Keys |
| `NEXT_PUBLIC_GA_ID` | Google Analytics → Data Stream |

---

## Setting Up Sanity CMS

1. Go to [sanity.io](https://sanity.io) and create a free account
2. Create a new project named "Vpuraina Media"
3. Copy the **Project ID** → paste into `.env.local`
4. Run the site and go to `/studio` — your CMS is live there
5. Start adding: Blog Posts, Portfolio Projects, Testimonials, Team Members

---

## Deploying to Vercel

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "Initial commit"
# Create repo on github.com then:
git remote add origin https://github.com/YOUR_USERNAME/vpuraina-media.git
git push -u origin main

# 2. Go to vercel.com → Import Git Repository
# 3. Add all environment variables in Vercel dashboard
# 4. Deploy — your site is live

# 5. Connect your domain in Vercel → Settings → Domains
# Add your domain → Update DNS at your registrar:
# Type: CNAME  Name: www  Value: cname.vercel-dns.com
# Type: A      Name: @    Value: 76.76.21.21
```

---

## Adding Email (Resend)

1. Go to [resend.com](https://resend.com) → Create free account
2. Add & verify your domain (`vpurainamedia.com`)
3. Create an API key → add to `.env.local` as `RESEND_API_KEY`
4. Uncomment the Resend code in `src/app/api/contact/route.ts`

---

## Adding Google Analytics

1. Go to analytics.google.com → Create property
2. Copy Measurement ID (G-XXXXXXXXXX) → add to `.env.local`
3. GA is pre-wired via `@next/third-parties` in layout.tsx

---

## Next Steps (build order)

- [ ] Connect Sanity and populate content
- [ ] Wire contact form to Resend
- [ ] Add Google Analytics
- [ ] Deploy to Vercel + connect domain
- [ ] Individual case study pages (`/portfolio/[slug]`)
- [ ] Individual blog post pages (`/blog/[slug]`)
- [ ] SEO sitemap (`/sitemap.xml` — Next.js built-in)
- [ ] WhatsApp floating button
- [ ] Cookie consent banner
