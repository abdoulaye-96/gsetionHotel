import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  max-width: 200px;
  height: 200px;
  background-color: #fafafa;
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 5px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Location = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: #8d4b38;
`;

const HotelName = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #222;
  margin: 0;
`;
//
const Price = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: #222;
`;

const HotelCard = ({ 
    hotel
//   imageUrl = 'https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/image.png',
//   hotelName = 'Hotel Name',
//   location = 'Location',
//   price = '25.000 XOF par nuit'
}) => { 
    // console.log(hotel);
  return (
    <Card>
      <ImageContainer>
        <img src={hotel.imageUrl} alt={hotel.hotelName} />
      </ImageContainer>
      <Details>
        <Location>{hotel.location}</Location>
        <HotelName>{hotel.hotelName}</HotelName>
        <Price>{hotel.price}</Price>
      </Details>
    </Card>
  );
};

export default HotelCard;
