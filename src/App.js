import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PostsPage from "./pages/Postspage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/posts" element={<PostsPage/>} />
      </Routes>
    </>
  );
}

export default App;
