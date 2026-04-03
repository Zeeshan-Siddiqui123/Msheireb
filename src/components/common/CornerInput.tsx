import React from 'react';
import QuickActionsWrapper from './QuickActionsWrapper';

interface CornerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string | boolean;
  isShaking?: boolean;
}

const CornerInput: React.FC<CornerInputProps> = ({
  label,
  icon,
  className,
  error,
  isShaking,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {/* Label - Using your white/80 for a soft UI feel */}
      <label className="text-small-regular text-white">
        {label}
      </label>

      {/* SHAKE WRAPPER: 
          The 'key' ensures that every time isShaking becomes true, 
          the DOM node is replaced, forcing the CSS animation to restart.
      */}
      <div
        key={isShaking ? 'shaking' : 'static'}
        className={`w-full ${isShaking ? 'animate-shake' : ''}`}
      >
        <QuickActionsWrapper
          className={`
            w-full transition-all duration-300  shadow-figma-drop
            ${error ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]' : ''}
          `}
        >
          <input
            {...props}
            className={`
              w-full h-[48px] bg-transparent px-4 
              text-white placeholder:text-white text-small-regular
              focus:outline-none transition-all
              ${icon ? 'pr-10' : ''} 
              ${className || ''}
            `}
          />

          {/* Icon Positioned Absolutely within the Wrapper */}
          {icon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 flex items-center justify-center">
              {icon}
            </div>
          )}
        </QuickActionsWrapper>
      </div>

      {/* Error Message Section - Fixed height prevents the layout from "jumping" when errors appear */}
      <div className="mt-[-6px] animate-fade-in">
        {error && (
          <span className="text-red-500 text-small-regular ">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

export default CornerInput;