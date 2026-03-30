import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CornerInput from '../../components/common/CornerInput';
import AuthButton from '../../components/common/AuthButton';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  return (
    <div className="w-full h-full flex flex-col items-center pt-4 sm:pt-10 max-w-sm mx-auto">
      {/* Header with Back Arrow */}
      <div className="relative w-full flex items-center justify-center mb-16">
        <button
          onClick={() => navigate('/login')}
          className="absolute left-0 p-1 text-white hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <p className="text-base-regular text-white tracking-wide font-regular">Forgot Password</p>
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col gap-8">
        {/* Instructions */}
        <div className="text-center flex flex-col gap-2">
          <p className="text-white text-small-medium">Please enter your email ID</p>
          <p className="text-white text-small-regular px-4 leading-relaxed">
            We will send a verification code to your registered email ID
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-6">
          <CornerInput
            label="Email Id"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email id"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />

          <AuthButton
            onClick={() => navigate('/verify-code')}
            size="large"
            className="mt-2"
          >
            Continue
          </AuthButton>
        </div>

        {/* Footer */}
        <p className="text-center text-white/70 text-small-regular">
          Remember your password?{' '}
          <Link to="/login" className="text-white text-small-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
