import React from 'react';

const WelcomeSection = ({ 
  title = "Bienvenue sur RED Product",
  subtitle = "Lorem ipsum dolor sit amet consectetur"
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 20px',
      minWidth: '300px',
      height: '105px',
      backgroundColor: '#ffffff'
    }}>
      <h1 style={{
        margin: '0',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '32px',
        fontWeight: 300,
        lineHeight: '35.19px',
        color: 'rgba(0, 0, 0, 0.87)'
      }}>
        {title}
      </h1>
      <p style={{
        margin: '8px 0 0 0',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16.8px',
        fontWeight: 400,
        lineHeight: '25.2px',
        color: 'rgba(0, 0, 0, 0.6)'
      }}>
        {subtitle}
      </p>
    </div>
  );
};

export default WelcomeSection;
