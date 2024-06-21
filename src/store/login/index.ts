import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

import { createSlice } from "@reduxjs/toolkit";
interface LoginState {
  token: string;
}

// 使用该类型定义初始 state
const initialState: LoginState = {
  token: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    storageLogin: (state, action: PayloadAction<LoginState>) => {
      console.log("storageLogin", action);
      return { ...state, token: action.payload.token };
    },
  },
});

// 每个 case reducer 函数会生成对应的 Action creators
export const { storageLogin } = loginSlice.actions;
// 选择器等其他代码可以使用导入的 `RootState` 类型
export const selectLogin = (state: RootState) => state.login.token;

export default loginSlice.reducer;
