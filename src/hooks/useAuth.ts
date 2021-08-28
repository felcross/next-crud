import { useContext } from "react";
import AuthContent from "../contexts/AuthContent";

const useAuth = () => useContext(AuthContent)

export default useAuth

