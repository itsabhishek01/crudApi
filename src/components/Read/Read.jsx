import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Read() {
  const navigate = useNavigate();
  const [myData, setMyData] = useState([]);
  const [error, setError] = useState("");

  const getData = () => {
    axios
      .get("https://642ff389c26d69edc88760fb.mockapi.io/Crud")
      .then((response) => {
        setMyData(response.data);
      })
      .catch((error) => setError(error.message));
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://642ff389c26d69edc88760fb.mockapi.io/Crud/${id}`)
      .then(() => getData())
      .catch((error) => setError(error.message));
  };

  const handleDataRefresh = () => {
    getData();
  };

  return (
    <div>
      <h1>Reading the data</h1>
      <p
        onClick={handleDataRefresh}
        style={{ color: "Red", cursor: "pointer" }}
      >
        Refresh
      </p>
      <table className="table-data">
        <th>ID</th>
        <th>Name</th>
        <th>E Mail</th>
        <th>Age</th>
        <th>edit</th>
        <th>delete</th>
        {myData.map((value) => {
          const { id, e_name, e_age, e_email } = value;
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{e_name}</td>
              <td>{e_email}</td>
              <td>{e_age}</td>
              <td>
                <p
                  onClick={() => {
                    navigate("/edit", { state: { data: value } });
                  }}
                  style={{ color: "grey", fontSize: "12px", cursor: "pointer" }}
                >
                  edit
                </p>
              </td>
              <td>
                <p
                  onClick={() => {
                    if (window.confirm("Are you Sure to Delete Data??")) {
                      handleDelete(id);
                    }
                  }}
                  style={{ color: "red", fontSize: "12px", cursor: "pointer" }}
                >
                  Delete
                </p>
              </td>
            </tr>
          );
        })}
      </table>
      <p
        onClick={() => navigate("/")}
        style={{ color: "red", cursor: "pointer" }}
      >
        Go back to form
      </p>
    </div>
  );
}

export default Read;
