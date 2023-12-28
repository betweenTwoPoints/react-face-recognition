import React from "react";

function Rank({ userName, userEntries }) {
  return (
    <>
      <div className="white f3">{`${userName}, your current entry count is ...`}</div>
      <div className="white f1">{userEntries}</div>
    </>
  );
}

export default Rank;
