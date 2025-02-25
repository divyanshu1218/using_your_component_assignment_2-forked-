// LikeButton.jsx
import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false); // State to track like status

  const handleLike = () => {
    setLiked(!liked); // Toggle like status
  };

  return (
    <button
      onClick={handleLike}
      style={{
        backgroundColor: liked ? "#ff4757" : "#f1f2f6", // Change color based on like status
        color: liked ? "#fff" : "#000",
        border: "none",
        padding: "8px 16px",
        borderRadius: "20px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
        transition: "background-color 0.3s ease",
      }}
    >
      {liked ? "Liked ❤️" : "Like"}
    </button>
  );
};

export default LikeButton;