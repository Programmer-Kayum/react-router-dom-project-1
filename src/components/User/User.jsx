import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { name, email, id, username, website } = user;

  return (
    <div className="m-5 grid grid-cols-3">
      <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
          <h2 className="card-title">{name}!</h2>
          <h3 className="card-title">{username}</h3>
          <p>{email}</p>
          <div className="card-actions justify-end">
            <Link to={`/user/${id}`}>
              <button className="btn">See details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
