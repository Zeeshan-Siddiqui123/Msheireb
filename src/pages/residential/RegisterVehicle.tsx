import { ChevronLeft, ChevronDown } from 'lucide-react';
import GlassButton from '../../components/common/GlassButton';
import QuickActionsWrapper from '../../components/common/QuickActionsWrapper';

export default function RegisterVehicle({ onBack }: { onBack: () => void }) {
  const Field = ({ label, value, required = false }: { label: string, value: string, required?: boolean }) => (
    <div className="flex flex-col gap-1.5">
      <label className="label-bold-center ml-1">
        {label}{required && "*"}
      </label>
      <div className="relative">
        <select className="w-full appearance-none bg-transparent border border-white/40 rounded-[10px]  px-4 py-2.5 outline-none focus:border-white/80 body-regular">
          <option>{value}</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80" size={18} />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full w-full mt-2">
      {/* Header */}
      <div className="relative flex items-center justify-center mb-6">
        <button
          onClick={onBack}
          className="absolute left-0 text-white hover:text-white/80 transition-colors cursor-pointer"
        >
          <ChevronLeft size={28} strokeWidth={2} />
        </button>
        <h1 className="heading-medium-bold">Register New Vehicle</h1>
      </div>

      {/* Form Container */}
      <QuickActionsWrapper className="w-full   p-4  ">
        <div className='w-full flex flex-col gap-4'>
          <Field label="Community/Building" value="A10 Townhouse" />
          <Field label="Apartment/Unit No" value="1405" />
          <Field label="Resident Name" value="Ahmed Ali" />
          <Field label="Resident Type" value="Tenant" />

          <Field label="Vehicle Plate Number" value="e.g. 372318" required />
          <Field label="Vehicle Type" value="Car" required />
          <Field label="Vehicle Brand/Model" value="e.g. Hyundai Creta" required />
          <Field label="Owner Name" value="Admed Ali" required />

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4 pt-2">
            <div className="flex-1 group">
              <GlassButton
                onClick={onBack}
                className='w-full'
                buttonClassName="shadow-figma-drop"
                size='large'
              >
                Submit for Approval
              </GlassButton>
            </div>
            <div className="flex-1 group">
              <GlassButton
                size='large'
                className='w-full'
                onClick={onBack}
                buttonClassName="shadow-figma-drop"
              >
                Cancel
              </GlassButton>
            </div>
          </div>
        </div>
      </QuickActionsWrapper>
    </div>
  );
}
