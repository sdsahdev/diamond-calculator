import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';
import {
  readFile,
  DocumentDirectoryPath,
  ExternalDirectoryPath,
  ExternalStorageDirectoryPath,
  mainbundlepath,
} from 'react-native-fs'; // For file system operations
import DocumentPicker from 'react-native-document-picker';
import XLSx from 'xlsx';
import { Dropdown } from 'react-native-element-dropdown';
import RNFS from 'react-native-fs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import WheelPicker from 'react-native-wheely';
import { parse } from 'papaparse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

const MyComponent = () => {
  const [selectShap, setselectShap] = useState(0);
  const [selectD, setselectD] = useState(0);
  const [selectparoty, setselectparoty] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const sss = await AsyncStorage.getItem('csv_file');
    setData(sss);
    console.log(sss, '==here data');
  };
  const datass = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];
  const [jsonArray, setJsonArray] = React.useState([]);
  const [input1, setinput1] = React.useState('');
  const [input2, setinput2] = React.useState('');
  const [input3, setinput3] = React.useState('');
  const [input4, setinput4] = React.useState();
  const [input5, setinput5] = React.useState('');
  const [data, setData] = React.useState([]);

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to storage to save images.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage permission granted');
        pickCSVFile();
        // papa()
      } else {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const pickCSVFile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      readFile(result[0].uri, 'ascii').then(async res => {
        const wb = XLSx.read(res, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSx.utils.sheet_to_json(ws, { header: 1 });
        // console.log(data, '=====dall data');
        await AsyncStorage.setItem('csv_file', JSON.stringify(data));
        const sss = await AsyncStorage.getItem('csv_file');
        console.log(JSON.parse(sss), '=====dall new');
        setData(sss);
        var tempo = [];
      });
    } catch (err) {
      console.error('Error picking CSV file:', err);
    }
  };

  const localfile = async () => {
    // const filePath = DocumentDirectoryPath + '/SampleCSVFile_2kb.csv';
    // console.log(ExternalDirectoryPath);
    // console.log(JSON.stringify(RNFS.mainBundlePath));
    // console.log(ExternalStorageDirectoryPath);
    await readFile(DocumentDirectoryPath + '/SampleCSVFile_2kb.csv', 'utf8')
      .then(csvData => {
        // Now you have the CSV data in the `csvData` variable.
        console.log(csvData);
      })
      .catch(error => {
        console.error(error);
      });

    // const parsedData = parse(csvData, { header: true });

    // // Access the data as an array of objects
    // const csvArray = parsedData.data;

    // // Access the header row if present
    // const headers = parsedData.meta.fields;
  };
  const valide = () => {
    const filtered = data.filter(subArray => {
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
        subArray[0] === input1.toUpperCase() &&
        subArray[1] === input2.toUpperCase() &&
        subArray[2] === input3.toUpperCase() &&
        subArray[3] === parseFloat(input4)
      );
    });

    console.log(input1, '======');
    console.log(input2, '======');
    console.log(input3, '======');
    console.log(input4, '======');
    console.log(filtered[0][5], '======');
  };
  const [input1Text, setInput1Text] = useState('');
  const [input2Text, setInput2Text] = useState('');
  const [input3Text, setInput3Text] = useState('');
  const [input4Text, setInput4Text] = useState('');
  const [activeInput, setActiveInput] = useState(1);

  const handleButtonPress = text => {
    if (activeInput === 1) {
      setInput1Text(input1Text + text);
    } else if (activeInput === 2) {
      setInput2Text(input2Text + text);
    } else if (activeInput === 3) {
      setInput3Text(input3Text + text);
    } else if (activeInput === 4) {
      setInput4Text(input4Text + text);
    }
  };
  return (
    <View style={{ flexDirection: 'column', height: '100%', width: '100%' }}>
      <View style={{ height: '50%' }}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              margin: wp(2),
              borderColor: 'blue',
              borderWidth: 2,
              backgroundColor: '#fff',
              borderRadius: wp(3),
              padding: wp(0.5),
              flex: 1,
            }}>
            <Text>carat</Text>
            <TextInput
              onChangeText={text => setInput1Text(text)}
              onFocus={() => setActiveInput(1)}
              value={input1Text}
              style={{ fontWeight: 'bold' }}
            />
          </View>
          <View
            style={{
              margin: wp(2),
              borderColor: 'blue',
              borderWidth: 2,
              backgroundColor: '#fff',
              borderRadius: wp(3),
              padding: wp(1),
              flex: 1,
            }}>
            <Text>List</Text>
            <TextInput
              onChangeText={text => setInput2Text(text)}
              onFocus={() => setActiveInput(2)}
              value={input2Text}
              style={{ fontWeight: 'bold' }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              margin: wp(2),
              borderColor: 'blue',
              borderWidth: 2,
              backgroundColor: '#fff',
              borderRadius: wp(3),
              padding: wp(0.5),
              flex: 1,
            }}>
            <Text>Price</Text>
            <TextInput
              onChangeText={text => setInput3Text(text)}
              onFocus={() => setActiveInput(3)}
              value={input3Text}
              style={{ fontWeight: 'bold', height: hp(5) }}
            />
          </View>
          <View
            style={{
              margin: wp(2),
              borderColor: 'blue',
              borderWidth: 2,
              backgroundColor: '#fff',
              borderRadius: wp(3),
              padding: wp(1),
              flex: 1,
            }}>
            <Text>Total</Text>
            <TextInput
              onChangeText={text => setInput4Text(text)}
              onFocus={() => setActiveInput(4)}
              value={input4Text}
              style={{ height: hp(5), fontWeight: 'bold' }}
            />
          </View>
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
            containerStyle={{ width: '20%', marginHorizontal: wp(1), flex: 1 }}
            selectedIndex={selectShap}
            options={[
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
            ]}
            onChange={index => setselectShap(index)}
          />
          <WheelPicker
            containerStyle={{ width: '20%', marginHorizontal: wp(1), flex: 1 }}
            selectedIndex={selectD}
            options={['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']}
            onChange={index => setselectD(index)}
          />
          <WheelPicker
            selectedIndex={selectparoty}
            containerStyle={{ width: '20%', marginHorizontal: wp(1), flex: 1 }}
            options={[
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
            ]}
            onChange={index => setselectparoty(index)}
          />
          <WheelPicker
            containerStyle={{ width: '20%', marginHorizontal: wp(1), flex: 1 }}
            selectedIndex={selectedIndex}
            options={[
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
            ]}
            onChange={index => setSelectedIndex(index)}
          />
        </View>
      </View>

      <View style={{ height: '35%', flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => handleButtonPress('7')}
            style={{
              backgroundColor: '#2083c6',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text
              style={{
                flex: 1,
                textAlignVertical: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: hp(3),
              }}>
              7
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('4')}
            style={{
              backgroundColor: '#2083c6',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text
              style={{
                flex: 1,
                textAlignVertical: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: hp(3),
              }}>
              4
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('1')}
            style={{
              backgroundColor: '#2083c6',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text
              style={{
                flex: 1,
                textAlignVertical: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: hp(3),
              }}>
              1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('0')}
            style={{
              backgroundColor: '#2083c6',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text
              style={{
                flex: 1,
                textAlignVertical: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: hp(3),
              }}>
              0
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => handleButtonPress('8')}
            style={{
              backgroundColor: '#2083c6',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text
              style={{
                flex: 1,
                textAlignVertical: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: hp(3),
              }}>
              8
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('5')}
            style={{
              backgroundColor: '#2083c6',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text
              style={{
                flex: 1,
                textAlignVertical: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: hp(3),
              }}>
              5
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('2')}
            style={{
              backgroundColor: '#2083c6',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text
              style={{
                flex: 1,
                textAlignVertical: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: hp(3),
              }}>
              2
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('.')}
            style={{
              backgroundColor: '#2083c6',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text
              style={{
                flex: 1,
                textAlignVertical: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: hp(3),
              }}>
              .
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => handleButtonPress('9')}
            style={{
              backgroundColor: '#2083c6',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text
              style={{
                flex: 1,
                textAlignVertical: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: hp(3),
              }}>
              9
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('6')}
            style={{
              backgroundColor: '#2083c6',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text
              style={{
                flex: 1,
                textAlignVertical: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: hp(3),
              }}>
              6
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress('3')}
            style={{
              backgroundColor: '#2083c6',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text
              style={{
                flex: 1,
                textAlignVertical: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: hp(3),
              }}>
              3
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#2083c6',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text
              style={{
                flex: 1,
                textAlignVertical: 'center',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: hp(3),
              }}></Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1.3 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#f2aa66',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text style={{ flex: 1, textAlignVertical: 'center', color: '#fff' }}>
              save
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#7f5329',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text style={{ flex: 1, textAlignVertical: 'center', color: '#fff' }}>
              M+
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#7f5329',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text style={{ flex: 1, textAlignVertical: 'center', color: '#fff' }}>
              Recut
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#f49b43',
              alignItems: 'center',
              borderRadius: 4,
              margin: wp(1),
              flex: 1,
            }}>
            <Text style={{ flex: 1, textAlignVertical: 'center', color: '#fff' }}>
              Clear
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1.3 }}>
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View
              style={{
                flex: 1,
                borderRadius: 6,
                borderColor: '#1e7fcd',
                borderWidth: 2,
                margin: wp(1),
              }}>
              <WheelPicker
                style={{ backgroundColor: 'red', color: '#1e7fcd' }}
                selectedIndex={selectedIndex}
                containerStyle={{
                  backgroundColor: '#fff',
                  margin: wp(1),
                  flex: 1,
                }}
                selectedIndicatorStyle={{ color: 'blue', fontSize: wp(3) }}
                itemTextStyle={{ color: '#000' }}
                options={['-5%', '-4%', '-3%', '-2%', '-1%', '0%', '1%', '2%', '3%', '4%', '5%']}
                onChange={index => setSelectedIndex(index)}
              />
            </View>

            <View
              style={{
                height: '20%',
                justifyContent: 'flex-end',
                alignItems: 'center',
                alignSelf: 'stretch',
                backgroundColor: 'white',
                margin: wp(1),
                borderRadius: 4,
                borderColor: '#2083c6',
                borderWidth: 2,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  alignSelf: 'flex-start',
                  flex: 1,
                  width: '100%',
                }}>
                Final Price
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ backgroundColor: '#dca588', flex: 1 }}></View>
        <View style={{ backgroundColor: 'white', flex: 1 }}>
          <TouchableOpacity onPress={() => requestStoragePermission()}>
            {/* <TouchableOpacity onPress={() => localfile()}> */}
            <Text>click for csv</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // <View>

    //   <TouchableOpacity onPress={() => requestStoragePermission()} style={{ backgroundColor: 'yellow', height: 40, width: 60, }}>
    //     <Text >
    //       click csv
    //     </Text>
    //   </TouchableOpacity>

    //   <TextInput

    //     onChangeText={text => setinput1(text)}
    //     value={input1}
    //     placeholder="txt1"

    //   />

    //   <TextInput
    //     onChangeText={text => setinput2(text)}
    //     value={input2}
    //     placeholder="txt2"

    //   />
    //   <TextInput
    //     onChangeText={text => setinput3(text)}
    //     value={input3}
    //     placeholder="useless placeholder"

    //   />
    //   <TextInput
    //     onChangeText={text => setinput4(text)}
    //     value={input4}
    //     placeholder="useless placeholder"
    //   />
    //   <TouchableOpacity onPress={() => valide()} style={{ backgroundColor: 'yellow', height: 40, width: 60, }}>
    //     <Text >
    //       cvalideuyvy
    //     </Text>
    //   </TouchableOpacity>

    //   <View style={{ flexDirection: 'row' }}>

    //     <WheelPicker
    //       style={{ backgroundColor: 'red', width: 20 }}
    //       selectedIndex={selectedIndex}

    //       options={['Berlin', 'London', 'Amsterdam']}
    //       onChange={(index) => setSelectedIndex(index)}
    //     />

    //     <WheelPicker
    //       style={{ backgroundColor: 'red' }}
    //       selectedIndex={selectedIndex}
    //       options={['Berlin', 'London', 'Amsterdam']}
    //       onChange={(index) => setSelectedIndex(index)}
    //     />
    // <WheelPicker
    //   style={{ backgroundColor: 'red' }}
    //   selectedIndex={selectedIndex}
    //   options={['Berlin', 'London', 'Amsterdam']}
    //   onChange={(index) => setSelectedIndex(index)}
    // />
    //   </View>

    // </View>
  );
};

export default MyComponent;
const styles = StyleSheet.create({
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

// const papa = async () => {
//   var mainBundlePath = RNFS.MainBundlePath;
//   // var path = require('./SampleCSVFile_2kb.csv');
//   // const filePath = './SampleCSVFile_2kb.csv'; // Update the path to your CSV file
//   // const filePath = RNFS.DocumentDirectoryPath + '/SampleCSVFile_2kb.csv'; // Update the path to your CSV file
//   try {
//     //   await fetch(filePath)
//     //     .then(response => response.text())
//     //     .then(responseText => {
//     //       // -- parse csv
//     //       var data = Papa.parse(responseText);
//     //       console.log('data:', data);
//     //     });

//     // // Read the CSV file using react-native-fs
//     // const content = await RNFS.readFile(filePath, 'utf8');

//     Papa.parse(path, {
//       download: true,
//       header: true, // If your CSV has a header row
//       dynamicTyping: true, // Automatically parse numbers and booleans
//       complete: function (results) {
//         // Results.data contains the parsed CSV data as an array of objects
//         console.log(results.data, '=====all data');
//         setData(results.data);
//       },
//       error: function (error) {
//         console.error('Error parsing CSV file:', JSON.stringify(error));
//       },
//     });
//   } catch (err) {
//     console.error('Error picking CSV file:', err);
//   }
// }
