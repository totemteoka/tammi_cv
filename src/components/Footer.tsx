import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="logo" style={{ marginBottom: 16 }}>
              <svg className="logo__mark" viewBox="0 0 48 48" fill="none" width={32} height={32}>
                <rect width="48" height="48" rx="10" fill="#00B14F" />
                <path
                  d="M12 14h10.5c4.2 0 7 2.5 7 6.2 0 2.6-1.4 4.6-3.7 5.5L32 34h-5.2l-5.4-7.4H17.2V34H12V14zm5.2 4.2v5.2h4.6c2.1 0 3.3-1 3.3-2.6s-1.2-2.6-3.3-2.6H17.2z"
                  fill="#fff"
                />
              </svg>
              <div className="logo__text">
                top<span>cv</span>
              </div>
            </Link>
            <div className="footer__contact">
              <div>
                <strong>Hotline:</strong> 1900 068 889 | Nhánh 2 (Giờ hành chính)
              </div>
              <div>
                <strong>Email:</strong> hotro@topcv.vn
              </div>
            </div>
            <div className="footer__social">
              <a href="#fb" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>
              <a href="#li" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                </svg>
              </a>
              <a href="#yt" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="footer__col-title">Về TopCV</div>
            <div className="footer__links">
              <a href="#gioi-thieu">Giới thiệu</a>
              <a href="#gop-y">Góp ý</a>
              <a href="#dieu-khoan">Điều khoản sử dụng</a>
              <a href="#bao-mat">Chính sách bảo mật</a>
              <a href="#quy-che">Quy chế hoạt động</a>
            </div>
          </div>

          <div>
            <div className="footer__col-title">Dành cho ứng viên</div>
            <div className="footer__links">
              <a href="#viec-lam">Việc làm</a>
              <a href="#tao-cv">Tạo CV</a>
              <a href="#cong-cu">Công cụ</a>
              <a href="#cam-nang">Cẩm nang nghề nghiệp</a>
              <a href="#tinh-luong">Tính lương Gross - Net</a>
            </div>
          </div>

          <div>
            <div className="footer__col-title">Dành cho nhà tuyển dụng</div>
            <div className="footer__links">
              <Link to="/tuyendung">Đăng tuyển dụng</Link>
              <Link to="/tuyendung#giai-phap">Tìm hồ sơ</Link>
              <Link to="/tuyendung#giai-phap">Sản phẩm dịch vụ</Link>
              <Link to="/tuyendung#bao-gia">Bảng giá</Link>
              <Link to="/tuyendung#lien-he">Liên hệ</Link>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__address">
            <div>
              Trụ sở HN: Tòa FS - GoldSeason số 47 Nguyễn Tuân, Phường Thanh Xuân, Thành phố Hà Nội
            </div>
            <div>Chi nhánh HCM: Tòa nhà Dali, 24C Phan Đăng Lưu, Phường Gia Định, TP HCM</div>
          </div>
          <div>© {new Date().getFullYear()} TopCV Vietnam JSC</div>
        </div>
      </div>
    </footer>
  )
}
