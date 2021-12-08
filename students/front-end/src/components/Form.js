import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleAddName = () => {
    console.log(name);
  };
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddName();
      setName("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyUp={handleKeyUp}
        type="text"
      ></input>
    </form>
  );
};
export default Form;
