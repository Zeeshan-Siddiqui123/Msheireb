import { Check } from "lucide-react";

interface Step {
  key: string;
  label?: string;
}

interface BookingStepperProps {
  steps: Step[];
  currentStep: number; // 0-indexed
  className?: string;
}

const BookingStepper = ({ steps, currentStep, className = "" }: BookingStepperProps) => {
  return (
    <div className={`flex items-center w-full ${className}`}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <div key={step.key} className="flex items-center flex-1 last:flex-none">
            {/* Step Circle */}
            <div className="flex flex-col items-center gap-1.5 shrink-0">
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                  ${
                    isCompleted
                      ? "bg-white"
                      : isActive
                      ? "border-2 border-white bg-transparent"
                      : "border-2 border-white bg-transparent"
                  }
                `}
              >
                {isCompleted ? (
                  <div className="text-white bg-brand-blue-main border-2 w-8 h-8 rounded-full flex items-center justify-center border-white">
                    <Check
                    size={20}
                    strokeWidth={3}
                    
                  />
                  </div>
                  
                ) : (
                  <span
                    className={`text-small-regular font-semibold ${
                      isActive ? "text-white" : "text-white/70"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
              </div>

              {/* Optional label */}
              {step.label && (
                <span
                  className={`text-inter-xs text-center ${
                    isCompleted || isActive ? "text-white" : "text-white/50"
                  }`}
                >
                  {step.label}
                </span>
              )}
            </div>

            {/* Connector Line (skip after last step) */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-[2px] bg-white/30 relative">
                <div
                  className="absolute inset-y-0 left-0 bg-white transition-all duration-500"
                  style={{ width: "100%"  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BookingStepper;
