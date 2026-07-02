import { Link } from 'react-router-dom'
import SectionDivider from '../components/SectionDivider'
import { blogPosts } from '../data/site'
import './Blogs.css'

const homeSlugs = ['using-whitespace-as-luxury', 'core-web-vitals', 'the-framer-advantage', 'the-secret-to-delight']

export default function Blogs({ all = false }: { all?: boolean }) {
  const posts = all ? blogPosts : homeSlugs.map((slug) => blogPosts.find((p) => p.slug === slug)!)

  return (
    <section className="blogs">
      <SectionDivider label="Blogs" />

      <div className="blogs-header container">
        <h2 className="t-display blogs-title">
          Latest
          <br />
          Blogs.
        </h2>
        <Link to="/blog" className="btn btn--green blogs-all">
          All Blogs
        </Link>
      </div>

      <div className="blogs-grid container">
        {posts.map((post) => (
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
  )
}
