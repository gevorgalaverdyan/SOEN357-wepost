/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, register, reset } from "../../features/Auth/authSlice";
import { ICreateUserData, ILoginUserData } from "../../types/user.type";
import React from "react";

function useAuth() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
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

  const onCreateSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const userData: ICreateUserData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    await dispatch(register(userData));
    setIsLoading(false);
    navigate("/login");
  };

  const onLoginSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const userData: ILoginUserData = {
      email: formData.email,
      password: formData.password,
    };

    await dispatch(login(userData));
    setIsLoading(false);
    if (isOrdering) {
      navigate("/order");
    } else {
      navigate("/");
    }
  };

  return {
    navigate,
    onCreateSubmit,
    formData,
    onChange,
    onLoginSubmit,
    isLoading,
  };
}

export default useAuth;
