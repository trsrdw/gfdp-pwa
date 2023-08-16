import { Route, Routes } from 'react-router-dom';
import { Base, Dashboard } from '../features/ui';
import { DonorPage, LandingPage } from '../pages';

function PagesRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Base />}>
          {/* public routes */}
          <Route path='/' element={<LandingPage />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />}>
          {/* public routes */}
          <Route path="donor" element={<DonorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default PagesRoutes;