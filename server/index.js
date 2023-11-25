const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Nguyen123!",
    database: "foodsaver",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

    app.get("/api/get", (req,res)=>{
        const sqlSelect = "SELECT * FROM tbl_buyerreg";
        db.query(sqlSelect, (err, result)=>{
res.send(result)});
   });

app.post("/api/insert", (req, res)=>{
const Name= req.body.Name;
const Email  = req.body.Email;
const Password = req.body.Password;
const Confirm_Password = req.body.Confirm_Password;
const Username = req.body.Username;

    const sqlInsert =
     "INSERT INTO `tbl_buyerreg` (Name, Email, Password, Confirm_Password, Username) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [Name, Email, Password, Confirm_Password, Username], (err, result)=>{
console.log(result);
    });
});
app.listen(3001, () => {
    console.log("running on port 3001");
});
