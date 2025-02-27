import React from 'react';


const Header = ({ title = 'Dashboard', searchPlaceholder = 'Recherche', notifications = 3 }) => {
  return (
    <div style={{
      width: '100%',
      height: '75px',
      backgroundColor: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      boxSizing: 'border-box',
      justifyContent: 'space-between'
    }}>
      {/* Dashboard Title */}
      <div style={{
        marginLeft: '47px',
        fontSize: '26.66px',
        fontFamily: 'Roboto',
        fontWeight: 500,
        color: 'rgba(0, 0, 0, 0.87)',
        lineHeight: '74.66px'
      }}>
        {title}
      </div>

      {/* Right Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        {/* Search Input */}
        <div style={{
          width: '280px',
          height: '34px',
          backgroundColor: '#ffffff',
          border: '1.33px solid rgba(120, 130, 140, 0.13)',
          borderRadius: '666px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px'
        }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z7ZGdDO_YEiK219m/search.png" 
            alt="search"
            style={{
              width: '24px',
              height: '24px'
            }}
          />
          <input
            type="text"
            placeholder={searchPlaceholder}
            style={{
              border: 'none',
              outline: 'none',
              marginLeft: '10px',
              fontSize: '18.66px',
              fontFamily: 'Roboto',
              color: '#55595c',
              width: '100%',
              background: 'transparent'
            }}
          />
        </div>

        {/* Notification Badge */}
        <div style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            width: '17.84px',
            height: '18.17px',
            backgroundColor: '#fcc100',
            borderRadius: '4.27px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#ffffff',
            fontFamily: 'Roboto',
            fontWeight: 700,
            fontSize: '14px'
          }}>
            {notifications}
          </div>
        </div>

        {/* Profile Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <div style={{
            position: 'relative'
          }}>
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z7ZGdDO_YEiK219m/a-0-jpg.png"
              alt="profile"
              style={{
                width: '42.66px',
                height: '42.66px',
                borderRadius: '50%'
              }}
            />
            <div style={{
              width: '13.33px',
              height: '13.33px',
              backgroundColor: '#00ff92',
              border: '2.67px solid #ffffff',
              borderRadius: '50%',
              position: 'absolute',
              bottom: '0',
              right: '0'
            }} />
          </div>
        </div>

        {/* Logout Button */}
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z7ZGdDO_YEiK219m/log-out.png"
          alt="logout"
          style={{
            width: '24px',
            height: '24px',
            cursor: 'pointer'
          }}
        />
      </div>
    </div>
  );
};

export default Header;

