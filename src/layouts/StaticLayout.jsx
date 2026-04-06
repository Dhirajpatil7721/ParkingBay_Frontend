// // src/layouts/StaticLayout.jsx
// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Navbar from '../Pages/Static/Navbar';
// import Footer from '../Pages/Static/Footer';

// const StaticLayout = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow pt-16">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default StaticLayout;

// src/layouts/StaticLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Static/Navbar';
import Footer from '../Pages/Static/Footer';

const StaticLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-body">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default StaticLayout;