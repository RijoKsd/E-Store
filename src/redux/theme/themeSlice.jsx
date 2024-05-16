import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
  currentTheme: localStorage.getItem("theme") || "light",
};
 

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
        console.log(state.currentTheme, "state.currentTheme")
        state.currentTheme = state.currentTheme === "light" ? "dark" : "light";
      
    },
  },
});

export default themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
