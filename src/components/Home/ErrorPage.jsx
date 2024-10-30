import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oppsss!!!!! Error</h1>
      <Link to={"/"}>
        <button>Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
