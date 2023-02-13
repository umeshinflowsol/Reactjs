import React from "react";
import { useState } from "react";
import axios from "axios";
import Edit from "./users/Edit.css"
function AddImage() {
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  };

  const handleApi = () => {
    //call the api
    const url = "http://localhost:8080/addImage";

    const formData = new FormData();
    formData.append("image", image);
    axios
      .post(url, formData)
      .then((result) => {
        console.log(result.data);
        alert("success");
      })
      .catch((error) => {
        alert("service error");
        console.log(error);
      });
  };

  return (
    <div>
      IMAGE UPLOAD
      <input type="file" onChange={handleChange} /> <br />
      <button onClick={handleApi} style={Edit}>SUBMIT</button>
    </div>
  );
}

export default AddImage;
