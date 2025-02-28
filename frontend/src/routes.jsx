import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import HotelsList from './pages/HotelsList';
import AddHotel from './pages/AddHotel';
import ForgetPassword from './pages/ForgetPassword';
import SignupForm from './pages/SignupForm';
import LoginForm from './pages/LoginForm';

// Composant pour protéger les routes
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hotels" element={<ProtectedRoute><HotelsList /></ProtectedRoute>} />
        <Route path="/addhotel" element={<ProtectedRoute><AddHotel /></ProtectedRoute>} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
