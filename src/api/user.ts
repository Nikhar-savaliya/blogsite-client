import { AxiosResponse } from "axios";
import { api } from "./config";

/**
 *
 * @param email, password
 * @returns axios response
 */
async function loginUser(formData: {
  email: string;
  password: string;
}): Promise<AxiosResponse> {
  try {
    const response = await api.post("/users/login", formData);
    return response;
  } catch (error) {
    throw error;
  }
}

/**
 *
 * @param name, email , password
 * @returns axios response
 */
async function registerUser(formData: {
  name: string;
  email: string;
  password: string;
}): Promise<AxiosResponse> {
  const response = await api.post("/users/register", formData);
  return response;
}

export { loginUser, registerUser };
