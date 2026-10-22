export type PortfolioProfile = {
  name: string
  title: string
  email: string
  github: string
  phone: string
  linkedin: string
  instagram: string
}

export const profile: PortfolioProfile = {
  name: 'NSHUTI BLESSING PRINCE',
  title: 'Software Engineer ',
  email: 'nshutiblessing13@gmail.com',
  github: 'https://github.com/blessing250',
  phone: '+25076006001 | +250790330066',
  linkedin: 'https://www.linkedin.com/in/nshuti-blessing-prince-236822333/',
  instagram: 'https://www.instagram.com/i_blessingprince/',
}

export const projects = [
  {
    name: 'RRA Strategic Intelligence & Investigation Division System',
    category: 'Operations platform',
    artLabel: 'INVESTIGATION / OPERATIONS',
    description: 'A centralized operations platform designed to support investigation workflows and streamline day-to-day division activities.',
    detail: 'Includes reporting, role-based access, and stock management.',
    stack: ['Workflow management', 'Role-based access', 'Reporting', 'Inventory'],
    href: '',
  },
  {
    name: 'RRA Tax Handbook',
    category: 'Knowledge platform',
    artLabel: 'TAX KNOWLEDGE / DIGITAL',
    description: 'A digital knowledge platform that makes tax reference information easier to discover, navigate, and maintain through searchable content and an administrative interface.',
    detail: 'Searchable content with an administration interface.',
    stack: ['Content Search', 'Digital Reference', 'Content Management', 'Administration'],
    href: ''
  },
  {
    name: 'QR Code-Enabled Wellness Management System',
    category: 'Health technology',
    artLabel: 'WELLNESS / MEMBERSHIP',
    description: 'A digital wellness management platform that connects membership and service activities through QR-enabled workflows for bookings and attendance tracking.',
    detail: 'Uses QR codes to support membership and attendance workflows.',
    stack: ['QR Code Integration','Membership','Bookings','Attendance Tracking'],
    href: '',
  },
  {
    name: 'Smart Inventory & Sales Management System',
    category: 'Business technology',
    artLabel: 'INVENTORY / SALES',
    description: 'A business management solution designed to organize inventory and sales operations, helping users monitor stock levels and review sales activity.',
    detail: 'Includes real-time inventory tracking and sales reporting.',
    stack: ['Inventory Tracking','Sales Management','Sales Reporting','Stock Monitoring'],
    href: '',
  },
]

export const skillGroups = [
  { name: 'Languages', items: ['Java', 'Python', 'JavaScript', 'PHP', 'C#', 'HTML', 'CSS'] },
  { name: 'Frameworks', items: ['Spring Boot', 'React', 'Next.js'] },
  { name: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'] },
  { name: 'Tools', items: ['Git', 'GitHub', 'GitLab'] },
]

export const experience = [
   {
    role: 'IT Applications Apprentice',
    organization: 'Rwanda Revenue Authority (RRA)',
    period: '2026 — Present',
    description: 'Gaining hands-on experience in enterprise application development, system improvement, and application support while contributing to technology-driven solutions that support organizational business processes.',
  },
    {
    role: 'Junior Software Engineer / Technical Contributor',
    organization: 'Ikigugu Group LTD',
    period: '2024 — 2025',
    description: 'Contributed to software development projects, helped implement technical solutions, and supported the development and improvement of applications to address organizational needs.',
  },
  {
    role: 'IT Support & Systems Assistant Intern',
    organization: 'Vigilance LTD',
    period: '2022 — 2023',
    description: 'Assisted with day-to-day IT operations, supported troubleshooting of technical issues, and helped maintain IT systems to support reliable business operations.',
  },
 
 

]

export const education = {
  degree: 'Bachelor of Science with Honors in Computer Science',
  option: 'Software Engineering',
  school: 'INES-Ruhengeri',
  period: '2022 — 2025',
}
