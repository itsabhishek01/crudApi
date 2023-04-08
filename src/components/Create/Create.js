import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

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

export default function Create() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || age === "" || email === "") {
      swal({
        title: "Error!",
        text: "Please fill all fields!",
        icon: "error",
        timer: 2000,
        buttons: false,
      });
    } else {
      axios
        .post("https://642ff389c26d69edc88760fb.mockapi.io/Crud", {
          e_name: name,
          e_age: age,
          e_email: email,
        })
        .then(() =>
          swal({
            title: "Success!",
            text: "User added successfully!",
            icon: "success",
            timer: 2000,
            buttons: false,
          })
        );
      setName("");
      setAge("");
      setEmail("");
    }
  };
  

  return (
    <div className={classes.container}>
      <h1>Enter the User Details</h1>
      <div>
        <p
          onClick={() => navigate("/data")}
          style={{ color: "grey", cursor: "pointer" }}
        >
          Already Have Data [ Read Now ]
        </p>
      </div>

      <form className={classes.form} onSubmit={handleSubmit}>
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
          Add User
        </Button>
      </form>
    </div>
  );
}
