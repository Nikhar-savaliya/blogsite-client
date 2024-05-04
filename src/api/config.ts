import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

async function testAPI() {
  console.log(import.meta.env.BACKEND_URL);
  let response = await api.get("");
  console.log(response);
}

export { testAPI };
