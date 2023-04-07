import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
function Edit() {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState(location.state.data.e_name);
  const [age, setAge] = useState(location.state.data.e_age);
  const [email, setEmail] = useState(location.state.data.e_email);

  const handleUpdate = () => {
    axios.put(
      `https://642ff389c26d69edc88760fb.mockapi.io/Crud/${location.state.data.id}`,
      {
        e_name: name,
        e_age: age,
        e_email: email,
      }
    );
    navigate("/data");
  };

  return (
    <div>
      <h1>EDIT THE DATA</h1>
      <div>
        <p
          onClick={() => navigate("/data")}
          style={{ color: "red", cursor: "pointer" }}
        >
          Read Data
        </p>
      </div>

      <form onSubmit={handleUpdate}>
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

export default Edit;
