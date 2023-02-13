import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const EditUser = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const [product, setproduct] = useState({
    productName: "",
    productDescription: "",
    price: "",
    department: "",
    imageId: "",
    categoryId: "",
  });

  const { productName, productDescription, price, imageId } = product;

  useEffect(() => {
    loadEmployee();
  }, []);

  const onInputChange = (event) => {
    setproduct({ ...product, [event.target.name]: event.target.value });
  };

  const loadEmployee = async () => {
    const result = await axios.get(
      `http://localhost:8080/getProduct/${productId}`
    );
    setproduct(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/update/product`, product);
    navigate("/");
    console.log(onsubmit);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Employee</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Id "
                name="productId"
                value={productId}
                onChange={(e) => onInputChange(e)}
              />
              <span class="input-group-text"></span>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your firstName"
                name="productName"
                value={productName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <br></br>
          <div className="form-group">
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your lastName"
                name="productDescription"
                value={productDescription}
                onChange={(e) => onInputChange(e)}
              />
              <span class="input-group-text"></span>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your salary"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="form-group">
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Department"
                name="imageId"
                value={imageId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <br></br>
          <button className="btn btn-warning btn-block">Add Employee</button>
        </form>
      </div>
    </div>
  );
};
export default EditUser;
