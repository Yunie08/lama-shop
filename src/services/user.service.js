import axios from "../utils/axiosConfig";

const AUTH_URL = "/auth";

class UserService {
  loginUser(data) {
    return axios.post(AUTH_URL + "/login", data);
  }
}

export default new UserService();
