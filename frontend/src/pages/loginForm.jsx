import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: linear-gradient(rgba(48, 48, 48, 0.8), rgba(48, 48, 48, 0.8)),
  url('https://dashboard.codeparrot.ai/api/image/Z74UsHnogYAtZdUa/before.png');
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  
  background-size: cover;
  opacity: 0.8;
`;

const LoginContent = styled.div`
  width: 384px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LogoIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const BrandName = styled.h1`
  color: rgba(255, 255, 255, 0.87);
  font-family: 'Roboto', sans-serif;
  font-size: 26.66px;
  font-weight: 700;
  line-height: 21.33px;
`;

const LoginFormContainer = styled.div`
  background: #ffffff;
  border-radius: 4px;
  padding: 32px;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const LoginTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 17.07px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 24px;
  font-weight: 400;
  line-height: 25.6px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  width: 90%;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 5.33px;
  padding: 0 16px;
  font-size: 18.67px;
  font-family: 'Roboto', sans-serif;

  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const RememberMe = styled.div`
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 18.67px;
  color: rgba(0, 0, 0, 0.87);
`;

const CheckboxCustom = styled.span`
  width: 24px;
  height: 24px;
  border: 2.67px solid #9e9e9e;
  border-radius: 2.67px;
  margin-right: 12px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: #45484b;
    border-radius: 1px;
    display: ${props => (props.checked ? 'block' : 'none')};
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 50.67px;
  background-color: #45484b;
  color: #ffffff;
  border: none;
  border-radius: 5.33px;
  font-family: 'Roboto', sans-serif;
  font-size: 21.33px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #363839;
  }
`;

const FooterLinks = styled.div`
  text-align: center;
`;

const ForgotPassword = styled.a`
  color: #ffd964;
  font-family: 'Roboto', sans-serif;
  font-size: 18.67px;
  font-weight: 600;
  text-decoration: none;
  display: block;
  margin-bottom: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const SignupPrompt = styled.p`
  color: rgba(255, 255, 255, 0.87);
  font-family: 'Roboto', sans-serif;
  font-size: 18.67px;
`;

const SignupLink = styled.a`
  color: #ffd964;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const LoginComponent = ({ defaultEmail = '', defaultPassword = '' }) => {
  const [formData, setFormData] = useState({
    email: defaultEmail,
    password: defaultPassword,
    rememberMe: false
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email: formData.email,
        password: formData.password,
      });
      if (response.status === 200) {
        // Stocker le token JWT dans le localStorage
        localStorage.setItem('token', response.data.token);
        // Rediriger vers le dashboard
        navigate('/dashboard');
      }} catch (err) {
        setError(err.response?.data?.message || 'Erreur lors de la connexion.');
      }
  };

  return (
    <LoginContainer>
      <BackgroundOverlay />
      
      <LoginContent>
        <LogoSection>
          <LogoIcon src="https://dashboard.codeparrot.ai/api/image/Z744WXnogYAtZdU3/link-→-s.png" alt="Logo" />
          <BrandName>RED PRODUCT</BrandName>
        </LogoSection>

        <LoginFormContainer>
          <form onSubmit={handleSubmit}>
            <LoginTitle>Connectez-vous en tant que Admin</LoginTitle>
            {error && <p style={{ color: 'red', marginBottom: '20px' }}>{error}</p>}

            <FormGroup>
              <FormInput
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-mail"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormInput
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Mot de passe"
              />
            </FormGroup>

            <RememberMe>
              <CheckboxContainer>
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                  required
                />
                <CheckboxCustom checked={formData.rememberMe} />
                <span>Gardez-moi connecté</span>
              </CheckboxContainer>
            </RememberMe>

            <LoginButton type="submit">Se connecter</LoginButton>
          </form>
        </LoginFormContainer>

        <FooterLinks>
          <ForgotPassword href="/forgetpassword">Mot de passe oublié?</ForgotPassword>
          <SignupPrompt>
            Vous n'avez pas de compte? <SignupLink href="/signup">S'inscrire</SignupLink>
          </SignupPrompt>
        </FooterLinks>
      </LoginContent>
    </LoginContainer>
  );
};

export default LoginComponent;
