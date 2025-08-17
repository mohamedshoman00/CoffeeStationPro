import React from "react";
import Post from "../components/Post";

function Posts() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
