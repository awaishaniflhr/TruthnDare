import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React , {useEffect} from 'react'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout( () => {
          navigation.replace('LetsPlay');
        }, 2000);
      }, []);
  return (
    <View style={styles.container}>
        <Image style={styles.logoImg} resizeMode='contain' source={require('../assets/logo.png')}/>
      <Text style={styles.title}>Truth Dare Game</Text>
      <Text style={styles.subTitle}>Truth Dare Game</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#A1DFF6',
        width:'100%',
        height:'100%',        
        alignItems:'center',
        justifyContent:'center'
    },
    logoImg:{
        width:120,
        height:120,
    },
    title:{
        fontSize:35,
        color:'#FE6C56',
        fontWeight:'700'
    },
    subTitle:{
        fontSize:25,
        color:'#2069C7',
        fontWeight:'700'
    }
})