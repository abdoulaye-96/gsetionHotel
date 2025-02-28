import React from 'react';
import { useNavigate } from "react-router-dom";

const WelcomeSection = ({ 
  title = "HOTEL 8",
}) => {
  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 20px",
      minWidth: "300px",
      height: "105px",
      backgroundColor: "#ffffff",
    }}>
      <div>
        <h1 style={{
          margin: "0",
          fontFamily: "Roboto, sans-serif",
          fontSize: "32px",
          fontWeight: 300,
          lineHeight: "35.19px",
          color: "rgba(0, 0, 0, 0.87)",
        }}>
          {title}
        </h1>
      </div>
      <button 
        onClick={() => navigate("/AddHotel")} 
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 16px",
          fontSize: "14px",
          fontWeight: 500,
          fontFamily: "Roboto, sans-serif",
          color: "#333",
          backgroundColor: "#fff",
          border: "1px solid rgba(0, 0, 0, 0.2)",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          // Ajoutez un effet de survol ici
          ':hover': {
            backgroundColor: "#FFA500", // Orange
            borderColor: "#FFA500", // Orange
            color: "#fff", // Texte blanc
          },
        }}
      >
        ➕ Créer un nouveau hôtel
      </button>
    </div>
  );
};

export default WelcomeSection;


// import React from 'react';
// import { useNavigate } from "react-router-dom";

// const WelcomeSection = ({ 
//   title = "HOTEL 8",

// }) => {
//   const navigate = useNavigate();

//   return (
//     <div style={{
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       padding: "0 20px",
//       minWidth: "300px",
//       height: "105px",
//       backgroundColor: "#ffffff",
//     }}>
//       <div>
//         <h1 style={{
//           margin: "0",
//           fontFamily: "Roboto, sans-serif",
//           fontSize: "32px",
//           fontWeight: 300,
//           lineHeight: "35.19px",
//           color: "rgba(0, 0, 0, 0.87)",
//         }}>
//           {title}
//         </h1>
//       </div>
//       <button 
//         onClick={() => navigate("/AddHotel")} 
//         style={{
//           display: "flex",
//           alignItems: "center",
//           gap: "8px",
//           padding: "10px 16px",
//           fontSize: "14px",
//           fontWeight: 500,
//           fontFamily: "Roboto, sans-serif",
//           color: "#333",
//           backgroundColor: "#fff",
//           border: "1px solid rgba(0, 0, 0, 0.2)",
//           borderRadius: "8px",
//           cursor: "pointer",
//           transition: "all 0.3s ease",
//         }}
//       >
//         ➕ Créer un nouveau hôtel
//       </button>
//     </div>
//   );
// };

// export default WelcomeSection;
