import axios from "../utils/axiosConfig";
import setHeader from "../utils/headerConfig";

const PRODUCT_URL = "products/";

class ProductService {
  getAllProducts() {
    return axios.get(PRODUCT_URL);
  }

  getProduct(productId) {
    return axios.get(`${PRODUCT_URL}/${productId}`);
  }
}

export default new ProductService();
