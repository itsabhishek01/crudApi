import React, { useState, useEffect } from "react";
import axios from "axios";
export default function FetchAPI() {
  const [post, setaPost] = useState([]);
  const [message, setMessage] = useState("");

  // const response = async ()=>{

  // }

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       console.log(res.data);
  //       setaPost(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       setMessage(error.message);
  //     });
  // }, []);

  const GETAPIDATA = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.composts"
      );
      setaPost(response.data);
    } catch (error) {
      console.log("not found");
    }
  };

  useEffect(() => {
    GETAPIDATA();
  }, []);

  return (
    <div>
      <h1>FetchApi</h1>
      {message !== null && <h2>{message}</h2>}
      <h3>
        {post.map((APIDATA) => {
          return (
            <>
              <h3>{APIDATA.id}</h3>
              <i>{APIDATA.title}</i>
              <i>{APIDATA.body}</i>
            </>
          );
        })}
      </h3>
    </div>
  );
}
