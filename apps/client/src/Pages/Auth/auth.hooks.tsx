/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, register, reset } from "../../features/Auth/authSlice";
import { ICreateUserData, ILoginUserData } from "../../types/user.type";

function useAuth() {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const { user, isSuccess, message, isError, isOrdering } = useSelector(
    (state: any) => state.auth
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (isError) {
      <Alert severity="error">{message}</Alert>;
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isSuccess, message, isError, navigate, dispatch]);

  const onCreateSubmit = (e: any) => {
    e.preventDefault();

    const userData: ICreateUserData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    dispatch(register(userData));
    navigate("/login");
  };

  const onLoginSubmit = (e: any) => {
    e.preventDefault();

    const userData: ILoginUserData = {
      email: formData.email,
      password: formData.password,
    };

    dispatch(login(userData));
    if (isOrdering) {
      navigate("/order");
    } else {
      navigate("/");
    }
  };

  return { navigate, onCreateSubmit, formData, onChange, onLoginSubmit };
}

export default useAuth;
