import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import WheelPicker from 'react-native-wheely';
import AsyncStorage from '@react-native-async-storage/async-storage';
import manycolors from '../Utils/manycolors';
import {setReport, updateAllReport} from '../Redux/Slice/reportSlice';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {nanoid} from '@reduxjs/toolkit';
import {
  fetchDataFromApi,
  setCurrentData,
} from '../Redux/Slice/CurrentdataSlice';

const App = () => {
  // weel selected items
  const isFocused = useIsFocused();
  dispatch = useDispatch();
  const {

    shap,
    colour,
    clarity,
    percentage,
    lessPercentage,
    finalPrice,
    carat,
    rapePrice,
    pricePercarate,
    total,
    activeInput,
    recutSton,
  } = useSelector(state => state.currentData);
  const [data, setData] = React.useState([]);
  const firstweeloption = [
    'BR',
    'PS',
    'PR',
    'RAD',
    'AC',
    'EM',
    'MQ',
    'BAG',
    'HS',
    'CU',
    'TRI',
    'OV',
    'OTH',
  ];
  const secondweeloption = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];

  const thirdweeloption = [
    'IF',
    'VVS1',
    'VVS2',
    'VS1',
    'VS2',
    'SI1',
    'SI2',
    'SI3',
    'I1',
    'I2',
    'I3',
  ];
  const fourthweeloption = [
    '-99.0%',
    '-98.5%',
    '-98.0%',
    '-97.5%',
    '-97.0%',
    '-96.5%',
    '-96.0%',
    '-95.5%',
    '-95.0%',
    '-94.5%',
    '-94.0%',
    '-93.5%',
    '-93.0%',
    '-92.5%',
    '-92.0%',
    '-91.5%',
    '-91.0%',
    '-90.5%',
    '-90.0%',
    '-89.5%',
    '-89.0%',
    '-88.5%',
    '-88.0%',
    '-87.5%',
    '-87.0%',
    '-86.5%',
    '-86.0%',
    '-85.5%',
    '-85.0%',
    '-84.5%',
    '-84.0%',
    '-83.5%',
    '-83.0%',
    '-82.5%',
    '-82.0%',
    '-81.5%',
    '-81.0%',
    '-80.5%',
    '-80.0%',
    '-79.5%',
    '-79.0%',
    '-78.5%',
    '-78.0%',
    '-77.5%',
    '-77.0%',
    '-76.5%',
    '-76.0%',
    '-75.5%',
    '-75.0%',
    '-74.5%',
    '-74.0%',
    '-73.5%',
    '-73.0%',
    '-72.5%',
    '-72.0%',
    '-71.5%',
    '-71.0%',
    '-70.5%',
    '-70.0%',
    '-69.5%',
    '-69.0%',
    '-68.5%',
    '-68.0%',
    '-67.5%',
    '-67.0%',
    '-66.5%',
    '-66.0%',
    '-65.5%',
    '-65.0%',
    '-64.5%',
    '-64.0%',
    '-63.5%',
    '-63.0%',
    '-62.5%',
    '-62.0%',
    '-61.5%',
    '-61.0%',
    '-60.5%',
    '-60.0%',
    '-59.5%',
    '-59.0%',
    '-58.5%',
    '-58.0%',
    '-57.5%',
    '-57.0%',
    '-56.5%',
    '-56.0%',
    '-55.5%',
    '-55.0%',
    '-54.5%',
    '-54.0%',
    '-53.5%',
    '-53.0%',
    '-52.5%',
    '-52.0%',
    '-51.5%',
    '-51.0%',
    '-50.5%',
    '-50.0%',
    '-49.5%',
    '-49.0%',
    '-48.5%',
    '-48.0%',
    '-47.5%',
    '-47.0%',
    '-46.5%',
    '-46.0%',
    '-45.5%',
    '-45.0%',
    '-44.5%',
    '-44.0%',
    '-43.5%',
    '-43.0%',
    '-42.5%',
    '-42.0%',
    '-41.5%',
    '-41.0%',
    '-40.5%',
    '-40.0%',
    '-39.5%',
    '-39.0%',
    '-38.5%',
    '-38.0%',
    '-37.5%',
    '-37.0%',
    '-36.5%',
    '-36.0%',
    '-35.5%',
    '-35.0%',
    '-34.5%',
    '-34.0%',
    '-33.5%',
    '-33.0%',
    '-32.5%',
    '-32.0%',
    '-31.5%',
    '-31.0%',
    '-30.5%',
    '-30.0%',
    '-29.5%',
    '-29.0%',
    '-28.5%',
    '-28.0%',
    '-27.5%',
    '-27.0%',
    '-26.5%',
    '-26.0%',
    '-25.5%',
    '-25.0%',
    '-24.5%',
    '-24.0%',
    '-23.5%',
    '-23.0%',
    '-22.5%',
    '-22.0%',
    '-21.5%',
    '-21.0%',
    '-20.5%',
    '-20.0%',
    '-19.5%',
    '-19.0%',
    '-18.5%',
    '-18.0%',
    '-17.5%',
    '-17.0%',
    '-16.5%',
    '-16.0%',
    '-15.5%',
    '-15.0%',
    '-14.5%',
    '-14.0%',
    '-13.5%',
    '-13.0%',
    '-12.5%',
    '-12.0%',
    '-11.5%',
    '-11.0%',
    '-10.5%',
    '-10.0%',
    '-9.5%',
    '-9.0%',
    '-8.5%',
    '-8.0%',
    '-7.5%',
    '-7.0%',
    '-6.5%',
    '-6.0%',
    '-5.5%',
    '-5.0%',
    '-4.5%',
    '-4.0%',
    '-3.5%',
    '-3.0%',
    '-2.5%',
    '-2.0%',
    '-1.5%',
    '-1.0%',
    '-0.5%',
    '0.0%',
    '0.5%',
    '1.0%',
    '1.5%',
    '2.0%',
    '2.5%',
    '3.0%',
    '3.5%',
    '4.0%',
    '4.5%',
    '5.0%',
    '5.5%',
    '6.0%',
    '6.5%',
    '7.0%',
    '7.5%',
    '8.0%',
    '8.5%',
    '9.0%',
    '9.5%',
    '10.0%',
    '10.5%',
    '11.0%',
    '11.5%',
    '12.0%',
    '12.5%',
    '13.0%',
    '13.5%',
    '14.0%',
    '14.5%',
    '15.0%',
    '15.5%',
    '16.0%',
    '16.5%',
    '17.0%',
    '17.5%',
    '18.0%',
    '18.5%',
    '19.0%',
    '19.5%',
    '20.0%',
    '20.5%',
    '21.0%',
    '21.5%',
    '22.0%',
    '22.5%',
    '23.0%',
    '23.5%',
    '24.0%',
    '24.5%',
    '25.0%',
    '25.5%',
    '26.0%',
    '26.5%',
    '27.0%',
    '27.5%',
    '28.0%',
    '28.5%',
    '29.0%',
    '29.5%',
    '30.0%',
    '30.5%',
    '31.0%',
    '31.5%',
    '32.0%',
    '32.5%',
    '33.0%',
    '33.5%',
    '34.0%',
    '34.5%',
    '35.0%',
    '35.5%',
    '36.0%',
    '36.5%',
    '37.0%',
    '37.5%',
    '38.0%',
    '38.5%',
    '39.0%',
    '39.5%',
    '40.0%',
    '40.5%',
    '41.0%',
    '41.5%',
    '42.0%',
    '42.5%',
    '43.0%',
    '43.5%',
    '44.0%',
    '44.5%',
    '45.0%',
    '45.5%',
    '46.0%',
    '46.5%',
    '47.0%',
    '47.5%',
    '48.0%',
    '48.5%',
    '49.0%',
    '49.5%',
    '50.0%',
    '50.5%',
    '51.0%',
    '51.5%',
    '52.0%',
    '52.5%',
    '53.0%',
    '53.5%',
    '54.0%',
    '54.5%',
    '55.0%',
    '55.5%',
    '56.0%',
    '56.5%',
    '57.0%',
    '57.5%',
    '58.0%',
    '58.5%',
    '59.0%',
    '59.5%',
    '60.0%',
    '60.5%',
    '61.0%',
    '61.5%',
    '62.0%',
    '62.5%',
    '63.0%',
    '63.5%',
    '64.0%',
    '64.5%',
    '65.0%',
    '65.5%',
    '66.0%',
    '66.5%',
    '67.0%',
    '67.5%',
    '68.0%',
    '68.5%',
    '69.0%',
    '69.5%',
    '70.0%',
    '70.5%',
    '71.0%',
    '71.5%',
    '72.0%',
    '72.5%',
    '73.0%',
    '73.5%',
    '74.0%',
    '74.5%',
    '75.0%',
    '75.5%',
    '76.0%',
    '76.5%',
    '77.0%',
    '77.5%',
    '78.0%',
    '78.5%',
    '79.0%',
    '79.5%',
    '80.0%',
    '80.5%',
    '81.0%',
    '81.5%',
    '82.0%',
    '82.5%',
    '83.0%',
    '83.5%',
    '84.0%',
    '84.5%',
    '85.0%',
    '85.5%',
    '86.0%',
    '86.5%',
    '87.0%',
    '87.5%',
    '88.0%',
    '88.5%',
    '89.0%',
    '89.5%',
    '90.0%',
    '90.5%',
  ];
  const percetageoption = [
    '-5%',
    '-4%',
    '-3%',
    '-2%',
    '-1%',
    '0%',
    '1%',
    '2%',
    '3%',
    '4%',
    '5%',
  ];

  useEffect(() => {
    console.log(shap, '===shape');
    getitems();
  }, []);

  useEffect(()=> {

    if(isFocused){
      console.log(data, "====dataaaaaaaaa===");
    }
  },[isFocused])

  const updateData = (key, value) => {
    dispatch(setCurrentData({[key]: value}));
  };

  const getitems = async () => {
    const data = await AsyncStorage.getItem('Reportdata');
    dispatch(updateAllReport(JSON.parse(data)));
  };

  useEffect(() => {
    getDatadfromapi()

  }, []);
  const getDatadfromapi = () => {
    fetch(
      'https://sheets.googleapis.com/v4/spreadsheets/1bj-pip1LO8PRWcS7ZLDCenJ28GkQ3uFbugds059K9_Q/values/sheet_dimond?valueRenderOption=FORMATTED_VALUE&key=AIzaSyBphS8vaXHgqwTHbl0jaIFudSahl2DjQHQ',
    )
      .then(res => res.json())
      .then(res => {
        AsyncStorage.setItem('csv_file', JSON.stringify(res.values));
        setData(res.values);
      })
      .catch(async err => {
        const sss = await AsyncStorage.getItem('csv_file');
        setData(JSON.parse(sss));
        console.log(err, '==here data');
      });
  };

  useEffect(() => {
    valide();
  }, [carat, shap, colour, clarity, percentage]);

  useEffect(() => {
    pricefunction();
  }, [percentage, rapePrice]);

  useEffect(() => {
    priceCtEdit();
  }, [pricePercarate]);

  const priceCtEdit = () => {
    if (activeInput == 3) {
      let TotalPrice = pricePercarate * carat;
      TotalPrice = TotalPrice.toFixed(2);
      // setInput4Text(TotalPrice)
      updateData('total', TotalPrice);
    }
  };

  useEffect(() => {
    totalPriceEdit();
  }, [total]);

  useEffect(() => {
    handlefinalprice();
  }, [lessPercentage]);

  const totalPriceEdit = () => {
    if (activeInput == 4) {
      let tcPrice = total / carat;
      tcPrice = tcPrice.toFixed(2);
      // setInput3Text(tcPrice)
      updateData('pricePercarate', tcPrice);

      // DISCOUNT
      let first = Number(tcPrice) / Number(rapePrice);
      let second = Number(first) - 1;
      let three = (second * 100).toFixed(2);
    }

    handlefinalprice();
  };
  const handlefinalprice = () => {
    let adjustedValue = calculateAdjustedValue(
      total,
      percetageoption[lessPercentage],
    );
    // setfinal_price(adjustedValue)
    updateData('finalPrice', adjustedValue);
  };

  function calculateAdjustedValue(value, percentageStr) {
    const percentage = parseFloat(percentageStr.replace('%', ''));
    if (!isNaN(percentage)) {
      const percentageValue = value * (percentage / 100);
      const result_final = Number(value) + Number(percentageValue);
      return result_final?.toFixed(2);
    } else {
      console.log('Invalid percentage value:', percentageStr);
    }
  }

  const pricefunction = () => {
    const percentagess =
      parseFloat(fourthweeloption[percentage].replace('%', '')) / 100;

    // ct-price  , total price , discount
    // 1) edit ct-price       => dis , () totale price (carate * ct-price)
    // 2)  edit total price   => dis , tc-price (totale price  / carate)
    // 3

    // Step 2: Ensure rapePrice is a number (parse if necessary)
    const inputNumber = parseFloat(rapePrice);

    // Step 3: Perform the calculation
    let result = inputNumber + inputNumber * percentagess;
    result = result.toFixed(2);
    // setInput3Text(result);
    updateData('pricePercarate', result);
    let totalPrice = result * carat;
    totalPrice = totalPrice.toFixed(2);
    // setInput4Text(totalPrice);
    updateData("total",totalPrice);

  };

  const clearAlldata = () => {
    updateData('shap', 0)
    updateData('colour', 0)
    updateData('clarity', 0)
    updateData('percentage', 134)
    updateData('lessPercentage', 0)
    updateData('finalPrice', 0)
    updateData('carat', 0)
    updateData('rapePrice', 0)
    updateData('pricePercarate', 0)
    updateData('total', 0)
    updateData('activeInput', 0)


    // setselectShap(0);
    // setselectD(0);
    // setclarity(0);
    // setSelectedIndex(0);
    // setLessPr(0);
    // setInput1Text(0);
    // setInput1Text(0);
    // setInput2Text(0);
    // setInput3Text(0);
    // setInput4Text(0);
    // setActiveInput(1);

  };

  

  const valide = () => {
    const enteredValue = parseFloat(carat);

    console.log(enteredValue, '========flot');

    console.log(shap, ' ', clarity, ' ', colour, ' ', enteredValue);

    const filtered = data?.find(subArray => {
      return (
        subArray[0] == firstweeloption[shap] &&
        subArray[1] == thirdweeloption[clarity] &&
        subArray[2] == secondweeloption[colour] &&
        enteredValue >= subArray[3] &&
        enteredValue <= subArray[4]
      );
    });

    {
      /* 
      PS	IF   	D	0.18	0.22	1370	10/6/2023
      PS	VVS1	D	0.18	0.22	1370	10/6/2023
      PS	VVS1	L	0.23	0.29	940	10/6/2023	
      PS	VVS2	L	0.23	0.29	940	10/6/2023	
      PS	VS1	L	0.23	0.29	810	10/6/2023	        
      */
    }
    // console.log(subArray[1]);
    // console.log(firstweeloption[selectShap], '==');
    // console.log(secondweeloption[colour], '==');
    // console.log(thirdweeloption[clarity], '==');
    // console.log(carat, '==');
    // console.log(filtered[5], '==');
    if (filtered != undefined && filtered != null) {
      // setInput2Text(filtered[5]);
      updateData('rapePrice', filtered[5]);
    }
  };

  const handleButtonPress = text => {
    if (text == 'clear') {
      if (activeInput == 1) {
        // setInput1Text(carat.slice(0, -1));
        updateData('carat', carat.slice(0, -1));
      } else if (activeInput == 2) {
        // setInput2Text(rapePrice.slice(0, -1));
        updateData('rapePrice', rapePrice.slice(0, -1));
      } else if (activeInput == 3) {
        // setInput3Text(pricePercarate.slice(0, -1));
        updateData('pricePercarate', pricePercarate.slice(0, -1));
      } else if (activeInput == 4) {
        // setInput4Text(total.slice(0, -1));
        updateData('total', total.slice(0, -1));
      }
    } else {
      if (activeInput == 1) {
        // setInput1Text(carat + text);
        updateData('carat', carat + text);
      } else if (activeInput == 2) {
        // setInput2Text(rapePrice + text);
        updateData('rapePrice', rapePrice + text);
      } else if (activeInput == 3) {
        // setInput3Text(pricePercarate + text);
        updateData('pricePercarate', pricePercarate + text);
      } else if (activeInput == 4) {
        // setInput4Text(total + text);
        updateData('total', total + text);
      }
    }
  };

  const handleSave = () => {
    const StonData = {
      id: nanoid(),
      carat: carat,
      rapePrice: rapePrice,
      caratePrice: pricePercarate,
      total: total,
      finalPrice: finalPrice,
      shape: firstweeloption[shap],
      colour: secondweeloption[colour],
      clarity: thirdweeloption[clarity],
      percetage: fourthweeloption[percentage],
      lessdiscount: percetageoption[lessPercentage],
    };
    console.log(StonData, '=====ston data');
    dispatch(setReport(StonData));
  };
  const handlerecut = () => {
    const dataForRecut = {
      recutcarat: carat,
      recutrapePrice: rapePrice,
      recutcaratePrice: pricePercarate,
      recuttotal: total,
      recutfinalPrice: finalPrice,
    };

    updateData('recutSton', dataForRecut);
    // setsaveArecut()
  };

  return (
    <View style={{flexDirection: 'column', height: '100%', width: '100%'}}>
      <View
        style={{height: '50%', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              // setActiveInput(1);
              updateData('activeInput', 1);
            }}
            style={[
              styles.valueContrainer,
              activeInput == 1 ? styles.activeInput : null,
            ]}>
            <Text style={styles.containerTitel}>carat</Text>
            <Text value={carat} style={styles.valueText}>
              {carat}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={true}
            onPress={() => {
              // setActiveInput(2);
              updateData('activeInput', 2);
            }}
            style={[
              styles.valueContrainer,
              activeInput == 2 ? styles.activeInput : null,
            ]}>
            <Text style={styles.containerTitel}>Rape Price/CT.</Text>
            <Text value={pricePercarate} style={styles.valueText}>
              {rapePrice}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              updateData('activeInput', 3);
              // setActiveInput(3);
            }}
            style={[
              styles.valueContrainer,
              activeInput == 3 ? styles.activeInput : null,
            ]}>
            <Text style={styles.containerTitel}>Price/CT.</Text>
            <Text value={pricePercarate} style={styles.valueText}>
              {pricePercarate}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              updateData('activeInput', 4);

              // setActiveInput(4);
            }}
            style={[
              styles.valueContrainer,
              activeInput == 4 ? styles.activeInput : null,
            ]}>
            <Text style={styles.containerTitel}>Total</Text>
            <Text style={styles.valueText}>{total}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: wp(1),
            backgroundColor: manycolors.blue,
            borderRadius: wp(3),
            height: '50%',
          }}>
          <WheelPicker
            containerStyle={{width: '20%', marginHorizontal: wp(1), flex: 1}}
            selectedIndex={shap}
            options={firstweeloption}
            onChange={index => updateData('shap', index)}
            // onChange={index => setselectShap(index)}
          />
          <WheelPicker
            containerProps
            containerStyle={{width: '20%', marginHorizontal: wp(1), flex: 1}}
            selectedIndex={colour}
            options={secondweeloption}
            onChange={index => updateData('colour', index)}
            // onChange={index => setselectD(index)}
          />
          <WheelPicker
            selectedIndex={clarity}
            itemStyle={{color: manycolors.white}}
            // itemTextStyle={{ color: manycolors.white }}
            selectedIndicatorStyle={{color: manycolors.black}}
            containerStyle={{
              width: '20%',
              marginHorizontal: wp(1),
              flex: 1,
              color: manycolors.white,
            }}
            options={thirdweeloption}
            // onChange={index => setselectparoty(index)}
            onChange={index => updateData('clarity', index)}
          />
          <WheelPicker
            containerStyle={{width: '20%', marginHorizontal: wp(1), flex: 1}}
            selectedIndex={percentage}
            options={fourthweeloption}
            // onChange={index => setSelectedIndex(index)}
            onChange={index => updateData('percentage', index)}
          />
        </View>
      </View>

      <View style={{height: '40%', flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => handleButtonPress('7')}
            style={styles.bluebuttons}>
            <Text style={styles.bluebuttontext}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('4')}
            style={styles.bluebuttons}>
            <Text style={styles.bluebuttontext}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('1')}
            style={styles.bluebuttons}>
            <Text style={styles.bluebuttontext}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('0')}
            style={styles.bluebuttons}>
            <Text style={styles.bluebuttontext}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => handleButtonPress('8')}
            style={styles.bluebuttons}>
            <Text style={styles.bluebuttontext}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('5')}
            style={styles.bluebuttons}>
            <Text style={styles.bluebuttontext}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('2')}
            style={styles.bluebuttons}>
            <Text style={styles.bluebuttontext}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('.')}
            style={styles.bluebuttons}>
            <Text style={styles.bluebuttontext}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => handleButtonPress('9')}
            style={styles.bluebuttons}>
            <Text style={styles.bluebuttontext}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('6')}
            style={styles.bluebuttons}>
            <Text style={styles.bluebuttontext}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('3')}
            style={styles.bluebuttons}>
            <Text style={styles.bluebuttontext}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bluebuttons}
            onPress={() => handleButtonPress('clear')}>
            <Text style={styles.bluebuttontext}> {'<-'} </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1.3}}>
          <TouchableOpacity onPress={handleSave} style={styles.orangebutton}>
            <Text style={styles.brownText}>save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.brownbutton}>
            <Text style={styles.brownText}>M+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlerecut()}
            style={styles.brownbutton}>
            <Text style={styles.brownText}>Recut</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => clearAlldata()}
            style={styles.orangebutton}>
            <Text style={styles.brownText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1.3}}>
          <WheelPicker
            selectedIndex={lessPercentage}
            containerStyle={styles.prweelcontainer}
            selectedIndicatorStyle={{
              backgroundColor: manycolors.blue,
              marginTop: hp(1),
            }}
            selectedTextStyle={{color: manycolors.white}}
            itemTextStyle={{color: manycolors.black}}
            options={percetageoption}
            // onChange={index => setLessPr(index)} />
            onChange={index => updateData('lessPercentage', index)}
          />

          <View
            style={{
              backgroundColor: 'sky',
              backgroundColor: manycolors.blue,
              borderRadius: 4,
              margin: wp(1),
              position: 'absolute',
              padding: 4,
              flex: 1,
              width: '90%',
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: manycolors.white,
                fontWeight: 'bold',
              }}>
              Less
            </Text>
          </View>

          <View style={styles.finalpriceContainer}>
            <Text style={styles.finalpriceText}>Final Price</Text>
            <Text style={styles.finalprice}>{finalPrice}</Text>
          </View>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: manycolors.white}}>
        <View
          style={{
            flex: 1,
            margin: wp(1),
            borderRadius: 4,
            flexDirection: 'row',
          }}>
          <View style={styles.recutbox}>
            <Text style={styles.recutTextTitel}>Total A</Text>
            <Text style={styles.recutText}>{recutSton?.recuttotal}</Text>
          </View>
          <View style={styles.recutbox}>
            <Text style={styles.recutTextTitel}>Total B</Text>
            <Text style={styles.recutText}>{total}</Text>
          </View>
          <View style={styles.recutbox}>
            <Text style={styles.recutTextTitel}>Diff</Text>
            <Text style={styles.recutText}>
              {(Number(total) - Number(recutSton?.recuttotal)).toFixed(2)}
            </Text>
          </View>
          <View style={styles.recutbox}>
            <Text style={styles.recutTextTitel}>Cost</Text>
            <Text style={styles.recutText}>Total A</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  recutbox: {
    flexDirection: 'column',
    width: '25%',
    backgroundColor: manycolors.blue,
    margin: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recutText: {color: manycolors.white, fontWeight: 'bold'},
  recutTextTitel: {color: manycolors.white},
  containerTitel: {fontWeight: 'bold', fontSize: wp(4)},
  brownText: {flex: 1, textAlignVertical: 'center', color: manycolors.white},
  prweelcontainer: {
    backgroundColor: manycolors.white,
    margin: wp(1),
    borderRadius: 6,
    borderColor: manycolors.blue,
    borderWidth: 2,
    height: hp(26),
  },
  finalpriceText: {
    textAlign: 'center',
    alignSelf: 'flex-start',
    flex: 1,
    width: '100%',
    fontSize: wp(3.5),
  },
  finalprice: {
    textAlign: 'center',
    alignSelf: 'flex-start',
    flex: 1,
    width: '100%',
    color: 'black',
    fontWeight: 'bold',
  },
  finalpriceContainer: {
    height: '20%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    margin: wp(1),
    borderRadius: 4,
    borderColor: manycolors.blue,
    borderWidth: 2,
  },
  percetageContainer: {
    flex: 1,
    borderRadius: 6,
    borderColor: manycolors.blue,
    borderWidth: 2,
    margin: wp(1),
  },

  brownbutton: {
    backgroundColor: manycolors.brown,
    alignItems: 'center',
    borderRadius: 4,
    margin: wp(1),
    flex: 1,
  },

  orangebutton: {
    backgroundColor: manycolors.liteorange,
    alignItems: 'center',
    borderRadius: 4,
    margin: wp(1),
    flex: 1,
  },
  bluebuttontext: {
    flex: 1,
    textAlignVertical: 'center',
    color: manycolors.white,
    fontWeight: 'bold',
    fontSize: hp(3),
  },
  bluebuttons: {
    backgroundColor: manycolors.blue,
    alignItems: 'center',
    borderRadius: 4,
    margin: wp(1),
    flex: 1,
  },
  activeInput: {borderColor: 'red'},
  valueContrainer: {
    margin: wp(2),
    borderColor: manycolors.blue,
    borderWidth: 2,
    backgroundColor: manycolors.white,
    borderRadius: wp(3),
    padding: wp(2.5),
    flex: 1,
  },
  valueText: {
    fontWeight: 'bold',
    color: manycolors.black,
    fontSize: wp(5),
    textAlignVertical: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: manycolors.gray,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
