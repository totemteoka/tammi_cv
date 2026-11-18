export type Job = {
  id: number
  title: string
  company: string
  logo: string
  salary: string
  location: string
  type: 'office' | 'general'
  region: 'Hà Nội' | 'TP. Hồ Chí Minh' | 'Miền Bắc' | 'Miền Nam' | 'Khác'
  category: string
  experience: string
  salaryBand: string
  badges?: ('HOT' | 'NỔI BẬT' | 'TOP' | 'GẤP')[]
  verified?: boolean
}

export type FilterDimension = 'cities' | 'salary' | 'experience' | 'categories'

export const filterDimensions: { value: FilterDimension; label: string }[] = [
  { value: 'cities', label: 'Địa điểm' },
  { value: 'salary', label: 'Mức lương' },
  { value: 'experience', label: 'Kinh nghiệm' },
  { value: 'categories', label: 'Ngành nghề' },
]

export const filterOptions: Record<FilterDimension, string[]> = {
  cities: ['Ngẫu nhiên', 'Hà Nội', 'TP. Hồ Chí Minh', 'Miền Bắc', 'Miền Nam'],
  salary: ['Tất cả', 'Dưới 10 triệu', '10 - 15 triệu', '15 - 20 triệu', '20 - 30 triệu', 'Trên 30 triệu', 'Thoả thuận'],
  experience: ['Tất cả', 'Chưa có kinh nghiệm', 'Dưới 1 năm', '1 - 3 năm', '3 - 5 năm', 'Trên 5 năm'],
  categories: [
    'Tất cả',
    'Kinh doanh / Bán hàng',
    'Marketing / PR',
    'IT / Phần mềm',
    'Kế toán / Kiểm toán',
    'Nhân sự / Hành chính',
    'Xây dựng',
    'Lao động phổ thông',
  ],
}

export type Company = {
  id: number
  name: string
  industry: string
  jobs: number
  logo: string
  featured?: boolean
  cover?: string
}

const logo = (name: string, bg: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bg}&color=fff&bold=true`

export const categories = [
  'Kinh doanh/Bán hàng',
  'Marketing/PR/Quảng cáo',
  'Chăm sóc khách hàng (Customer Service)/Vận hành',
  'Nhân sự/Hành chính/Pháp chế',
  'Công nghệ Thông tin',
  'Lao động phổ thông',
]

export const officeJobs: Job[] = [
  {
    id: 1,
    title: 'Chuyên Viên Kiểm Soát Chi Phí',
    company: 'CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ THI CÔNG HẠ TẦNG VINALPHA',
    logo: logo('VA', '00B14F'),
    salary: 'Thoả thuận',
    location: 'Hà Nội',
    type: 'office',
    region: 'Hà Nội',
    category: 'Kế toán / Kiểm toán',
    experience: '1 - 3 năm',
    salaryBand: 'Thoả thuận',
  },
  {
    id: 2,
    title: 'Chuyên Viên Đào Tạo (L&D)- Thu Nhập Lên Đến 25 Triệu/Tháng',
    company: 'CÔNG TY CỔ PHẦN ĐẦU TƯ Ô TÔ HẢI ÂU',
    logo: logo('HA', '1a73e8'),
    salary: '15 - 25 triệu',
    location: 'Hà Nội',
    type: 'office',
    region: 'Hà Nội',
    category: 'Nhân sự / Hành chính',
    experience: '1 - 3 năm',
    salaryBand: '20 - 30 triệu',
  },
  {
    id: 3,
    title: 'Kế Toán Tổng Hợp (Mảng FnB) - Đi Làm Ngay',
    company: 'CÔNG TY CỔ PHẦN ẨM THỰC SAO PHƯƠNG NAM GROUP',
    logo: logo('SP', 'e67e22'),
    salary: '10 - 15 triệu',
    location: 'Hồ Chí Minh',
    type: 'office',
    region: 'TP. Hồ Chí Minh',
    category: 'Kế toán / Kiểm toán',
    experience: '1 - 3 năm',
    salaryBand: '10 - 15 triệu',
  },
  {
    id: 4,
    title: 'Nhân Viên Kinh Doanh Ngành Thiết Bị Công Nghiệp - Thu Nhập Lên Đến 30 Triệu',
    company: 'CÔNG TY TNHH ANH PHÁT',
    logo: logo('AP', 'c0392b'),
    salary: '15 - 30 triệu',
    location: 'Hồ Chí Minh',
    type: 'office',
    region: 'TP. Hồ Chí Minh',
    category: 'Kinh doanh / Bán hàng',
    experience: '1 - 3 năm',
    salaryBand: '20 - 30 triệu',
    badges: ['HOT'],
  },
  {
    id: 5,
    title: 'Nhân Viên Tư Vấn Tại Văn Phòng Full-Time (Data Có Sẵn)',
    company: 'CÔNG TY CỔ PHẦN BPO MẮT BÃO',
    logo: logo('MB', '8e44ad'),
    salary: '8 - 15 triệu',
    location: 'Hà Nội',
    type: 'office',
    region: 'Hà Nội',
    category: 'Kinh doanh / Bán hàng',
    experience: 'Chưa có kinh nghiệm',
    salaryBand: '10 - 15 triệu',
    badges: ['NỔI BẬT', 'HOT'],
  },
  {
    id: 6,
    title: 'Kỹ Sư Dự Toán (QS)',
    company: 'CÔNG TY TNHH XÂY DỰNG NAM HUỲNH PHÁT',
    logo: logo('NH', '16a085'),
    salary: '12 - 20 triệu',
    location: 'Hồ Chí Minh',
    type: 'office',
    region: 'TP. Hồ Chí Minh',
    category: 'Xây dựng',
    experience: '3 - 5 năm',
    salaryBand: '15 - 20 triệu',
    badges: ['HOT'],
  },
  {
    id: 7,
    title: 'Nhân Viên Kinh Doanh/ Sales B2B Thiết Bị Thẩm Mỹ',
    company: 'CÔNG TY TNHH TẬP ĐOÀN DƯỢC MỸ PHẨM BSSC',
    logo: logo('BS', 'd35400'),
    salary: 'Đến 30 triệu',
    location: 'Hà Nội',
    type: 'office',
    region: 'Hà Nội',
    category: 'Kinh doanh / Bán hàng',
    experience: 'Dưới 1 năm',
    salaryBand: '20 - 30 triệu',
  },
  {
    id: 8,
    title: 'Nhân Viên Kinh Doanh/ Tư Vấn Tuyển Sinh | Thu Nhập 15 - 30 Triệu',
    company: 'CÔNG TY CỔ PHẦN GIÁO DỤC HỌC VIỆN ANH NGỮ VIỆT NAM',
    logo: logo('AN', '2980b9'),
    salary: '15 - 30 triệu',
    location: 'Hà Nội',
    type: 'office',
    region: 'Miền Bắc',
    category: 'Kinh doanh / Bán hàng',
    experience: '1 - 3 năm',
    salaryBand: '20 - 30 triệu',
    badges: ['TOP'],
  },
  {
    id: 9,
    title: 'Kế Toán Tổng Hợp - Mức Lương 16M - Hà Nội',
    company: 'CÔNG TY TNHH XUẤT NHẬP KHẨU ĐĂNG NGUYÊN',
    logo: logo('DN', '27ae60'),
    salary: '12 - 16 triệu',
    location: 'Hà Nội',
    type: 'office',
    region: 'Hà Nội',
    category: 'Kế toán / Kiểm toán',
    experience: '1 - 3 năm',
    salaryBand: '15 - 20 triệu',
  },
  {
    id: 10,
    title: 'Quản Lý An Toàn (HSE) - Thu Nhập Hấp Dẫn - Thái Nguyên',
    company: 'CÔNG TY TNHH ILWOOTEC VINA',
    logo: logo('IL', '34495e'),
    salary: 'Thoả thuận',
    location: 'Thái Nguyên',
    type: 'office',
    region: 'Miền Bắc',
    category: 'Nhân sự / Hành chính',
    experience: '3 - 5 năm',
    salaryBand: 'Thoả thuận',
  },
  {
    id: 11,
    title: 'Chuyên Viên Marketing Digital - Lương 18-25 Triệu',
    company: 'CÔNG TY CỔ PHẦN CLEVER GROUP',
    logo: logo('CG', '9b59b6'),
    salary: '18 - 25 triệu',
    location: 'Hồ Chí Minh',
    type: 'office',
    region: 'Miền Nam',
    category: 'Marketing / PR',
    experience: '1 - 3 năm',
    salaryBand: '20 - 30 triệu',
    badges: ['HOT'],
  },
  {
    id: 12,
    title: 'Chuyên Viên Khách Hàng Doanh Nghiệp - CN. Hà Nam',
    company: 'NGÂN HÀNG TMCP VIỆT NAM THỊNH VƯỢNG (VPBANK)',
    logo: logo('VP', '00A651'),
    salary: 'Thoả thuận',
    location: 'Hà Nam',
    type: 'office',
    region: 'Miền Bắc',
    category: 'Kinh doanh / Bán hàng',
    experience: 'Trên 5 năm',
    salaryBand: 'Thoả thuận',
    badges: ['TOP'],
    verified: true,
  },
]

export const generalJobs: Job[] = [
  {
    id: 101,
    title: 'Nhân Viên Kho Bãi - Làm Việc Tại Quận 7',
    company: 'CÔNG TY TNHH LOGISTICS SÀI GÒN',
    logo: logo('LS', '2c3e50'),
    salary: '8 - 12 triệu',
    location: 'Hồ Chí Minh',
    type: 'general',
    region: 'TP. Hồ Chí Minh',
    category: 'Lao động phổ thông',
    experience: 'Chưa có kinh nghiệm',
    salaryBand: '10 - 15 triệu',
    badges: ['GẤP'],
  },
  {
    id: 102,
    title: 'Nhân Viên Phục Vụ Nhà Hàng - Ca Linh Hoạt',
    company: 'CÔNG TY CỔ PHẦN TẬP ĐOÀN GOLDEN GATE',
    logo: logo('GG', 'C9A227'),
    salary: '7 - 10 triệu',
    location: 'Hà Nội',
    type: 'general',
    region: 'Hà Nội',
    category: 'Lao động phổ thông',
    experience: 'Chưa có kinh nghiệm',
    salaryBand: 'Dưới 10 triệu',
    badges: ['HOT'],
  },
  {
    id: 103,
    title: 'Tài Xế Giao Hàng Nội Thành - Xe Công Ty',
    company: 'CÔNG TY CP KINH DOANH F88',
    logo: logo('F8', 'e74c3c'),
    salary: '10 - 15 triệu',
    location: 'Hà Nội',
    type: 'general',
    region: 'Hà Nội',
    category: 'Lao động phổ thông',
    experience: 'Dưới 1 năm',
    salaryBand: '10 - 15 triệu',
  },
  {
    id: 104,
    title: 'Công Nhân Sản Xuất Điện Tử - Có Xe Đưa Đón',
    company: 'CÔNG TY TNHH DREAMTECH VIỆT NAM',
    logo: logo('DT', '3498db'),
    salary: '9 - 13 triệu',
    location: 'Bắc Ninh',
    type: 'general',
    region: 'Miền Bắc',
    category: 'Lao động phổ thông',
    experience: 'Chưa có kinh nghiệm',
    salaryBand: '10 - 15 triệu',
    badges: ['NỔI BẬT'],
  },
  {
    id: 105,
    title: 'Nhân Viên Bốc Xếp Kho - Lương Theo Ngày',
    company: 'CÔNG TY TNHH VẬN TẢI THÁI TÂN',
    logo: logo('TT', '7f8c8d'),
    salary: '400 - 500k/ngày',
    location: 'Hồ Chí Minh',
    type: 'general',
    region: 'TP. Hồ Chí Minh',
    category: 'Lao động phổ thông',
    experience: 'Chưa có kinh nghiệm',
    salaryBand: 'Dưới 10 triệu',
    badges: ['GẤP'],
  },
  {
    id: 106,
    title: 'Bảo Vệ Tòa Nhà Văn Phòng - Ca Đêm',
    company: 'CÔNG TY TNHH DỊCH VỤ BẢO VỆ AN NINH',
    logo: logo('BV', '1a5276'),
    salary: '7 - 9 triệu',
    location: 'Hà Nội',
    type: 'general',
    region: 'Hà Nội',
    category: 'Lao động phổ thông',
    experience: 'Dưới 1 năm',
    salaryBand: 'Dưới 10 triệu',
  },
  {
    id: 107,
    title: 'Nhân Viên Vệ Sinh Công Nghiệp - Full Time',
    company: 'CÔNG TY CP DỊCH VỤ MÔI TRƯỜNG SẠCH',
    logo: logo('MT', '27ae60'),
    salary: '6 - 8 triệu',
    location: 'Đà Nẵng',
    type: 'general',
    region: 'Miền Nam',
    category: 'Lao động phổ thông',
    experience: 'Chưa có kinh nghiệm',
    salaryBand: 'Dưới 10 triệu',
  },
  {
    id: 108,
    title: 'Thợ Điện Công Nghiệp - Kinh Nghiệm 1 Năm',
    company: 'CÔNG TY CỔ PHẦN ĐIỆN GIA LAI',
    logo: logo('GL', 'f39c12'),
    salary: '12 - 18 triệu',
    location: 'Bình Dương',
    type: 'general',
    region: 'Miền Nam',
    category: 'Xây dựng',
    experience: '1 - 3 năm',
    salaryBand: '15 - 20 triệu',
    badges: ['HOT'],
  },
  {
    id: 109,
    title: 'Nhân Viên Giao Nhận, Xuất Nhập Khẩu Tại Lương Sơn',
    company: 'CHI NHÁNH CÔNG TY CỔ PHẦN VẬN TẢI TOÀN CẦU VIỆT NAM',
    logo: logo('VT', '7f8c8d'),
    salary: '8 - 12 triệu',
    location: 'Phú Thọ',
    type: 'general',
    region: 'Miền Bắc',
    category: 'Lao động phổ thông',
    experience: 'Dưới 1 năm',
    salaryBand: '10 - 15 triệu',
    badges: ['GẤP'],
  },
  {
    id: 110,
    title: 'Nhân Viên Kiểm Hàng - Ca Sáng Chiều',
    company: 'CÔNG TY TNHH PANASONIC APPLIANCES VIỆT NAM',
    logo: logo('PN', '0033A0'),
    salary: '9 - 11 triệu',
    location: 'Hưng Yên',
    type: 'general',
    region: 'Miền Bắc',
    category: 'Lao động phổ thông',
    experience: 'Chưa có kinh nghiệm',
    salaryBand: '10 - 15 triệu',
  },
  {
    id: 111,
    title: 'Phụ Bếp / Nhân Viên Bếp - Nhà Hàng Nhật',
    company: 'CÔNG TY TNHH ẨM THỰC SAKURA',
    logo: logo('SK', 'c0392b'),
    salary: '8 - 12 triệu',
    location: 'Hồ Chí Minh',
    type: 'general',
    region: 'TP. Hồ Chí Minh',
    category: 'Lao động phổ thông',
    experience: '1 - 3 năm',
    salaryBand: '10 - 15 triệu',
  },
  {
    id: 112,
    title: 'Công Nhân May Mặc - Có Ký Túc Xá',
    company: 'CÔNG TY TNHH MAY MẶC VIỆT TIẾN',
    logo: logo('VT', '8e44ad'),
    salary: '7 - 10 triệu',
    location: 'Đồng Nai',
    type: 'general',
    region: 'Miền Nam',
    category: 'Lao động phổ thông',
    experience: 'Chưa có kinh nghiệm',
    salaryBand: 'Dưới 10 triệu',
    badges: ['NỔI BẬT'],
  },
]

/** @deprecated use officeJobs / generalJobs */
export const jobs = officeJobs

export const companies: Company[] = [
  {
    id: 1,
    name: 'CÔNG TY CỔ PHẦN TẬP ĐOÀN GOLDEN GATE',
    industry: 'Nhà hàng / Khách sạn',
    jobs: 21,
    logo: logo('GG', 'C9A227'),
    featured: true,
    cover: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  },
  {
    id: 2,
    name: 'NGÂN HÀNG TMCP VIỆT NAM THỊNH VƯỢNG (VPBANK)',
    industry: 'Ngân hàng',
    jobs: 45,
    logo: logo('VP', '00A651'),
    cover: 'https://images.unsplash.com/photo-1565514020176-b20d8e5706c0?w=800&q=80',
  },
  {
    id: 3,
    name: 'CÔNG TY CỔ PHẦN TẬP ĐOÀN TRƯỜNG HẢI',
    industry: 'Sản xuất',
    jobs: 32,
    logo: logo('TH', '003366'),
    cover: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  },
  {
    id: 4,
    name: 'TẬP ĐOÀN CÔNG NGHIỆP - VIỄN THÔNG QUÂN ĐỘI',
    industry: 'Viễn thông',
    jobs: 58,
    logo: logo('VT', 'EE0033'),
    cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
  },
  {
    id: 5,
    name: 'NOVALAND GROUP CORP',
    industry: 'Bất động sản',
    jobs: 12,
    logo: logo('NL', '1B4F72'),
    cover: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
  },
  {
    id: 6,
    name: 'CÔNG TY TNHH BẢO HIỂM NHÂN THỌ AIA (VIỆT NAM)',
    industry: 'Bảo hiểm',
    jobs: 18,
    logo: logo('AIA', 'D32F2F'),
    cover: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  },
  {
    id: 7,
    name: 'NGÂN HÀNG TMCP HÀNG HẢI VIỆT NAM',
    industry: 'Ngân hàng',
    jobs: 27,
    logo: logo('MSB', 'E30613'),
  },
  {
    id: 8,
    name: 'CÔNG TY CỔ PHẦN HẠ TẦNG VIỄN THÔNG CMC',
    industry: 'IT - Phần mềm',
    jobs: 15,
    logo: logo('CMC', '0066CC'),
    cover: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
  },
  {
    id: 9,
    name: 'TẬP ĐOÀN NOVAON',
    industry: 'Marketing',
    jobs: 9,
    logo: logo('NO', '6C3483'),
    cover: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
  },
  {
    id: 10,
    name: 'NGÂN HÀNG THƯƠNG MẠI CỔ PHẦN Á CHÂU - ACB',
    industry: 'Ngân hàng',
    jobs: 33,
    logo: logo('ACB', '003DA5'),
  },
  {
    id: 11,
    name: 'CÔNG TY CỔ PHẦN ĐẦU TƯ ĐỊA ỐC NOVA',
    industry: 'Bất động sản',
    jobs: 8,
    logo: logo('NV', '1a5276'),
  },
  {
    id: 12,
    name: 'CÔNG TY CỔ PHẦN XÂY DỰNG SCG',
    industry: 'Xây dựng',
    jobs: 22,
    logo: logo('SCG', 'e67e22'),
    cover: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
  {
    id: 13,
    name: 'CÔNG TY TNHH XÂY DỰNG NAM HUỲNH PHÁT',
    industry: 'Xây dựng',
    jobs: 14,
    logo: logo('NH', '16a085'),
  },
  {
    id: 14,
    name: 'FPT SOFTWARE',
    industry: 'IT - Phần mềm',
    jobs: 86,
    logo: logo('FPT', 'F37021'),
  },
  {
    id: 15,
    name: 'CÔNG TY TNHH DREAMTECH VIỆT NAM',
    industry: 'Sản xuất',
    jobs: 41,
    logo: logo('DT', '3498db'),
  },
  {
    id: 16,
    name: 'CÔNG TY TNHH BẢO HIỂM HANWHALIFE VIỆT NAM',
    industry: 'Bảo hiểm',
    jobs: 11,
    logo: logo('HL', 'c0392b'),
  },
  {
    id: 17,
    name: 'CÔNG TY CỔ PHẦN CLEVER GROUP',
    industry: 'Marketing',
    jobs: 16,
    logo: logo('CG', '9b59b6'),
  },
  {
    id: 18,
    name: 'CÔNG TY CỔ PHẦN ĐỒNG TÂM',
    industry: 'Sản xuất',
    jobs: 19,
    logo: logo('ĐT', '27ae60'),
  },
]

export const companyFilters = [
  'Tất cả',
  'Ngân hàng',
  'Bất động sản',
  'Xây dựng',
  'IT - Phần mềm',
  'Sản xuất',
  'Bảo hiểm',
  'Marketing',
]

export const industries = [
  { name: 'Kinh doanh / Bán hàng', jobs: '8.032', icon: 'tag' },
  { name: 'IT - Phần mềm', jobs: '3.245', icon: 'monitor' },
  { name: 'Hành chính / Văn phòng', jobs: '4.128', icon: 'briefcase' },
  { name: 'Kế toán / Kiểm toán', jobs: '2.876', icon: 'calculator' },
  { name: 'Marketing / PR / Quảng cáo', jobs: '2.154', icon: 'megaphone' },
  { name: 'Nhân sự', jobs: '1.892', icon: 'users' },
  { name: 'Tư vấn', jobs: '1.654', icon: 'message' },
  { name: 'Xây dựng', jobs: '2.431', icon: 'building' },
]

export const tools = [
  { title: 'Trắc nghiệm MBTI', desc: 'Khám phá tính cách nghề nghiệp', color: '#00B14F' },
  { title: 'Trắc nghiệm MI', desc: 'Đánh giá đa trí tuệ', color: '#00ADEF' },
  { title: 'TopCV Skills', desc: 'Đánh giá kỹ năng chuyên môn', color: '#F5A623' },
  { title: 'Tính lương Gross - Net', desc: 'Quy đổi lương nhanh chóng', color: '#7B61FF' },
  { title: 'Tính thuế TNCN', desc: 'Ước tính thuế thu nhập', color: '#E74C3C' },
  { title: 'Tra cứu lương', desc: 'Khảo sát mức lương thị trường', color: '#16A085' },
]

export const awards = [
  { title: 'Top 10 doanh nghiệp ICT Việt Nam 2022', year: '2022' },
  { title: 'TopCV được vinh danh trong Top 10 doanh nghiệp CNTT Việt Nam 2021', year: '2021' },
  { title: 'Giải thưởng Sao Khuê 2022', year: '2022' },
  { title: 'Sản phẩm Công nghệ số Make in Viet Nam 2022', year: '2022' },
]

export const pressLogos = ['VnExpress', 'Tuổi Trẻ', 'Thanh Niên', 'CafeF', 'VietnamNet', 'Zing News']

export const banners = [
  {
    id: 1,
    title: 'ĐÃ ĐẾN LÚC NÂNG TẦM THU NHẬP',
    subtitle: 'Career Opportunities for Fresh Graduates',
    cta: 'Khám phá ngay',
    image: 'banners/banner-career.jpg',
    bg: 'linear-gradient(135deg, #0a3d2e 0%, #00B14F 100%)',
  },
  {
    id: 2,
    title: 'TẠO CV XỊN TRONG 5 PHÚT',
    subtitle: 'Hơn 50+ mẫu CV chuyên nghiệp',
    cta: 'Tạo CV ngay',
    image: 'banners/banner-cv.jpg',
    bg: 'linear-gradient(135deg, #1a237e 0%, #42a5f5 100%)',
  },
  {
    id: 3,
    title: 'TOPCV PRO - ƯU TIÊN HỒ SƠ',
    subtitle: 'Tiếp cận nhà tuyển dụng nhanh hơn',
    cta: 'Nâng cấp Pro',
    image: 'banners/banner-pro.jpg',
    bg: 'linear-gradient(135deg, #5d4037 0%, #c9a227 100%)',
  },
  {
    id: 4,
    title: 'TRẮC NGHIỆM NGHỀ NGHIỆP',
    subtitle: 'Thấu hiểu bản thân - Nâng tầm giá trị',
    cta: 'Làm trắc nghiệm',
    image: 'banners/banner-test.jpg',
    bg: 'linear-gradient(135deg, #4a148c 0%, #7e57c2 100%)',
  },
]

export function filterJobs(
  type: 'office' | 'general',
  dimension: FilterDimension,
  value: string,
): Job[] {
  const source = type === 'office' ? officeJobs : generalJobs
  if (value === 'Ngẫu nhiên' || value === 'Tất cả') return source

  switch (dimension) {
    case 'cities':
      return source.filter((j) => j.region === value || j.location === value)
    case 'salary':
      return source.filter((j) => j.salaryBand === value)
    case 'experience':
      return source.filter((j) => j.experience === value)
    case 'categories':
      return source.filter((j) => j.category === value)
    default:
      return source
  }
}

export function filterCompanies(industry: string): Company[] {
  if (industry === 'Tất cả') return companies
  return companies.filter((c) => c.industry === industry)
}
