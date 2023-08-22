import React, { useEffect, useState } from "react";
import {  Link, useParams} from "react-router-dom";
import axios from "axios";


function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
 

  useEffect(() => {
    axios
      .get("http://localhost:8081/read/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (

    <div className="container">
            
        <h1 style={{color:`red`}} >All Users</h1>
        <Link to="/" className="btn btn-dark">Back</Link>
        
      {data.map((d, i) => (
        <div className="container p-5" key={id}>
           
          <div className="mb-2">
            <strong></strong>
            <strong>User ID: {d.id}</strong>
          </div>

          <div className="mb-2">
            <strong>Name: {d.name}</strong>
          </div>
          <div className="mb-2">
            <strong>Email: {d.email}</strong>
          </div>

          <div className="mb-2">
            <strong>Phone: {d.phone}</strong>
          </div>
          <h1>----------------------------------------</h1>
        </div>
     
      ))}
    </div>
  );
}

export default Read;





// style={{}}


// style={{backgroundcolor: `powderblue`}}

