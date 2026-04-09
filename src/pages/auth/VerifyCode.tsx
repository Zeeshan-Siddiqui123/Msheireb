import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GlassButton from '../../components/common/ui/GlassButton';
import AuthHeader from '../../components/common/AuthHeader';
import { useTranslation } from 'react-i18next';

const VerifyCode = () => {
  const { t } = useTranslation('auth');
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(56);
  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const secs = seconds % 60;
    return `00 : ${secs.toString().padStart(2, '0')}`;
  };

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 3) refs[index + 1].current?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      refs[index - 1].current?.focus();
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center pt-4 sm:pt-10 max-w-sm mx-auto">
      <div className="w-full max-w-sm animate-fade-in">
        <AuthHeader title={t('forgotPasswordTitle')} onBack={() => navigate('/forgot-password')} />
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col gap-10 animate-fade-up">
        {/* Instructions */}
        <div className="text-center flex flex-col gap-2">
          <p className="text-white text-small-medium">{t('confirmInfo')}</p>
          <p className="text-white text-small-regular px-4 leading-relaxed">
            {t('confirmInfoDesc')}
          </p>
        </div>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3">
          {code.map((digit, i) => (
            <input
              key={i}
              ref={refs[i]}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-14 h-16 text-center text-white text-xl  border border-white/20 rounded-xl focus:border-white/40 focus:bg-white/20 transition-all duration-200 focus:outline-none shadow-figma-drop"
            />
          ))}
        </div>

        {/* Verify Button */}
        <div className="px-2">
          <GlassButton
            onClick={() => navigate('/reset-password')}
            size="large"
            className="w-full"
            buttonClassName="w-full shadow-figma-drop"
          >
            {t('verify')}
          </GlassButton>
        </div>

        {/* Timer and Resend */}
        <div className="text-center flex flex-col gap-2 mt-2">
          <p className="text-white text-small-regular">
            {t('codeExpiresIn')} <span className="text-white font-medium">{formatTime(timeLeft)}</span>
          </p>
          <button className="text-white/70 text-small-regular hover:text-white transition-colors">
            {t('didntReceiveCode')} <span className="font-medium underline">{t('resendCode')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
