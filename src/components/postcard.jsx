// PostCard.jsx
import React from "react";
import LikeButton from "./likebutton"; // Import the LikeButton component

const PostCard = ({ post }) => {
  return (
    <div style={styles.card}>
      {/* Profile Picture and Username */}
      <div style={styles.userInfo}>
        <img
          src={post.profilePicture}
          alt={post.username}
          style={styles.profilePicture}
        />
        <p style={styles.username}>{post.username}</p>
      </div>

      {/* Post Content */}
      <p style={styles.content}>{post.content}</p>

      {/* Like Button */}
      <LikeButton />
    </div>
  );
};

// Styles for the PostCard component
const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    width: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "12px",
  },
  profilePicture: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "12px",
  },
  username: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "12px",
  },
};

export default PostCard;