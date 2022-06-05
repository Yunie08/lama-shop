import axios from "../utils/axiosConfig";
import setHeader from "../utils/headerConfig";

const ORDER_URL = "/order";

class OrderService {
  createOrder(data) {
    return axios.post(ORDER_URL, data, setHeader());
  }
}

export default new OrderService();
