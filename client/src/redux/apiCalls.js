import { loginFailure, loginStart, loginSucess } from "./userSlice";
import { publicRequest } from "../makeRequest";
import axios from "axios";


export const login = async (dispatch, user,navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/api/auth/login", user);
    console.log(res.data);
    dispatch(loginSucess(res.data));
    navigate('/')
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const register = async (user) => {
  try {

  const res = await axios.post('/api/auth/register',user)
  console.log(res.data)
  } catch {}
};
