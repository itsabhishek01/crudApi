import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function AxiosTest() {
  const [myData, setMyData] = useState([]);
  const [inputData, setInputData] = useState({
    id: "",
    body: "",
  });

  //useEffect to get data from API
  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => setMyData(response.data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <h4>Axios</h4>

      <div>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) =>
            setInputData({ id: e.target.value, body: inputData.body })
          }
        />
      </div>
      <div>
        <label htmlFor="">Body</label>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) =>
            setInputData({ id: inputData.id, body: e.target.value })
          }
        />
      </div>
      <div>
        <button
          onClick={() => {
            axios
              .post(baseURL, {
                title: inputData.id,
                body: inputData.body,
              })
              .then((response) => console.log(response));
          }}
        >
          POST
        </button>
      </div>
      {myData.map((value) => {
        return (
          <div key={value.id}>
            <h6>{value.id}</h6>
            <h6>{value.title}</h6>
            <h6>{value.body}</h6>
          </div>
        );
      })}
    </div>
  );
}

export default AxiosTest;
