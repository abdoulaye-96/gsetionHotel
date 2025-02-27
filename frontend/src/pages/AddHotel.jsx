import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeft, Image } from 'lucide-react';
import axios from 'axios';


const Container = styled.div`
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 0;
    border-bottom: 2px solid #ddd;
    text-transform: uppercase;
    font-size: 22px;
    font-weight: bold;
    color: #555;
`;

const BackButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 5px;
`;

const FormContainer = styled.div`
    display: flex;
    gap: 50px;
    margin-bottom: 15px;
`;

const Column = styled.div`
    flex: 1;
`;

const InputGroup = styled.div`
    margin-bottom: 15px;
    label {
        display: block;
        font-weight: 500;
        margin-bottom: 5px;
    }
    input, select {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
`;

const PhotoUpload = styled.div`
    margin-bottom: 15px;
    text-align: center;
    border: 1px dashed #ddd;
    padding: 20px;
    cursor: pointer;
    img {
        max-width: 100%;
        height: auto;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: right; 
    margin-top: 20px;
`;

const SubmitButton = styled.button`
    min-width: 150px;
    padding: 15px;
    background: #555;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;

    &:hover {
        background: #666;
    }
`;

const AddHotel = () => {
    const navigate = useNavigate();
    const [hotelData, setHotelData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
        price: '',
        currency: 'XOF',
        image: null,
    });

    const handleChange = (e) => {
        setHotelData({ ...hotelData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setHotelData({ ...hotelData, image: e.target.result });
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.post('http://localhost:3000/api/hotels', hotelData, {
            headers: { Authorization: token },
          });
    
          if (response.status === 201) {
            console.log('Hôtel créé:', response.data);
            navigate('/hotels'); // Rediriger vers la liste des hôtels
          }
        } catch (error) {
          console.error('Erreur lors de la création de l\'hôtel:', error.response?.data);
        }
      };

    return (
        <Container>
            <Header>
                <BackButton onClick={() => navigate(-1)}>
                    <ArrowLeft size={24} color="#555" />
                </BackButton>
                CRÉER UN NOUVEAU HÔTEL
            </Header>

            {/* Formulaire en deux colonnes */}
            <FormContainer>
                {/* Colonne gauche */}
                <Column>
                    <InputGroup>
                        <label>Nom de l'hôtel</label>
                        <input type="text" name="name" onChange={handleChange} placeholder="Nom de l'hôtel" />
                    </InputGroup>

                    <InputGroup>
                        <label>Email</label>
                        <input type="email" name="email" onChange={handleChange} placeholder="Email" />
                    </InputGroup>

                    <InputGroup>
                        <label>Prix par nuit</label>
                        <input type="text" name="price" onChange={handleChange} placeholder="Prix par nuit" />
                    </InputGroup>
                </Column>

                {/* Colonne droite */}
                <Column>
                    <InputGroup>
                        <label>Adresse</label>
                        <input type="text" name="address" onChange={handleChange} placeholder="Adresse" />
                    </InputGroup>

                    <InputGroup>
                        <label>Numéro de téléphone</label>
                        <input type="tel" name="phone" onChange={handleChange} placeholder="Téléphone" />
                    </InputGroup>

                    <InputGroup>
                        <label>Devise</label>
                        <select name="currency" onChange={handleChange} value={hotelData.currency}>
                            <option value="XOF">XOF (Franc CFA)</option>
                            <option value="USD">USD (Dollar US)</option>
                            <option value="EUR">EUR (Euro)</option>
                        </select>
                    </InputGroup>
                </Column>
            </FormContainer>

            <PhotoUpload>
                 <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="upload" />
                 <label htmlFor="upload">
                     {hotelData.image ? (
                         <img src={hotelData.image} alt="Hotel" />
                     ) : (
                         <>
                             <Image size={48} color="#555" /> {/* Icône de caméra ou une image par défaut */}
                             <p>Ajouter une photo</p>
                         </>
                     )}
                 </label>
             </PhotoUpload>

            <ButtonContainer>
                <SubmitButton onClick={handleSubmit}>Enregistrer</SubmitButton>
            </ButtonContainer>
        </Container>
    );
};

export default AddHotel;






// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import { ArrowLeft, Camera } from 'lucide-react'; // Importez une icône de caméra ou une autre icône pertinente

// // ... (autres styles restent inchangés)

// const PhotoUpload = styled.div`
//     margin-bottom: 15px;
//     text-align: center;
//     border: 1px dashed #ddd;
//     padding: 20px;
//     cursor: pointer;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 10px;

//     img {
//         max-width: 100%;
//         height: auto;
//     }

//     p {
//         margin: 0;
//         color: #555;
//     }
// `;

// const AddHotel = () => {
//     const navigate = useNavigate();
//     const [hotelData, setHotelData] = useState({
//         name: '',
//         address: '',
//         email: '',
//         phone: '',
//         price: '',
//         currency: 'XOF',
//         image: null,
//     });

//     const handleChange = (e) => {
//         setHotelData({ ...hotelData, [e.target.name]: e.target.value });
//     };

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (e) => setHotelData({ ...hotelData, image: e.target.result });
//             reader.readAsDataURL(file);
//         }
//     };

//     const handleSubmit = () => {
//         console.log('Hotel Data:', hotelData);
//     };

//     return (
//         <Container>
//             <Header>
//                 <BackButton onClick={() => navigate(-1)}>
//                     <ArrowLeft size={24} color="#555" />
//                 </BackButton>
//                 CRÉER UN NOUVEAU HÔTEL
//             </Header>

//             {/* Formulaire en deux colonnes */}
//             <FormContainer>
//                 {/* Colonne gauche */}
//                 <Column>
//                     <InputGroup>
//                         <label>Nom de l'hôtel</label>
//                         <input type="text" name="name" onChange={handleChange} placeholder="Nom de l'hôtel" />
//                     </InputGroup>

//                     <InputGroup>
//                         <label>Email</label>
//                         <input type="email" name="email" onChange={handleChange} placeholder="Email" />
//                     </InputGroup>

//                     <InputGroup>
//                         <label>Prix par nuit</label>
//                         <input type="text" name="price" onChange={handleChange} placeholder="Prix par nuit" />
//                     </InputGroup>
//                 </Column>

//                 {/* Colonne droite */}
//                 <Column>
//                     <InputGroup>
//                         <label>Adresse</label>
//                         <input type="text" name="address" onChange={handleChange} placeholder="Adresse" />
//                     </InputGroup>

//                     <InputGroup>
//                         <label>Numéro de téléphone</label>
//                         <input type="tel" name="phone" onChange={handleChange} placeholder="Téléphone" />
//                     </InputGroup>

//                     <InputGroup>
//                         <label>Devise</label>
//                         <select name="currency" onChange={handleChange} value={hotelData.currency}>
//                             <option value="XOF">XOF (Franc CFA)</option>
//                             <option value="USD">USD (Dollar US)</option>
//                             <option value="EUR">EUR (Euro)</option>
//                         </select>
//                     </InputGroup>
//                 </Column>
//             </FormContainer>

//             <PhotoUpload>
//                 <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id="upload" />
//                 <label htmlFor="upload">
//                     {hotelData.image ? (
//                         <img src={hotelData.image} alt="Hotel" />
//                     ) : (
//                         <>
//                             <Camera size={48} color="#555" /> {/* Icône de caméra ou une image par défaut */}
//                             <p>Ajouter une photo</p>
//                         </>
//                     )}
//                 </label>
//             </PhotoUpload>

//             <ButtonContainer>
//                 <SubmitButton onClick={handleSubmit}>Enregistrer</SubmitButton>
//             </ButtonContainer>
//         </Container>
//     );
// };

// export default AddHotel;
