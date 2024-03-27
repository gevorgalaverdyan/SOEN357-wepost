import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../services/auth.service";
import { ICreateUserData, ILoginUserData } from "../../types/user.type";
import { IAuthData } from "../../types/auth.type";

//const user = JSON.parse(localStorage.getItem('user'));
const userJSON = localStorage.getItem("user");
const user = userJSON !== null ? JSON.parse(userJSON) : "";

export interface IAuthState {
  user: IAuthData | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
  isOrdering: boolean;
}

const initialState: IAuthState = {
  user: user,
  isError: false,
  isSuccess: false,
  isOrdering: false,
  isLoading: false,
  message: "",
};

//register
export const register = createAsyncThunk(
  "auth/register",
  async (user: ICreateUserData, thunkAPI: any) => {
    try {
      return await authService.create(user);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (user: ILoginUserData, thunkAPI: any) => {
    try {
      const res = await authService.get(user);

      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }

      return res.data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
    setIsOrder: (state, action) => {
      state.isOrdering = action.payload;
    },
    logout: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message =
          typeof action.payload === "string" ? action.payload : "";
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message =
          typeof action.payload === "string" ? action.payload : "";
        state.user = null;
      });
  },
});

export const { reset, setIsOrder, logout } = authSlice.actions;
export default authSlice.reducer;
