import React from 'react';
import GlassFrame from './GlassFrame';
import QuickActionsWrapper from './QuickActionsWrapper';

interface CornerInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

const CornerInput: React.FC<CornerInputProps> = ({ label, icon, className, ...props }) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <label className="text-white text-small-medium ml-1">{label}</label>

      <QuickActionsWrapper className="w-full shadow-figma-drop">
        <input
          {...props}
          className={`w-full h-[48px] bg-transparent px-4 text-white text-small-regular placeholder:text-white focus:outline-none transition-all ${icon ? 'pr-10' : ''} ${className || ''}`}
        />

        {/* Input Icon */}
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white/60 transition-colors pointer-events-none">
            {icon}
          </div>
        )}
      </QuickActionsWrapper>
    </div>
  );
};

export default CornerInput;


