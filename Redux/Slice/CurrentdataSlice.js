import {createSlice} from '@reduxjs/toolkit';

const CurrentdataSlice = createSlice({
  name: 'Current',
  initialState: {
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
      recutSton:{}
  },
  reducers: {
    setCurrentData: (state, action) => {
        return { ...state, ...action.payload };
      },
  },
});
export const { setCurrentData } = CurrentdataSlice.actions;

export default CurrentdataSlice.reducer;
/*

  const [selectShap, setselectShap] = useState(0);
  const [selectD, setselectD] = useState(0);
  const [selectparoty, setselectparoty] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(134);
  const [lessPr, setLessPr] = useState(0);
  const [final_price, setfinal_price] = useState(0);

  const [data, setData] = React.useState([]);

  const [input1Text, setInput1Text] = useState(0);
  const [input2Text, setInput2Text] = useState(0);
  const [input3Text, setInput3Text] = useState(0);
  const [input4Text, setInput4Text] = useState(0);
  const [activeInput, setActiveInput] = useState(1);
`
  const [saveArecut, setsaveArecut] = useState({});

*/
