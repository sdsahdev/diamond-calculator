import {createSlice} from '@reduxjs/toolkit';

const CurrentdataSlice = createSlice({
  name: 'Current',
  initialState: {
    id: 0,
      shap: 0,
      colour: 0,
      clarity: 0,
      percentage: 0,
      lessPercentage: 0,
      finalPrice: 0,
      carat: 0,
      rapePrice: 0,
      pricePercarate: 0,
      total: 0,
      activeInput: 1,
      recutSton:{},
      editable: false,
      checked:false
  },
  reducers: {
    setCurrentData: (state, action) => {
        return { ...state, ...action.payload };
      },
  },
});
export const { setCurrentData } = CurrentdataSlice.actions;

export default CurrentdataSlice.reducer;
