import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [apiName, setApiName] = useState([]);
  const [include, setInclude] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((response) => response.json())
      .then((data) => setApiName(data));
  }, []);

  const prenom = {
    name,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (apiName.map((nom) => nom.name).includes(name)) {
      setName("");
      getStudents();
      setInclude(true);
    } else {
      console.log("api post");
      fetch("http://localhost:5000/students", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prenom),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          getStudents();
        });
      setName("");
      setInclude(false);
    }
  };

  const getStudents = () => {
    fetch("http://localhost:5000/students")
      .then((response) => response.json())
      .then((data) => setApiName(data));
  };

  return (
    <>
      {include ? <h1>Ce nom existe déjà</h1> : ""}
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        ></input>
      </form>
      <li>
        {apiName.map((nom) => (
          <ul>{nom.name}</ul>
        ))}
      </li>
    </>
  );
};
export default Form;
