import { useMemo, useState } from 'react'
import {
  Heart,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Inbox,
  ListFilter,
  ChevronDown,
} from 'lucide-react'
import {
  filterDimensions,
  filterJobs,
  filterOptions,
  type FilterDimension,
} from '../data/mockData'

const PAGE_SIZE = 6

const badgeClass: Record<string, string> = {
  HOT: 'badge--hot',
  'NỔI BẬT': 'badge--featured',
  TOP: 'badge--top',
  GẤP: 'badge--urgent',
}

export default function FeaturedJobs() {
  const [tab, setTab] = useState<'office' | 'general'>('office')
  const [dimension, setDimension] = useState<FilterDimension>('cities')
  const [chip, setChip] = useState('Ngẫu nhiên')
  const [saved, setSaved] = useState<Set<number>>(new Set())
  const [page, setPage] = useState(1)

  const chips = filterOptions[dimension]
  const filtered = useMemo(() => filterJobs(tab, dimension, chip), [tab, dimension, chip])
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const switchTab = (next: 'office' | 'general') => {
    setTab(next)
    setPage(1)
  }

  const switchDimension = (next: FilterDimension) => {
    setDimension(next)
    setChip(filterOptions[next][0])
    setPage(1)
  }

  const switchChip = (next: string) => {
    setChip(next)
    setPage(1)
  }

  const toggleSave = (id: number) => {
    setSaved((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const dimensionLabel = filterDimensions.find((d) => d.value === dimension)?.label ?? ''

  return (
    <section className="section" id="viec-lam">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Việc làm nổi bật</h2>
          <a href="#xem-tat-ca" className="section__link">
            Xem tất cả <ArrowRight size={16} />
          </a>
        </div>

        <div className="jobs-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={tab === 'office'}
            className={`jobs-tab${tab === 'office' ? ' active' : ''}`}
            onClick={() => switchTab('office')}
          >
            Việc văn phòng
          </button>
          <button
            role="tab"
            aria-selected={tab === 'general'}
            className={`jobs-tab${tab === 'general' ? ' active' : ''}`}
            onClick={() => switchTab('general')}
          >
            Việc phổ thông
          </button>
        </div>

        <div className="box-filter">
          <div className="box-filter__select-wrap">
            <span className="box-filter__label">
              <ListFilter size={14} />
              Lọc theo:
            </span>
            <div className="box-filter__select">
              <select
                value={dimension}
                onChange={(e) => switchDimension(e.target.value as FilterDimension)}
                aria-label="Loại bộ lọc"
              >
                {filterDimensions.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="box-filter__caret" />
            </div>
          </div>

          <div className="jobs-filters__scroll" key={dimension}>
            {chips.map((item) => (
              <button
                key={item}
                className={`filter-chip${chip === item ? ' active' : ''}`}
                onClick={() => switchChip(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="jobs-hint">
          <Lightbulb size={16} />
          <span>
            Đang xem <strong>{tab === 'office' ? 'việc văn phòng' : 'việc phổ thông'}</strong>
            {' · '}
            {dimensionLabel}: <strong>{chip}</strong>
            {' — '}
            {filtered.length} việc làm
          </span>
        </div>

        {visible.length === 0 ? (
          <div className="empty-state">
            <Inbox size={40} />
            <p>
              Chưa có nhiều việc làm {tab === 'general' ? 'phổ thông' : 'văn phòng'} nổi bật theo bộ
              lọc {dimensionLabel.toLowerCase()} “{chip}”.
            </p>
            <button className="btn btn--primary" onClick={() => switchChip(chips[0])}>
              Xóa bộ lọc
            </button>
          </div>
        ) : (
          <div className="jobs-grid" key={`${tab}-${dimension}-${chip}-${currentPage}`}>
            {visible.map((job) => (
              <article key={job.id} className="job-card">
                <img src={job.logo} alt={job.company} className="job-card__logo" />
                <div className="job-card__body">
                  {job.badges && job.badges.length > 0 && (
                    <div className="job-card__badges">
                      {job.badges.map((b) => (
                        <span key={b} className={`badge ${badgeClass[b]}`}>
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                  <a href={`#job-${job.id}`} className="job-card__title">
                    {job.title}
                  </a>
                  <div className="job-card__company">{job.company}</div>
                  <div className="job-card__meta">
                    <span className="job-card__tag">{job.salary}</span>
                    <span className="job-card__tag">{job.location}</span>
                  </div>
                </div>
                <button
                  className={`job-card__heart${saved.has(job.id) ? ' saved' : ''}`}
                  onClick={() => toggleSave(job.id)}
                  aria-label="Lưu việc làm"
                >
                  <Heart size={18} fill={saved.has(job.id) ? 'currentColor' : 'none'} />
                </button>
              </article>
            ))}
          </div>
        )}

        {filtered.length > 0 && (
          <div className="jobs-pagination">
            <button
              className="page-btn"
              disabled={currentPage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              aria-label="Trang trước"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="page-info">
              {currentPage} / {totalPages} trang
            </span>
            <button
              className="page-btn"
              disabled={currentPage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              aria-label="Trang sau"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
