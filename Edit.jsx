import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

function Edit() {
    const { id } = useParams();

    const [values, setValues] = useState({
        id: '',
        firstname: '',
        lastname: '',
        department: '',
        salary: ''
    });

    useEffect(() => {
        axios.get('http://localhost:8081/Read/' + id)
            .then(res => {
                console.log(res)
                setValues({
                    id: res.data[0].EmployeeID,
                    firstname: res.data[0].FirstName,
                    lastname: res.data[0].LastName,
                    department: res.data[0].Department,
                    salary: res.data[0].Salary
                });
            })
            .catch(err => console.log(err));
    }, [id]);

    const navigate = useNavigate();

    const handleEdit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/Edit/' + id, values)
            .then(res => {
                console.log(res.data)
                navigate('/');
            })
            .catch(err => {
                console.error('Error:', err);
            });
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h1>Edit a User</h1>
                <form onSubmit={handleEdit}>
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
                <button className="btn btn-success">Edit</button>
                <Link to="/" className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>
        </div>
    );
}

export default Edit;

