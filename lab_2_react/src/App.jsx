import React, { useState, useEffect } from 'react';

// --- ВБУДОВАНІ SVG ІКОНКИ ---
const SunIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>;
const MoonIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;
const UserIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const GraduationIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>;
const CodeIcon = () => <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const MessageIcon = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const XIcon = () => <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

// --- КОМПОНЕНТИ ---

const Header = ({ theme, toggleTheme }) => (
  <header className={`mb-12 border-b pb-8 transition-colors duration-500 ${theme === 'dark' ? 'border-blue-900/50' : 'border-rose-200/80'}`}>
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
      <div>
        <h1 className={`text-5xl md:text-6xl font-light tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r ${theme === 'dark' ? 'from-blue-400 to-indigo-600' : 'from-rose-900 to-pink-700'}`}>
          Котляр<br/>Дмитро<br/>Сергійович
        </h1>
      </div>
      <div className="flex flex-col items-end gap-4 w-full md:w-auto">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all border shadow-sm hover:scale-110 active:scale-95 ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-yellow-400' : 'bg-white border-rose-200 text-rose-600'}`}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        <div className={`text-left md:text-right text-[15px] space-y-2 font-light ${theme === 'dark' ? 'text-slate-400' : 'text-rose-800/90'}`}>
          <p>Львів, Україна</p>
          <p>+380 (00) 000-00-00</p>
          <p>dmitrixg@gmail.com</p>
        </div>
      </div>
    </div>
  </header>
);

const SectionWrapper = ({ title, theme, children }) => (
  <section className={`p-8 rounded-[2rem] border transition-all duration-500 shadow-lg ${theme === 'dark' ? 'bg-slate-800/40 border-blue-900/30 shadow-black/20' : 'bg-white/60 border-white/80 shadow-rose-200/30'}`}>
    <h2 className={`text-sm font-bold tracking-[0.2em] mb-4 uppercase ${theme === 'dark' ? 'text-blue-400' : 'text-rose-500'}`}>{title}</h2>
    {children}
  </section>
);

const Reviews = ({ theme }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/17/comments')
      .then(res => res.json())
      .then(data => setComments(data.slice(0, 4)))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="h-full">
      <h2 className={`text-sm font-bold tracking-[0.2em] mb-6 uppercase text-center ${theme === 'dark' ? 'text-blue-400' : 'text-rose-500'}`}>Відгуки роботодавців</h2>
      <div className="flex flex-col gap-5">
        {comments.map(comment => (
          <div key={comment.id} className={`p-5 rounded-2xl border shadow-sm transition-all hover:-translate-y-1 ${
            theme === 'dark' ? 'bg-slate-800/60 border-blue-900/50 text-slate-300 shadow-black/40' : 'bg-white/70 border-rose-100 text-rose-900/90 shadow-rose-100'
          }`}>
            <div className={`mb-3 pb-3 border-b border-dashed ${theme === 'dark' ? 'border-slate-700' : 'border-rose-200'}`}>
              <strong className={`block text-[14px] leading-tight ${theme === 'dark' ? 'text-blue-400' : 'text-rose-700'}`}>{comment.name}</strong>
              <span className="text-[11px] opacity-60 block truncate">{comment.email}</span>
            </div>
            <p className="text-[13px] leading-relaxed font-light italic">"{comment.body}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactForm = ({ theme, isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-center items-center p-4" onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}>
      <div className={`p-8 rounded-[2.5rem] border shadow-2xl w-full max-w-md transform animate-in zoom-in duration-300 ${theme === 'dark' ? 'bg-slate-900 border-blue-900 text-white shadow-black/60' : 'bg-[#fdf5f6] border-rose-200 shadow-rose-200/50'}`}>
        <h3 className={`text-2xl font-light mb-8 text-center ${theme === 'dark' ? 'text-blue-400' : 'text-rose-500'}`}>Зворотній зв'язок</h3>
        <form action="https://formspree.io/f/xpqjjyjq" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Ваше ім'я" required className={`w-full p-4 rounded-2xl border outline-none transition-all focus:ring-2 ${theme === 'dark' ? 'bg-slate-800 border-blue-800 focus:ring-blue-500' : 'bg-white border-rose-100 focus:ring-rose-400'}`} />
          <input type="email" name="email" placeholder="Ваш Email" required className={`w-full p-4 rounded-2xl border outline-none transition-all focus:ring-2 ${theme === 'dark' ? 'bg-slate-800 border-blue-800 focus:ring-blue-500' : 'bg-white border-rose-100 focus:ring-rose-400'}`} />
          <textarea name="message" placeholder="Напишіть щось..." rows="4" required className={`w-full p-4 rounded-2xl border outline-none resize-none transition-all focus:ring-2 ${theme === 'dark' ? 'bg-slate-800 border-blue-800 focus:ring-blue-500' : 'bg-white border-rose-100 focus:ring-rose-400'}`}></textarea>
          <div className="flex gap-4 pt-4">
            <button type="submit" className={`flex-1 py-4 rounded-2xl font-bold text-white transition-all hover:scale-105 active:scale-95 ${theme === 'dark' ? 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/40' : 'bg-rose-600 hover:bg-rose-500 shadow-lg shadow-rose-200'}`}>Відправити</button>
            <button type="button" onClick={() => setIsOpen(false)} className={`flex-1 py-4 rounded-2xl font-bold border transition-all hover:bg-black/5 ${theme === 'dark' ? 'border-slate-700 text-slate-400' : 'border-rose-300 text-rose-500'}`}>Закрити</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- ГОЛОВНИЙ ДОДАТОК ---

export default function App() {
  const [theme, setTheme] = useState('light');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    // 1. Авто-тема за часом
    const hours = new Date().getHours();
    setTheme(hours >= 7 && hours < 21 ? 'light' : 'dark');

    // 2. Системна діагностика
    const info = { os: navigator.platform, browser: navigator.userAgent };
    localStorage.setItem('reactSysInfo', JSON.stringify(info));
    setSysInfo(info);

    // 3. Авто-відкриття форми через 60 сек
    const timer = setTimeout(() => setIsContactOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const themeClasses = theme === 'light'
    ? "bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 text-rose-950 selection:bg-rose-200 selection:text-rose-900"
    : "bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-slate-300 selection:bg-blue-900 selection:text-blue-100";

  return (
    <div className={`min-h-screen transition-colors duration-500 py-16 px-4 font-sans ${themeClasses}`}>
      <div className="max-w-6xl mx-auto relative">

        <Header theme={theme} toggleTheme={toggleTheme} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 space-y-10">
            <SectionWrapper title="Про мене" theme={theme}>
              <p className="text-lg leading-relaxed font-light opacity-90">
                Я студент 3-го курсу НУ «Львівська політехніка», спеціалізуюся на <strong className={theme === 'dark' ? 'text-blue-400' : 'text-rose-700 font-bold'}>кібербезпеці</strong>.
                Маю глибокий інтерес до Python-розробки, аналізу шкідливого ПЗ та OSINT. Завжди відкритий до нових викликів та командної роботи.
              </p>
            </SectionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SectionWrapper title="Досвід" theme={theme}>
                 <ul className="space-y-4 text-[15px] font-light">
                   <li className="flex items-start gap-3">
                      <span className={theme === 'dark' ? 'text-blue-500' : 'text-rose-400'}>✦</span>
                      <span>Розробка власних скриптів для автоматизації рутинних завдань на Python.</span>
                   </li>
                   <li className="flex items-start gap-3">
                      <span className={theme === 'dark' ? 'text-blue-500' : 'text-rose-400'}>✦</span>
                      <span>Вивчення та практичне застосування YARA правил для детекції загроз.</span>
                   </li>
                 </ul>
              </SectionWrapper>

              <SectionWrapper title="Освіта" theme={theme}>
                <div className="space-y-3">
                  <h3 className={`text-base font-bold uppercase ${theme === 'dark' ? 'text-white' : 'text-rose-900'}`}>НУ "Львівська Політехніка"</h3>
                  <div className="text-[14px] opacity-80">
                    <p>Спеціальність: Кібербезпека</p>
                    <p>Інститут: ІКТАМ</p>
                    <p className="mt-4 text-xs italic">Статус: Студент (Бакалавр)</p>
                  </div>
                </div>
              </SectionWrapper>
            </div>

            <section className="py-6">
              <h2 className={`text-sm font-bold tracking-[0.2em] mb-6 uppercase text-center ${theme === 'dark' ? 'text-blue-400' : 'text-rose-500'}`}>Навички</h2>
              <div className="flex flex-wrap justify-center gap-3">
                {["Python", "OSINT", "YARA", "Linux", "GPG", "React", "Tailwind"].map(s => (
                  <span key={s} className={`px-6 py-2.5 text-[13px] font-medium rounded-full border shadow-sm transition-all hover:scale-110 ${
                    theme === 'dark' ? 'bg-slate-800 border-blue-900 text-blue-300' : 'bg-white border-rose-100 text-rose-900 shadow-rose-100'
                  }`}>{s}</span>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-1">
            <Reviews theme={theme} />
          </aside>
        </div>

        <footer className={`mt-16 text-center py-10 border-t border-dashed transition-colors ${theme === 'dark' ? 'border-slate-800 text-slate-500' : 'border-rose-200 text-rose-400'}`}>
          <div className="max-w-lg mx-auto mb-6 bg-black/5 dark:bg-white/5 p-5 rounded-2xl text-[11px] font-mono leading-relaxed text-left space-y-1">
            <p className={theme === 'dark' ? 'text-blue-400/70' : 'text-rose-700/70'}>[ СИСТЕМНА ДІАГНОСТИКА ]</p>
            <p>OC: {sysInfo.os}</p>
            <p className="truncate">BROWSER: {sysInfo.browser}</p>
          </div>
          <p className="text-[10px] tracking-[0.4em] font-black uppercase">• 2026 •</p>
        </footer>

        {/* --- ФІКСОВАНА КНОПКА ЗВОРОТНОГО ЗВ'ЯЗКУ --- */}
        <button
          onClick={() => setIsContactOpen(true)}
          className={`fixed bottom-8 right-8 p-5 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 group z-40 ${
            theme === 'dark' ? 'bg-blue-600 text-white shadow-blue-900/50' : 'bg-rose-600 text-white shadow-rose-400/50'
          }`}
          title="Надіслати відгук"
        >
          <MessageIcon />
          <span className="absolute right-full mr-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Зворотній зв'язок
          </span>
        </button>

      </div>

      <ContactForm theme={theme} isOpen={isContactOpen} setIsOpen={setIsContactOpen} />
    </div>
  );
}
