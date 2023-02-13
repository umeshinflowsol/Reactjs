import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import React, { useState, useEffect } from "react";
import cellEditFactory from "react-bootstrap-table2-editor";
import filterFactory from "react-bootstrap-table2-filter";
import { Link } from "react-router-dom";
import paginationFactory from "react-bootstrap-table2-paginator";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import Edit from "./layouts/Edit.css";
import { AiFillFileAdd } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
const House = () => {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get("http://localhost:8080/getAllProduct");
    console.log(result);
    setProduct(result.data);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8081/deleteEmployeeById/${id}`);
    loadEmployee();
  };

  const columns = [
    {
      dataField: "productId",
      text: "productId",
      sort: true,
    },
    {
      dataField: "productName",
      text: "productName",
    },
    {
      dataField: "productDescription",
      text: "productDescription",
      sort: true,
    },
    {
      dataField: "price",
      text: "price",
      sort: true,
    },
    {
      dataField: "imageId",
      text: "imageId",
      sort: true,
    },
    {
      dataField: "categoryId",
      text: "categoryId",
      sort: true,
    },
    // {
    //   dataField: "phoneNumber",
    //   text: "PhoneNumber",
    //   sort: true,
    // },
    // {
    //   dataField: "companyName",
    //   text: "companyName",
    //   sort: true,
    // },
    // {
    //   dataField: "companyLoction",
    //   text: "companyLocation",
    //   sort: true,
    // },
    {
      dataField: "id",
      isDummyField: true,
      text: "Action",
      formatter: (cellContent, row) => {
        return (
          <div>
            <Link class="btn btn-primary mr-2" to={`/users/edit/${row.id}`}>
              <BiEdit />
            </Link>
            <Link
              className="btn btn-danger btn-xs"
              onClick={() => deleteUser(row.id, row.name)}
            >
              <AiFillDelete />
            </Link>
            <Button className="btn btn-danger btn-xs" onClick={handleShow}>
              <AiFillFileAdd />
            </Button>
          </div>
        );
      },
    },
  ];

  const handleChange = async (oldValue, newValue, row, column) => {
    const sendata = await axios.put(
      `http://localhost:8081/update/empRecord`,
      row
    );
    console.log(sendata);
  };
  const pageOptions = {
    sizePerPage: 8,
    totalSize: product.length,
    pageStartIndex: 1,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
  };

  const CaptionElement = () => (
    <h3
      style={{
        borderRadius: "0.25em",
        textAlign: "center",
        color: "purple",
        padding: "0.5em",
        margin: "10px",
      }}
    >
      Employee Record Table
    </h3>
  );

  return (
    <div>
      <CaptionElement>{CaptionElement}</CaptionElement>
      <BootstrapTable
        style={Edit}
        keyField="productId"
        data={product}
        columns={columns}
        cellEdit={cellEditFactory({
          mode: "click",
          blurToSave: true,
          afterSaveCell: handleChange,
        })}
        striped
        hover
        condensed
        pagination={paginationFactory(pageOptions)}
        filter={filterFactory()}
      />
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddUser></AddUser>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default House;
