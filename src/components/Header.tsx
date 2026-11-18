import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import type { AuthMode } from './AuthModal'

const navItems = [
  { href: '#viec-lam', label: 'Việc làm' },
  { href: '#tao-cv', label: 'Tạo CV' },
  { href: '#cong-cu', label: 'Công cụ' },
  { href: '#cam-nang', label: 'Cẩm nang nghề nghiệp' },
]

type Props = {
  onOpenAuth: (mode: AuthMode) => void
}

export default function Header({ onOpenAuth }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  const openAuth = (mode: AuthMode) => {
    close()
    onOpenAuth(mode)
  }

  return (
    <header className={`header${open ? ' header--open' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="logo" onClick={close}>
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

        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav__item">
              {item.label} <ChevronDown />
            </a>
          ))}
          <a href="#pro" className="nav__pro">
            TopCV <span className="nav__pro-badge">Pro</span>
          </a>
        </nav>

        <div className="header__actions">
          <button type="button" className="btn btn--outline" onClick={() => openAuth('register')}>
            Đăng ký
          </button>
          <button type="button" className="btn btn--primary" onClick={() => openAuth('login')}>
            Đăng nhập
          </button>
          <Link to="/tuyendung" className="btn btn--employer">
            Đăng tuyển & tìm hồ sơ
          </Link>
          <button
            className="menu-toggle"
            aria-label={open ? 'Đóng menu' : 'Mở menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`mobile-nav${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="mobile-nav__links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="mobile-nav__link" onClick={close}>
              {item.label}
            </a>
          ))}
          <a href="#pro" className="mobile-nav__link" onClick={close}>
            TopCV Pro
          </a>
        </div>
        <div className="mobile-nav__actions">
          <button type="button" className="btn btn--outline" onClick={() => openAuth('register')}>
            Đăng ký
          </button>
          <button type="button" className="btn btn--primary" onClick={() => openAuth('login')}>
            Đăng nhập
          </button>
          <Link to="/tuyendung" className="btn btn--employer" onClick={close}>
            Đăng tuyển & tìm hồ sơ
          </Link>
        </div>
      </div>
      {open && <div className="mobile-nav__backdrop" onClick={close} />}
    </header>
  )
}
