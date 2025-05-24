import React, { Suspense } from "react";  
import "./assets/tailwind.css";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
// import Dashboard from "./pages/Dashboard";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";

// import NotFound from "./pages/NotFound";
// import MainLayout from "./layouts/MainLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
// import AuthLayout from "./layouts/AuthLayout";


const Customers = React.lazy(() => import("./pages/Customers")) 
const NotFound = React.lazy(() =>import("./pages/NotFound"))
const MainLayout = React.lazy(() =>import("./layouts/MainLayout"))
const Login = React.lazy(() =>import("./pages/auth/Login"))
const Register = React.lazy(() =>import("./pages/auth/Register"))
const Forgot = React.lazy(() =>import("./pages/auth/Forgot")) 
const AuthLayout = React.lazy(() =>import("./layouts/AuthLayout"))
const Orders = React.lazy(() =>import("./pages/Orders"))
const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const HeroSection = React.lazy(() => import("./GuestLayout/pages/HeroSection")); 
function App() {
  return (
    <Suspense fallback={<Loading />}>
    <Routes>
      <Route element={<MainLayout />}>
     
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="*" element={<NotFound />} />
      </Route>

   
        <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>
          {/* ✅ Tambahkan route ke HeroSection */}
        <Route path="/herosection" element={<HeroSection />} />
    </Routes>
    </Suspense>
  );
}

export default App;
