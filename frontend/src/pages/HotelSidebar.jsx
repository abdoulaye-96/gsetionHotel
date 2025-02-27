// import React from 'react';

// const Sidebar = () => {
//   const SidebarStyle = {
//     width: '280px',
//     minHeight: '100vh',
//     backgroundColor: "#303030", // Fond noir
//     backgroundImage: `linear-gradient(rgba(48, 48, 48, 0.8), rgba(48, 48, 48, 0.8)), 
//     url(https://dashboard.codeparrot.ai/api/image/Z7ZGdDO_YEiK219m/div-left.png)`, // Dégradé + Image de fond
//     backgroundSize: 'cover',
//     backgroundPosition: "center",
//     color: '#fff',
//     display: 'flex',
//     flexDirection: 'column',
//     // marginLeft: 0,
//     margin: 0,
//   };

//   const navbarStyle = {
//     height: '75px',
//     display: 'flex',
//     alignItems: 'center',
//     padding: '20px',
//   };

//   const logoStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//   };

//   const logoTextStyle = {
//     fontSize: '26.66px',
//     fontWeight: 700,
//     fontFamily: 'Roboto',
//     color: 'rgba(255, 255, 255, 0.87)',
//   };

//   const menuContainerStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     flex: 1,
//   };

//   const menuLabelStyle = {
//     fontSize: '16.8px',
//     fontFamily: 'Roboto',
//     color: '#fff',
//     padding: '0 20px',
//     marginBottom: '10px',
//   };

//   const menuItemStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '12px 25px',
//     gap: '26px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s',
//   };

//   const menuItemTextStyle = {
//     fontSize: '18.66px',
//     fontFamily: 'Roboto',
//     fontWeight: 500,
//   };

//   const profileStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '17px 21px',
//     borderTop: '1.33px solid rgba(255, 255, 255, 0.13)',
//     marginTop: 'auto',
//   };

//   const profileInfoStyle = {
//     marginLeft: '20px',
//   };

//   const profileNameStyle = {
//     fontSize: '18.66px',
//     fontFamily: 'Roboto',
//     fontWeight: 500,
//     color: 'rgba(255, 255, 255, 0.87)',
//   };

//   const statusStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     fontSize: '16.8px',
//     fontFamily: 'Roboto',
//     color: 'rgba(255, 255, 255, 0.6)',
//     marginTop: '5px',
//   };

//   return (
//     <div style={SidebarStyle}>
//       <div style={navbarStyle}>
//         <div style={logoStyle}>
//           <img src="https://dashboard.codeparrot.ai/api/image/Z7ZGdDO_YEiK219m/link-→-s.png" alt="Logo" width="32" height="32" />
//           <span style={logoTextStyle}>RED PRODUCT</span>
//         </div>
//       </div>

//       <div style={menuContainerStyle}>
//         <div style={menuLabelStyle}>Principal</div>

//         <div style={{...menuItemStyle, backgroundColor: '#fff'}}>
//           <img src="https://dashboard.codeparrot.ai/api/image/Z7ZGdDO_YEiK219m/layout-d.png" alt="Dashboard" width="23" height="23" />
//           <span style={{...menuItemTextStyle, color: '#4d5154'}}>Dashboard</span>
//         </div>

//         <div style={menuItemStyle}>
//           <img src="https://dashboard.codeparrot.ai/api/image/Z7ZGdDO_YEiK219m/gaming-c.png" alt="Hotels" width="24" height="24" />
//           <span style={{...menuItemTextStyle, color: '#fff'}}>Liste des hôtels</span>
//         </div>
//       </div>

//       <div style={profileStyle}>
//         <img src="https://dashboard.codeparrot.ai/api/image/Z7ZGdDO_YEiK219m/link-→-a.png" alt="Profile" width="53" height="53" />
//         <div style={profileInfoStyle}>
//           <div style={profileNameStyle}>Mouhamet Badiane</div>
//           <div style={statusStyle}>
//             <img src="https://dashboard.codeparrot.ai/api/image/Z7ZGdDO_YEiK219m/small.png" alt="Status" width="14" height="17" />
//             <span>en ligne</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

