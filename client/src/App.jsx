import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Booking from "./pages/Booking";
import ProviderDashboard from "./pages/ProviderDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import BookingHistory from "./pages/BookingHistory";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/booking"
          element={
            <ProtectedRoute allowedRoles={["CUSTOMER"]}>
              <Booking />
            </ProtectedRoute>
          }
        />

      
        <Route
          path="/provider"
          element={
            <ProtectedRoute allowedRoles={["PROVIDER"]}>
              <ProviderDashboard />
            </ProtectedRoute>
          }
        />

      
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["ADMIN"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      
        <Route
          path="/history/:id"
          element={
            <ProtectedRoute>
              <BookingHistory />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
