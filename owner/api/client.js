import axios from "axios";
import { SPRING_URL } from "./url";

const client = axios.create();
client.defaults.baseURL = `${SPRING_URL}`;
client.defaults.withCredentials = true;
client.defaults.headers.common["Content-Type"] = "application/json";
// client.defaults.headers.common["cafeId"] = 1;

const token =
  "eyJ0eXBlIjoiYWNjZXNzVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3NUb2tlbiIsInVzZXJJZCI6ODcsImlhdCI6MTY5NzY5MTM4NCwiZXhwIjoxNjk3NjkxNTY0fQ.vBVhf58JTopfxdqXLOSVktYTM64N7m3WcKU197jjXW4";

client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

export default client;
