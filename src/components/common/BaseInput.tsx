import React from 'react';
import QuickActionsWrapper from './QuickActionsWrapper';

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  error?: string | boolean;
  isShaking?: boolean;
}

const BaseInput: React.FC<BaseInputProps> = ({
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
            w-full transition-all !p-0  duration-300  shadow-figma-drop 
            ${error ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.1)]' : ''}
          `}
        >
          <input
            {...props}
            className={`
              w-full h-[48px] bg-transparent px-4 
              text-white placeholder:text-white text-small-regular
              focus:outline-none transition-all backdrop-blur-md
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
      {error && (
        <div className="mt-[-6px]">
          <span className="text-red-500 text-small-regular animate-in fade-in slide-in-from-top-1">
            {error}
          </span>
        </div>
      )}
    </div>
  );
};

export default BaseInput;
