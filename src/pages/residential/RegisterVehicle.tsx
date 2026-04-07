import { ChevronLeft } from 'lucide-react';
import GlassButton from '../../components/common/GlassButton';
import QuickActionsWrapper from '../../components/common/QuickActionsWrapper';
import FormField from '../../components/common/FormFields';
import React from 'react';

export default function RegisterVehicle({ onBack }: { onBack: () => void }) {
  const [formData, setFormData] = React.useState({
    community: "A10 Townhouse",
    apartment: "1405",
    residentName: "Ahmed Ali",
    residentType: "Tenant",
    plateNumber: "",
    vehicleType: "Car",
    brandModel: "",
    ownerName: "Ahmed Ali"
  });

  const handleChange = (field: keyof typeof formData) => (value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Register Vehicle Submitted:", formData);
    onBack();
  };

  return (
    <div className="flex flex-col h-full w-full ">
      {/* Header */}
      <div className="relative flex items-center justify-center mb-10">
        <button
          onClick={onBack}
          className="absolute left-0 text-white hover:text-white/80 transition-colors cursor-pointer"
        >
          <ChevronLeft size={28} strokeWidth={2} />
        </button>
        <h1 className="heading-medium-bold">Register New Vehicle</h1>
      </div>

      {/* Form Container */}
      <QuickActionsWrapper className="w-full p-4">
        <div className='w-full flex flex-col gap-4'>
          
          <FormField 
            label="Community/Building" 
            type="select" 
            value={formData.community} 
            onChange={handleChange('community')}
            options={[{ key: "A10 Townhouse", text: "A10 Townhouse" }]} 
          />
          <FormField 
            label="Apartment/Unit No" 
            type="select" 
            value={formData.apartment} 
            onChange={handleChange('apartment')}
            options={[{ key: "1405", text: "1405" }]} 
          />
          <FormField 
            label="Resident Name" 
            type="text" 
            value={formData.residentName} 
            onChange={handleChange('residentName')}
          />
          <FormField 
            label="Resident Type" 
            type="select" 
            value={formData.residentType} 
            onChange={handleChange('residentType')}
            options={[
              { key: "Tenant", text: "Tenant" },
              { key: "Owner", text: "Owner" }
            ]} 
          />

          <FormField 
            label="Vehicle Plate Number" 
            type="text" 
            placeholder="e.g. 372318" 
            value={formData.plateNumber} 
            onChange={handleChange('plateNumber')}
            required 
          />
          <FormField 
            label="Vehicle Type" 
            type="select" 
            value={formData.vehicleType} 
            onChange={handleChange('vehicleType')}
            options={[
              { key: "Car", text: "Car" }, 
              { key: "SUV", text: "SUV" }, 
              { key: "Motorcycle", text: "Motorcycle" }
            ]}
            required 
          />
          <FormField 
            label="Vehicle Brand/Model" 
            type="text" 
            placeholder="e.g. Hyundai Creta" 
            value={formData.brandModel} 
            onChange={handleChange('brandModel')}
            required 
          />
          <FormField 
            label="Owner Name" 
            type="text" 
            value={formData.ownerName} 
            onChange={handleChange('ownerName')}
            required 
          />

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4 pt-2">
            <div className="flex-1 group">
              <GlassButton
                onClick={handleSubmit}
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
