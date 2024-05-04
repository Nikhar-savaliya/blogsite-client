import { UserDataType } from "@/contexts/UserContext";

function storeInSession(userData: UserDataType) {
  localStorage.setItem("userData", JSON.stringify(userData));
}

function getUserDataFromSession(): UserDataType {
  const userDataString = localStorage.getItem("userData");
  return userDataString ? JSON.parse(userDataString) : null;
}

function clearUserDataFromSession() {
  localStorage.removeItem("userData");
}

function userLogout() {
  localStorage.clear();
}

export {
  getUserDataFromSession,
  clearUserDataFromSession,
  storeInSession,
  userLogout,
};
