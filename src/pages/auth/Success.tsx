import { useNavigate } from 'react-router-dom';
import GlassButton from '../../components/common/GlassButton';
import { useTranslation } from 'react-i18next';

const Success = () => {
  const { t } = useTranslation('auth');
  const navigate = useNavigate();

  return (
    <div className="w-full glass-panel shadow-figma-drop rounded-2xl p-6 flex flex-col items-center gap-5">
      {/* Success Icon */}
      <div className="w-16 h-16 rounded-full bg-green/20 border-2 border-green flex items-center justify-center"
        style={{ borderColor: 'var(--green)' }}>
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          style={{ color: 'var(--green)' }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div className="text-center">
        <h2 className="text-white heading-medium-bold font-bold text-base">
          {t('accountCreated')}
        </h2>
        <p className="text-white/50 body-regular mt-2 leading-relaxed">
          {t('welcomeCreated')}
        </p>
      </div>

      {/* Success card */}
      <div className="w-full relative">
        <div
          className="w-full py-3 px-4 bg-green-900/20 border border-green/50 rounded-xl text-center text-small-medium"
          style={{ color: 'var(--green)' }}
        >
          {t('registrationSuccessful')}
        </div>
        {/* Broken Border Segments with blurry/shadow effect */}
        <div className="absolute top-0 left-5 right-8 h-px bg-green/20 shadow-[0_0_8px_rgba(40,128,111,0.5)]" />
        <div className="absolute top-8 bottom-5 right-0 w-px bg-green/20 shadow-[0_0_8px_rgba(40,128,111,0.5)]" />
        <div className="absolute bottom-0 left-8 right-5 h-px bg-green/20 shadow-[0_0_8px_rgba(40,128,111,0.5)]" />
        <div className="absolute top-5 bottom-8 left-0 w-px bg-green/20 shadow-[0_0_8px_rgba(40,128,111,0.5)]" />

        <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-green/40 rounded-tl-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-green/40 rounded-br-2xl pointer-events-none" />
      </div>

      {/* Dots indicator */}
      <div className="flex gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`rounded-full transition-all ${i === 3 ? 'w-5 h-2 bg-white' : 'w-2 h-2 bg-white/30'}`}
          />
        ))}
      </div>

      <GlassButton
        onClick={() => navigate('/login')}
        size="large"
        className="w-full"
        buttonClassName="w-full shadow-figma-drop"
      >
        {t('loginNow')}
      </GlassButton>
    </div>
  );
};

export default Success;
