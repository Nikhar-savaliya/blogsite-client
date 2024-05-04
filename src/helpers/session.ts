import { UserDataType } from "@/contexts/UserContext";

function storeInSession(userData: UserDataType) {
  localStorage.setItem("userData", JSON.stringify(userData));
}

function getUserDataFromSession(): UserDataType {
  const userDataString = localStorage.getItem("userData");
  return userDataString ? JSON.parse(userDataString) : null;
}

function clearUserDataFromSession() {
  const userDataFormat = {
    accessToken: "",
    fullname: "",
    username: "",
    profileImg: "",
  };
  localStorage.setItem("userData", JSON.stringify(userDataFormat));
}

export { getUserDataFromSession, clearUserDataFromSession, storeInSession };
