import { Outlet } from 'react-router-dom';
import bgAuth from '../../assets/BG-auth.webp';

const AuthLayout = () => {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-start"
      style={{
        backgroundImage: `url(${bgAuth})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Blurred dark overlay for design consistency */}
      <div className="absolute inset-0  top-0 backdrop-blur-sm" />

      {/* Decorative Signature Border (Framing Effect) */}
      <div className="absolute inset-3 rounded-sm pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-lg mx-auto px-4 min-h-screen flex flex-col items-center gap-6">
        {/* Page content (Login, SignUp, etc.) */}
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
