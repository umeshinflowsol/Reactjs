import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddUser = () => {
  // const navigate = useNavigate();
  const { productId } = useParams;
  // const { id } = useParams;
  const [option, setOption] = useState([]);
  const [imageId, setImageId] = useState();

  useEffect(() => {
    loadImage();
  }, []);

  const loadImage = async (imageId) => {
    const result = await axios.get(`http://localhost:8080/getImage/${imageId}`);
    console.log(result.data);
    setImageId(result.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const result = await axios.get("http://localhost:8080/getCategories");
    console.log(result.data);
    setOption(result.data);
  };

  const [product, setProduct] = useState({
    productName: "",
    productDescription: "",
    price: "",
    imageId: "",
    categoryId: "",
  });
  const { productName, productDescription, price } = product;

  const onSubmit = async (e, categoryId) => {
    console.log(e.target.value);
    console.log(product);
    const result = await axios.post(`http://localhost:8080/add`, product);
    //e.handleClose();
    console.log(result);
    e.preventDefault();
    alert("added sucessfuly");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Product</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your productId "
                name="productId"
                value={productId}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    productId: e.target.value,
                  })
                }
              />
              <span class="input-group-text"></span>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your productName"
                name="productName"
                value={productName}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    productName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <br></br>
          <div className="form-group">
            <div class="input-group mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter  productDescription"
                name="productDescription"
                value={productDescription}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    productDescription: e.target.value,
                  })
                }
              />
              <span class="input-group-text"></span>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter  price"
                name="price"
                value={price}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    price: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <div class="input-group mb-3">
              <input
                type="file"
                className="form-control form-control-lg"
                placeholder="Enter imageId"
                name="imageId"
                value={imageId}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    imageId: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="form-group">
            <div class="input-group mb-3">
              <select
                defaultValue={product.categoryId}
                onChange={(e) =>
                  setProduct({
                    ...product,
                    categoryId: e.target.value,
                  })
                }
              >
                <option>Please choose one option</option>
                {option.map((option, index) => {
                  return (
                    <option key={index} value={option.categoryId}>
                      {option.categoryName}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <br></br>
          <button className="btn btn-warning btn-block">Add Product</button>
        </form>
      </div>
    </div>
  );
};
export default AddUser;
