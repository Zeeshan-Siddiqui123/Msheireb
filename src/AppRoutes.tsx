import { Routes, Route } from 'react-router-dom';
import Onboarding from './pages/auth/Onboarding';
import AuthLayout from './pages/auth/AuthLayout';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import VerifyCode from './pages/auth/VerifyCode';
import ResetPassword from './pages/auth/ResetPassword';
import { routes } from './routes';

const AppRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Onboarding />} />

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="verify-code" element={<VerifyCode />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
      {routes.residential.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
      {routes.commercial.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
