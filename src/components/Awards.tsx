import { awards } from '../data/mockData'
import { asset } from '../utils/asset'

export default function Awards() {
  return (
    <section className="section section--white">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Giải thưởng, thành tựu</h2>
        </div>
        <div className="awards-grid">
          {awards.map((a) => (
            <div key={a.title} className="award-card">
              <div className="award-card__icon">
                <img src={asset('banners/award-trophy.jpg')} alt="" />
              </div>
              <div className="award-card__title">{a.title}</div>
              <div className="award-card__year">{a.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
