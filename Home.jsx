import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
function Home()
{
    const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function Employees() {
      try {
        const response = await axios.get('http://localhost:8081/employees');
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    Employees();
  }, []);

const handleDelete=(id)=>{
  axios.delete('http://localhost:8081/delete/'+id)
  .then(res => {
    window.location.reload();
  })
  .catch(err => console.log(err))
}

  return (
    <div>
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-70 mt-3">
        <h1>List OF Users</h1>
            <div className="w-75 rounded bg-white border shadow p-4">
              <div className="d-flex justify-content-end">
                <Link to="Create" className="btn btn-success">Add User</Link>
              </div>
      <table className="table table-striped">
        <thead>
            <tr>
                <th>EmployeeID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {employees.map(employee => (
          <tr key={employee.EmployeeID}>
            <td>{employee.EmployeeID}</td>
            <td>{employee.FirstName}</td>
            <td>{employee.LastName}</td>
            <td>{employee.Department}</td>
            <td>{employee.Salary}</td>
            <td>
                <Link to={`/Read/${employee.EmployeeID}`} className="btn btn-sm btn-info me-2">Read</Link>
                <Link to={`/Edit/${employee.EmployeeID}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                <button onClick={() => handleDelete(employee.EmployeeID)} className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
}

export default Home;
