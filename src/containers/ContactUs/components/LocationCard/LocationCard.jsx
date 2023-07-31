// import React from "react";
// import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import styled from "styled-components";

// const Map = styled(MapContainer)`
//   width: 100%;
//   height: 400px;
//   border-radius: 15px;
//   box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
//   border: 2px solid #716a7a;
// `;

// const LeafLet = () => {
//   return (
//     <div>
//       <Map center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={[51.505, -0.09]}>
//           <Popup>
//             {/* <h1 style={{ textAlign: "center" }}>Canada</h1> */}
//             <span style={{ color: "#112" }}>Designo Central Office</span>
//           </Popup>
//         </Marker>
//       </Map>
//     </div>
//   );
// };

// export default LeafLet;