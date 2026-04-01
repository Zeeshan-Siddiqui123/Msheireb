import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/svg/msherieb-logo.svg';
import facebookIcon from '../../assets/svg/socials/facebook-logo.svg';
import googleIcon from '../../assets/svg/socials/google-logo.svg';
import appleIcon from '../../assets/svg/socials/apple-logo.svg';
import CornerInput from '../../components/common/CornerInput';
import AuthButton from '../../components/common/AuthButton';
import GlassButton from '../../components/common/GlassButton';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center pt-4 sm:pt-10">
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
            <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.7777 2.44434V9.111C13.7777 10.2156 12.8822 11.111 11.7777 11.111H2.44434C1.33977 11.111 0.444336 10.2156 0.444336 9.111V2.44434M13.7777 2.44434C13.7777 1.33977 12.8822 0.444336 11.7777 0.444336H2.44434C1.33977 0.444336 0.444336 1.33977 0.444336 2.44434M13.7777 2.44434V2.65597C13.7777 3.14223 13.513 3.58993 13.0869 3.82426L8.07484 6.58089C7.47468 6.91098 6.74733 6.91098 6.14717 6.58089L1.13511 3.82426C0.709047 3.58993 0.444336 3.14223 0.444336 2.65597V2.44434" stroke="white" stroke-width="0.888889" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          }
        />

        {/* Password Field */}
        <div>
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
                  <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7777 2.44434V9.111C13.7777 10.2156 12.8822 11.111 11.7777 11.111H2.44434C1.33977 11.111 0.444336 10.2156 0.444336 9.111V2.44434M13.7777 2.44434C13.7777 1.33977 12.8822 0.444336 11.7777 0.444336H2.44434C1.33977 0.444336 0.444336 1.33977 0.444336 2.44434M13.7777 2.44434V2.65597C13.7777 3.14223 13.513 3.58993 13.0869 3.82426L8.07484 6.58089C7.47468 6.91098 6.74733 6.91098 6.14717 6.58089L1.13511 3.82426C0.709047 3.58993 0.444336 3.14223 0.444336 2.65597V2.44434" stroke="white" stroke-width="0.888889" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                )}
              </button>
            }
          />

          {/* Forgot Password */}
          <div className="flex justify-start mt-2 pt-0">
            <Link to="/forgot-password" virtual-link="/forgot-password" className="text-white text-small-regular hover:text-white hover:underline transition-all">
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 mt-2">
          <GlassButton
            onClick={() => navigate('/home')}
            buttonClassName="w-full shadow-figma-drop"
            size="large"
          >
            Login
          </GlassButton>



        </div>


        <GlassButton
          onClick={() => { }}
          buttonClassName="w-full shadow-figma-drop bg-white backdrop-blur-[40px]"
          size="large"
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            <span className="text-white/90 text-small-medium">Login Face ID</span>
          </div>
        </GlassButton>

        {/* Divider */}
        <div className="flex items-center gap-3 py-4">
          <div className="flex-1 border-t border-dashed border-white/50" />
          <span className="text-white text-small-regular whitespace-nowrap">Or Sign Up with</span>
          <div className="flex-1 border-t border-dashed border-white/50" />
        </div>

        {/* Social Options */}
        <div className="flex gap-4">
          <GlassButton className="w-full" size='large' onClick={() => { }} >
            <img src={facebookIcon} alt="Facebook" className="w-[18px] h-[18px] object-contain mx-auto" />
          </GlassButton>
          <GlassButton className="w-full" size='large' onClick={() => { }}>
            <img src={googleIcon} alt="Google" className="w-[18px] h-[18px] object-contain mx-auto" />
          </GlassButton>
          <GlassButton className="w-full" size='large' onClick={() => { }}>
            <img src={appleIcon} alt="Apple" className="w-[18px] h-[18px] object-contain mx-auto" />
          </GlassButton>
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
