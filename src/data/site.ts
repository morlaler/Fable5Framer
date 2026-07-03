export interface Project {
  name: string
  category: string
  image: string
  slug: string
}

export interface Service {
  number: string
  letter: string
  letterFont: 'YUNGA' | 'Rechteck' | 'ARK-ES' | 'Zen Tokyo Zoo'
  name: string
}

export interface PricingPlan {
  name: string
  description: string
  price: string
  cta: string
  featured?: boolean
  includes: string[]
}

export interface Award {
  number: string
  name: string
  subtitle: string
  year: string
  count: string
  icon: string
}

export interface Stat {
  label: string
  value: number
  decimals?: number
  suffix: string
  note: string
}

export interface TeamMember {
  department: string
  name: string
  role: string
  image: string
}

export interface Faq {
  question: string
  answer: string
}

export interface BlogPost {
  date: string
  category: string
  title: string
  image: string
  slug: string
}

export const heroHeadline =
  'A digital design practice crafting brands with substance. We merge interactive physics with strategic identity to build websites that feel real.'

export const aboutStatement =
  'At Mattter®, we believe intelligence should be structural, not supplemental. We are a design and automation lab dedicated to removing friction. By integrating advanced AI and kinetic workflows, we transform static companies into self-driving entities enabling you to operate faster, smarter, and with absolute clarity.'

export const projects: Project[] = [
  { name: 'Ethereal', category: 'Web design', image: '/assets/images/project-ethereal.png', slug: 'ethereal' },
  { name: 'Pulse', category: 'UI/UX Design', image: '/assets/images/project-pulse.png', slug: 'pulse' },
  { name: 'Canvas', category: 'Web design', image: '/assets/images/project-canvas.png', slug: 'canvas' },
  { name: 'Nexus', category: 'Development', image: '/assets/images/project-nexus.png', slug: 'nexus' },
  { name: 'Summit', category: 'SEO', image: '/assets/images/project-summit.png', slug: 'summit' },
  { name: 'Vault', category: 'UI/UX Design', image: '/assets/images/project-vault.png', slug: 'vault' },
  { name: 'Velocity', category: 'Development', image: '/assets/images/project-velocity.png', slug: 'velocity' },
]

export const services: Service[] = [
  { number: '01', letter: 'w', letterFont: 'YUNGA', name: 'Web Design' },
  { number: '02', letter: 'D', letterFont: 'Zen Tokyo Zoo', name: 'Development' },
  { number: '03', letter: 'UI', letterFont: 'Rechteck', name: 'UI/UX Design' },
  { number: '04', letter: 'S', letterFont: 'ARK-ES', name: 'SEO' },
]

export const pricingQuote = {
  quote:
    'Most agencies sell time. we sell displacement. choose a high-impact sprint to accelerate your market position, or partner with us for the long haul.',
  name: 'Michael Williams',
  role: 'CEO @Vixopedia',
  image: '/assets/images/avatar-michael.png',
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Design Support',
    description: 'Perfect for startups needing consistent social and marketing assets.',
    price: '1,999',
    cta: 'Get Started',
    includes: ['One active request at a time', '2-day average turnaround', 'Social media & Ad creatives'],
  },
  {
    name: 'Web & Growth',
    description: 'Comprehensive support for growing companies, including web development.',
    price: '4,499',
    cta: 'Scale Now',
    includes: [
      'Two active requests at a time',
      'Framer development & updates',
      'Landing page optimization',
      'Basic SEO setup',
      'Presentation decks',
      'Stock photo sourcing',
    ],
  },
  {
    name: 'Agency Partner',
    description: 'A fully dedicated design team integrated directly into your workflow.',
    price: '8,999',
    cta: 'Book a Call',
    featured: true,
    includes: [
      'Four active requests at a time',
      'Priority support via Slack',
      'Unlimited brands',
      'Advanced 3D & Motion graphics',
      'Strategy workshops',
      'Weekly sync calls',
      'Dedicated Project Manager',
      'Same-day turnaround on small tasks',
    ],
  },
]

export type TestimonialItem =
  | { kind: 'media'; video: string; poster: string; name: string; role: string }
  | { kind: 'quote'; quote: string; name: string; role: string; avatar: string }

export const testimonialItems: TestimonialItem[] = [
  {
    kind: 'media',
    video: '/assets/video/video-man.mp4',
    poster: '/assets/images/testimonial-julian.jpg',
    name: 'Julian Cross',
    role: 'CEO at Pulse',
  },
  {
    kind: 'quote',
    quote:
      '"Moving to Framer was a game changer. The team delivered a blazing fast site that my marketing team can actually update without needing to call a developer every time.""',
    name: 'Marcus Chen',
    role: 'CMO at Nexus AI',
    avatar: '/assets/images/testimonial-marcus.jpg',
  },
  {
    kind: 'media',
    video: '/assets/video/video-woman.mp4',
    poster: '/assets/images/testimonial-mia.jpg',
    name: 'Mia Thompson',
    role: 'Director at Velocity',
  },
  {
    kind: 'quote',
    quote:
      '"Our churn rate was high because users found our dashboard confusing. This team simplified complex data into an intuitive UI that our customers actually love using.""',
    name: 'Sarah Jenkins',
    role: 'Product Lead at Orbit',
    avatar: '/assets/images/testimonial-sarah.jpg',
  },
]

export const awards: Award[] = [
  {
    number: '01',
    name: 'Design Excellence Award',
    subtitle: 'Best Creative Studio',
    year: '2025',
    count: '16x',
    icon: '/assets/svg/award-1.svg',
  },
  {
    number: '02',
    name: 'Innovation Leader Award',
    subtitle: 'Outstanding Digital Innovation',
    year: '2025',
    count: '14x',
    icon: '/assets/svg/award-2.svg',
  },
  {
    number: '03',
    name: 'Creative Impact Award',
    subtitle: 'Most Influential Design Work',
    year: '2025',
    count: '10x',
    icon: '/assets/svg/award-3.svg',
  },
  {
    number: '04',
    name: 'Branding Mastery Award',
    subtitle: 'Best Branding Project',
    year: '2025',
    count: '2x',
    icon: '/assets/svg/award-4.svg',
  },
  {
    number: '05',
    name: 'User Experience Award',
    subtitle: 'Exceptional UX Design',
    year: '2025',
    count: '8x',
    icon: '/assets/svg/award-5.svg',
  },
  {
    number: '06',
    name: 'Visual Craft Award',
    subtitle: 'Best Visual Direction',
    year: '2025',
    count: '12x',
    icon: '/assets/svg/award-6.svg',
  },
]

export const statsStatement =
  'Good design pays dividends. We combine creative strategy with technical precision to deliver results that you can actually measure, turning visitors into loyal customers.'

export const stats: Stat[] = [
  { label: 'Client Satisfaction', value: 98, suffix: '%', note: 'Avg. across all projects' },
  { label: 'Years active', value: 9, suffix: '+', note: 'In the industry' },
  { label: 'Delivered Projects', value: 120, suffix: '+', note: 'Shipped on time' },
  { label: 'Average ROI', value: 3.2, decimals: 1, suffix: 'X', note: 'For our clients' },
]

export const team: TeamMember[] = [
  { department: 'Strategy', name: 'Matt Anderson', role: 'Creative Director', image: '/assets/images/team-matt.jpg' },
  { department: 'Design', name: 'Sarah Chen', role: 'Lead Designer', image: '/assets/images/team-sarah.jpg' },
  { department: 'SEO', name: 'Ethan Voss', role: 'SEO & Growth Lead', image: '/assets/images/team-ethan.jpg' },
  {
    department: 'Development',
    name: 'James Whitfield',
    role: 'Head of Development',
    image: '/assets/images/team-james.jpg',
  },
]

export const faqIntro =
  "We believe in total transparency. If you don't see what you're looking for here, book a quick call with our team and let's clear things up."

export const faqs: Faq[] = [
  {
    question: 'What specific services do you provide?',
    answer:
      'We specialize in four core pillars: Brand Identity, Web Design (Framer), UI/UX for products, and Technical SEO. We focus purely on digital experiences, so we do not handle print marketing or mobile app coding (Swift/Kotlin).',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Most branding and website projects take between 2 to 6 weeks depending on scope. A landing page can ship in days, while a full brand system with a multi-page site takes longer. We agree on a clear timeline before we start.',
  },
  {
    question: 'Why do you use Framer instead of WordPress?',
    answer:
      'Framer lets us ship faster, more secure, and visually richer websites without plugin bloat. You get blazing performance, built-in hosting, and a visual CMS your team can actually use — no maintenance headaches.',
  },
  {
    question: 'Can I update the website myself after launch?',
    answer:
      'Absolutely. Every site we hand over includes a clean CMS structure and a walkthrough session so your team can edit copy, images, and blog posts without touching a single line of code.',
  },
  {
    question: 'How do payments and deposits work?',
    answer:
      'We split projects into two payments: 50% upfront to book your slot and 50% on delivery. For monthly partnerships, billing happens at the start of each cycle and you can pause or cancel anytime.',
  },
  {
    question: 'Do you offer ongoing support or maintenance?',
    answer:
      'Yes. After launch you can keep us on a monthly plan for design and development support, or come back for one-off sprints whenever you need updates, new pages, or fresh campaigns.',
  },
]

export const blogPosts: BlogPost[] = [
  {
    date: 'February 6, 2026',
    category: 'Web design',
    title: 'Using Whitespace as Luxury',
    image: '/assets/images/blog-whitespace.png',
    slug: 'using-whitespace-as-luxury',
  },
  {
    date: 'February 5, 2026',
    category: 'UI/UX Design',
    title: 'The Rise of the Bento Grid Layout',
    image: '/assets/images/blog-bento.png',
    slug: 'the-rise-of-the-bento-grid-layout',
  },
  {
    date: 'February 3, 2026',
    category: 'SEO',
    title: 'Core Web Vitals',
    image: '/assets/images/blog-web-vitals.png',
    slug: 'core-web-vitals',
  },
  {
    date: 'February 1, 2026',
    category: 'Development',
    title: 'The Framer Advantage',
    image: '/assets/images/blog-framer-advantage.png',
    slug: 'the-framer-advantage',
  },
  {
    date: 'January 28, 2026',
    category: 'UI/UX Design',
    title: 'The Secret to "Delight"',
    image: '/assets/images/blog-delight.png',
    slug: 'the-secret-to-delight',
  },
  {
    date: 'January 22, 2026',
    category: 'Web design',
    title: 'Mastering the Hero Section',
    image: '/assets/images/blog-hero-section.png',
    slug: 'mastering-the-hero-section',
  },
]

export const clientLogos = [
  '/assets/svg/logo-client-1.svg',
  '/assets/svg/logo-client-2.svg',
  '/assets/svg/logo-client-3.svg',
  '/assets/svg/logo-client-4.svg',
  '/assets/svg/logo-client-5.svg',
  '/assets/svg/logo-client-6.svg',
]
