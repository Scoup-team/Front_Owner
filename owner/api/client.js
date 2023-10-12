import axios from "axios";
import { SPRING_URL } from "./url";

const client = axios.create();
client.defaults.baseURL = `${SPRING_URL}`;
client.defaults.withCredentials = true;
client.defaults.headers.common["Content-Type"] = "application/json";
client.defaults.headers.common["cafeId"] = 1;

const token =
  "Bearer eyJ0eXBlIjoiYWNjZXNzVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2Nlc3NUb2tlbiIsInVzZXJJZCI6ODcsImlhdCI6MTY5NzA4Mjg4NCwiZXhwIjoxNjk3MDgzMDY0fQ.8WhzYuYHqnA6Ki23mdo2LnNqzxnzpOD2ar1Jt_4PxkQ";

client.defaults.headers.common["Authorization"] = token ? `${token}` : null;

export default client;
