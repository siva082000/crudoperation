import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
function Read()
{
    const{id}=useParams();
    const[employee,setEmployees]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/Read/'+id)
        .then(res => {
            console.log(res)
            setEmployees(res.data[0]);
        })
        .catch(err => console.log(err))
    },[])

    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h1>Read a User</h1>
                <form>
                    <div className="mb-2">
                        <label htmlFor="id"><b>ID:</b></label>
                        <input type="text" name="id" className="form-control" value={employee.EmployeeID}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="firstname"><b>FirstName:</b></label>
                        <input type="text" name="firstname" className="form-control" value={employee.FirstName}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="lastname"><b>LastName:</b></label>
                        <input type="text" name="lastname" className="form-control" value={employee.LastName}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="id"><b>Department:</b></label>
                        <input type="text" name="Department" className="form-control" value={employee.Department}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="id"><b>Salary:</b></label>
                        <input type="text" name="salary" className="form-control" value={employee.Salary}/>
                    </div>
                    <Link to="/" className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>
        </div>
    )
}
export default Read;