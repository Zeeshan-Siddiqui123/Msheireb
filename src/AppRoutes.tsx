import { Routes, Route } from 'react-router-dom';
import ResidentialHome from './pages/residential/ResidentialHome';
import AppartmentDetails from './pages/residential/AppartmentDetails';
import HomeServices from './pages/residential/HomeServices';
import CarWashDetail from './pages/residential/CarWashDetail';
import Payments from './pages/residential/Payments';
import Visitor from './pages/residential/Visitor';
import FacilityBooking from './pages/residential/FacilityBooking';
import Onboarding from './pages/auth/Onboarding';
import AuthLayout from './pages/auth/AuthLayout';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import VerifyCode from './pages/auth/VerifyCode';
import ResetPassword from './pages/auth/ResetPassword';

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

      <Route path="/home" element={<ResidentialHome />} />
      <Route path="/appartment-details" element={<AppartmentDetails />} />
      <Route path="/home-services" element={<HomeServices />} />
      <Route path="/car-wash-details" element={<CarWashDetail />} />
      <Route path="/payments" element={<Payments />} />
      <Route path='/visitor' element={<Visitor/>}/>
      <Route path="/facility-booking" element={<FacilityBooking />} />
    </Routes>
  );
};

export default AppRoutes;
