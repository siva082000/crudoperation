import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
    const [values, setValues] = useState({
        id: '',
        firstname: '',
        lastname: '',
        department: '',
        salary: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/employees', values)
            .then(res => {
                console.log(res.data);
                navigate('/'); 
            })
            .catch(err => {
                console.error('Error:', err);
            });
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h1>Add a User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="id"><b>ID:</b></label>
                        <input type="text" name="id" className="form-control bg-secondary" placeholder="Enter Employee ID" value={values.id}
                        onChange={e => setValues({ ...values, id: e.target.value })}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="firstname"><b>FirstName:</b></label>
                        <input type="text" name="firstname" className="form-control bg-secondary" placeholder="Enter FirstName" value={values.firstname}
                        onChange={e => setValues({ ...values, firstname: e.target.value })}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="lastname"><b>LastName:</b></label>
                        <input type="text" name="lastname" className="form-control bg-secondary" placeholder="Enter lastname" value={values.lastname}
                        onChange={e => setValues({ ...values, lastname: e.target.value })}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="id"><b>Department:</b></label>
                        <input type="text" name="Department" className="form-control bg-secondary" placeholder="Enter Department" value={values.department}
                         onChange={e => setValues({ ...values, department: e.target.value })}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="id"><b>Salary:</b></label>
                        <input type="text" name="salary" className="form-control bg-secondary" placeholder="Enter salary" value={values.salary}
                        onChange={e => setValues({ ...values, salary: e.target.value })}/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                    <Link to="/" className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>
        </div>
    );
}

export default Create;
