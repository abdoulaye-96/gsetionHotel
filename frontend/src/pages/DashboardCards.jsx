import React from 'react';

const DashboardCard = ({ icon, count, label, color, description }) => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      maxWidth: '260px', // Ajusté pour mieux s'adapter à la grille
      height: '90px',
      backgroundColor: '#ffffff',
      borderRadius: '14px',
      padding: '15px',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      alignItems: 'center'
    }}>
      <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: '20px'
      }}>
        {icon}
      </div>
      
      <div style={{ marginLeft: '15px' }}>
        <div style={{ fontSize: '28px', fontWeight: 300 }}>
          {count}
        </div>
        <div style={{ fontSize: '15px', fontWeight: 300, marginTop: '5px' }}>
          {label}
        </div>
        <div style={{ fontSize: '15px', fontWeight: 400, color: 'rgba(0, 0, 0, 0.6)', marginTop: '5px' }}>
          {description}
        </div>
      </div>
    </div>
  );
};

const DashboardCards = ({ cards = [] }) => {
  const defaultCards = [
    { icon: "📋", count: "125", label: "Formulaires", color: "#a88add", description: "Je ne sais pas quoi mettre" },
    { icon: "📧", count: "25", label: "E-mails", color: "#f90000", description: "Je ne sais pas quoi mettre" },
    { icon: "💬", count: "40", label: "Messages", color: "#0cc2aa", description: "Je ne sais pas quoi mettre" },
    { icon: "🏨", count: "40", label: "Hôtels", color: "#9c27b0", description: "Je ne sais pas quoi mettre" },
    { icon: "👥", count: "600", label: "Utilisateurs", color: "#fcc100", description: "Je ne sais pas quoi mettre" },
    { icon: "🏢", count: "02", label: "Entités", color: "#1565c0", description: "Je ne sais pas quoi mettre" }
  ];

  const cardData = cards.length > 0 ? cards : defaultCards;

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)', // 3 cartes par ligne
      gap: '20px',
      padding: '20px',
      justifyContent: 'center'
    }}>
      {cardData.map((card, index) => (
        <DashboardCard
          key={index}
          icon={card.icon}
          count={card.count}
          label={card.label}
          color={card.color}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default DashboardCards;




// import React from 'react';

// const DashboardCard = ({ icon, count, label, color, description }) => {
//   return (
//     <div style={{
//       display: 'flex',
//       width: '100%',
//       maxWidth: '462px',
//       height: '106px',
//       backgroundColor: '#ffffff',
//       borderRadius: '14px',
//       padding: '21px',
//       margin: '10px',
//       boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
//       alignItems: 'center'
//     }}>
//       <div style={{
//         width: '64px',
//         height: '64px',
//         borderRadius: '50%',
//         backgroundColor: color,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: '#ffffff',
//         fontSize: '24px'
//       }}>
//         {icon}
//       </div>
      
//       <div style={{
//         marginLeft: '20px',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center'
//       }}>
//         <div style={{
//           fontSize: '32px',
//           fontFamily: 'Roboto',
//           fontWeight: 300,
//           lineHeight: '35px',
//           color: 'rgba(0, 0, 0, 0.87)'
//         }}>
//           {count}
//         </div>
        
//         <div style={{
//           fontSize: '17px',
//           fontFamily: 'Roboto',
//           fontWeight: 300,
//           lineHeight: '19px',
//           color: 'rgba(0, 0, 0, 0.87)',
//           marginTop: '5px'
//         }}>
//           {label}
//         </div>
        
//         <div style={{
//           fontSize: '16.8px',
//           fontFamily: 'Roboto',
//           fontWeight: 400,
//           lineHeight: '25px',
//           color: 'rgba(0, 0, 0, 0.6)',
//           marginTop: '5px'
//         }}>
//           {description}
//         </div>
//       </div>
//     </div>
//   );
// };

// const DashboardCards = ({ cards = [] }) => {
//   const defaultCards = [
//     {
//       icon: "📋",
//       count: "125",
//       label: "Formulaires",
//       color: "#a88add",
//       description: "Je ne sais pas quoi mettre"
//     },
//     {
//       icon: "📧",
//       count: "25",
//       label: "E-mails",
//       color: "#f90000",
//       description: "Je ne sais pas quoi mettre"
//     },
//     {
//       icon: "💬",
//       count: "40",
//       label: "Messages",
//       color: "#0cc2aa",
//       description: "Je ne sais pas quoi mettre"
//     },
//     {
//       icon: "🏨",
//       count: "40",
//       label: "Hôtels",
//       color: "#9c27b0",
//       description: "Je ne sais pas quoi mettre"
//     },
//     {
//       icon: "👥",
//       count: "600",
//       label: "Utilisateurs",
//       color: "#fcc100",
//       description: "Je ne sais pas quoi mettre"
//     },
//     {
//       icon: "🏢",
//       count: "02",
//       label: "Entités",
//       color: "#1565c0",
//       description: "Je ne sais pas quoi mettre"
//     }
//   ];

//   const cardData = cards.length > 0 ? cards : defaultCards;

//   return (
//     <div style={{
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'center',
//       gap: '20px',
//       padding: '20px'
//     }}>
//       {cardData.map((card, index) => (
//         <DashboardCard
//           key={index}
//           icon={card.icon}
//           count={card.count}
//           label={card.label}
//           color={card.color}
//           description={card.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default DashboardCards;

