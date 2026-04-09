import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/svg/msherieb-logo.svg';
import facebookIcon from '../../assets/svg/socials/facebook-logo.svg';
import googleIcon from '../../assets/svg/socials/google-logo.svg';
import appleIcon from '../../assets/svg/socials/apple-logo.svg';
import BaseInput from '../../components/common/ui/BaseInput';
// import AuthButton from '../../components/common/AuthButton';
import GlassButton from '../../components/common/ui/GlassButton';
// import { Button } from '@heroui/react';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation('auth');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isShaking, setIsShaking] = useState({ email: false, password: false });
  const triggerShake = (field: 'email' | 'password') => {
    setIsShaking(prev => ({ ...prev, [field]: true }));
    setTimeout(() => setIsShaking(prev => ({ ...prev, [field]: false })), 400);
  };

  // 1. Initialize Form State
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const isEmailInvalid = !formData.email.includes('@');
    const isPasswordInvalid = formData.password.length < 8;

    // Set error messages
    setErrors({
      email: isEmailInvalid ? t('errorInvalidEmail') : "",
      password: isPasswordInvalid ? t('errorInvalidPassword') : ""
    });

    // Trigger Shaking
    if (isEmailInvalid) {
      triggerShake('email');
    }
    if (isPasswordInvalid) {
      triggerShake('password');
    };

    if (!isEmailInvalid && !isPasswordInvalid) {
      console.log("Success Submit:", formData);
      navigate('/residential');
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center pt-6">
      {/* Header Section (PNG Logo) */}
      <div className="animate-fade-in text-center mb-8">
        <p className="display-large-uppercase text-white mb-[16px] text-center">
          {t('welcomeTo')}
        </p>
        <img src={logo} alt="Msheireb Logo" className="w-fit h-[50px] max-xl:h-auto object-contain mx-auto" />
      </div>



      {/* Form Card */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-5 animate-fade-up">
        {/* Email Field */}

        <BaseInput
          label={t('emailId')}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t('enterEmailId')}
          // Pass these props specifically
          error={errors.email}
          isShaking={isShaking.email}
          icon={
            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.7777 2.44434V9.111C13.7777 10.2156 12.8822 11.111 11.7777 11.111H2.44434C1.33977 11.111 0.444336 10.2156 0.444336 9.111V2.44434M13.7777 2.44434C13.7777 1.33977 12.8822 0.444336 11.7777 0.444336H2.44434C1.33977 0.444336 0.444336 1.33977 0.444336 2.44434M13.7777 2.44434V2.65597C13.7777 3.14223 13.513 3.58993 13.0869 3.82426L8.07484 6.58089C7.47468 6.91098 6.74733 6.91098 6.14717 6.58089L1.13511 3.82426C0.709047 3.58993 0.444336 3.14223 0.444336 2.65597V2.44434" stroke="white" strokeWidth="0.888889" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          }
        />

        <div className="flex flex-col gap-1">
          <BaseInput
            label={t('password')}
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder={t('enterPassword')}
            // Pass these props specifically
            error={errors.password}
            isShaking={isShaking.password}
            icon={
              <button
                type="button" // Always use type="button" for icons to prevent form submission
                onClick={() => setShowPassword(!showPassword)}
                className="hover:text-white/70 transition-colors"
              >
                {showPassword ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.00018 2L4.04034 4.04016M4.04034 4.04016C2.54049 5.22212 1.72889 6.85129 1.41507 7.59743C1.30565 7.85756 1.30565 8.14244 1.41507 8.40257C1.93746 9.64458 3.83908 13.3333 7.99853 13.3333C9.65995 13.3333 10.9615 12.7448 11.9589 11.9587M4.04034 4.04016L6.11457 6.11438M6.59093 2.81679C7.02833 2.72029 7.49702 2.66667 7.99853 2.66667C12.1573 2.66667 14.0612 6.35415 14.5847 7.59678C14.6944 7.8573 14.6944 8.1427 14.5847 8.40322C14.4312 8.76744 14.1592 9.3417 13.7466 9.97158M11.9589 11.9587L14.0002 14M11.9589 11.9587L9.8858 9.88562M6.11457 6.11438C5.63199 6.59695 5.33352 7.26362 5.33352 8C5.33352 9.47276 6.52742 10.6667 8.00018 10.6667C8.73656 10.6667 9.40323 10.3682 9.8858 9.88562M6.11457 6.11438L9.8858 9.88562" stroke="white" stroke-width="0.888889" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                ) : (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.00018 2L4.04034 4.04016M4.04034 4.04016C2.54049 5.22212 1.72889 6.85129 1.41507 7.59743C1.30565 7.85756 1.30565 8.14244 1.41507 8.40257C1.93746 9.64458 3.83908 13.3333 7.99853 13.3333C9.65995 13.3333 10.9615 12.7448 11.9589 11.9587M4.04034 4.04016L6.11457 6.11438M6.59093 2.81679C7.02833 2.72029 7.49702 2.66667 7.99853 2.66667C12.1573 2.66667 14.0612 6.35415 14.5847 7.59678C14.6944 7.8573 14.6944 8.1427 14.5847 8.40322C14.4312 8.76744 14.1592 9.3417 13.7466 9.97158M11.9589 11.9587L14.0002 14M11.9589 11.9587L9.8858 9.88562M6.11457 6.11438C5.63199 6.59695 5.33352 7.26362 5.33352 8C5.33352 9.47276 6.52742 10.6667 8.00018 10.6667C8.73656 10.6667 9.40323 10.3682 9.8858 9.88562M6.11457 6.11438L9.8858 9.88562" stroke="white" stroke-width="0.888889" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                )}
              </button>
            }
          />

          {/* Forgot Password */}
          <div className="flex justify-start mt-2 pt-0">
            <Link to="/forgot-password" virtual-link="/forgot-password" className="text-white text-small-regular hover:text-white hover:underline transition-all">
              {t('forgotPassword')}
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 mt-2">
          <GlassButton
            onClick={handleSubmit}
            buttonClassName="w-full shadow-figma-drop"
            size="large"

          >
            {t('login')}
          </GlassButton>



        </div>


        <GlassButton
          onClick={() => { }}
          buttonClassName="w-full shadow-figma-drop bg-white !backdrop-blur-[40px]"
          size="large"
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            <span className="text-white/90 text-small-medium">{t('loginFaceId')}</span>
          </div>
        </GlassButton>

        {/* Divider */}
        <div className="flex items-center gap-3 py-0">
          <div className="flex-1 border-t border-dashed border-white/50" />
          <span className="text-white text-small-regular whitespace-nowrap">{t('orSignUpWith')}</span>
          <div className="flex-1 border-t border-dashed border-white/50" />
        </div>

        {/* Social Options */}
        <div className="flex gap-4 justify-between">

          <GlassButton className="flex-1" size='small' buttonClassName='shadow-figma-drop bg-white py-3' onClick={() => { }} >
            <img src={facebookIcon} alt="Facebook" className=" object-contain" />
          </GlassButton>
          <GlassButton className="flex-1" size='small' buttonClassName='shadow-figma-drop bg-white py-3' onClick={() => { }}>
            <img src={googleIcon} alt="Google" className=" object-contain" />
          </GlassButton>
          <GlassButton className="flex-1" size='small' buttonClassName='shadow-figma-drop bg-white py-3' onClick={() => { }}>
            <img src={appleIcon} alt="Apple" className=" object-contain" />
          </GlassButton>
        </div>
        {/* Footer Link */}
        <p className="text-small-medium text-14 text-center mt-2 text-white">
          {t('dontHaveAccount')}{' '}
          <Link to="/signup" className="text-white text-small-bold hover:underline underline">
            {t('signUp')}
          </Link>
        </p>
      </form>
    </div >
  );
};

export default Login;
