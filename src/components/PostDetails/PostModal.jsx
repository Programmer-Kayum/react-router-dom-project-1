import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostModal = () => {
  const modal = useLoaderData();
  const navigate = useNavigate();

  const { title, body } = modal;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="card bg-base-100 w-96 mx-auto shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Title: {title}</h2>
        <p className="bg-orange-100 p-3">{body}</p>
        <div className="card-actions justify-end">
          <button onClick={handleGoBack} className="btn btn-primary">
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
