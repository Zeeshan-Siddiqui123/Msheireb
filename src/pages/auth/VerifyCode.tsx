import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthButton from '../../components/common/AuthButton';

const VerifyCode = () => {
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
      {/* Header with Back Arrow */}
      <div className="relative w-full flex items-center justify-center mb-16">
        <button
          onClick={() => navigate('/forgot-password')}
          className="absolute left-0 p-1 text-white hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <p className="text-base-regular text-white tracking-wide font-regular">Forgot Password</p>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col gap-10">
        {/* Instructions */}
        <div className="text-center flex flex-col gap-2">
          <p className="text-white text-small-medium">Confirm your information</p>
          <p className="text-white text-small-regular px-4 leading-relaxed">
            Please make sure all your information is correct before proceeding to payment session.
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
          <AuthButton
            onClick={() => navigate('/reset-password')}
            size="large"
            className="w-full"
          >
            Verify
          </AuthButton>
        </div>

        {/* Timer and Resend */}
        <div className="text-center flex flex-col gap-2 mt-2">
          <p className="text-white text-small-regular">
            Code expires in : <span className="text-white font-medium">{formatTime(timeLeft)}</span>
          </p>
          <button className="text-white/70 text-small-regular hover:text-white transition-colors">
            Didn't receive code? <span className="font-medium underline">Resend Code</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
