import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://642ff389c26d69edc88760fb.mockapi.io/Crud", {
      e_name: name,
      e_age: age,
      e_email: email,
    });
    setName("");
    setAge("");
    setEmail("");
    navigate("/data");
  };

  return (
    <div>
      <h1>Create THE DATA</h1>
      <div>
        <p
          onClick={() => navigate("/data")}
          style={{ color: "grey", cursor: "pointer" }}
        >
          Read Data
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Enter Name</label>
          <input
            type="text"
            name=""
            id=""
            value={name}
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Enter Age</label>
          <input
            type="Number"
            name=""
            id=""
            value={age}
            placeholder="age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Enter E-Mail</label>
          <input
            type="email"
            name=""
            id=""
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
