import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CornerInput from '../../components/common/CornerInput';
import AuthButton from '../../components/common/AuthButton';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center pt-4 sm:pt-10 max-w-sm mx-auto">
      {/* Header with Back Arrow */}
      <div className="relative w-full flex items-center justify-center mb-16">
        <button
          onClick={() => navigate('/verify-code')}
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
        {/* Form */}
        <div className="flex flex-col gap-6">
          {/* New Password */}
          <CornerInput
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="New Password"
            icon={
              <button onClick={() => setShowPassword(!showPassword)}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {showPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7a10.05 10.05 0 011.875.175M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  ) : (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </>
                  )}
                </svg>
              </button>
            }
          />

          {/* Retype Password */}
          <CornerInput
            label="Password"
            type={showRetypePassword ? 'text' : 'password'}
            placeholder="Retype Password"
            icon={
              <button onClick={() => setShowRetypePassword(!showRetypePassword)}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {showRetypePassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7a10.05 10.05 0 011.875.175M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  ) : (
                    <>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </>
                  )}
                </svg>
              </button>
            }
          />
        </div>

        {/* Instructions */}
        <div className="flex flex-col gap-3">
          <p className="text-white text-small-medium text-[14px]">Instructions</p>
          <div className="flex flex-col gap-2">
            <InstructionItem text="Contain at least 1 number." checked />
            <InstructionItem text="Contain both upper and lower case characters." checked />
            <InstructionItem text="Contain at least one special characters." checked />
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-2">
          <AuthButton
            onClick={() => navigate('/success')}
            size="large"
            className="w-full"
          >
            Change Password
          </AuthButton>
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
