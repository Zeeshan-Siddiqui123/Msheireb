import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/svg/msherieb-logo.svg';
import facebookIcon from '../../assets/svg/socials/facebook-logo.svg';
import googleIcon from '../../assets/svg/socials/google-logo.svg';
import appleIcon from '../../assets/svg/socials/apple-logo.svg';
import CornerInput from '../../components/common/CornerInput';
import AuthButton from '../../components/common/AuthButton';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Header Section (PNG Logo) */}
      <div className="text-center mb-8">
        <p className="display-large-uppercase text-white mb-[16px] text-center">
          WELCOME TO
        </p>
        <img src={logo} alt="Msheireb Logo" className="w-[280px] h-auto object-contain mx-auto" />
      </div>

      {/* Form Card */}
      <div className="w-full max-w-sm flex flex-col gap-5">
        {/* Email Field */}
        <CornerInput
          label="Email Id"
          type="email"
          placeholder="Enter your email id"
          icon={
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />

        {/* Password Field */}
        <CornerInput
          label="Password"
          type={showPassword ? 'text' : 'password'}
          placeholder="Password (at least 8 characters)"
          icon={
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="hover:text-white/70 transition-colors"
            >
              {showPassword ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7a10.05 10.05 0 011.875.175M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          }
        />

        {/* Forgot Password */}
        <div className="flex justify-start mt-0 pt-0">
          <Link to="/forgot-password" virtual-link="/forgot-password" className="text-white text-small-regular hover:text-white hover:underline transition-all">
            Forgot Password?
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 mt-2">
          <AuthButton
            onClick={() => navigate('/home')}
            size="large"
          >
            Login
          </AuthButton>

          <AuthButton
            onClick={() => { }}
            className="w-full"
            size="large"
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <span className="text-white/90 text-small-medium">Login Face ID</span>
            </div>
          </AuthButton>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 py-4">
          <div className="flex-1 border-t border-dashed border-white/50" />
          <span className="text-white text-small-regular whitespace-nowrap">Or Sign Up with</span>
          <div className="flex-1 border-t border-dashed border-white/50" />
        </div>

        {/* Social Options */}
        <div className="flex gap-4">
          <AuthButton className="flex-1 !py-3" onClick={() => { }}>
            <img src={facebookIcon} alt="Facebook" className="w-[18px] h-[18px] object-contain mx-auto" />
          </AuthButton>
          <AuthButton className="flex-1 !py-3" onClick={() => { }}>
            <img src={googleIcon} alt="Google" className="w-[18px] h-[18px] object-contain mx-auto" />
          </AuthButton>
          <AuthButton className="flex-1 !py-3" onClick={() => { }}>
            <img src={appleIcon} alt="Apple" className="w-[18px] h-[18px] object-contain mx-auto" />
          </AuthButton>
        </div>
        {/* Footer Link */}
        <p className="text-small-medium text-center mt-2 text-white">
          Don't have an account?{' '}
          <Link to="/signup" className="text-white text-small-bold hover:underline underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
