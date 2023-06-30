import Axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const instance = Axios.create({
  baseURL: 'https://localhost:8000/api/',
  timeout: 10000,
});

// Obtenez le token à partir du contexte
const { token } = useContext(AuthContext);

// Ajoutez le token à l'en-tête Axios
instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
instance.defaults.headers.common['Content-Type'] = 'application/json';

export default instance;
