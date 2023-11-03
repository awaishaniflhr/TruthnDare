import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';

const PlayerAdd = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Player</Text>
      <View style={styles.btnSection}>
        <View style={styles.btnInnerSection}>
          <TouchableOpacity>
            <Image
              style={styles.inputbgbtn}
              resizeMode="contain"
              source={require('../assets/inputbg.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.btnIcon}
              resizeMode="contain"
              source={require('../assets/addicon.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnInnerSection}>
          <TouchableOpacity>
            <Image
              style={styles.inputbgbtn}
              resizeMode="contain"
              source={require('../assets/playerfield.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.btnIcon}
              resizeMode="contain"
              source={require('../assets/deleteicon.png')}
            />
          </TouchableOpacity>
        </View>

      </View>
      <View style={styles.btnfootersection}>
      <TouchableOpacity onPress={()=> navigation.navigate('Age2')}>
            <Image
              style={styles.btnIcon}
              resizeMode="contain"
              source={require('../assets/backicon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.btnIcon}
              resizeMode="contain"
              source={require('../assets/play.png')}
            />
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default PlayerAdd;

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
    width: 60,
    height: 60,
    // marginLeft: '10%',
  },
  inputbgbtn: {
    width: 270,
    height: 70,
    marginLeft:0,
    
  },
  title: {
    fontSize: 35,
    color: '#FE6C56',
    fontWeight: '700',
    position: 'absolute',
    top: 70,
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
    width:'98%',
    flexDirection: 'row',
    marginVertical: '2%',
    
    alignItems:'center',
    justifyContent:'space-around'
    
    
  },
  backIcon: {
    width: 67,
    height: 67,
  },
  btnfootersection:{
    width:'90%',
    flexDirection: 'row',
    marginVertical: '2%',
    position:'absolute',
    bottom:40,
    alignItems:'center',
    justifyContent:'space-around'
    
    
  },
});
