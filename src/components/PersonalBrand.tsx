export default function PersonalBrand() {
  return (
    <section className="section section--white" id="tao-cv">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Cùng TopCV xây dựng thương hiệu cá nhân</h2>
        </div>
        <div className="brand-grid">
          <div className="brand-card brand-card--cv">
            <div className="brand-card__content">
              <div className="brand-card__label">CV Builder 2.0</div>
              <h3 className="brand-card__title">Tạo CV chuyên nghiệp chỉ trong vài phút</h3>
              <p className="brand-card__desc">
                Hơn 50+ mẫu CV đẹp, chuẩn ATS giúp bạn gây ấn tượng với nhà tuyển dụng.
              </p>
              <a href="#tao-cv-ngay" className="btn btn--primary">
                Tạo CV ngay
              </a>
            </div>
            <div className="brand-card__visual">
              <img src="/banners/banner-cv.jpg" alt="CV Builder" />
            </div>
          </div>

          <div className="brand-card brand-card--test" id="cam-nang">
            <div className="brand-card__content">
              <div className="brand-card__label">Thấu hiểu bản thân</div>
              <h3 className="brand-card__title">Thấu hiểu bản thân - Nâng tầm giá trị</h3>
              <p className="brand-card__desc">
                Khám phá tính cách, năng lực và định hướng nghề nghiệp phù hợp với bạn.
              </p>
              <a href="#trac-nghiem" className="btn btn--primary" style={{ background: '#1a73e8' }}>
                Làm trắc nghiệm
              </a>
            </div>
            <div className="brand-card__visual">
              <img src="/banners/banner-test.jpg" alt="Trắc nghiệm nghề nghiệp" />
            </div>
          </div>

          <div className="brand-card brand-card--review">
            <div className="brand-card__content">
              <div className="brand-card__label">CV Review</div>
              <h3 className="brand-card__title">Chuyên gia soi CV - Săn offer nhanh hơn</h3>
              <p className="brand-card__desc">
                Nhận góp ý chi tiết từ chuyên gia tuyển dụng để CV của bạn nổi bật hơn.
              </p>
              <a href="#cv-review" className="btn btn--primary" style={{ background: '#e85d4c' }}>
                Đặt lịch review
              </a>
            </div>
            <div className="brand-card__visual">
              <img src="/banners/banner-review.jpg" alt="CV Review" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
