import { loginFailure, loginStart, loginSucess, setError } from "./userSlice";
import { publicRequest } from "../makeRequest";
import axios from "axios";

export const login = async (dispatch, user, navigate) => {
  dispatch(loginStart());
  dispatch(setError());

  try {
    const res = await axios.post("/api/auth/login", user);
    console.log(res.data);
    dispatch(loginSucess(res.data));
    navigate("/");
  } catch (err) {
    dispatch(loginFailure(err.response.data.message));
  }
};

export const register = async (user, setLoading, setError, setData) => {
  !user?.img && setLoading(true);
  try {
    const res = await axios.post("/api/auth/register", user);
    setData(res.data);
    setLoading(false);
    setError(false);

    console.log(res.data);
  } catch (err) {
    setError(err?.response.data.message);
    setLoading(false);

  }
};
