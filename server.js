const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "siva2000",
    database: "employeedb"
});

db.connect((err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Connected to database');
});

app.get('/employees', (req, res) => {
    const sql = "SELECT * FROM employees";
    db.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ error: 'Internal Server Error' });
        }
        return res.json(data);
    });
});
app.post('/employees',(req,res) => {
    const sql ="INSERT INTO employees (EmployeeID,FirstName,LastName,Department,Salary) VALUES(?)";
    console.log(req.body);
    const values =[
        req.body.id,
        req.body.firstname,
        req.body.lastname,
        req.body.department,
        req.body.salary
    ]
    db.query(sql, [values],(err,result) => {
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.get('/Read/:id', (req, res) => {
    const sql = "SELECT * FROM employees WHERE EmployeeID = ?";
    const id = req.params.id;
    db.query(sql,[id], (err, result) => {
        if (err) {
            console.error(err);
            return res.json({ error: 'Internal Server Error' });
        }
        return res.json(result);
    });
});

app.put('/Edit/:id', (req, res) => {
    const sql = "UPDATE employees SET `EmployeeID`=?, `FirstName`=?, `LastName`=?, `Department`=?, `Salary`=? WHERE EmployeeID=?";
    const id = req.params.id;
    const { id: newId, firstname, lastname, department, salary } = req.body;

    db.query(sql, [newId, firstname, lastname, department, salary, id], (err, result) => {
        if (err) {
            console.error("Error updating employee:", err);
            return res.json({ Message: "Internal server error" });
        }
        return res.json(result);
    });
});

app.delete('/delete/:id', (req,res) => {
    const sql ="DELETE FROM employees WHERE EmployeeID=?";
    const id = req.params.id;
    db.query(sql,[id],(err,result)=> {
             if(err) return res.json({Message:"error inside server"});
             return res.json(result);
    })
})

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
