import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import LandingPage from './LandingPage';
import App from './App';
import './index.css'; // Holds your Tailwind directives

function RootComponent() {
  const [user, setUser] = useState(null); // Tracks { isAuthenticated: bool, chosenPlan: string }

  // FIX: Intercept the parameter to make sure a React event object doesn't overwrite your default string
  const handleLoginSuccess = (planName) => {
    // If planName is a React event or not a string, fall back cleanly to your baseline plan
    const finalPlanName = typeof planName === 'string' ? planName : "Scale Core";

    setUser({
      isAuthenticated: true,
      chosenPlan: finalPlanName
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (user?.isAuthenticated) {
    return <App userPlan={user.chosenPlan} onLogout={handleLogout} />;
  }

  return <LandingPage onLoginSuccess={handleLoginSuccess} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
);
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import LandingPage from './LandingPage';
// import App from './App';
// import './index.css'; // Holds your Tailwind directives

// function RootComponent() {
//   const [user, setUser] = useState(null); // Tracks { isAuthenticated: bool, chosenPlan: string }

//   const handleLoginSuccess = (planName = "Scale Core") => {
//     setUser({
//       isAuthenticated: true,
//       chosenPlan: planName
//     });
//   };

//   const handleLogout = () => {
//     setUser(null);
//   };

//   if (user?.isAuthenticated) {
//     return <App userPlan={user.chosenPlan} onLogout={handleLogout} />;
//   }

//   return <LandingPage onLoginSuccess={handleLoginSuccess} />;
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RootComponent />
//   </React.StrictMode>
// );
// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import LandingPage from './LandingPage.jsx'

// // createRoot(document.getElementById('root')).render(
// //   <StrictMode>
// //     <LandingPage />
// //   </StrictMode>,
// // )
// // // import { StrictMode } from 'react'
// // // import { createRoot } from 'react-dom/client'
// // // import './index.css'
// // // import App from './App.jsx'

// // // createRoot(document.getElementById('root')).render(
// // //   <StrictMode>
// // //     <App />
// // //   </StrictMode>,
// // // )
