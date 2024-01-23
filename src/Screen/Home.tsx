import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {chagetheme} from '../Redux/Action';

function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state);
  const selectTheme = theme.MyReducer;
  console.log(selectTheme);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: selectTheme == true ? '#ffffff' : '#000000',
      }}>
      <TouchableOpacity
        style={{
          padding: 10,
          width: 150,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: selectTheme == true ? '#000000' : '#ffffff',
        }}
        onPress={() => {
          if (selectTheme === true) {
            dispatch(chagetheme(false));
          } else {
            dispatch(chagetheme(true));
          }
        }}>
        <Text style={{color: selectTheme == true ? '#ffffff' : '#000000'}}>
          Change Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {},
  btn: {},
  Text: {},
});
export default Home;
