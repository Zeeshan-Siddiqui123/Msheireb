import { Outlet } from 'react-router-dom';
import bgAuth from '../../assets/BG-auth.webp';
import { useTranslation } from 'react-i18next';

const AuthLayout = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' || i18n.language.startsWith('en') ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };
  return (
    <div
      className="min-h-screen w-full flex items-center justify-start"
      style={{
        backgroundImage: `url(${bgAuth})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blurred dark overlay for design consistency */}
      {/*  */}
      <div className="absolute inset-0 top-0 backdrop-blur-[8px]" />

      {/* Decorative Signature Border (Framing Effect) */}
      <div className="absolute inset-0 rounded-sm pointer-events-none z-0" />

      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={toggleLanguage}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-full transition-all text-small-medium uppercase tracking-wider"
        >
          {i18n.language === 'en' || i18n.language.startsWith('en') ? 'العربية' : 'English'}
        </button>
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto px-4 min-h-screen flex flex-col items-center gap-6">
        {/* Page content (Login, SignUp, etc.) */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
