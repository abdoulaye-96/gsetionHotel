import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #fff;
  min-width: 800px;
  border-bottom: 1px solid #f0f0f0;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 75px;
  border-radius: 5px;
`;

const Title = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 26.66px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  margin: 0;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SearchContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid rgba(120, 130, 140, 0.13);
  border-radius: 14px;
  padding: 5px 15px;
  width: 280px;
  height: 34px;
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  font-family: Roboto, sans-serif;
  font-size: 18.66px;
  color: #55595c;
  width: 100%;

  &::placeholder {
    opacity: 0.3;
  }
`;

const NotificationBadge = styled.span`
  background-color: #fcc100;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 2px 6px;
  border-radius: 4px;
`;

const UserProfile = styled.div`
  position: relative;
`;

const ProfileImage = styled.div`
  width: 43px;
  height: 43px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const StatusIndicator = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 13px;
  height: 13px;
  background-color: #00ff92;
  border: 2.67px solid #fff;
  border-radius: 50%;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Header = ({ style = {} }) => {
  return (
    <HeaderContainer style={style}>
      <Navbar>
        <div className="title">
          <Title>Liste des hôtels</Title>
        </div>

        <RightSection>
          <SearchContainer>
            <SearchInput>
              <SearchIcon src="https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/search.png" alt="search" />
              <Input type="text" placeholder="Recherche" />
            </SearchInput>
          </SearchContainer>

          <NotificationBadge>3</NotificationBadge>

          <UserProfile>
            <ProfileImage>
              <img src="https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/a-0-jpg.png" alt="profile" />
              <StatusIndicator />
            </ProfileImage>
          </UserProfile>

          <LogoutButton>
            <img src="https://dashboard.codeparrot.ai/api/image/Z7yZcbMyQCPfFWCi/log-out.png" alt="logout" />
          </LogoutButton>
        </RightSection>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
