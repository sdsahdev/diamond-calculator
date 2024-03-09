import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const reportSlice = createSlice({
    name: 'report',
    initialState: {
        data : []
    },
    reducers: {
        setReport: (state, action) => {
            state.data = [...state.data, action.payload];
            AsyncStorage.setItem('Reportdata', JSON.stringify(state.data));
        },
        updateAllReport: (state, action) => {
            if (action.payload) {
                state.data = [];
                state.data = action.payload;
            }
        },
          deleteReportyById: (state, action) => {
              console.log(state.data, "=====data");
          state.data = state.data.filter(
            i => i.id !== action.payload,
          );
          console.log(state.data, "=====data");
          AsyncStorage.setItem('Reportdata', JSON.stringify(state.data));
        },
    }
})
export const {setReport, updateAllReport, deleteReportyById} = reportSlice.actions;
export default reportSlice.reducer;