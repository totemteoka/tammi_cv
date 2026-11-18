export default function AppPromo() {
  return (
    <section className="section">
      <div className="container">
        <div className="app-promo">
          <div className="app-promo__content">
            <h2 className="app-promo__title">
              Kiến tạo sự nghiệp của riêng bạn với ứng dụng TopCV
            </h2>
            <p className="app-promo__desc">
              “Tất cả trong một” — Trải nghiệm tạo CV, tìm việc, ứng tuyển và hơn thế nữa - chỉ với
              một ứng dụng duy nhất. Bắt đầu ngay hôm nay!
            </p>
            <div className="app-promo__stores">
              <a href="#app-store" className="store-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div className="store-btn__label">Download on the</div>
                  <div className="store-btn__name">App Store</div>
                </div>
              </a>
              <a href="#google-play" className="store-btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.74c-.5-.26-.8-.74-.8-1.28V1.54c0-.54.3-1.02.8-1.28L13.3 12 3.18 23.74zm1.62.5L14.5 13.8l3.4 3.4-10.5 6.04c-.7.4-1.55.4-2.25 0l-.35.2zm15.5-8.9l-3.05 1.76-3.5-3.5 3.5-3.5 3.05 1.76c.9.52.9 1.96 0 2.48zM4.8.06l10.5 6.04 3.4-3.4L7.05.06C6.35-.34 5.5-.34 4.8.06z" />
                </svg>
                <div>
                  <div className="store-btn__label">GET IT ON</div>
                  <div className="store-btn__name">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div className="app-promo__phones">
            <img src="/banners/app-phones.jpg" alt="Ứng dụng TopCV trên điện thoại" />
          </div>
        </div>
      </div>
    </section>
  )
}
