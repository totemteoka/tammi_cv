import { useEffect, useState } from 'react'
import { Search, MapPin, ChevronRight, ChevronLeft } from 'lucide-react'
import { categories, banners } from '../data/mockData'
import { asset } from '../utils/asset'

export default function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % banners.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setSlide((s) => (s - 1 + banners.length) % banners.length)
  const next = () => setSlide((s) => (s + 1) % banners.length)

  return (
    <section className="hero">
      <h1 className="hero__title">
        TopCV - Tạo CV, Tìm việc làm, <span>Tuyển dụng hiệu quả</span>
      </h1>

      <div className="search-box">
        <div className="search-box__field">
          <Search />
          <input type="text" placeholder="Vị trí tuyển dụng, tên công ty" />
        </div>
        <div className="search-box__divider" />
        <div className="search-box__location">
          <MapPin />
          Địa điểm
          <ChevronRight size={14} style={{ marginLeft: 'auto', opacity: 0.5 }} />
        </div>
        <button className="btn btn--search">
          <Search size={18} />
          Tìm kiếm
        </button>
      </div>

      <div className="hero__content">
        <aside className="category-panel">
          {categories.map((cat) => (
            <a key={cat} href={`#${cat}`} className="category-panel__item">
              <span>{cat}</span>
              <ChevronRight />
            </a>
          ))}
        </aside>

        <div className="banner-slider">
          {banners.map((b, i) => (
            <div
              key={b.id}
              className={`banner-slide${i === slide ? ' active' : ''}`}
              style={{ background: b.bg }}
            >
              {b.image && (
                <img
                  className="banner-slide__img"
                  src={asset(b.image)}
                  alt={b.title}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              )}
              <div className="banner-slide__overlay" />
              <div className="banner-slide__body">
                <div className="banner-slide__title">{b.title}</div>
                <div className="banner-slide__sub">{b.subtitle}</div>
                <a href="#kham-pha" className="banner-slide__cta">
                  {b.cta}
                </a>
              </div>
            </div>
          ))}
          <button className="banner-nav banner-nav--prev" onClick={prev} aria-label="Previous">
            <ChevronLeft size={20} />
          </button>
          <button className="banner-nav banner-nav--next" onClick={next} aria-label="Next">
            <ChevronRight size={20} />
          </button>
          <div className="banner-dots">
            {banners.map((_, i) => (
              <button
                key={i}
                className={`banner-dot${i === slide ? ' active' : ''}`}
                onClick={() => setSlide(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
