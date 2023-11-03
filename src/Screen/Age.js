import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';

const Age = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Truth Dare Game</Text>
      <Image
        style={styles.logoImg}
        resizeMode="contain"
        source={require('../assets/spinwheel.png')}
      />
      <View style={styles.btnSection}>
        <View style={styles.btnInnerSection}>
          <TouchableOpacity>
            <Image
              style={styles.btnIcon}
              resizeMode="contain"
              source={require('../assets/kidsProfile.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Age2')}>
            <Image
              style={styles.btn}
              resizeMode="contain"
              source={require('../assets/kidsbtn.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnInnerSection}>
          <TouchableOpacity>
            <Image
              style={styles.btnIcon}
              resizeMode="contain"
              source={require('../assets/teenProfile.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Age2')}>
            <Image
              style={styles.btn}
              resizeMode="contain"
              source={require('../assets/teenbtn.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnInnerSection}>
          <TouchableOpacity>
            <Image
              style={styles.btnIcon}
              resizeMode="contain"
              source={require('../assets/adultProfile.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Age2')}>
            <Image
              style={styles.btn}
              resizeMode="contain"
              source={require('../assets/adultbtn.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnInnerSection}>
          <TouchableOpacity onPress={()=>navigation.navigate('LetsPlay')}>
            <Image
              style={styles.backIcon}
              resizeMode="contain"
              source={require('../assets/backicon.png')}
            />
          </TouchableOpacity>
  
        </View>
      </View>
    </View>
  );
};

export default Age;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A1DFF6',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: {
    width: 250,
    height: 250,
    marginVertical: '7%',
  },
  btnIcon: {
    width: 67,
    height: 67,
    marginRight: '5%',
  },
  backIcon:{
    width: 67,
    height: 67,
  },
  btn: {
    width: 211,
    height: 73,

  },
  title: {
    fontSize: 35,
    color: '#FE6C56',
    fontWeight: '700',
    position:'absolute',
    top:70,
  },
  subTitle: {
    fontSize: 25,
    color: '#2069C7',
    fontWeight: '700',
  },
  btnSection: {
    width: '100%',
    height: '30%',
    alignItems: 'center',
    flexDirection: 'column',
  },
  btnInnerSection: {
    flexDirection: 'row',
    marginVertical: '2%',
  },
});
