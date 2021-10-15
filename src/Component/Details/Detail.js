import React from "react";
import { useParams } from "react-router";

const Detail = () => {
  const { key } = useParams();
  return (
    <div>
      <h2>This Is Details : {key} </h2>
      🙈🚀
    </div>
  );
};

export default Detail;
