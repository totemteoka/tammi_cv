export default function JobMarket() {
  const today = new Date()
  const dateStr = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`

  const stats = [
    { value: '52.184', label: 'Việc làm đang tuyển' },
    { value: '8.432', label: 'Việc làm mới hôm nay' },
    { value: '214.560', label: 'Công ty đang tuyển' },
    { value: '9.2M+', label: 'Ứng viên trên TopCV' },
  ]

  return (
    <section className="section section--white">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Thị trường việc làm hôm nay {dateStr}</h2>
        </div>
        <div className="market-grid">
          {stats.map((s) => (
            <div key={s.label} className="market-card">
              <div className="market-card__value">{s.value}</div>
              <div className="market-card__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
