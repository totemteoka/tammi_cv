import { MessageSquare, ArrowRight } from 'lucide-react'

export default function ActiveJobs() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">Trạm Việc Làm Tích Cực Phản Hồi</h2>
          <a href="#xem-tat-ca" className="section__link">
            Xem tất cả <ArrowRight size={16} />
          </a>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 20, maxWidth: 700 }}>
          Khám phá các cơ hội việc làm từ những nhà tuyển dụng thường xuyên xem, xử lý và phản hồi
          hồ sơ ứng viên.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 12,
          }}
        >
          {[
            { title: 'Nhân Viên Kinh Doanh B2B', company: 'Công ty ABC', reply: 'Phản hồi trong 24h' },
            { title: 'Lập Trình Viên ReactJS', company: 'FPT Software', reply: 'Phản hồi vượt trội' },
            { title: 'Chuyên Viên Marketing', company: 'Novaon Group', reply: 'Phản hồi trong 24h' },
            { title: 'Kế Toán Trưởng', company: 'Golden Gate', reply: 'Phản hồi vượt trội' },
          ].map((j) => (
            <div
              key={j.title}
              style={{
                background: '#fff',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: 16,
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
              }}
            >
              <div style={{ fontWeight: 600, fontSize: 14 }}>{j.title}</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>{j.company}</div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 12,
                  color: 'var(--green)',
                  marginTop: 4,
                }}
              >
                <MessageSquare size={14} /> {j.reply}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
