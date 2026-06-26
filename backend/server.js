const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "complaint_db"
});

db.connect((err) => {
if (err) {
console.log("Database Connection Failed");
} else {
console.log("Database Connected");
}
});

app.get("/", (req, res) => {
res.send("Online Complaint Registration API Running");
});

app.listen(3000, () => {
console.log("Server running on port 3000");
});
