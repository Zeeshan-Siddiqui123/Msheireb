import { Routes, Route } from 'react-router-dom';
import ResidentialHome from './pages/residential/ResidentialHome';
import AppartmentDetails from './pages/residential/AppartmentDetails';
import HomeServices from './pages/residential/HomeServices';
import CarWashDetail from './pages/residential/CarWashDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ResidentialHome />} />
        {/* You can rename the path if you prefer something else */}
      <Route path="/appartment-details" element={<AppartmentDetails />} />
      <Route path="/home-services" element={<HomeServices />} />
      <Route path="/car-wash-details" element={<CarWashDetail />} />
    </Routes>
  );
};

export default AppRoutes;
