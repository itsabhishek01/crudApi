import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@material-ui/core";
import { Delete, Edit, Refresh, Home } from "@material-ui/icons";
import swal from "sweetalert";
import './Read.css'

function Read() {
  const navigate = useNavigate();
  const [myData, setMyData] = useState([]);

  const getData = () => {
    axios
      .get("https://642ff389c26d69edc88760fb.mockapi.io/Crud")
      .then((response) => {
        setMyData(response.data);
        swal({
          title: "Data fetched Successfully",
          icon: "success",
          dangerMode: false,
          timer: 1000
        });
      })
      .catch((error) =>
        swal("Oops!", "Seems like we couldn't fetch the info", error)
      );
  };

  useEffect(() => {
    getData();
  }, []);


  const handleDataRefresh = () => {
    getData();
  };


  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      // buttons: true,
      toast: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`https://642ff389c26d69edc88760fb.mockapi.io/Crud/${id}`)
          .then(() => getData())
          .catch((error) => swal({
            title: "Error!",
            text: "Error Deleting Data",
            icon: "error",
            timer: 1000,
            buttons: false,
          }));
      }
    });
  };
  return (
    <div style={{padding:'55px'}}>
      <h1>Users Data</h1>
      <IconButton onClick={handleDataRefresh} style={{ color: "red" }}>
        <Refresh />
      </IconButton>
      <IconButton
        onClick={() => navigate("/")}
        style={{ color: "grey" }}
      >
        <Home />
      </IconButton>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>E Mail</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {myData.map((value) => {
              const { id, e_name, e_age, e_email } = value;
              return (
                <TableRow key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell>{e_name}</TableCell>
                  <TableCell>{e_email}</TableCell>
                  <TableCell>{e_age}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => {
                        navigate("/edit", { state: { data: value } });
                      }}
                      style={{ color: "grey" }}
                    >
                      <Edit />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => {
                          handleDelete(id);
                        
                      }}
                      style={{ color: "red" }}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Read;
