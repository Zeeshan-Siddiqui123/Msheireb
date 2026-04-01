import { useNavigate } from 'react-router-dom';
import bgAuth from '../../assets/BG-auth.webp';
import logo from '../../assets/svg/msherieb-logo.svg';
import CornerSelect from '../../components/common/CornerSelect';
import GlassButton from '../../components/common/GlassButton';
import { SelectItem } from '@heroui/react';

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center pt-4 sm:pt-10 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgAuth})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Very subtle overlay to ensure text readability without blurring */}
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-lg px-6 ">
        {/* Header Section (Matching Login) */}
        <div className="text-center mb-12">
          <p className="display-large-uppercase text-white mb-[16px] text-center">
            WELCOME TO
          </p>
          <img src={logo} alt="Msheireb Logo" className="w-[280px] h-auto object-contain mx-auto" />
        </div>

        {/* Action Section */}
        <div className="w-full flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-white text-small-regular text-[20px]">
              Choose how will you use the Msheireb App!
            </p>

            <CornerSelect
              label=""
              defaultSelectedKeys={["Visitor"]}
              // HeroUI returns a Set of keys. We convert it to an array or string.
              onSelectionChange={(keys) => {
                const selectedValue = Array.from(keys)[0];
                if (selectedValue) navigate('/login');
              }}
            >
              <SelectItem key="Visitor" textValue="Visitor">Visitor</SelectItem>
              <SelectItem key="Resident" textValue="Resident">Resident</SelectItem>
              <SelectItem key="Employee" textValue="Employee">Employee</SelectItem>
            </CornerSelect>
          </div>

          <GlassButton
            onClick={() => navigate('/login')}
            size="large"
            className="w-full"
            buttonClassName="w-full shadow-figma-drop"
          >
            Get Started
          </GlassButton>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
