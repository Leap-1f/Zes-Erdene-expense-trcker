import { Router } from "express";
import {getAllUsers} from "../router/user.js"

const users = Router()

user.route("/").get(getAllUsers);

// export const {user};