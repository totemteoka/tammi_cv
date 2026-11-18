import { pressLogos } from '../data/mockData'

export default function Press() {
  return (
    <section className="section section--white">
      <div className="container">
        <div className="section__header" style={{ justifyContent: 'center' }}>
          <h2 className="section__title">Báo chí nói về TopCV</h2>
        </div>
        <div className="press-logos">
          {pressLogos.map((name) => (
            <span key={name} className="press-logo">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
