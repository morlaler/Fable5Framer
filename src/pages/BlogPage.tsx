import { blogPosts } from '../data/site'
import { Link } from 'react-router-dom'
import ContactCta from '../sections/ContactCta'
import './pages.css'

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-top container">
          <h1 className="t-display page-hero-title">Insights.</h1>
        </div>
        <p className="page-hero-lede container">
          Thoughts on design, brand identity, and the craft behind building digital experiences that last.
        </p>

        <div className="blogs-grid blogs-grid--page container">
          {blogPosts.map((post) => (
            <Link to="/blog" key={post.slug} className="blog-card">
              <div className="blog-card-top">
                <span className="blog-date">{post.date}</span>
                <span className="blog-chip">{post.category}</span>
              </div>
              <div className="blog-image">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <p className="blog-title">{post.title}</p>
            </Link>
          ))}
        </div>
      </section>
      <ContactCta />
    </main>
  )
}
