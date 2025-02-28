import React, { useState } from 'react';
import axios from 'axios'; // Pour les requêtes HTTP
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Pour la redirection

const SignupContainer = styled.div`
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
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
`;

const BrandName = styled.h1`
  color: rgba(255, 255, 255, 0.87);
  font-family: 'Roboto', sans-serif;
  font-size: 26.66px;
  font-weight: 700;
  line-height: 20px;
`;

const FormContainer = styled.div`
  width: 100%;
  margin-top: 0px;
  padding: 15px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  color: rgba(0, 0, 0, 0.87);
  font-family: 'Roboto', sans-serif;
  font-size: 17.07px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  color: rgba(0, 0, 0, 0.87);
  font-family: 'Roboto', sans-serif;
  font-size: 15.87px;
  font-weight: 400;
  line-height: 20px;
  opacity: 0.5;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 90%;
  height: 15px;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const CheckboxInput = styled.input`
  width: 24px;
  height: 20px;
  border: 2.67px solid #9e9e9e;
  border-radius: 2.67px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  color: rgba(0, 0, 0, 0.87);
  font-family: 'Roboto', sans-serif;
  font-size: 18.67px;
  line-height: 20px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #474a4d;
  color: #ffffff;
  border: none;
  border-radius: 5.33px;
  font-family: 'Roboto', sans-serif;
  font-size: 21.33px;
  font-weight: 500;
  line-height: 26.67px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #383b3d;
  }
`;

const LoginLink = styled.p`
  color: rgba(255, 255, 255, 0.87);
  font-family: 'Roboto', sans-serif;
  font-size: 18.67px;
  line-height: 20px;
  text-align: center;
`;

const LoginLinkAnchor = styled.a`
  color: #ffd700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    acceptTerms: false
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
    console.log('Données envoyées:', {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });
    // console.log('Form submitted:', formData);

    if (!formData.acceptTerms) {
        setError('Vous devez accepter les termes et conditions.');
        return;
      }
      try {
        const response = await axios.post('http://localhost:3000/api/auth/signup', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        if (response.status === 201) {
            // Stocker le token JWT dans le localStorage
            localStorage.setItem('token', response.data.token);
            // Rediriger vers le dashboard
            navigate('/dashboard');
          }
        } catch (err) {
          setError(err.response?.data?.message || 'Erreur lors de l\'inscription.');
          console.error('Erreur API:', err.response);
        }
  };

  return (
    <SignupContainer>
      <ContentWrapper>
        <LogoSection>
          <Logo src="https://dashboard.codeparrot.ai/api/image/Z74wQXnogYAtZdUn/link-→-s.png" alt="Logo" />
          <BrandName>RED PRODUCT</BrandName>
        </LogoSection>

        <FormContainer>
          <FormTitle>Inscrivez-vous en tant que Admin</FormTitle>
          {error && <p style={{ color: 'red', marginBottom: '20px' }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Nom</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="password">Mot de passe</FormLabel>
              <FormInput
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <CheckboxGroup>
              <CheckboxInput
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
              />
              <CheckboxLabel htmlFor="acceptTerms">
                Accepter les termes et la politique
              </CheckboxLabel>
            </CheckboxGroup>

            <SubmitButton type="submit">S'inscrire</SubmitButton>
          </form>
        </FormContainer>

        <LoginLink>
          Vous avez déjà un compte? <LoginLinkAnchor href="/login">Se connecter</LoginLinkAnchor>
        </LoginLink>
      </ContentWrapper>
    </SignupContainer>
  );
};

export default SignupForm;
