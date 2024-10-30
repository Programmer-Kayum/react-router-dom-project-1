import React from "react";
import { Link, useNavigate } from "react-router-dom";

const PostDetails = ({ post }) => {
  const { id, userId, title } = post;

  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">User ID: {userId}</h2>
          <h1>Title: {title}</h1>
          <div className="card-actions justify-end mt-5 ">
            <button
              onClick={handleShowDetails}
              className="bg-orange-200 p-2 rounded-lg"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
