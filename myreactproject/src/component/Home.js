import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    const result = await axios.get("http://localhost:8081/getAllEmployees");
    console.log(result);
    setEmployee(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8081/deleteEmployeeById/${id}`);
    loadEmployee();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Salary</th>
              <th scope="col">Department</th>
              <th scope="col">Email</th>
              <th scope="col">PhoneNumber</th>
              <th scope="col">CompanyName</th>
              <th scope="col">CompanyLoction</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((employee, index) => (
              <tr>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.salary}</td>
                <td>{employee.department}</td>
                <td>{employee.email}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.companyName}</td>
                <td>{employee.companyLoction}</td>
                <td>
                  <Link
                    class="btn btn-primary mr-2"
                    to={`/users/edit/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <br></br>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(employee.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
