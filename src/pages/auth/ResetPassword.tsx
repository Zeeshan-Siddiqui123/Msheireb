import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BaseInput from '../../components/common/BaseInput';
import GlassButton from '../../components/common/GlassButton';
import AuthHeader from '../../components/common/AuthHeader';
import { useTranslation } from 'react-i18next';

const EyeIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {isOpen ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7a10.05 10.05 0 011.875.175M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    ) : (
      <>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </>
    )}
  </svg>
);



const ResetPassword = () => {
  const { t } = useTranslation('auth');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ password: '', retypePassword: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  // 2. Validation & Shake States
  const [errors, setErrors] = useState({ password: '', retypePassword: '' });
  const [shake, setShake] = useState({ password: false, retypePassword: false });

  // 3. Password Criteria Logic
  const validations = {
    hasNumber: /\d/.test(formData.password),
    hasUpperLower: /[a-z]/.test(formData.password) && /[A-Z]/.test(formData.password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password),
    isMatching: formData.password === formData.retypePassword && formData.password !== ''
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const triggerShake = (field: 'password' | 'retypePassword') => {
    setShake(prev => ({ ...prev, [field]: true }));
    setTimeout(() => setShake(prev => ({ ...prev, [field]: false })), 400);
  };

  const handleSubmit = (e?: any) => {
    if (e?.preventDefault) e.preventDefault();

    const isCriteriaMet = validations.hasNumber && validations.hasUpperLower && validations.hasSpecial;
    const isMatch = formData.password === formData.retypePassword;

    if (!isCriteriaMet) {
      setErrors(prev => ({ ...prev, password: t('errPasswordReq') }));
      triggerShake('password');
      return;
    }

    if (!isMatch) {
      setErrors(prev => ({ ...prev, retypePassword: t('errPasswordMatch') }));
      triggerShake('retypePassword');
      return;
    }

    // Success
    console.log("Password Reset Successful");
    navigate('/login');
  };

  return (
    <div className="w-full h-full flex flex-col items-center pt-4 sm:pt-10 max-w-sm mx-auto">
      <div className="w-full max-w-sm animate-fade-in">
        <AuthHeader title={t('forgotPasswordTitle')} onBack={() => navigate('/verify-code')} />
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col gap-8">
        {/* Form */}
        <div className="flex flex-col gap-6 animate-fade-up">
          {/* New Password */}
          <BaseInput
            label={t('password')}
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder={t('newPassword')}
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            isShaking={shake.password}
            icon={
              <button type="button" onClick={() => setShowPassword(!showPassword)}>
                <EyeIcon isOpen={showPassword} />
              </button>
            }
          />

          {/* Retype Password */}
          <BaseInput
            label={t('retypePassword')}
            name="retypePassword"
            type={showRetypePassword ? 'text' : 'password'}
            placeholder={t('retypePassword')}
            value={formData.retypePassword}
            onChange={handleChange}
            error={errors.retypePassword}
            isShaking={shake.retypePassword}
            icon={
              <button type="button" onClick={() => setShowRetypePassword(!showRetypePassword)}>
                <EyeIcon isOpen={showRetypePassword} />
              </button>
            }
          />
        </div>

        {/* Instructions */}
        <div className="flex flex-col gap-3">
          <p className="text-white text-small-medium text-[14px]">{t('instructions')}</p>
          <div className="flex flex-col gap-2">
            <InstructionItem text={t('instructNumber')} checked />
            <InstructionItem text={t('instructUpperLower')} checked />
            <InstructionItem text={t('instructSpecial')} checked />
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-2">
          <GlassButton
            onClick={handleSubmit}
            size="large"
            className="w-full"
            buttonClassName="w-full shadow-figma-drop"
          >
            {t('changePassword')}
          </GlassButton>
        </div>
      </div>
    </div>
  );
};

const InstructionItem = ({ text, checked }: { text: string; checked: boolean }) => (
  <div className="flex items-center gap-2">
    <div className={`w-4 h-4 rounded-full flex items-center justify-center ${checked ? 'bg-primary-500' : 'bg-white/10'}`}>
      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <p className="text-white text-small-medium">{text}</p>
  </div>
);

export default ResetPassword;
