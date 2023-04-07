import React, { useEffect, useState } from "react";
import API from "../../axios";

function TestData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();


  // useEffect(() => {
  //   axios
  //     .get("")
  //     .then((res) => setData(res.data))
  //     .catch((error) => setError(error.message));
  // }, []);

  // const API = "https://jsonplaceholder.typicode.com";

  const getAPIData = async () => {
    try {
      const res = await API.get("/posts");
      setData(res.data);
      console.log(res);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <div>
      {error && <h2>{error}</h2>}
      {data.map((value) => {
        const { id, title, body } = value;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{body.slice(0, 150)}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TestData;

// response -> JSON Format Parse
// it's by default JSON Format in axios
// we can all HTTP methods using Axios , GET , POST , DELETE ,PATCH
