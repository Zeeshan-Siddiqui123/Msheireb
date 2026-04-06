import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BaseInput from '../../components/common/BaseInput';
import BaseSelect from '../../components/common/BaseSelect';
import GlassButton from '../../components/common/GlassButton';
import AuthHeader from '../../components/common/AuthHeader';
import { SelectItem } from '@heroui/react';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // 1. Unified Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    nationality: '',
    mobileCode: '',
    email: '',
    password: ''
  });

  // 2. Error and Shake States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isShaking, setIsShaking] = useState<Record<string, boolean>>({});

  const triggerShake = (field: string) => {
    setIsShaking(prev => ({ ...prev, [field]: true }));
    setTimeout(() => setIsShaking(prev => ({ ...prev, [field]: false })), 400);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const newErrors: Record<string, string> = {};

    // Validation Logic
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.nationality) newErrors.nationality = "Please select nationality";
    if (!formData.mobileCode) newErrors.mobileCode = "Required";
    if (!formData.email.includes('@')) newErrors.email = "Invalid email";
    if (formData.password.length < 8) newErrors.password = "Min. 8 characters";

    setErrors(newErrors);

    // Trigger shakes for all fields with errors
    Object.keys(newErrors).forEach(field => triggerShake(field));

    if (Object.keys(newErrors).length === 0) {
      console.log("Registering...", formData);
      navigate('/residential');
    }
  };


  return (
    <div className="w-full h-full flex flex-col items-center pt-4 sm:pt-10 relative">
      <div className="w-full max-w-sm animate-fade-in">
        <AuthHeader title="Create an account" />
      </div>

      {/* Single Scrollable Form Container */}
      <div className="w-full max-w-sm ">

        <form onSubmit={handleSubmit} className="w-full max-w-sm px-4 animate-fade-up">
          <div className="flex flex-col gap-4">


            <BaseInput
              label="First Name*"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
              isShaking={isShaking.firstName}
            />
            <BaseInput
              label="Last Name*"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
              isShaking={isShaking.lastName}
            />

            <BaseSelect
              label="Nationality"
              placeholder="Select nationality"
              error={errors.nationality}
              isShaking={isShaking.nationality}
              onSelectionChange={(keys) => handleSelectChange('nationality', Array.from(keys)[0] as string)}
            >
              <SelectItem key="qatari" textValue="Qatari">Qatari</SelectItem>
              <SelectItem key="emirati" textValue="Emirati">Emirati</SelectItem>
              <SelectItem key="saudi" textValue="Saudi">Saudi</SelectItem>
              <SelectItem key="others" textValue="Others">Others</SelectItem>
            </BaseSelect>

            <BaseSelect
              label="Mobile Code*"
              placeholder="Country code"
              error={errors.mobileCode}
              isShaking={isShaking.mobileCode}
              onSelectionChange={(keys) => handleSelectChange('mobileCode', Array.from(keys)[0] as string)}
            >
              <SelectItem key="+974" textValue="+974">+974 (Qatar)</SelectItem>
              <SelectItem key="+966" textValue="+966">+966 (KSA)</SelectItem>
              <SelectItem key="+971" textValue="+971">+971 (UAE)</SelectItem>
            </BaseSelect>

            <BaseInput
              label="Email Id"
              name="email"
              placeholder="Enter your email id"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              isShaking={isShaking.email}
              icon={
                <svg className="w-4 h-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />

            <BaseInput
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Min. 8 characters"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              isShaking={isShaking.password}
              icon={
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-7s4-7 9-7a10.05 10.05 0 011.875.175M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3l18 18" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              }
            />

            <div className="mt-4">
              <GlassButton
                onClick={handleSubmit}
                size="large"
                className="w-full"
                buttonClassName="w-full shadow-figma-drop"
              >
                Register
              </GlassButton>
            </div>

            <p className="text-center text-white/70 mb-3 text-small-regular">
              Already have an account?{' '}
              <Link to="/login" className="text-white text-small-bold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
