import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CornerInput from '../../components/common/CornerInput';
import CornerSelect from '../../components/common/CornerSelect';
import AuthButton from '../../components/common/AuthButton';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center pt-4 sm:pt-10">
      {/* Header with Back Arrow */}
      <div className="relative w-full max-w-sm flex items-center justify-center mb-10">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 p-1 text-white hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <p className="text-base-regular text-white tracking-wide font-regular">Create an account</p>
      </div>

      {/* Single Scrollable Form Container */}
      <div className="w-full max-w-sm ">
        <div className="flex flex-col gap-5">
          {/* First Name */}
          <CornerInput
            label="First Name*"
            placeholder="Enter your first name"
          />

          {/* Last Name */}
          <CornerInput
            label="Last Name*"
            placeholder="Enter your last name"
          />

          {/* Nationality */}
          <CornerSelect label="Nationality">
            <option value="">Select your nationality</option>
            <option value="qatari">Qatari</option>
            <option value="others">Others</option>
          </CornerSelect>

          {/* Mobile Number */}
          <CornerSelect label="Mobile Number*">
            <option value="+974">+974</option>
            <option value="+91">+91</option>
          </CornerSelect>

          {/* Email Id */}
          <CornerInput
            label="Email Id"
            placeholder="Enter your email id"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />

          {/* Password */}
          <CornerInput
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password (at least 8 characters)"
            icon={
              <button onClick={() => setShowPassword(!showPassword)}>
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

          <div className="mt-4">
            <AuthButton
              onClick={() => navigate('/success')}
              size="large"
            >
              Register
            </AuthButton>
          </div>

          <p className="text-center text-white/70 text-small-regular mt-2">
            Already have an account?{' '}
            <Link to="/login" className="text-white text-small-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
