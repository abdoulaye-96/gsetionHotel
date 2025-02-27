import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import HotelCard from './HotelCard';

const Layout = () => {
  return (
    <div style={{ display: 'flex', width: '100%', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <Sidebar style={{ flexGrow: 0, width: '364px', height: 'auto' }} />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header style={{ flexGrow: 0, height: '75px' }} />
        <div style={{ flexGrow: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '20px' }}>
          <HotelCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image.png" hotelName="Hôtel Terrou-Bi" location="Boulevard Martin Luther King Dakar, 11500" price="25.000 XOF par nuit" />
          <HotelCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image-2.png" hotelName="King Fahd Palace" location="Rte des Almadies, Dakar" price="20.000 XOF par nuit" />
          <HotelCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image-3.png" hotelName="Radisson Blu Hotel" location="Rte de la Corniche O, Dakar 16868" price="22.000 XOF par nuit" />
          <HotelCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image-4.png" hotelName="Pullman Dakar Teranga" location="Place de l'Indépendance, 10 Rue PL 29, Dakar" price="30.000 XOF par nuit" />
          <HotelCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image-5.png" hotelName="Hôtel Lac Rose" location="Lac Rose, Dakar" price="25.000 XOF par nuit" />
          <HotelCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image-6.png" hotelName="Hôtel Saly" location="Mbour, Sénégal" price="20.000 XOF par nuit" />
          <HotelCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image-7.png" hotelName="Palm Beach Resort & Spa" location="BP64, Saly 23000" price="22.000 XOF par nuit" />
          <HotelCard imageUrl="https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image-8.png" hotelName="Pullman Dakar Teranga" location="Place de l'Indépendance, 10 Rue PL 29, Dakar" price="30.000 XOF par nuit" />
        </div>
      </div>
    </div>
  );
};

export default Layout;

