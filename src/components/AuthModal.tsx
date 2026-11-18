import { useEffect, useState, type FormEvent } from 'react'
import { ArrowRight, Eye, EyeOff, Mail, X } from 'lucide-react'

export type AuthMode = 'login' | 'register'

type Props = {
  open: boolean
  mode: AuthMode
  onClose: () => void
  onSwitchMode: (mode: AuthMode) => void
}

type LoginForm = { email: string; password: string }
type RegisterForm = {
  name: string
  email: string
  password: string
  confirm: string
  agree: boolean
}

const emptyLogin: LoginForm = { email: '', password: '' }
const emptyRegister: RegisterForm = {
  name: '',
  email: '',
  password: '',
  confirm: '',
  agree: false,
}

function Logo() {
  return (
    <div className="auth-logo">
      <svg viewBox="0 0 48 48" fill="none" width={36} height={36}>
        <rect width="48" height="48" rx="10" fill="#00B14F" />
        <path
          d="M12 14h10.5c4.2 0 7 2.5 7 6.2 0 2.6-1.4 4.6-3.7 5.5L32 34h-5.2l-5.4-7.4H17.2V34H12V14zm5.2 4.2v5.2h4.6c2.1 0 3.3-1 3.3-2.6s-1.2-2.6-3.3-2.6H17.2z"
          fill="#fff"
        />
      </svg>
      <span>
        top<span>cv</span>
      </span>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.2 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 16.1 19 12 24 12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.2 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.2C29.2 35.3 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.5 5.7-6.5 7.1l.1.1 6.3 5.2C36.8 39.2 44 34 44 24c0-1.3-.1-2.3-.4-3.5z"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
    </svg>
  )
}

export default function AuthModal({ open, mode, onClose, onSwitchMode }: Props) {
  const [login, setLogin] = useState<LoginForm>(emptyLogin)
  const [register, setRegister] = useState<RegisterForm>(emptyRegister)
  const [showPass, setShowPass] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [registerStep, setRegisterStep] = useState<'choose' | 'email'>('choose')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!open) return
    setErrors({})
    setSuccess('')
    setSubmitting(false)
    setShowPass(false)
    setShowConfirm(false)
    setRegisterStep('choose')
    setLogin(emptyLogin)
    setRegister(emptyRegister)

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, mode, onClose])

  if (!open) return null

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const validatePassword = (password: string) => {
    if (password.length < 6 || password.length > 25) return false
    return /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)
  }

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    const next: Record<string, string> = {}
    if (!login.email.trim()) next.email = 'Vui lòng nhập email'
    else if (!validateEmail(login.email)) next.email = 'Email không hợp lệ'
    if (!login.password) next.password = 'Vui lòng nhập mật khẩu'
    setErrors(next)
    if (Object.keys(next).length) return

    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSuccess(`Đăng nhập thành công với ${login.email} (demo)`)
      window.setTimeout(onClose, 1200)
    }, 700)
  }

  const handleRegister = (e: FormEvent) => {
    e.preventDefault()
    const next: Record<string, string> = {}
    if (!register.name.trim()) next.name = 'Vui lòng nhập họ tên'
    if (!register.email.trim()) next.email = 'Vui lòng nhập email'
    else if (!validateEmail(register.email)) next.email = 'Email không hợp lệ'
    if (!register.password) next.password = 'Vui lòng nhập mật khẩu'
    else if (!validatePassword(register.password)) {
      next.password = 'Mật khẩu chưa đúng yêu cầu'
    }
    if (!register.confirm) next.confirm = 'Vui lòng nhập lại mật khẩu'
    else if (register.confirm !== register.password) {
      next.confirm = 'Mật khẩu xác nhận không khớp'
    }
    if (!register.agree) next.agree = 'Bạn cần đồng ý điều khoản'
    setErrors(next)
    if (Object.keys(next).length) return

    setSubmitting(true)
    window.setTimeout(() => {
      setSubmitting(false)
      setSuccess(`Tạo tài khoản thành công cho ${register.name} (demo)`)
      window.setTimeout(() => onSwitchMode('login'), 1200)
    }, 800)
  }

  const socialClick = (provider: string) => {
    setSuccess(`Đang chuyển tới ${provider}... (demo)`)
    window.setTimeout(() => setSuccess(''), 1500)
  }

  return (
    <div className="auth-overlay" role="presentation" onClick={onClose}>
      <div
        className="auth-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="auth-modal__close" onClick={onClose} aria-label="Đóng">
          <X size={20} />
        </button>

        <Logo />

        {mode === 'login' ? (
          <>
            <h2 id="auth-title" className="auth-modal__title">
              Chào mừng quay trở lại
            </h2>

            <button type="button" className="auth-social auth-social--full" onClick={() => socialClick('Google')}>
              <GoogleIcon /> Đăng nhập bằng Google
            </button>
            <div className="auth-social-row">
              <button type="button" className="auth-social" onClick={() => socialClick('Facebook')}>
                <FacebookIcon /> Facebook
              </button>
              <button type="button" className="auth-social" onClick={() => socialClick('LinkedIn')}>
                <LinkedInIcon /> LinkedIn
              </button>
            </div>

            <div className="auth-divider">
              <span>Hoặc đăng nhập bằng email</span>
            </div>

            <form className="auth-form" onSubmit={handleLogin} noValidate>
              <label className="auth-field">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="Nhập email"
                  value={login.email}
                  onChange={(e) => setLogin({ ...login, email: e.target.value })}
                  autoComplete="email"
                />
                {errors.email && <em className="auth-error">{errors.email}</em>}
              </label>

              <div className="auth-field">
                <div className="auth-field__row">
                  <label htmlFor="login-password">Password</label>
                  <button
                    type="button"
                    className="auth-link"
                    onClick={() => setSuccess('Đã gửi link đặt lại mật khẩu (demo)')}
                  >
                    Quên mật khẩu
                  </button>
                </div>
                <div className="auth-input-wrap">
                  <input
                    id="login-password"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Nhập mật khẩu"
                    value={login.password}
                    onChange={(e) => setLogin({ ...login, password: e.target.value })}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="auth-eye"
                    onClick={() => setShowPass((v) => !v)}
                    aria-label={showPass ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  >
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && <em className="auth-error">{errors.password}</em>}
              </div>

              <button type="submit" className="auth-submit" disabled={submitting}>
                {submitting ? 'Đang đăng nhập...' : 'Đăng nhập'}
                {!submitting && <ArrowRight size={18} />}
              </button>
            </form>

            <p className="auth-switch">
              Bạn chưa có tài khoản?{' '}
              <button type="button" className="auth-link" onClick={() => onSwitchMode('register')}>
                Đăng ký ngay
              </button>
            </p>
          </>
        ) : registerStep === 'choose' ? (
          <>
            <h2 id="auth-title" className="auth-modal__title">
              Đăng ký
            </h2>
            <p className="auth-modal__subtitle">
              Tạo tài khoản miễn phí, tìm kiếm hơn 60.000 việc làm.
            </p>

            <button type="button" className="auth-social auth-social--full" onClick={() => socialClick('Google')}>
              <GoogleIcon /> Đăng ký bằng Google
            </button>
            <div className="auth-social-row">
              <button type="button" className="auth-social" onClick={() => socialClick('Facebook')}>
                <FacebookIcon /> Facebook
              </button>
              <button type="button" className="auth-social" onClick={() => socialClick('LinkedIn')}>
                <LinkedInIcon /> LinkedIn
              </button>
            </div>

            <div className="auth-divider">
              <span>Hoặc</span>
            </div>

            <button
              type="button"
              className="auth-social auth-social--full"
              onClick={() => setRegisterStep('email')}
            >
              <Mail size={18} /> Đăng ký bằng Email
            </button>

            <p className="auth-switch">
              Bạn đã có tài khoản?{' '}
              <button type="button" className="auth-link" onClick={() => onSwitchMode('login')}>
                Đăng nhập ngay
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 id="auth-title" className="auth-modal__title">
              Đăng ký bằng Email
            </h2>
            <p className="auth-modal__subtitle">Điền thông tin để tạo tài khoản TopCV</p>

            <form className="auth-form" onSubmit={handleRegister} noValidate>
              <label className="auth-field">
                <span>Họ và tên</span>
                <input
                  type="text"
                  placeholder="Nhập họ tên"
                  value={register.name}
                  onChange={(e) => setRegister({ ...register, name: e.target.value })}
                  autoComplete="name"
                />
                {errors.name && <em className="auth-error">{errors.name}</em>}
              </label>

              <label className="auth-field">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="Nhập email"
                  value={register.email}
                  onChange={(e) => setRegister({ ...register, email: e.target.value })}
                  autoComplete="email"
                />
                {errors.email && <em className="auth-error">{errors.email}</em>}
              </label>

              <div className="auth-field">
                <label htmlFor="register-password">Mật khẩu</label>
                <div className="auth-input-wrap">
                  <input
                    id="register-password"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Nhập mật khẩu"
                    value={register.password}
                    onChange={(e) => setRegister({ ...register, password: e.target.value })}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="auth-eye"
                    onClick={() => setShowPass((v) => !v)}
                    aria-label={showPass ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  >
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <ul className="auth-hints">
                  <li className={register.password.length >= 6 && register.password.length <= 25 ? 'ok' : ''}>
                    Mật khẩu từ 6 đến 25 ký tự
                  </li>
                  <li
                    className={
                      /[A-Z]/.test(register.password) &&
                      /[a-z]/.test(register.password) &&
                      /\d/.test(register.password)
                        ? 'ok'
                        : ''
                    }
                  >
                    Bao gồm chữ hoa, chữ thường và ký tự số
                  </li>
                </ul>
                {errors.password && <em className="auth-error">{errors.password}</em>}
              </div>

              <label className="auth-field">
                <span>Xác nhận mật khẩu</span>
                <div className="auth-input-wrap">
                  <input
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="Nhập lại mật khẩu"
                    value={register.confirm}
                    onChange={(e) => setRegister({ ...register, confirm: e.target.value })}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="auth-eye"
                    onClick={() => setShowConfirm((v) => !v)}
                    aria-label={showConfirm ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.confirm && <em className="auth-error">{errors.confirm}</em>}
              </label>

              <label className="auth-check">
                <input
                  type="checkbox"
                  checked={register.agree}
                  onChange={(e) => setRegister({ ...register, agree: e.target.checked })}
                />
                <span>
                  Tôi đã đọc và đồng ý với{' '}
                  <a href="#dieu-khoan">Điều khoản dịch vụ</a> và{' '}
                  <a href="#bao-mat">Chính sách quyền riêng tư</a> của TopCV (Bắt buộc)
                </span>
              </label>
              {errors.agree && <em className="auth-error">{errors.agree}</em>}

              <button type="submit" className="auth-submit" disabled={submitting}>
                {submitting ? 'Đang đăng ký...' : 'Đăng ký'}
                {!submitting && <ArrowRight size={18} />}
              </button>
            </form>

            <p className="auth-switch">
              <button type="button" className="auth-link" onClick={() => setRegisterStep('choose')}>
                ← Quay lại
              </button>
              {' · '}
              Bạn đã có tài khoản?{' '}
              <button type="button" className="auth-link" onClick={() => onSwitchMode('login')}>
                Đăng nhập ngay
              </button>
            </p>
          </>
        )}

        {success && <div className="auth-toast">{success}</div>}

        <div className="auth-help">
          Bạn gặp khó khăn khi tạo tài khoản? Vui lòng gọi tới số{' '}
          <a href="tel:1900068889">1900 068 889 | Nhánh 2</a> (giờ hành chính).
        </div>
      </div>
    </div>
  )
}
