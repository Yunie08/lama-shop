import axios from "../utils/axiosConfig";
import setHeader from "../utils/headerConfig";

const PAYMENT_URL = "/checkout/payment";

class PaymentService {
  sendPaymentReq(data) {
    return axios.post(PAYMENT_URL, data);
  }
}

export default new PaymentService();
