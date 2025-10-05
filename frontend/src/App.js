
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import PatientView from './pages/PatientView';
import DoctorView from './pages/DoctorView';
import InsuranceForm from './pages/InsuranceForm';
import InsuranceSelection from './pages/InsuranceSelection';
import SelectCity from './pages/CitySelectionPB';
import Dashboard from './mains/Dashboard/Dashboard';
import BookAppointment from './mains/Appointments/BookAppointment';
import DoctorVisitPage from './mains/Appointments/DoctorVisitPage';
import PersonalAccidentInsuranceForm from './pages/PersonalAccidentInsuranceForm';
import HealthInsurancePolicyBazaarClone from './pages/HealthInsurancePolicyBazaarClone';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patient" element={<PatientView />} />
        <Route path="/doctor" element={<DoctorView />} />
        <Route path="/insurance-form" element={<InsuranceForm />} />
        <Route path="/insurance-selection" element={<InsuranceSelection />} />
        <Route path="/select-city" element={<SelectCity />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/doctor/:id" element={<DoctorVisitPage />} />
        <Route path="/doctor/:id/visit" element={<DoctorVisitPage />} />
        <Route path="/personal-accident-insurance" element={<PersonalAccidentInsuranceForm />} />
        <Route path="/health-insurance-onec-crore" element={<HealthInsurancePolicyBazaarClone />} />
      </Routes>
    </Router>
  );
}

export default App;
