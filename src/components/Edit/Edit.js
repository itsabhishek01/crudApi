import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "40px",
    paddingBottom: "40px",
    borderBottom: "1px solid #ccc",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "450px",
    marginTop: "20px",
    padding: "40px",
    backgroundColor: "#fff",
    borderRadius: "4px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
  },
  input: {
    marginBottom: "30px",
    width: "100%",
    "& .MuiInputLabel-root": {
      color: "#333",
    },
    "& .MuiInputBase-root": {
      fontSize: "16px",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#007bff",
    },
  },
  button: {
    marginTop: "40px",
    backgroundColor: "#007bff",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0069d9",
    },
  },
  link: {
    color: "#666",
    cursor: "pointer",
    marginTop: "10px",
    textAlign: "center",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  heading: {
    marginBottom: "30px",
    fontSize: "32px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
}));



function Edit() {
  const classes = useStyles();
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
    <div className={classes.container}>
      <h1>Enter the Update Details</h1>
      <div>
        <p
          onClick={() => navigate("/data")}
          style={{ color: "red", cursor: "pointer" }}
        >
          Read Data
        </p>
      </div>

      <form className={classes.form} onSubmit={handleUpdate}>
        <div className={classes.input}>
          <TextField
            label="Enter Name"
            variant="outlined"
            value={name}
            style={{ width: "25rem" }}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={classes.input}>
          <TextField
            label="Enter Age"
            variant="outlined"
            type="number"
            value={age}
            style={{ width: "25rem" }}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className={classes.input}>
          <TextField
            label="Enter E-Mail"
            variant="outlined"
            type="email"
            value={email}
            style={{ width: "25rem" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button className={classes.button} variant="contained" type="submit">
          Update User
        </Button>
      </form>
    </div>
  );
}

export default Edit;
