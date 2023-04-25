import React from "react";

const DetailsPage = ({ option }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md text-white blue-glassmorphism dark-eth-card">
      <h2 className="text-2xl mb-4">Details for {option.label}</h2>
      <p className="mb-4">
        This is the details page for {option.label}. Here, you can add any
        additional information you want to provide about this option.
      </p>
      <p className="mb-4">
        You can customize this page to your liking by adding additional
        components and text.
      </p>
    </div>
  );
};

export default DetailsPage;
