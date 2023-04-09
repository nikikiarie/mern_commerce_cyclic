import { loginFailure, loginStart, loginSucess, setError } from "./userSlice";
// import { publicRequest } from "../makeRequest";
import axios from  'axios';

import {
  addProductSuccess,
  addProuctFailure,
  addProuctStart,
  deleteProductSuccess,
  deleteProuctFailure,
  deleteProuctStart,
} from "./productSlice";

export const login = async (dispatch, user, navigate, pathname) => {
  dispatch(loginStart());
  dispatch(setError());

  try {
    const res = await axios.post("/api/auth/login", user);
    console.log(res.data);

    dispatch(loginSucess(res.data));
    pathname ? navigate(pathname) : navigate("/");
  } catch (err) {
    dispatch(loginFailure(err.response.data.message));
  }
};

export const register = async (user, setLoading, setError, setData) => {
  !user?.img && setLoading(true);
  try {
    const res = await axios.post("/api/auth/register", user);
    setData(res.data);
    console.log(res.data);
    setLoading(false);
    setError(false);

    console.log(res.data);
  } catch (err) {
    setError(err?.response.data.message);
    setLoading(false);
    console.log(err);
  }
};

//admin
export const addProduct = async (dispatch, product, token) => {
  dispatch(addProuctStart());
  try {
    const res = await axios.post(`/api/products/`, product, {
      headers: { token: `Bearer ${token}` },
    });
    dispatch(addProductSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    console.log(error);
    dispatch(addProuctFailure());
  }
};

export const editUser = async (id, user, token, setData) => {
  try {
    const res = await axios.put(`/api/users/${id}`, user, {
      headers: { token: `Bearer ${token}` },
    });
    console.log(res.data);
    setData(res.data);
  } catch (error) {}
};

export const deleteProduct = async (dispatch, id, token) => {
  dispatch(deleteProuctStart());
  try {
    const res = await axios.delete(`/api/products/${id}`, {
      headers: { token: `Bearer ${token}` },
    });
    console.log(res.data);
    dispatch(deleteProductSuccess(id));
  } catch (error) {
    dispatch(deleteProuctFailure(id));
  }
};
