import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import manycolors, {ImagePath} from '../Utils/manycolors';
import CheckBox from 'react-native-check-box';
import {Image} from 'react-native-animatable';
import {
  deleteReportyById,
  setReport,
  updateReportById,
} from '../Redux/Slice/reportSlice';
import {
  firstweeloption,
  fourthweeloption,
  secondweeloption,
  percetageoption,
  thirdweeloption,
} from './App';
import {setCurrentData} from '../Redux/Slice/CurrentdataSlice';

const ReportScreen = ({navigation}) => {
  let datass = useSelector(state => state.reports.data);
  dispatch = useDispatch();
  // const TotalAmount =  datass.reduce((acc,item) => item.checked == true?   (Number(acc) + Number(item?.total), 0 ): null)


const TotalAmount = datass.reduce(function (acc, item) {
  if(!item.checked){
    return acc
  }
    console.log(`acc: ${acc} and currval: ${item}`);
    return Number(acc) + Number(item.total)
}, 0)
const Totalcarat = datass.reduce(function (acc, item) {
  if(!item.checked){
    return acc
  }
    console.log(`acc: ${acc} and currval: ${item}`);
    return (Number(acc) + Number(item.carat))
}, 0)

  const isFocused = useIsFocused();

  function countTotal() {
    console.log(TotalAmount, "===total");
  }
  // useEffect(() => {
  //   console.log(datass);
  //   const myTotal = datass.reduce(function (acc, item) {
  //     console.log(`acc: ${acc} and currval: ${item}`);
  //     return  Number(acc) +  Number(item?.total)
  // }, 0)
  // }, [isFocused])
  
  const handleDelete = () => {
    dispatch(deleteReportyById());
  };
  const updateFieldValue = (reportId, fieldName, newValue) => {
    dispatch(
      updateReportById({id: reportId, StonData: {[fieldName]: newValue}}),
    );
  };

  const handleEdit = item => {
    console.log(item, '===items');
    const StonData = {
      id: item?.id,
      shap: item?.shap,
      colour: item?.colour,
      clarity: item?.clarity,
      percentage: item?.percetage,
      lessPercentage: item?.lessdiscount,
      finalPrice: item?.finalPrice,
      carat: item?.carat,
      rapePrice: item?.rapePrice,
      pricePercarate: item?.caratePrice,
      total: item?.total,
      activeInput: 1,
      recutSton: {},
      editable: true,
      checked: item?.checked,
    };
    dispatch(setCurrentData(StonData));
    navigation.navigate('App');
  };
  const handleShare = item => {};

  const renderItem = item => {
    return (
      <View style={styles.itemContainer}>
        <CheckBox
          checkBoxColor={'white'}
          style={{marginHorizontal: wp(2)}}
          onClick={() => updateFieldValue(item?.id, 'checked', !item?.checked)}
          isChecked={item?.checked}
        />
        <View style={styles.parantView}>
          <View style={styles.childView}>
            <Text style={styles.itemText}>{firstweeloption[item.shap]}</Text>
            <Text style={styles.itemText}>{item.carat}</Text>
          </View>
          <View style={styles.childView}>
            <Text style={styles.itemText}>{secondweeloption[item.colour]}</Text>
            <Text style={styles.itemText}>{thirdweeloption[item.clarity]}</Text>
            <Text style={styles.itemText}>
              {fourthweeloption[item.percetage]}
            </Text>
          </View>
        </View>

        <Text style={styles.TotalText}>= {item.rapePrice}</Text>
        <View style={styles.IconView}>
          <TouchableOpacity
            onPress={() => handleEdit(item)}
            style={styles.childView}>
            <Image source={ImagePath.edit} style={styles.icons} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleShare(item)}
            style={styles.childView}>
            <Image source={ImagePath.share} style={styles.icons} />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => handleDelete(item)} style={styles.childView}>
          <Image source={ImagePath.delete} style={styles.icons}/>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'column',
          backgroundColor: manycolors.blue,
          padding: 10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View style={styles.boxContaners}>
          <Text style={{fontSize: 24, color: manycolors.white, margin: wp(2)}}>
            Total : {TotalAmount}
          </Text>

          <TouchableOpacity
          style={{fontSize: 24, color: manycolors.white, margin: wp(2)}}
            onPress={() => handleDelete()}>
            <Image source={ImagePath.delete} style={styles.icons} />
          </TouchableOpacity>
        </View>
        <View style={styles.boxContaners}>
          <View style={styles.recutbox}>
            <Text style={styles.recutTextTitel}>Carats</Text>
            <Text style={styles.recutText}>{Totalcarat}</Text>
          </View>
          <View style={styles.recutbox}>
            <Text style={styles.recutTextTitel}>Average %</Text>
            <Text style={styles.recutText}>1000</Text>
          </View>
          <View style={styles.recutbox}>
            <Text style={styles.recutTextTitel}>Average PPC</Text>
            <Text style={styles.recutText}>1000</Text>
          </View>
        </View>
      </View>

      <FlatList
        contentContainerStyle={styles.flatlistContaner}
        data={datass}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  flatlistContaner: {
    flexDirection: 'column',
    width: '100%',
    alignSelf: 'center',
  },
  boxContaners: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recutbox: {
    flexDirection: 'column',
    width: '33%',
    height: hp(10),
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  recutText: {
    color: manycolors.white,
    fontWeight: 'bold',
    fontSize: wp(4),
  },
  recutTextTitel: {color: manycolors.white, fontSize: wp(5)},
  itemContainer: {
    backgroundColor: manycolors.blue,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  parantView: {
    flexDirection: 'column',
    flex: 1,
    height: hp(10),
  },
  childView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    padding: 2,

    borderColor: manycolors.white,
  },
  IconView: {
    flexDirection: 'column',
    height: hp(10),
    justifyContent: 'space-around',
    width: wp(15),
  },
  TotalText: {
    padding: 10,
    borderWidth: 1,
    height: hp(10),
    textAlignVertical: 'center',

    width: wp(18),
    textAlign: 'center',
    fontWeight: 'bold',
    color: manycolors.white,
    borderColor: manycolors.white,
  },
  itemText: {color: manycolors.white, fontSize: 14},
  icons: {width: 20, height: 20, tintColor: manycolors.white},
});
