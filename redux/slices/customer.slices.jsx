import {createSlice} from '@reduxjs/toolkit';

const customerlice = createSlice ({
  name: 'customer',
  initialState: {
    customerData: {},
    token: '',
  },
  reducers: {
    getCustomerData: state => {
      state.isLoading = true;
    },
    getCustomerSuccess: (state, action) => {
      state.customerData = action.payload.data;
      state.token = action.payload.token;
    },
    getCustomerFailure: state => {
      state.isLoading = false;
    },
  },
});

export const {
  getCustomerData,
  getCustomerSuccess,
  getCustomerFailure,
} = customerlice.actions;

export default customerlice.reducer;
