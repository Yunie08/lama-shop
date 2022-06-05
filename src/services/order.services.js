import axios from "../utils/axiosConfig";

const ORDER_URL = "/order";

class OrderService {
  createOrder(data) {
    return axios.post(ORDER_URL, data);
  }
}

export default new OrderService();
