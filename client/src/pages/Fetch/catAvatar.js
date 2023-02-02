import React from "react";

const CatAvatar = ({ catPic }) => {
  return (
    <div>
      <img src={catPic} height="200" />
    </div>
  );
};

export default CatAvatar;
