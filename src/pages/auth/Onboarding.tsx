import { useNavigate } from 'react-router-dom';
import bgAuth from '../../assets/BG-auth.png';
import logo from '../../assets/svg/msherieb-logo.svg';
import CornerSelect from '../../components/common/CornerSelect';
import AuthButton from '../../components/common/AuthButton';

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgAuth})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Very subtle overlay to ensure text readability without blurring */}
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-sm px-6">
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
            <p className="text-white text-small-regular opacity-90">
              Choose how will you use the Msheireb App!
            </p>

            <CornerSelect
              label=""
              defaultValue="Visitor"
              onChange={(e) => {
                if (e.target.value) navigate('/login');
              }}
            >
              <option value="Visitor">Visitor</option>
              <option value="Resident">Resident</option>
              <option value="Employee">Employee</option>
            </CornerSelect>
          </div>

          <AuthButton
            onClick={() => navigate('/login')}
            size="large"
            className="w-full"
          >
            Get Started
          </AuthButton>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
