const products = [
  {
    logo: 'TopCV',
    name: 'TopCV.vn',
    desc: 'Nền tảng công nghệ tuyển dụng thông minh',
  },
  {
    logo: 'HappyTime',
    name: 'HappyTime.vn',
    desc: 'Nền tảng quản lý và gia tăng trải nghiệm nhân viên',
  },
  {
    logo: 'TestCenter',
    name: 'TestCenter.vn',
    desc: 'Nền tảng thiết lập và đánh giá năng lực nhân viên',
  },
  {
    logo: 'SHiring',
    name: 'SHiring.ai',
    desc: 'Giải pháp quản trị tuyển dụng hiệu suất cao',
  },
]

export default function Ecosystem() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            Hệ sinh thái công nghệ nhân sự của TopCV bao gồm 4 sản phẩm chủ lực:
          </h2>
        </div>
        <div className="eco-grid">
          {products.map((p) => (
            <a key={p.name} href={`#${p.name}`} className="eco-card">
              <div className="eco-card__logo">{p.logo}</div>
              <div className="eco-card__name">{p.name}</div>
              <div className="eco-card__desc">{p.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
