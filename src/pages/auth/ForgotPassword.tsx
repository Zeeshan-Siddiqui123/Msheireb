import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BaseInput from '../../components/common/BaseInput';
import GlassButton from '../../components/common/GlassButton';
import AuthHeader from '../../components/common/AuthHeader';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  // 2. Shake Trigger
  const triggerShake = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 400);
  };

  // 3. Validation Logic
  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (!isValid) {
      setError("Please enter a valid email address");
      triggerShake();
      return;
    }

    // Success logic
    setError("");
    console.log("Code sent to:", email);
    navigate('/verify-code');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(''); // Clear error while typing
  };

  return (
    <div className="w-full  items-center pt-4 sm:pt-10 max-w-sm mx-auto">
      <div className="w-full max-w-sm animate-fade-in">
        <AuthHeader title="Forgot Password" onBack={() => navigate('/login')} />
      </div>

      {/* Main Content */}
      <div className="w-full flex flex-col gap-8 ">
        {/* Instructions */}
        <div className="text-center flex flex-col gap-2">
          <p className="text-white text-small-medium">Please enter your email ID</p>
          <p className="text-white text-small-regular px-4 leading-relaxed">
            We will send a verification code to your registered email ID
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 animate-fade-up">
          <BaseInput
            label="Email Id"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email id"
            error={error}
            isShaking={isShaking}
            icon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6668 4.6665V11.3332C14.6668 12.4377 13.7714 13.3332 12.6668 13.3332H3.3335C2.22893 13.3332 1.3335 12.4377 1.3335 11.3332V4.6665M14.6668 4.6665C14.6668 3.56193 13.7714 2.6665 12.6668 2.6665H3.3335C2.22893 2.6665 1.3335 3.56193 1.3335 4.6665M14.6668 4.6665V4.87814C14.6668 5.3644 14.4021 5.81209 13.9761 6.04643L8.964 8.80306C8.36384 9.13315 7.63649 9.13315 7.03633 8.80306L2.02427 6.04643C1.59821 5.81209 1.3335 5.3644 1.3335 4.87814V4.6665" stroke="white" stroke-width="0.888889" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            }
          />

          <GlassButton
            onClick={handleSubmit}
            size="large"
            className="w-full mt-2"
            buttonClassName="w-full shadow-figma-drop"
          >
            Continue
          </GlassButton>
        </form>

        {/* Footer */}

      </div>
    </div>
  );
};

export default ForgotPassword;
