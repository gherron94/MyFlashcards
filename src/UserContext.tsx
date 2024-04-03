import { createContext } from "react";
import { User } from "./types";

const UserContext = createContext<User>({ username: "Guest" });

export default UserContext;
