import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useEffect} from 'react';
  
  const Age2 = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Truth Dare Game</Text>
        <View style={styles.btnSection}>
          <View style={styles.btnInnerSection}>
            <TouchableOpacity>
              <Image
                style={styles.btnIcon}
                resizeMode="contain"
                source={require('../assets/addicon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('PlayerAdd')}>
              <Image
                style={styles.btn}
                resizeMode="contain"
                source={require('../assets/addtruthbtn.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.btnInnerSection}>
            <TouchableOpacity>
              <Image
                style={styles.btnIcon}
                resizeMode="contain"
                source={require('../assets/addicon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.btn}
                resizeMode="contain"
                source={require('../assets/adddarebtn.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.btnInnerSection}>
            <TouchableOpacity>
              <Image
                style={styles.btnIcon}
                resizeMode="contain"
                source={require('../assets/soundicon2.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.btn}
                resizeMode="contain"
                source={require('../assets/soundbtn.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.btnInnerSection}>
            <TouchableOpacity>
              <Image
                style={styles.btnIcon}
                resizeMode="contain"
                source={require('../assets/shareicon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.btn}
                resizeMode="contain"
                source={require('../assets/sharebtn.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.btnInnerSection}>
            <TouchableOpacity onPress={()=>navigation.navigate('Age')}>
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
  
  export default Age2;
  
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
    backIcon:{
        width: 67,
        height: 67,
      },
  });
  