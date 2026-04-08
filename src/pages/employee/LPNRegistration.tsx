import React from 'react'
import DashboardLayout from '../../components/common/DashboardLayout'
import { LeftSidebarContent } from '../../components/common/LeftSidebarContent'
import QuickActionsWrapper from '../../components/common/QuickActionsWrapper'
import FormField from '../../components/common/FormFields'
import { Button } from "@heroui/react";
import GlassButton from '../../components/common/GlassButton'
import PageHeader from '../../components/portals/residential/PageHeader'

const LPNRegistration = () => {
  const [formData, setFormData] = React.useState({
    visitorName: "",
    make: "",
    model: "",
    year: "",
    colour: "",
    vehicleType: "",
    fullName: "",
    employeeId: "",
    department: "",
    email: "",
    phone: "",
    accessType: "",
    parkingZone: "",
    reason: "",
    agreed: false,
  });

  const handleChange = (field: keyof typeof formData) => (value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <DashboardLayout leftSidebar={<LeftSidebarContent />}>
      <PageHeader title="LPN Registration" backPath='/employee' />
      <QuickActionsWrapper className="w-full bg-transparent  shadow-figma-drop">
        <form onSubmit={handleSubmit} className="space-y-8 w-full">

          {/* Vehicle Details */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium tracking-wide">Vehicle Details</h3>
            <FormField
              label="Visitor Name"
              placeholder="John Doe"
              required
              value={formData.visitorName}
              onChange={handleChange("visitorName")}
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <FormField
                label="Make"
                placeholder="Toyota"
                required
                value={formData.make}
                onChange={handleChange("make")}
              />
              <FormField
                label="Model"
                placeholder="Camry"
                value={formData.model}
                onChange={handleChange("model")}
              />
              <FormField
                label="Year"
                placeholder="2025"
                required
                value={formData.year}
                onChange={handleChange("year")}
              />
              <FormField
                label="Colour"
                placeholder="White"
                value={formData.colour}
                onChange={handleChange("colour")}
              />
            </div>

            <FormField
              label="Vehicle Type"
              type="select"
              placeholder="Select Type"
              value={formData.vehicleType}
              onChange={handleChange("vehicleType")}
              required
              options={[
                { key: "sedan", text: "Sedan" },
                { key: "suv", text: "SUV" },
                { key: "truck", text: "Truck" },
              ]}
            />
          </div>

          {/* Owner Information */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium tracking-wide">Owner Information</h3>
            <FormField
              label="Full Name"
              placeholder="John Doe"
              required
              value={formData.fullName}
              onChange={handleChange("fullName")}
            />
            <FormField
              label="Employee ID"
              placeholder="12345"
              required
              value={formData.employeeId}
              onChange={handleChange("employeeId")}
            />

            <FormField
              label="Department"
              type="select"
              placeholder="Select Department"
              value={formData.department}
              onChange={handleChange("department")}
              options={[
                { key: "hr", text: "HR" },
                { key: "it", text: "IT" },
                { key: "finance", text: "Finance" },
              ]}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Email Address"
                placeholder="john.doe@company.com"
                required
                value={formData.email}
                onChange={handleChange("email")}
              />
              <FormField
                label="Phone Number"
                placeholder="+974 12 456789"
                required
                value={formData.phone}
                onChange={handleChange("phone")}
              />
            </div>
          </div>

          {/* Access Details */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium tracking-wide">Access Details</h3>

            <FormField
              label="Access Type"
              type="select"
              placeholder="Permanent"
              value={formData.accessType}
              onChange={handleChange("accessType")}
              required
              options={[
                { key: "permanent", text: "Permanent" },
                { key: "temporary", text: "Temporary" },
              ]}
            />

            <FormField
              label="Parking Zone"
              type="select"
              placeholder="Select Zone"
              value={formData.parkingZone}
              onChange={handleChange("parkingZone")}
              required
              options={[
                { key: "a", text: "Zone A" },
                { key: "b", text: "Zone B" },
              ]}
            />

            <FormField
              label="Reason for Registration"
              type="textarea"
              placeholder="Enter reason for vehicle registration..."
              value={formData.reason}
              onChange={handleChange("reason")}
            />
          </div>

          {/* Checkbox & Submit */}
          <div className="space-y-6 pt-2">
            <FormField
              type="checkbox"
              label="I confirm that the information provided is accurate and I agree to comply with the parking regulations and ANPR system policies."
              value={formData.agreed}
              onChange={handleChange("agreed")}
            />


          </div>
          <div className='flex justify-center'>
            <GlassButton
              size='large'
              className='w-1/2'
              buttonClassName='w-full shadow-figma-drop'
            >
              Register Vehicle
            </GlassButton>
          </div>
        </form>
      </QuickActionsWrapper>
    </DashboardLayout>
  )
}

export default LPNRegistration