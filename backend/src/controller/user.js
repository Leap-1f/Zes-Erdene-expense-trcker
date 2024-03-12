import {sql} from "../../config/database.js"

export const getAllUsers = async(req,res)=>{
    try{
        const data = await sql `SELECT * FROM users`
        log
    }
    catch (err){
    console.log(err);
    }
}