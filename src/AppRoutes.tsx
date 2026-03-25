import { Routes, Route } from 'react-router-dom';
import ResidentialHome from './pages/residential/ResidentialHome';
import AppartmentDetails from './pages/residential/AppartmentDetails';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ResidentialHome />} />
        {/* You can rename the path if you prefer something else */}
      <Route path="/appartment-details" element={<AppartmentDetails />} />
    </Routes>
  );
};

export default AppRoutes;
