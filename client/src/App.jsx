import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

// Import LoginPage
import LoginPage from "./components/LoginPage";

import { Home, Vote } from "./pages";

const App = () => {
  const placeholder = "https://example.com/placeholder.jpg";
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img
            src={placeholder}
            alt="placeholder"
            className="w-28 object-contain"
          />
        </Link>
        <button
          onClick={toggleLoginModal}
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Login
        </button>
        <Link
          to="/vote"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Vote
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vote" element={<Vote />} />
        </Routes>
      </main>
      {showLoginModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <LoginPage onClose={toggleLoginModal} />
          <button
            onClick={toggleLoginModal}
            className="absolute top-0 right-0 mt-4 mr-4 text-white text-2xl"
          >
            &times;
          </button>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
