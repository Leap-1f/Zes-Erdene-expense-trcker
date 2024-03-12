import express from "express";
import {sql} from './config/database.js';
import bcrypt from "bcrypt"


const app = express();
const port = 3000;

app.get("/users/selectFrom", async(req, res) => {
    const data = await sql `SELECT * FROM users`;
    console.log(data);
  res.send(data);
});

app.post("/users/createTable", async(req, res)=>{
    const data = await sql `CREATE TABLE usersdata (id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL)`
    console.log(data);
    res.send(data);
});

app.delete("/users/dropTable", async(req,res)=>{
    const data = await sql `DROP TABLE usersdata`
    console.log(data);
    res.send(data);
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
