import React from "react";

const PagesNumber = ({page}) => {
  return (
    <span>
      <span style={{ color: "var(--appYellow)", fontWeight: "600" }}>{page}</span>/5
    </span>
  );
};

export default PagesNumber;
