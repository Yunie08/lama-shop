import { loginStart, loginFailure, loginSuccess } from "./userSlice";

// Services
import userService from "../services/user.service";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await userService.loginUser(user);
    dispatch(loginSuccess(res.data.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
