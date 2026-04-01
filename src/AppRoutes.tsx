import { Routes, Route } from 'react-router-dom';
import ResidentialHome from './pages/residential/ResidentialHome';
import AppartmentDetails from './pages/residential/AppartmentDetails';
import HomeServices from './pages/residential/HomeServices';
import CarWashDetail from './pages/residential/CarWashDetail';
import Payments from './pages/residential/Payments';
import Visitor from './pages/residential/Visitor';
import FacilityBooking from './pages/residential/FacilityBooking';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ResidentialHome />} />
        {/* You can rename the path if you prefer something else */}
      <Route path="/appartment-details" element={<AppartmentDetails />} />
      <Route path="/home-services" element={<HomeServices />} />
      <Route path="/car-wash-details" element={<CarWashDetail />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/visitor" element={<Visitor />} />
      <Route path="/facility-booking" element={<FacilityBooking />} />
    </Routes>
  );
};

export default AppRoutes;
