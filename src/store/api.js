import {API_BASE} from '../config/env'
import axios from "axios";

const api = axios.create({
  baseURL: API_BASE,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  api
};