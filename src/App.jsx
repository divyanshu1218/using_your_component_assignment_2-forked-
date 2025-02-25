// App.jsx
import React from "react";
import PostCard from "./components/postcard";// Import the PostCard component

const App = () => {
  // Sample posts data
  const posts = [
    {
      id: 1,
      username: "john_doe",
      profilePicture: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      content: "Enjoying a beautiful day at the park! 🌳",
    },
    {
      id: 2,
      username: "jane_smith",
      profilePicture: "https://writestylesonline.com/wp-content/uploads/2016/08/Follow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg",
      content: "Just finished reading an amazing book! 📚",
    },
    {
      id: 3,
      username: "alex_jones",
      profilePicture: "https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png",
      content: "Exploring new places and making memories. ✈️",
    },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <h1 style={styles.header}>Social Media Feed</h1>

      {/* Posts Container */}
      <div style={styles.postsContainer}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

// Styles for the App component
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f0f0f0",
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  postsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px", // Adds spacing between posts
  },
};

export default App;