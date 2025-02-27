import React, { useState } from 'react';
import styled from 'styled-components';

const ForgotPasswordContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
 background-image: linear-gradient(rgba(48, 48, 48, 0.8), rgba(48, 48, 48, 0.8)),
  url('https://dashboard.codeparrot.ai/api/image/Z74UsHnogYAtZdUa/before.png'); 
`;

const ContentWrapper = styled.div`
  width: 384px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 44px;
`;

const LogoIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const BrandText = styled.h1`
  color: rgba(255, 255, 255, 0.87);
  font-family: 'Roboto', sans-serif;
  font-size: 26.66px;
  font-weight: 700;
  line-height: 21.33px;
  margin: 0;
`;

const FormCard = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 18.67px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  margin: 0 0 20px 0;
`;

const FormDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 32px;
`;

const FormGroup = styled.div`
  margin-bottom: 32px;
`;

const FormLabel = styled.label`
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 15.87px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 90%;
  height: 20px;
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #474a4d;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50.67px;
  background-color: #474a4d;
  color: #ffffff;
  border: none;
  border-radius: 5.33px;
  font-family: 'Roboto', sans-serif;
  font-size: 21.33px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5a5d61;
  }
`;

const ReturnLink = styled.a`
  margin-top: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 18.67px;
  color: rgba(255, 255, 255, 0.87);
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const Connex = styled.span`
  color:rgb(255, 234, 0); /* Couleur verte */
  text-decoration: none; /* Souligné */
`;

const ForgotPassword = ({ defaultEmail = '' }) => {
  const [email, setEmail] = useState(defaultEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
  };

  return (
    <ForgotPasswordContainer>
      {/* <BackgroundOverlay /> */}
      
      <ContentWrapper>
        <LogoSection>
          <LogoIcon src="https://dashboard.codeparrot.ai/api/image/Z74UsHnogYAtZdUa/link-→-s.png" alt="Logo" />
          <BrandText>RED PRODUCT</BrandText>
        </LogoSection>

        <FormCard>
          <FormTitle>Mot de passe oublié?</FormTitle>
          <FormDescription>
            Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.
          </FormDescription>

          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="email">Votre e-mail</FormLabel>
              <FormInput
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>

            <SubmitButton type="submit">Envoyer</SubmitButton>
          </form>
        </FormCard>

        <ReturnLink href="/login">
          Revenir à la <Connex>connexion</Connex>
        </ReturnLink>
      </ContentWrapper>
    </ForgotPasswordContainer>
  );
};

export default ForgotPassword;
