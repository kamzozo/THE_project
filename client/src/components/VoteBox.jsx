import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import myImage from '../path/to/myImage.jpg';

const VoteOption = ({ value, label, altText, onSubmit }) => {
  const navigate = useNavigate();
  const imageURL = "https://imgur.com/a/8eRqF7Q"; // Update this with the actual external URL

  const handleClick = () => {
    onSubmit(value);
  };

  const handleReadMore = () => {
    navigate(`/details/${value}`); // Update this with the correct route for your details page
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md text-white blue-glassmorphism dark-eth-card">
      <h2 className="text-2xl mb-4">{label}</h2>
      <div className="mb-4">
        <img
          src={imageURL}
          alt={altText}
          className="w-full h-64 object-cover object-center"
        />
      </div>
      <p className="mb-4">
        You may cast your vote for {altText}. Please be aware you may only vote
        once.
      </p>
      <button
        type="button"
        onClick={handleReadMore}
        className="mb-4 bg-green-500 hover:bg-green-600 text-white py-1 px-4 rounded-md"
      >
        Read More
      </button>
      <button
        type="button"
        onClick={handleClick}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Vote
      </button>
    </div>
  );
};

const VoteBox = () => {
  const [vote, setVote] = useState("");

  const handleSubmit = (option) => {
    setVote(option);
    console.log("Vote submitted:", option);
  };

  const options = [
    {
      value: "option1",
      label: "Option 1",
      altText: "Vote for African Nation Congress",
      imageURL: "../assets/ANC.jpg",
    },
    {
      value: "option2",
      label: "Option 2",
      altText: "Vote for Democratic Alliance",
      imageURL: "DA.jpeg",
    },
    {
      value: "option3",
      label: "Option 3",
      altText: "Vote for Congress of the people",
      imageURL: "COPE.png",
    },
    {
      value: "option4",
      label: "Option 4",
      altText: "Vote for Economic Freedom Fighters",
      imageURL: "EFF.jpeg",
    },
  ];

  return (
    <div className="flex items-center justify-center flex-wrap">
      {options.map((option) => (
        <div
          key={option.value}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2"
        >
          <VoteOption
            value={option.value}
            label={option.label}
            altText={option.altText}
            onSubmit={handleSubmit}
          />
        </div>
      ))}
    </div>
  );
};

export default VoteBox;
