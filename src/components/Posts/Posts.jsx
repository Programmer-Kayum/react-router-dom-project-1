import React from "react";
import { useLoaderData } from "react-router-dom";
import PostDetails from "../PostDetails/PostDetails";

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-3">
      {posts.map((post) => (
        <PostDetails post={post}></PostDetails>
      ))}
    </div>
  );
};

export default Posts;
<h2>This is post components</h2>;
