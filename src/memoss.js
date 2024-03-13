// import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useCallback, useMemo, useState} from 'react';
// import NothingCom from './NothingCom';

// const memoss = () => {
//   const [myNum, setMyNum] = useState(0);
//   const [show, setShow] = useState(false);

// //   const countNumber = useCallback((num)=> {

// //         console.log('🚀 ~ file: Memo.jsx ~ line 12 ~ countNumber ~ num');
    
// //         return num;
// //   },[myNum])
  

//   const countNumber = useCallback(() => {
//     setMyNum(myNum +1);
//     console.log('🚀 ~ file: Memo.jsx ~ line 12 ~ countNumber ~ num');
//   }, [myNum]);

// //   const countNumber = () => {
// //     setMyNum(myNum+1);
// //     console.log('🚀 ~ file: Memo.jsx ~ line 12 ~ countNumber ~ num')
// //   }

  

// //   const checkData =useMemo(() => {
// //      return countNumber(myNum);
// //   },[myNum]) 


//   return (
//     <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
//         <NothingCom valuess={myNum} intss={countNumber}/>

//       {/* <TouchableOpacity
//         onPress={getValue}
//         style={{backgroundColor: 'red', margin: 20, padding: 40}}>
//         <Text>button 1 </Text>
//       </TouchableOpacity> */}




//       <TouchableOpacity
//         onPress={() => setShow(!show)}
//         style={{backgroundColor: 'red', margin: 20, padding: 40}}>
//         <Text>button 2 </Text>
//       </TouchableOpacity>
//       {show ? <Text>"You clicked me" </Text> : <Text>click me </Text>}
//     </View>
//   );
// };

// export default memoss;

// const styles = StyleSheet.create({});

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Count: {count}</Text>
      <Button title="Increment Count" onPress={incrementCount} />
    </View>
  );
};

export default CounterComponent;
