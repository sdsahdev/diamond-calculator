import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import manycolors, { ImagePath } from '../Utils/manycolors';
import CheckBox from 'react-native-check-box';
import { Image } from 'react-native-animatable';
import { deleteReportyById } from '../Redux/Slice/reportSlice';

const ReportScreen = () => {
  let datass = useSelector(state => state.reports.data);
  dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    
  }, [isFocused]);

  const handleDelete = (item) => { 
  console.log(item, "===items");
  dispatch(deleteReportyById(item.id))
  }

  const renderItem = item => {

    return (
      <View style={styles.itemContainer}>
        <CheckBox
        checkBoxColor={'white'}
          style={{marginHorizontal: wp(2) }}
          onClick={() => {}}
          isChecked={true}
        />
        <View style={styles.parantView}>
          <View style={styles.childView}>
            <Text style={styles.itemText}>{item.shape}</Text>
            <Text style={styles.itemText}>{item.carat}</Text>
          </View>
          <View style={styles.childView}>
          <Text style={styles.itemText}>{item.colour}</Text>
          <Text style={styles.itemText}>{item.clarity}</Text>
          <Text style={styles.itemText}>{item.percetage}</Text>
          </View>
        </View>

        <Text
          style={styles.TotalText}>
          = {item.rapePrice}
        </Text>

        <View style={styles.IconView}>
          <TouchableOpacity style={styles.childView}>
            <Image source={ImagePath.edit}  style={styles.icons}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDelete(item)} style={styles.childView}>
          <Image source={ImagePath.delete} style={styles.icons}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        contentContainerStyle={{
          flexDirection: 'column',
          flex: 1,
          width: '100%',
          alignSelf: 'center',
        }}
        data={datass}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
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

    borderColor:manycolors.white
  },
  IconView: {
    flexDirection: 'column',
    height: hp(10),
    justifyContent: 'space-around',
  width:wp(15)
  },
  TotalText:{
    padding: 10,
    borderWidth: 1,
    height: hp(10),
    textAlignVertical: 'center',

    width:wp(18),
    textAlign:'center',
    fontWeight:'bold',
    color:manycolors.white,
    borderColor:manycolors.white
  },
  itemText: {color:manycolors.white, fontSize:14},
  icons:{width:20, height:20, tintColor:manycolors.white}
});
