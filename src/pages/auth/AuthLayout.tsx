import { Outlet } from 'react-router-dom';
import bgAuth from '../../assets/BG-auth.png';

const AuthLayout = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgAuth})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blurred dark overlay for design consistency */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-sm mx-auto px-4 py-8 flex flex-col items-center gap-6">
        {/* Page content (Login, SignUp, etc.) */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
