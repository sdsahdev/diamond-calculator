import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import WheelPicker from 'react-native-wheely';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyComponent = () => {
  // weel selected items
  const [selectShap, setselectShap] = useState(0);
  const [selectD, setselectD] = useState(0);
  const [selectparoty, setselectparoty] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lessPr, setLessPr] = useState(0);

  const [data, setData] = React.useState([]);

  const [input1Text, setInput1Text] = useState('');
  const [input2Text, setInput2Text] = useState('');
  const [input3Text, setInput3Text] = useState('');
  const [input4Text, setInput4Text] = useState('');
  const [activeInput, setActiveInput] = useState(1);

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
    getData();
  }, []);

  useEffect(() => {
    valide();
  }, [input1Text,selectShap , selectD,selectparoty,selectedIndex]);

  useEffect(() => {
    pricefunction();
  }, [selectedIndex, input2Text]);
useEffect(()=> {
priceCtEdit()
},[input3Text])
const priceCtEdit = () =>{
 

  const price = input4Text / input1Text;
// console.log(price);
//     setInput4Text(price)
    // ct-price, total price, discount
}
  const pricefunction = () => {
    const percentage =
      parseFloat(fourthweeloption[selectedIndex].replace('%', '')) / 100;


      // ct-price  , total price , discount
// 1) edit ct-price       => dis , () totale price (carate * ct-price)
// 2)  edit total price   => dis , tc-price (totale price  / carate)
// 3 



    // Step 2: Ensure input2Text is a number (parse if necessary)
    const inputNumber = parseFloat(input2Text);
    console.log(inputNumber, '  ', percentage);
    // Step 3: Perform the calculation
    let result = inputNumber + inputNumber * percentage;
    result = result.toFixed(2);
    setInput3Text(result);
    let totalPrice = result * input1Text;
    totalPrice = totalPrice.toFixed(2);
    setInput4Text(totalPrice);
    console.log('price/ct => ', result, '   ', 'totalprice => ', totalPrice);
  };

  const getData = async () => {
    const sss = await AsyncStorage.getItem('csv_file');
    setData(JSON.parse(sss));
    console.log(sss, '==here data');
  };

  const clearAlldata = () => {
    setselectShap(0);
    setselectD(0);
    setselectparoty(0);
    setSelectedIndex(0);
    setLessPr(0);
  };
  const getDatadfromapi = () => {
    fetch(
      'https://sheets.googleapis.com/v4/spreadsheets/1bj-pip1LO8PRWcS7ZLDCenJ28GkQ3uFbugds059K9_Q/values/sheet_dimond?valueRenderOption=FORMATTED_VALUE&key=AIzaSyBphS8vaXHgqwTHbl0jaIFudSahl2DjQHQ',
    )
      .then(res => res.json())
      .then(res => {
        console.log(res.values, '==here data');
        AsyncStorage.setItem('csv_file', JSON.stringify(res.values));
        setData(res.values);
      })
      .catch(err => {
        console.log(err, '==here data');
      });
  };
  const valide = () => {
    // console.log(data, '==first5datra');
     const enteredValue = parseFloat(input1Text);
    const filtered = data.find(subArray => {

      return (
        subArray[0] == firstweeloption[selectShap] &&
        subArray[1] == thirdweeloption[selectparoty] &&
        subArray[2] == secondweeloption[selectD] &&
        enteredValue >= subArray[3] && 
        enteredValue <= subArray[4]
      );
    });
    console.log(filtered, '======');
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
    // console.log(firstweeloption[selectShap], '======');
    // console.log(secondweeloption[selectD], '======');
    // console.log(thirdweeloption[selectparoty], '======');
    // console.log(input1Text, '======');
    // console.log(filtered[5], '======');
    if (filtered != undefined && filtered != null) {
      setInput2Text(filtered[5]);
    }
  };

  const handleButtonPress = text => {
    if (text == 'clear') {
      if (activeInput === 1) {
        setInput1Text(input1Text.slice(0, -1));
      } else if (activeInput === 2) {
        setInput2Text(input2Text.slice(0, -1));
      } else if (activeInput === 3) {
        console.log('text =>', text);
        setInput3Text(input3Text.slice(0, -1));
      } else if (activeInput === 4) {
        setInput4Text(input4Text.slice(0, -1));
      }
    } else {
      if (activeInput === 1) {
        setInput1Text(input1Text + text);
      } else if (activeInput === 2) {
        setInput2Text(input2Text + text);
      } else if (activeInput === 3) {
        console.log('text =>', text);
        setInput3Text(input3Text + text);
      } else if (activeInput === 4) {
        setInput4Text(input4Text + text);
      }
    }
  };

  return (
    // <ScrollView style={{paddingBottom:100}}>
    <View style={{flexDirection: 'column', height: '100%', width: '100%'}}>
      <View style={{height: '50%'}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setActiveInput(1);
            }}
            style={[
              styles.valueContrainer,
              activeInput == 1 ? styles.activeInput : null,
            ]}>
            <Text style={styles.containerTitel}>carat</Text>
            <Text value={input1Text} style={styles.valueText}>
              {input1Text}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActiveInput(2);
            }}
            style={[
              styles.valueContrainer,
              activeInput == 2 ? styles.activeInput : null,
            ]}>
            <Text style={styles.containerTitel}>Rape Price/CT.</Text>
            <Text value={input3Text} style={styles.valueText}>
              {input2Text}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setActiveInput(3);
            }}
            style={[
              styles.valueContrainer,
              activeInput == 3 ? styles.activeInput : null,
            ]}>
            <Text style={styles.containerTitel}>Price/CT.</Text>
            <Text value={input3Text} style={styles.valueText}>
              {input3Text}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActiveInput(4);
            }}
            style={[
              styles.valueContrainer,
              activeInput == 4 ? styles.activeInput : null,
            ]}>
            <Text style={styles.containerTitel}>Total</Text>
            <Text style={styles.valueText}>{input4Text}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: wp(1),
            backgroundColor: '#89b3e5',
            borderRadius: wp(3),
            height: '50%',
          }}>
          <WheelPicker
            containerStyle={{width: '20%', marginHorizontal: wp(1), flex: 1}}
            selectedIndex={selectShap}
            options={firstweeloption}
            onChange={index => setselectShap(index)}
          />
          <WheelPicker
            containerStyle={{width: '20%', marginHorizontal: wp(1), flex: 1}}
            selectedIndex={selectD}
            options={secondweeloption}
            onChange={index => setselectD(index)}
          />
          <WheelPicker
            selectedIndex={selectparoty}
            containerStyle={{width: '20%', marginHorizontal: wp(1), flex: 1}}
            options={thirdweeloption}
            onChange={index => setselectparoty(index)}
          />
          <WheelPicker
            containerStyle={{width: '20%', marginHorizontal: wp(1), flex: 1}}
            selectedIndex={selectedIndex}
            options={fourthweeloption}
            onChange={index => setSelectedIndex(index)}
          />
        </View>
      </View>

      <View style={{height: '35%', flexDirection: 'row'}}>
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
          <TouchableOpacity style={styles.orangebutton}>
            <Text style={styles.brownText}>save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.brownbutton}>
            <Text style={styles.brownText}>M+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.brownbutton}>
            <Text style={styles.brownText}>Recut</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => clearAlldata()}
            style={styles.orangebutton}>
            <Text style={styles.brownText}>Clear</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1.3}}>
          <View style={{flex: 1, justifyContent: 'space-between'}}>
            <View style={styles.percetageContainer}>
              <View style={{backgroundColor: 'sky'}}>
                <Text style={{textAlign: 'center', color: '#'}}>Less</Text>
              </View>
              <WheelPicker
                style={{backgroundColor: 'red', color: '#1e7fcd'}}
                selectedIndex={lessPr}
                // containerStyle={styles.prweelcontainer}
                selectedIndicatorStyle={{
                  color: '#fff',
                  fontSize: wp(3),
                  backgroundColor: '#2083c6',
                }}
                selectedTextStyle={{color: '#fff'}}
                itemTextStyle={{color: '#000'}}
                options={percetageoption}
                onChange={index => setLessPr(index)}
              />
            </View>
            <View style={styles.finalpriceContainer}>
              <Text style={styles.finalpriceText}>Final Price</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={{backgroundColor: '#dca588', flex: 1}}></View>
        <View style={{backgroundColor: 'white', flex: 1}}>
          <TouchableOpacity
            style={{padding: 4, backgroundColor: 'yellow'}}
            onPress={() => getDatadfromapi()}>
            <Text>click for csv</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{padding: 4, backgroundColor: 'red'}}
            onPress={() => valide()}>
            <Text>click for result</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};

export default MyComponent;
const styles = StyleSheet.create({
  containerTitel: {fontWeight: 'bold', fontSize: wp(4)},
  brownText: {flex: 1, textAlignVertical: 'center', color: '#fff'},
  prweelcontainer: {
    backgroundColor: '#fff',
    margin: wp(1),
    flex: 1,
  },
  finalpriceText: {
    textAlign: 'center',
    alignSelf: 'flex-start',
    flex: 1,
    width: '100%',
  },
  finalpriceContainer: {
    height: '20%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    margin: wp(1),
    borderRadius: 4,
    borderColor: '#2083c6',
    borderWidth: 2,
  },
  percetageContainer: {
    flex: 1,
    borderRadius: 6,
    borderColor: '#1e7fcd',
    borderWidth: 2,
    margin: wp(1),
  },

  brownbutton: {
    backgroundColor: '#7f5329',
    alignItems: 'center',
    borderRadius: 4,
    margin: wp(1),
    flex: 1,
  },

  orangebutton: {
    backgroundColor: '#f2aa66',
    alignItems: 'center',
    borderRadius: 4,
    margin: wp(1),
    flex: 1,
  },
  bluebuttontext: {
    flex: 1,
    textAlignVertical: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: hp(3),
  },
  bluebuttons: {
    backgroundColor: '#2083c6',
    alignItems: 'center',
    borderRadius: 4,
    margin: wp(1),
    flex: 1,
  },
  activeInput: {borderColor: 'red'},
  valueContrainer: {
    margin: wp(2),
    borderColor: 'blue',
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: wp(3),
    padding: wp(2.5),
    flex: 1,
  },
  valueText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: wp(5),
    textAlignVertical: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
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
