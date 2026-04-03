import React from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthHeaderProps {
  title: string;
  onBack?: () => void;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, onBack }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) onBack();
    else navigate(-1);
  };

  return (
    <div className="sticky top-0 z-20 w-full max-w-sm flex items-center justify-center py-4 px-4 mb-16">
      <button
        onClick={handleBack}
        className="w-10 h-10 flex items-center cursor-pointer justify-center text-white hover:text-brand-gold transition-colors absolute left-[-150px]"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <p className="text-base-regular text-white tracking-wide ">{title}</p>
    </div>
  );
};

export default AuthHeader;

