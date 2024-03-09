import React, {useRef, useEffect} from 'react';                                                                                             
import {View, TouchableOpacity, StyleSheet, Image, Text} from 'react-native';                                                                                               
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';                                                                                             
import * as Animatable from 'react-native-animatable';                                                                                              
import {                                                                                                
  widthPercentageToDP as wp,                                                                                                
  heightPercentageToDP as hp,                                                                                               
} from 'react-native-responsive-screen';                                                                                                
import manycolors, {ImagePath} from '../Utils/manycolors';                                                                                              
import App from '../src/App';                                                                                               
import Profile from '../src/Profile';                                                                                               
import ReportScreen from '../src/ReportScreen';                                                                                             

const Tab = createBottomTabNavigator();

const TabButton = ({item, onPress, accessibilityState}) => {
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
      textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
    } else {
      viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
      textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {flex: focused ? 1 : 0.5}]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: item.color,
              borderRadius: 16,
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}></Animatable.View>
        <View
          style={[
            styles.btn,
            {backgroundColor: focused ? null : item.alphaClr},
          ]}>
          <Image
            source={item.type}
            style={{
              width: wp(6),
              height: hp(4),
              marginHorizontal: wp(2),
              tintColor: focused ? manycolors.white : manycolors.white,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
            resizeMode="center"
          />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text style={{color: manycolors.white, paddingHorizontal: 8}}>
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const BottomTabScreen = () => {
  const TabArr = [
    {
      route: 'App',
      label: 'App',
      type: ImagePath.home,
      component: App,
      color: manycolors.navy,
      alphaClr: manycolors.blue,
    },
    {
      route: 'Profile',
      label: 'Profile',
      type: ImagePath.user,
      icon: 'user-circle-o',
      component: Profile,
      color: manycolors.navy,
      alphaClr: manycolors.blue,
    },
  ];
  const tabLabelStyle = focused => ({
    fontSize: 14,
    fontWeight: 'bold',
    color: focused ? manycolors.white : manycolors.navy,
  });

  const tabBarIconStyle = focused => ({
    width: wp(7),
    height: hp(7),
    resizeMode: 'contain',
    tintColor: focused ? manycolors.white : manycolors.navy,
  });

  const renderTabLabel = (label, focused, color) => (
    <Text style={tabLabelStyle(focused)}>{label}</Text>
  );

  const renderTabIcon = (source, focused, color, size) => (
    <Image source={source} style={tabBarIconStyle(focused)} />
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="App"
        component={App}
        options={({route}) => ({
          tabBarLabel: ({focused, color}) =>
          renderTabLabel('Calculator', focused, color),
          tabBarIcon: ({focused, color, size}) =>
          renderTabIcon(ImagePath.key, focused, color, size),
          tabBarActiveBackgroundColor: manycolors.blue,
          tabBarActiveTintColor: manycolors.navy,
        })}
      />

      <Tab.Screen
        name="Report"
        component={ReportScreen}
        options={({route}) => ({
          tabBarLabel: ({focused, color}) =>
            renderTabLabel('Report', focused, color),
          tabBarIcon: ({focused, color, size}) =>
            renderTabIcon(ImagePath.report, focused, color, size),
          tabBarActiveBackgroundColor: manycolors.blue,
          tabBarActiveTintColor: manycolors.navy,
        })}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={({route}) => ({
          tabBarLabel: ({focused, color}) =>
            renderTabLabel('Profile', focused, color),
          tabBarIcon: ({focused, color, size}) =>
            renderTabIcon(ImagePath.user, focused, color, size),
          tabBarActiveBackgroundColor: manycolors.blue,
          tabBarActiveTintColor: manycolors.navy,
        })}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(3),
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageStyle: {
    width: wp(4),
    height: hp(6),
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(7),
    paddingBottom: hp(0.1),
  },
});
export default BottomTabScreen;
