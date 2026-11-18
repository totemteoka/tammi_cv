import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AuthModal, { type AuthMode } from './components/AuthModal'
import HomePage from './pages/HomePage'
import EmployerPage from './pages/EmployerPage'

export default function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<AuthMode>('login')

  const openAuth = (mode: AuthMode) => {
    setAuthMode(mode)
    setAuthOpen(true)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage onOpenAuth={openAuth} />} />
        <Route path="/tuyendung" element={<EmployerPage onOpenAuth={openAuth} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <AuthModal
        open={authOpen}
        mode={authMode}
        onClose={() => setAuthOpen(false)}
        onSwitchMode={setAuthMode}
      />
    </BrowserRouter>
  )
}
