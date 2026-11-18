import { useMemo, useState } from 'react'
import { Briefcase, Plus, Inbox } from 'lucide-react'
import { companyFilters, filterCompanies } from '../data/mockData'

export default function ProCompanies() {
  const [filter, setFilter] = useState('Tất cả')

  const list = useMemo(() => filterCompanies(filter), [filter])
  const featured = list.find((c) => c.featured) ?? list[0]
  const rest = list.filter((c) => c.id !== featured?.id).slice(0, 8)

  return (
    <section className="pro-section" id="pro">
      <div className="container">
        <div className="pro-box">
          <div className="pro-box__header">
            <div className="pro-box__header-content">
              <div>
                <h2 className="pro-box__title">Thương hiệu lớn tiêu biểu</h2>
                <p className="pro-box__desc">
                  Hàng trăm thương hiệu lớn tiêu biểu đang tuyển dụng trên TopCV Pro.
                </p>
              </div>
              <span className="pro-badge">Pro Company</span>
            </div>
          </div>

          <div className="pro-filters" role="tablist">
            {companyFilters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={`pro-filter${filter === f ? ' active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {!featured ? (
            <div className="empty-state" style={{ margin: 24 }}>
              <Inbox size={40} />
              <p>Chưa có thương hiệu nào trong ngành {filter}.</p>
              <button className="btn btn--primary" onClick={() => setFilter('Tất cả')}>
                Xem tất cả
              </button>
            </div>
          ) : (
            <div className="pro-grid" key={filter}>
              <div
                className="pro-featured"
                style={{
                  backgroundImage: `url(${featured.cover ?? 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'})`,
                }}
              >
                <img src={featured.logo} alt={featured.name} className="pro-featured__logo" />
                <div className="pro-featured__name">{featured.name}</div>
                <div className="pro-featured__industry">{featured.industry}</div>
                <div className="pro-featured__stats">
                  <span>
                    <Briefcase size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />{' '}
                    {featured.jobs} việc làm
                  </span>
                  <span>{Math.max(1, Math.floor(featured.jobs / 7))} việc quản lý/chuyên gia</span>
                </div>
                <div className="pro-featured__actions">
                  <button className="btn btn--gold">Pro Company</button>
                  <button className="btn btn--follow">
                    <Plus size={14} /> Theo dõi
                  </button>
                </div>
              </div>

              <div className="company-cards">
                {rest.map((c) => (
                  <a key={c.id} href={`#company-${c.id}`} className="company-card">
                    <img src={c.logo} alt={c.name} className="company-card__logo" />
                    <div>
                      <div className="company-card__name">{c.name}</div>
                      <div className="company-card__industry">{c.industry}</div>
                      <div className="company-card__jobs">
                        <Briefcase size={12} /> {c.jobs} việc làm
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="pro-result-count">
            {filter === 'Tất cả'
              ? `${list.length} thương hiệu Pro`
              : `${list.length} thương hiệu ngành ${filter}`}
          </div>
        </div>
      </div>
    </section>
  )
}
