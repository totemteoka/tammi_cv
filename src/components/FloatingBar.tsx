import { Heart, User, MessageSquare, Headphones } from 'lucide-react'
import type { AuthMode } from './AuthModal'

type Props = {
  onOpenAuth?: (mode: AuthMode) => void
}

export default function FloatingBar({ onOpenAuth }: Props) {
  return (
    <div className="float-bar">
      <button className="float-btn" aria-label="Việc đã lưu">
        <Heart size={20} />
        <span className="float-btn__badge">0</span>
      </button>
      <button
        className="float-btn"
        aria-label="Tài khoản"
        onClick={() => onOpenAuth?.('login')}
      >
        <User size={20} />
      </button>
      <button className="float-btn" aria-label="Góp ý">
        <MessageSquare size={20} />
      </button>
      <button className="float-btn float-btn--support" aria-label="Hỗ trợ">
        <Headphones size={20} />
      </button>
    </div>
  )
}
