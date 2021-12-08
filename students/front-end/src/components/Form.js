import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("vincent");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    fetch("http://localhost:5000/students", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(name),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
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
      <button type="submit"> Add Name</button>
    </form>
  );
};
export default Form;
