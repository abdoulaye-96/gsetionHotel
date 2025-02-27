import React from 'react';
import styled from 'styled-components';
import HotelCard from './HotelCard';
import HotelHeader from './HotelHeader';
import Sidebar from './Sidebar';
import WelcomeHotelSection from './WelcomeHotelSection';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  margin: -8px;
`;
//margin: -7px;
const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  padding: 20px; // Tu peux ajuster si besoin
  overflow-y: auto;
  min-height: 100vh; // Assurer qu'il remplit la hauteur de l'écran
`;


const HotelsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  padding-top: 20px;
`;

const hotels = [
  { imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image-3.png', hotelName: 'Hôtel Terrou-Bi', location: 'Boulevard Martin Luther King Dakar', price: '25.000 XOF par nuit' },
  { imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image.png', hotelName: 'King Fahd Palace', location: 'Rte des Almadies, Dakar', price: '20.000 XOF par nuit' },
  { imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image-2.png', hotelName: 'Radisson Blu Hotel', location: 'Rte de la Corniche O, Dakar', price: '22.000 XOF par nuit' },
  { imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image-4.png', hotelName: 'Pullman Dakar Teranga', location: 'Place de l\'indépendance, Dakar', price: '30.000 XOF par nuit' },
  { imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image-5.png', hotelName: 'Hôtel Lac Rose', location: 'Lac Rose, Dakar', price: '25.000 XOF par nuit' },
  { imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image-6.png', hotelName: 'Hôtel Saly', location: 'Mbour, Sénégal', price: '20.000 XOF par nuit' },
  { imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image-7.png', hotelName: 'Palm Beach Resort & Spa', location: 'BP84, Saly 23002', price: '22.000 XOF par nuit' },
  { imageUrl: 'https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image-8.png', hotelName: 'Pullman Dakar Teranga', location: 'Place de l\'indépendance, Dakar', price: '30.000 XOF par nuit' }
];

const HotelList = () => {
  return (
    <Container>
      <Sidebar  />
      <MainContent>
        <HotelHeader />
        <WelcomeHotelSection />
        <HotelsGrid>
          {hotels.map((hotel, index) => (
            <HotelCard hotel={hotel}  />  //key={index} {...hotel}
          ))}
        </HotelsGrid>
      </MainContent>
    </Container>
  );
};

export default HotelList;
