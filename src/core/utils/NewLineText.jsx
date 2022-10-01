import React from "react";

const NewLineText = (props) => {
  const text = props.text;
  const newText = text.split("\n").map((str) => (
    <>
      {str}
      <br />
    </>
  ));

  return newText;
};

export default NewLineText;
