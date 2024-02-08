import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react';
import WheelPicker from 'react-native-wheely'
import AsyncStorage from '@react-native-async-storage/async-storage';

const test = () => {
    const [jsonArray, setJsonArray] = React.useState([]);
  const [input1, setinput1] = React.useState('PS');
  const [input2, setinput2] = React.useState('IF');
  const [input3, setinput3] = React.useState('D');
  const [input4, setinput4] = React.useState('0.18');
  const [input5, setinput5] = React.useState('');
  const [data, setData] = React.useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [inputValues, setInputValues] = useState('');
  const [selectedInput, setSelectedInput] = useState(null);
//   useEffect(()=> {
//     getDatadfromapi()
//   },[]);

const handleInputFocus = () => {
  setSelectedInput();
};
const getData = async () => {
    const sss = await AsyncStorage.getItem('csv_file');
    setData(JSON.parse(sss));
    // console.log(JSON.parse(sss), '==here data');
    // console.log(sss, '==here data');
  };
  const getDatadfromapi = () => {
    fetch(
      'https://sheets.googleapis.com/v4/spreadsheets/1bj-pip1LO8PRWcS7ZLDCenJ28GkQ3uFbugds059K9_Q/values/sheet_dimond?valueRenderOption=FORMATTED_VALUE&key=AIzaSyBphS8vaXHgqwTHbl0jaIFudSahl2DjQHQ',
    )
      .then(res => res.json())
      .then(res => {
        console.log(res.values, '==here data');
        setData(res.values);

       AsyncStorage.setItem('csv_file', JSON.stringify(res.values));
      })
      .catch(err => {
        console.log(err, '==here data');
      });
  };
  const valide = () => {
    console.log(data, "==first5datra");
    const filtered = data.find(subArray => {
      {
        /* 
PS	IF   	D	0.18	0.22	1370	10/6/2023
PS	VVS1	D	0.18	0.22	1370	10/6/2023
PS	VVS1	L	0.23	0.29	940	10/6/2023	
PS	VVS2	L	0.23	0.29	940	10/6/2023	
PS	VS1	L	0.23	0.29	810	10/6/2023	
 */
}
return (
        // console.log(subArray[1], "==subarray")
        subArray[0] === input1 &&
        subArray[1] === "SI3" &&
        subArray[2] === input3 &&
        subArray[3] === input4
      );
    });

    console.log(input1, '======');
    console.log(input2, '======');
    console.log(input3, '======');
    console.log(input4, '======');
    console.log(filtered, '======');
    // console.log(filtered[5], '======');
  };
  return (
    <View>


    <TouchableOpacity
    //   onPress={() => getDatadfromapi()}
      onPress={() => getData()}
      style={{backgroundColor: 'yellow', height: 40, width: 60}}>
      <Text>click csv</Text>
    </TouchableOpacity>

    <TextInput
            value={inputValues}
            onChangeText={(text) => {
              // const newInputValues = [...inputValues];
              // newInputValues[index] = text;
              setInputValues(text);
            }}
            onFocus={() => handleInputFocus()}
            editable={false}
          />

    <TextInput
      onChangeText={text => setinput1(text)}
      value={input1}
      placeholder="txt1"
    />

    <TextInput
      onChangeText={text => setinput2(text)}
      value={input2}
      placeholder="txt2"
    />
    <TextInput
      style={{margin: 4, backgroundColorL: 'red'}}
      onChangeText={text => setinput3(text)}
      value={input3}
      placeholder="useless placeholder"
    />
    <TextInput
      onChangeText={text => setinput4(text)}
      value={input4}
      placeholder="useless placeholder"
    />
    <TouchableOpacity
      onPress={() => valide()}
      style={{backgroundColor: 'yellow', height: 40, width: 60}}>
      <Text>cvalideuyvy</Text>
    </TouchableOpacity>

    <View style={{flexDirection: 'row'}}>
      <WheelPicker
        style={{backgroundColor: 'red', width: 20}}
        selectedIndex={selectedIndex}
        options={['Berlin', 'London', 'Amsterdam']}
        onChange={index => setSelectedIndex(index)}
      />

      <WheelPicker
        style={{backgroundColor: 'red'}}
        selectedIndex={selectedIndex}
        options={['Berlin', 'London', 'Amsterdam']}
        onChange={index => setSelectedIndex(index)}
      />
      <WheelPicker
        style={{backgroundColor: 'red'}}
        selectedIndex={selectedIndex}
        options={['Berlin', 'London', 'Amsterdam']}
        onChange={index => setSelectedIndex(index)}
      />
    </View>
  </View>
  )
}

export default test

const styles = StyleSheet.create({})