import React from 'react';

// --- СТИЛІ (Константи для чистоти коду) ---
const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#f1f5f9',
    minHeight: '100vh',
    padding: '40px 20px',
    color: '#1e293b'
  },
  card: {
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    overflow: 'hidden'
  },
  header: {
    backgroundColor: '#0f172a',
    color: '#ffffff',
    padding: '60px 20px',
    textAlign: 'center',
    position: 'relative'
  },
  headerBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)'
  },
  section: {
    padding: '32px',
    borderBottom: '1px solid #f1f5f9'
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    gap: '12px'
  },
  icon: {
    width: '24px',
    height: '24px',
    color: '#3b82f6'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px'
  },
  skillCard: {
    padding: '16px',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    backgroundColor: '#f8fafc'
  },
  badge: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '4px 12px',
    borderRadius: '9999px',
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
};

// --- ІКОНКИ ---
const IconUser = () => (
  <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconCode = () => (
  <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const IconAcademic = () => (
  <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
  </svg>
);

// --- КОМПОНЕНТИ ---

const Header = () => (
  <header style={styles.header}>
    <div style={styles.headerBar}></div>
    <h1 style={{ fontSize: '48px', fontWeight: '800', margin: '0 0 8px 0' }}>Котляр Дмитро</h1>
    <p style={{ color: '#60a5fa', fontSize: '20px', fontWeight: '500', letterSpacing: '2px', textTransform: 'uppercase' }}>
      Python Developer | Cybersecurity | OSINT
    </p>
  </header>
);

const Section = ({ icon, title, children }) => (
  <section style={styles.section}>
    <div style={styles.sectionHeader}>
      {icon}
      <h2 style={{ fontSize: '24px', fontWeight: '700', margin: 0 }}>{title}</h2>
    </div>
    <div style={{ color: '#475569', lineHeight: '1.6' }}>
      {children}
    </div>
  </section>
);

export default function App() {
  const skills = [
    { name: "Python Development", desc: "GUI (Tkinter), автоматизація скриптів" },
    { name: "Malware Analysis", desc: "Створення YARA правил, робота з VirusTotal" },
    { name: "Cybersecurity", desc: "GPG шифрування, захист даних" },
    { name: "Web Tech", desc: "HTML5, CSS3, сучасний React" }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <Header />

        <main>
          <Section icon={<IconUser />} title="Про мене">
            <p style={{ fontSize: '18px', margin: 0 }}>
              Я студент 3-го курсу Національного університету
              <span style={{ color: '#2563eb', fontWeight: '600' }}> «Львівська політехніка»</span>.
              Захоплююся розробкою на Python та аспектами мережевої безпеки.
            </p>
          </Section>

          <Section icon={<IconAcademic />} title="Освіта">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', margin: '0 0 4px 0' }}>Кібербезпека (Бакалавр)</h3>
                <p style={{ margin: 0, color: '#64748b' }}>НУ «Львівська політехніка» • КБ-304</p>
              </div>
              <span style={styles.badge}>2023 - Тепер</span>
            </div>
          </Section>

          <Section icon={<IconCode />} title="Навички">
            <div style={styles.grid}>
              {skills.map((skill, index) => (
                <div key={index} style={styles.skillCard}>
                  <div style={{ fontWeight: '700', color: '#1e293b', marginBottom: '4px' }}>{skill.name}</div>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>{skill.desc}</div>
                </div>
              ))}
            </div>
          </Section>
        </main>

        <footer style={{ backgroundColor: '#f8fafc', padding: '30px', textAlign: 'center', borderTop: '1px solid #f1f5f9' }}>
          <p style={{ margin: '0 0 8px 0', color: '#64748b', fontWeight: '600' }}>dima09057@gmail.com</p>
          <p style={{ margin: 0, fontSize: '14px', color: '#94a3b8', fontStyle: 'italic' }}>
            © 2026 Лабораторна робота №2 • React CV
          </p>
        </footer>
      </div>
    </div>
  );
}