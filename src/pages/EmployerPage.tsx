import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  Headphones,
  Menu,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import type { AuthMode } from '../components/AuthModal'
import { asset } from '../utils/asset'
import '../employer.css'

type Props = {
  onOpenAuth: (mode: AuthMode) => void
}

const stats = [
  { value: '11M+', label: 'Ứng viên tiềm năng' },
  { value: '9M+', label: 'Lượt truy cập ứng viên hàng tháng' },
  { value: '700K+', label: 'Doanh nghiệp tin dùng' },
  { value: '60K+', label: 'Tin đăng hiển thị hàng tháng' },
]

const attractItems = [
  {
    title: '60.000+ việc làm mới cập nhật liên tục',
    desc: 'Cơ hội việc làm từ MNCs, Tập đoàn, SMEs, Startup… đáp ứng đa dạng đối tượng người tìm việc.',
  },
  {
    title: 'Đưa việc làm đến đúng nơi ứng viên tìm kiếm',
    desc: 'Độ phủ mạnh trên Google và dẫn đầu AI Share of Voice giúp thương hiệu nhà tuyển dụng tăng hiện diện.',
  },
  {
    title: 'Ứng dụng Tìm việc với hơn 1 triệu người dùng',
    desc: 'Đưa cơ hội việc làm phù hợp đến ứng viên ngay trên điện thoại, tăng khả năng kết nối.',
  },
  {
    title: 'Gợi ý việc làm bằng công nghệ AI',
    desc: 'Toppy AI phân tích hồ sơ và hành vi tìm việc để tự động đề xuất việc làm phù hợp.',
  },
  {
    title: 'Tiếp cận ứng viên đa kênh',
    desc: 'Kết nối qua LinkedIn, Facebook, TikTok, Threads và hàng nghìn sự kiện tại 100+ trường ĐH/CĐ.',
  },
  {
    title: 'Bộ công cụ phát triển nghề nghiệp',
    desc: 'Tạo CV, test MBTI/MI, tính lương Gross-Net và nhiều công cụ hữu ích cho hành trình nghề nghiệp.',
  },
]

const srpItems = [
  {
    title: 'Đăng tin tuyển dụng',
    desc: 'Tiếp cận ứng viên với đa dạng gói đăng tin phù hợp mọi nhu cầu và mục tiêu tuyển dụng.',
  },
  {
    title: 'Tìm kiếm CV',
    desc: 'Tiếp cận hàng triệu CV chất lượng với bộ lọc tìm kiếm thông minh.',
  },
  {
    title: 'Top Connect',
    desc: 'Chat trực tiếp với ứng viên, tăng tương tác hai chiều giữa NTD và UV.',
  },
  {
    title: 'Truyền thông thương hiệu',
    desc: 'Banner hoặc chuyên trang tuyển dụng giúp xây dựng hình ảnh doanh nghiệp.',
  },
  {
    title: 'Kết nối và đồng bộ',
    desc: 'Đồng bộ dữ liệu CV, tin đăng qua ATS để quản lý tuyển dụng tập trung.',
  },
]

const steps = [
  {
    n: '1',
    title: 'Đăng ký tài khoản',
    desc: 'Đăng nhập để sử dụng các tính năng dành cho nhà tuyển dụng.',
  },
  {
    n: '2',
    title: 'Đăng tin tuyển dụng',
    desc: 'Đăng tin nhanh chóng và bắt đầu tìm kiếm ứng viên phù hợp.',
  },
  {
    n: '3',
    title: 'Tiếp nhận và xử lý CV',
    desc: 'Nhận hồ sơ ứng tuyển và quản lý ứng viên tập trung trên một nền tảng.',
  },
]

const faqs = [
  {
    q: 'tuyendung.topcv.vn khác gì topcv.vn?',
    a: 'tuyendung.topcv.vn dành cho doanh nghiệp (đăng tin, tìm CV, quản lý chiến dịch). topcv.vn dành cho ứng viên tìm việc và tạo CV.',
  },
  {
    q: 'Tôi có thể đăng tin tuyển dụng miễn phí không?',
    a: 'Có. Sau khi đăng ký và xác thực tài khoản doanh nghiệp, bạn nhận lượt đăng tin miễn phí theo chính sách hiện hành.',
  },
  {
    q: 'Đăng tin miễn phí và trả phí khác nhau như thế nào?',
    a: 'Tin miễn phí hiển thị vị trí cơ bản. Tin trả phí được ưu tiên Top đầu, vào “Việc làm nổi bật” và có trợ lý AI gợi ý ứng viên.',
  },
  {
    q: 'Nhà tuyển dụng có thể chủ động tìm kiếm ứng viên không?',
    a: 'Có. Tính năng Tìm kiếm CV giúp lọc theo vị trí, kinh nghiệm, địa điểm, kỹ năng… theo gói dịch vụ/Credit hiện hành.',
  },
  {
    q: 'Làm thế nào để tăng hiệu quả tuyển dụng trên TopCV?',
    a: 'Tối ưu JD, tận dụng AI gợi ý ứng viên, hoàn thiện trang doanh nghiệp và theo dõi báo cáo để điều chỉnh kịp thời.',
  },
]

const cities = ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Hải Phòng', 'Bắc Ninh', 'Đồng Nai', 'Hưng Yên']

export default function EmployerPage({ onOpenAuth }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [srp, setSrp] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    need: '',
  })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = 'TopCV Nhà tuyển dụng - Website đăng tin tuyển dụng uy tín tại Việt Nam'
    window.scrollTo(0, 0)
    return () => {
      document.title = 'TopCV - CV xịn việc làm chất - Tạo CV & Tìm việc miễn phí'
    }
  }, [])

  const submitConsult = (e: FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.phone || !form.city || !form.need) return
    setSent(true)
    window.setTimeout(() => setSent(false), 2500)
  }

  return (
    <div className="epl">
      <header className="epl-header">
        <div className="epl-header__inner">
          <Link to="/tuyendung" className="logo" onClick={() => setMenuOpen(false)}>
            <svg className="logo__mark" viewBox="0 0 48 48" fill="none">
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

          <nav className="epl-nav">
            <a href="#giai-phap">Giải pháp</a>
            <a href="#bao-gia">Báo giá</a>
            <a href="#lien-he">Liên hệ</a>
            <a href="#ho-tro">Hỗ trợ</a>
            <a href="#blog">Blog tuyển dụng</a>
          </nav>

          <div className="epl-header__actions">
            <button type="button" className="epl-lang" aria-label="Ngôn ngữ">
              🇻🇳 <ChevronDown size={14} />
            </button>
            <Link to="/" className="epl-btn epl-btn--seeker">
              <Briefcase size={16} />
              Dành cho người tìm việc
            </Link>
            <button type="button" className="epl-btn epl-btn--ghost" onClick={() => onOpenAuth('login')}>
              Đăng nhập
            </button>
            <button type="button" className="epl-btn epl-btn--primary" onClick={() => onOpenAuth('register')}>
              Đăng ký <ArrowUpRight size={16} />
            </button>
            <button
              type="button"
              className="epl-menu-toggle"
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="epl-mobile-nav">
            <a href="#giai-phap" onClick={() => setMenuOpen(false)}>Giải pháp</a>
            <a href="#bao-gia" onClick={() => setMenuOpen(false)}>Báo giá</a>
            <a href="#lien-he" onClick={() => setMenuOpen(false)}>Liên hệ</a>
            <a href="#ho-tro" onClick={() => setMenuOpen(false)}>Hỗ trợ</a>
            <a href="#blog" onClick={() => setMenuOpen(false)}>Blog tuyển dụng</a>
            <Link to="/" onClick={() => setMenuOpen(false)}>Dành cho người tìm việc</Link>
            <button type="button" className="epl-btn epl-btn--ghost" onClick={() => { setMenuOpen(false); onOpenAuth('login') }}>
              Đăng nhập
            </button>
            <button type="button" className="epl-btn epl-btn--primary" onClick={() => { setMenuOpen(false); onOpenAuth('register') }}>
              Đăng ký
            </button>
          </div>
        )}
      </header>

      <main>
        <section className="epl-hero">
          <div className="epl-container epl-hero__grid">
            <div className="epl-hero__content">
              <h1>
                Tuyển dụng Ứng viên phù hợp{' '}
                <span>
                  cùng AI <Sparkles size={28} />
                </span>
              </h1>
              <p>Tiếp cận hàng triệu ứng viên đang tìm việc</p>
              <div className="epl-hero__ctas">
                <a href="#dang-tin" className="epl-btn epl-btn--primary epl-btn--lg">
                  Đăng tin ngay <ArrowRight size={18} />
                </a>
                <a href="#tu-van" className="epl-btn epl-btn--dark epl-btn--lg">
                  <Headphones size={18} /> Tư vấn tuyển dụng
                </a>
              </div>
            </div>
            <div className="epl-hero__visual">
              <div className="epl-hero__card">
                <img
                  className="epl-hero__img"
                  src={asset('banners/employer-hero-ai.jpg')}
                  alt="Toppy AI trợ lý tuyển dụng"
                />
                <div className="epl-hero__float epl-hero__float--match">
                  <strong>80%</strong> match
                </div>
                <div className="epl-hero__float epl-hero__float--ai">
                  <Sparkles size={14} /> Đăng tin với Toppy AI
                </div>
                <p>Toppy AI đang gợi ý ứng viên phù hợp cho tin đăng của bạn</p>
              </div>
            </div>
          </div>
        </section>

        <section className="epl-stats">
          <div className="epl-container epl-stats__grid">
            {stats.map((s) => (
              <div key={s.label} className="epl-stat">
                <div className="epl-stat__value">{s.value}</div>
                <div className="epl-stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="epl-section" id="attract">
          <div className="epl-container">
            <div className="epl-section__head">
              <h2>TopCV thu hút ứng viên như thế nào?</h2>
              <p>
                Hơn 11 triệu ứng viên lựa chọn TopCV để tìm việc, phát triển nghề nghiệp và khám phá
                cơ hội mới mỗi ngày.
              </p>
            </div>
            <div className="epl-cards">
              {attractItems.map((item) => (
                <article key={item.title} className="epl-card">
                  <div className="epl-card__icon">
                    <Users size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="epl-section epl-section--muted" id="university">
          <div className="epl-container">
            <div className="epl-section__head">
              <h2>TopCV University - Mạng lưới trường đại học đối tác</h2>
              <p>
                Tiên phong tổ chức hàng nghìn sự kiện tại hơn 100+ trường ĐH/CĐ toàn quốc trong hơn
                10 năm qua.
              </p>
            </div>
            <div className="epl-cards epl-cards--3">
              {[
                {
                  title: 'Cổng việc làm mang thương hiệu nhà trường',
                  desc: 'Xây dựng cổng việc làm riêng cho sinh viên, tùy chỉnh theo đặc thù ngành học.',
                },
                {
                  title: 'Hoạt động kết nối nghề nghiệp',
                  desc: 'Đồng tổ chức Job Fair / Internship Fair và chương trình trải nghiệm tại doanh nghiệp.',
                },
                {
                  title: 'Đào tạo và hỗ trợ sinh viên',
                  desc: 'Workshop thị trường lao động, sửa CV 1-1, phỏng vấn thử và hướng nghiệp.',
                },
              ].map((item) => (
                <article key={item.title} className="epl-card">
                  <div className="epl-card__icon epl-card__icon--blue">
                    <Building2 size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="epl-section" id="pro">
          <div className="epl-container epl-split">
            <div>
              <h2>TopCV Pro - Tiếp cận ứng viên nhiều kinh nghiệm</h2>
              <p className="epl-lead">
                Nền tảng kết nối doanh nghiệp với nhóm ứng viên chất lượng cao, nhiều năm kinh
                nghiệm — phù hợp vị trí cấp cao và doanh nghiệp lớn.
              </p>
              <ul className="epl-checks">
                <li>
                  <CheckCircle2 size={18} /> Nền tảng dành riêng cho ứng viên nhiều năm kinh nghiệm
                </li>
                <li>
                  <CheckCircle2 size={18} /> Chiến dịch truyền thông toà nhà, thang máy
                </li>
                <li>
                  <CheckCircle2 size={18} /> Phủ sóng thương hiệu tại hàng nghìn văn phòng
                </li>
              </ul>
              <a href="#tu-van" className="epl-btn epl-btn--primary">
                Tư vấn TopCV Pro <ArrowRight size={16} />
              </a>
            </div>
            <div className="epl-pro-panel">
              <div className="epl-pro-badge">Pro Company</div>
              <h3>Ứng viên Senior & Chuyên gia</h3>
              <p>Tiếp cận nguồn nhân sự có kinh nghiệm, sẵn sàng cho vị trí quản lý và chuyên môn cao.</p>
            </div>
          </div>
        </section>

        <section className="epl-section epl-section--muted" id="giai-phap">
          <div className="epl-container">
            <div className="epl-section__head">
              <h2>TopCV Smart Recruitment Platform (SRP)</h2>
              <p>Nền tảng tuyển dụng toàn diện dành cho doanh nghiệp.</p>
            </div>
            <div className="epl-srp">
              <div className="epl-srp__tabs" role="tablist">
                {srpItems.map((item, i) => (
                  <button
                    key={item.title}
                    role="tab"
                    aria-selected={srp === i}
                    className={srp === i ? 'active' : ''}
                    onClick={() => setSrp(i)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <div className="epl-srp__panel">
                <h3>{srpItems[srp].title}</h3>
                <p>{srpItems[srp].desc}</p>
                <a href="#dang-tin" className="epl-btn epl-btn--primary">
                  Bắt đầu ngay <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="epl-section" id="ai">
          <div className="epl-container">
            <div className="epl-section__head">
              <h2>Toppy AI - Trợ lý công nghệ thông minh</h2>
              <p>Toppy AI gợi ý, Nhà tuyển dụng ra quyết định.</p>
            </div>
            <div className="epl-ai-banner">
              <img src={asset('banners/employer-hero-ai.jpg')} alt="Toppy AI" />
              <div className="epl-ai-banner__content">
                <span>Trợ lý AI tuyển dụng</span>
                <h3>Gợi ý ứng viên phù hợp chỉ trong vài giây</h3>
                <p>
                  Toppy AI phân tích JD, chấm điểm CV và đề xuất ứng viên đang chủ động tìm việc.
                </p>
              </div>
            </div>
            <div className="epl-cards epl-cards--3">
              {[
                {
                  title: 'AI gợi ý & kiểm duyệt nội dung tin',
                  desc: 'Đề xuất JD theo vị trí, điền nhanh khi đã có JD, kiểm duyệt tự động trong 24h.',
                },
                {
                  title: 'AI gợi ý mức độ phù hợp của CV',
                  desc: 'Chấm điểm theo kinh nghiệm, kỹ năng, học vấn và phân loại ứng viên theo nhóm.',
                },
                {
                  title: 'AI đề xuất ứng viên tiềm năng',
                  desc: 'Gợi ý CV đang bật chế độ tìm việc; điều chỉnh chân dung để nhận đề xuất phù hợp hơn.',
                },
              ].map((item) => (
                <article key={item.title} className="epl-card">
                  <div className="epl-card__icon">
                    <Sparkles size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="epl-section epl-section--muted" id="dang-tin">
          <div className="epl-container">
            <div className="epl-section__head">
              <h2>Bắt đầu ngay với 3 bước đơn giản</h2>
            </div>
            <div className="epl-steps">
              {steps.map((s) => (
                <div key={s.n} className="epl-step">
                  <div className="epl-step__n">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="epl-center">
              <button type="button" className="epl-btn epl-btn--primary epl-btn--lg" onClick={() => onOpenAuth('register')}>
                Đăng ký tài khoản doanh nghiệp <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        <section className="epl-section" id="tu-van">
          <div className="epl-container epl-consult">
            <div>
              <h2>Đâu là giải pháp phù hợp cho doanh nghiệp của bạn?</h2>
              <p className="epl-lead">
                Hãy để lại thông tin và chuyên viên tư vấn tuyển dụng của TopCV sẽ liên hệ ngay với
                bạn.
              </p>
              <div className="epl-hotline">
                <Headphones size={18} /> Hotline hỗ trợ: <a href="tel:1900068889">1900 068 889</a>
              </div>
            </div>
            <form className="epl-form" onSubmit={submitConsult} id="lien-he">
              <h3>Đăng ký nhận tư vấn</h3>
              <input
                placeholder="Họ và tên"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                placeholder="Số điện thoại"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              <select
                required
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              >
                <option value="">Chọn tỉnh/thành phố</option>
                {cities.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <select
                required
                value={form.need}
                onChange={(e) => setForm({ ...form, need: e.target.value })}
              >
                <option value="">Chọn nhu cầu tư vấn</option>
                <option value="1">Tôi muốn được đăng tin miễn phí</option>
                <option value="2">Tôi muốn tìm hiểu thêm về các gói dịch vụ</option>
                <option value="3">Tôi muốn biết thêm về các chương trình ưu đãi</option>
                <option value="4">Tôi muốn được hướng dẫn đăng ký tài khoản</option>
                <option value="5">Khác</option>
              </select>
              <button type="submit" className="epl-btn epl-btn--primary epl-btn--full">
                Đăng ký nhận tư vấn
              </button>
              {sent && <div className="epl-form__ok">Đã gửi yêu cầu tư vấn (demo). Cảm ơn bạn!</div>}
            </form>
          </div>
        </section>

        <section className="epl-section epl-section--muted" id="bao-gia">
          <div className="epl-container">
            <div className="epl-section__head">
              <h2>700.000+ doanh nghiệp tin tưởng đồng hành</h2>
              <p>Samsung, Viettel, Vingroup, FPT, Techcombank và hàng trăm thương hiệu lớn khác.</p>
            </div>
            <div className="epl-logos">
              {['Viettel', 'FPT', 'Vingroup', 'VPBank', 'Samsung', 'Masan', 'SHB', 'PNJ'].map((n) => (
                <div key={n} className="epl-logo-item">
                  {n}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="epl-section" id="ho-tro">
          <div className="epl-container">
            <div className="epl-section__head">
              <h2>Câu hỏi thường gặp</h2>
            </div>
            <div className="epl-faq">
              {faqs.map((f, i) => (
                <div key={f.q} className={`epl-faq__item${openFaq === i ? ' open' : ''}`}>
                  <button type="button" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {f.q}
                    <ChevronDown size={18} />
                  </button>
                  {openFaq === i && <p>{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="epl-footer" id="blog">
        <div className="epl-container epl-footer__grid">
          <div>
            <div className="logo" style={{ marginBottom: 12 }}>
              <svg className="logo__mark" viewBox="0 0 48 48" fill="none" width={28} height={28}>
                <rect width="48" height="48" rx="10" fill="#00B14F" />
                <path
                  d="M12 14h10.5c4.2 0 7 2.5 7 6.2 0 2.6-1.4 4.6-3.7 5.5L32 34h-5.2l-5.4-7.4H17.2V34H12V14zm5.2 4.2v5.2h4.6c2.1 0 3.3-1 3.3-2.6s-1.2-2.6-3.3-2.6H17.2z"
                  fill="#fff"
                />
              </svg>
              <div className="logo__text" style={{ color: '#fff' }}>
                top<span>cv</span>
              </div>
            </div>
            <p>Công ty Cổ phần TopCV Việt Nam</p>
            <p>Hotline: 1900 068 889 (Nhánh 1)</p>
            <p>Email: cskh@topcv.vn</p>
          </div>
          <div>
            <h4>Giải pháp</h4>
            <a href="#giai-phap">Đăng tin tuyển dụng</a>
            <a href="#giai-phap">Tìm kiếm CV</a>
            <a href="#pro">TopCV Pro</a>
            <a href="#ai">Toppy AI</a>
          </div>
          <div>
            <h4>Hỗ trợ</h4>
            <a href="#ho-tro">Câu hỏi thường gặp</a>
            <a href="#tu-van">Nhận tư vấn</a>
            <Link to="/">Dành cho người tìm việc</Link>
          </div>
          <div>
            <h4>Địa chỉ</h4>
            <p>HN: Tòa FS - GoldSeason, 47 Nguyễn Tuân, Thanh Xuân</p>
            <p>HCM: Tòa nhà Dali, 24C Phan Đăng Lưu, Gia Định</p>
          </div>
        </div>
        <div className="epl-container epl-footer__bottom">
          © {new Date().getFullYear()} TopCV Vietnam JSC · ĐKKD: 0107307178
        </div>
      </footer>
    </div>
  )
}
