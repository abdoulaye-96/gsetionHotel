import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardCards from "./DashboardCards";
import WelcomeSection from "./WelcomeSection";

const Dashboard = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" />;
    }
  return (
    <div style={{
      display: "flex",
      height: "100vh", // Hauteur fixe pour éviter le scroll
      width: "100vw",
      backgroundColor: "#f5f5f5",
      overflow: "hidden", // Empêche le scroll
      margin: -8 ,
    }}>
      {/* Sidebar */}
      <div style={{ minWidth: "280px" }}>
      <Sidebar />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <div style={{ flex: 1, padding: "20px", overflow: "hidden" }}>
          {/* Welcome Section */}
          <WelcomeSection />
          
          {/* Dashboard Cards */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}></div>
          <DashboardCards />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
