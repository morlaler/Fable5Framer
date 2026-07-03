import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faqs, faqIntro } from '../data/site'
import './Faq.css'

function FaqItem({ question, answer, open, onToggle }: { question: string; answer: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`faq-item${open ? ' is-open' : ''}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={open}>
        <span>{question}</span>
        <span className="faq-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" width="15" height="15">
            <path d="M8 1v14M1 8h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          >
            <p>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="faq">
      <div className="faq-inner container">
        <div className="faq-left">
          <h2 className="t-display">FAQ.</h2>
          <div className="faq-left-bottom">
            <div className="faq-portrait">
              <img src="/assets/images/faq-portrait.jpg" alt="Portrait of a man, side view" loading="lazy" />
            </div>
            <p className="faq-intro">{faqIntro}</p>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.question}
              question={f.question}
              answer={f.answer}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
