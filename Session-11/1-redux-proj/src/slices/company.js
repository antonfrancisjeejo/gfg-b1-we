import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companies: [],
};

const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    addCompany: (state, action) => {
      let newData = [...state.companies, action.payload];
      localStorage.setItem("companies", JSON.stringify(newData));
      state.companies = newData;
    },
    addUserToCompany: (state, action) => {
      const newData = state.companies.map((company) => {
        if (company.id === action.payload.companyId) {
          return {
            ...company,
            users: [...company.users, action.payload.userId],
          };
        }
        return company;
      });
      localStorage.setItem("companies", JSON.stringify(newData));

      state.companies = [...newData];
    },
    deleteCompany: (state, action) => {
      const newCompanies = state.companies.filter((company) => {
        return company.id !== action.payload;
      });
      localStorage.setItem("companies", JSON.stringify(newCompanies));

      state.companies = [...newCompanies];
    },
    setCompanies: (state, action) => {
      state.companies = [...action.payload];
    },
  },
});

export const { addCompany, addUserToCompany, deleteCompany, setCompanies } =
  companySlice.actions;

export default companySlice.reducer;
