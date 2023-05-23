import { createSlice } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/config/firebase";
const userSlice = createSlice({
  name: "user",
  initialState: {
    dataForm: [],
    userData: [],
    loginUser: {}
  },
  reducers: {
    addUser(state, action) {
      state.dataForm.push(action.payload);
    },
    deleteUser(state, action) {
      const id = action.payload;
      state.dataForm = state.dataForm.filter((item) => item.id !== id)
    },
    editUser(state, action) {
      const id = action.payload.id;
      state.dataForm = state.dataForm.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            ...action.payload
          };
        } else {
          return item;
        }
      });
    },
    loginUser(state, action) {
      state.loginUser = action.payload

    }, logoutUser(state) {
      state.loginUser = {}

    },
    signUpUser(state, action) {
      state.userData.push(action.payload)

      state.loginUser = action.payload
    },
  },
});

export const { addUser, deleteUser, editUser, loginUser, signUpUser, logoutUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
