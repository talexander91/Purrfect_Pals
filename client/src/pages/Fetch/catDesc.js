import React from "react";

const CatDesc = ({ catDesc }) => {
  return (
    <div>
      <p>Origin from: {catDesc[0]}</p>
      <p>Name: {catDesc[1]}</p>
      <p>Grooming:{catDesc[2]}</p>
      <p>Shedding: {catDesc[3]}</p>
      <p>Life expectancy: {catDesc[4]} to {catDesc[5]} years</p>
      <p>Weight range: {catDesc[6]} to {catDesc[7]} pounds</p>
    </div>
  );
};

export default CatDesc;
