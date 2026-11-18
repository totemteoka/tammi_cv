import {
  Puzzle,
  Lightbulb,
  Award,
  Calculator,
  Receipt,
  Search,
} from 'lucide-react'
import { tools } from '../data/mockData'

const icons = [
  <Puzzle size={22} />,
  <Lightbulb size={22} />,
  <Award size={22} />,
  <Calculator size={22} />,
  <Receipt size={22} />,
  <Search size={22} />,
]

export default function Tools() {
  return (
    <section className="section" id="cong-cu">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Công cụ vượt trội!</h2>
        </div>
        <div className="tools-grid">
          {tools.map((t, i) => (
            <a key={t.title} href={`#tool-${i}`} className="tool-card">
              <div className="tool-card__icon" style={{ background: t.color }}>
                {icons[i]}
              </div>
              <div>
                <div className="tool-card__title">{t.title}</div>
                <div className="tool-card__desc">{t.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
