export default function Stats() {
  return (
    <section className="section section--white">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Con số ấn tượng</h2>
        </div>
        <p
          style={{
            textAlign: 'center',
            maxWidth: 800,
            margin: '0 auto 40px',
            color: 'var(--text-muted)',
            fontSize: 14,
            lineHeight: 1.7,
          }}
        >
          TopCV là công ty công nghệ nhân sự (HR Tech) với năng lực lõi là công nghệ, đặc biệt là
          trí tuệ nhân tạo (AI). Sở hữu hơn 9 triệu người dùng và 200.000+ doanh nghiệp lớn tin
          dùng.
        </p>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-item__value">200.000+</div>
            <div className="stat-item__label">Doanh nghiệp</div>
            <div className="stat-item__desc">
              TopCV được nhiều doanh nghiệp tin tưởng và đồng hành như Samsung, Viettel, Vingroup,
              FPT, Techcombank,...
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-item__value">5M+</div>
            <div className="stat-item__label">Việc làm đã được kết nối</div>
            <div className="stat-item__desc">
              TopCV đồng hành và kết nối hàng nghìn ứng viên với những cơ hội việc làm hấp dẫn từ
              các doanh nghiệp uy tín.
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-item__value">3M+</div>
            <div className="stat-item__label">Lượt tải ứng dụng</div>
            <div className="stat-item__desc">
              Hàng triệu ứng viên sử dụng ứng dụng TopCV để tìm kiếm việc làm, trong đó có 60% là
              ứng viên có kinh nghiệm từ 3 năm trở lên.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
