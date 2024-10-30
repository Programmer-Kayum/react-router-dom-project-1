import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email } = user;

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-orange-200 mx-auto w-96 p-5 rounded-lg">
      <h2> Name: {name}</h2>
      <p>Email: {email}</p>
      <br />
      <br />
      <button className="bg-lime-200 p-5 rounded-lg" onClick={handleBack}>
        Back
      </button>{" "}
      <br /> <br />
    </div>
  );
};

export default UserDetails;
