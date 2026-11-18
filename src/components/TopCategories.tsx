import type { ReactNode } from 'react'
import {
  Tag,
  Monitor,
  Briefcase,
  Calculator,
  Megaphone,
  Users,
  MessageCircle,
  Building2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { industries } from '../data/mockData'

const iconMap: Record<string, ReactNode> = {
  tag: <Tag size={24} />,
  monitor: <Monitor size={24} />,
  briefcase: <Briefcase size={24} />,
  calculator: <Calculator size={24} />,
  megaphone: <Megaphone size={24} />,
  users: <Users size={24} />,
  message: <MessageCircle size={24} />,
  building: <Building2 size={24} />,
}

export default function TopCategories() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Top ngành nghề nổi bật</h2>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="page-btn" aria-label="Trước">
              <ChevronLeft size={18} />
            </button>
            <button className="page-btn" aria-label="Sau">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="cat-grid">
          {industries.map((ind) => (
            <a key={ind.name} href={`#nganh-${ind.name}`} className="cat-card">
              <div className="cat-card__icon">{iconMap[ind.icon]}</div>
              <div className="cat-card__name">{ind.name}</div>
              <div className="cat-card__jobs">{ind.jobs} việc làm</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
