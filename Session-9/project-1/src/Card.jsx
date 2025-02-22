import React from "react";
import { Blocks } from "react-loader-spinner";

const Card = ({ advice, loading, getAdvice }) => {
  return (
    <div className="card">
      <Blocks
        visible={loading}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
      {!loading && <h1>{advice}</h1>}
      <button onClick={getAdvice}>GIVE ME ADVICE</button>
    </div>
  );
};

export default Card;
