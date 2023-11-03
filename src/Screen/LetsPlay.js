import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect} from 'react'



const LetsPlay = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Truth Dare Game</Text>
        <Image style={styles.logoImg} resizeMode='contain' source={require('../assets/spinwheel.png')}/>
        <View style={styles.btnSection}>
          <View style={styles.btnInnerSection}>
            <TouchableOpacity>
          <Image style={styles.btnIcon} resizeMode='contain' source={require('../assets/play.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Age')}>
          <Image style={styles.btn} resizeMode='contain' source={require('../assets/letsplaybtn.png')}/>
          </TouchableOpacity>
          </View>
          <View style={styles.btnInnerSection}>
          <TouchableOpacity>
          <Image style={styles.btnIcon} resizeMode='contain' source={require('../assets/setting.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.btn} resizeMode='contain' source={require('../assets/settingbtn.png')}/>
          </TouchableOpacity>
          </View>
          <View style={styles.btnInnerSection}>
          <TouchableOpacity>
          <Image style={styles.btnIcon} resizeMode='contain' source={require('../assets/rateus.png')}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <Image style={styles.btn} resizeMode='contain' source={require('../assets/rateusbtn.png')}/>
          </TouchableOpacity>
          </View>

        </View>
      
      
    </View>
  )
}

export default LetsPlay

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#A1DFF6',
        width:'100%',
        height:'100%',        
        alignItems:'center',
        justifyContent:'center'
    },
    logoImg:{
        width:285,
        height:285,
        marginVertical:'10%'
    },
    btnIcon:{
      width:67,
      height:67,
      marginRight:'5%'
      
  },
  btn:{
    width:211,
    height:73,
    
},
    title:{
        fontSize:35,
        color:'#FE6C56',
        fontWeight:'700',
        position:'absolute',
        top:70,
    },
    subTitle:{
        fontSize:25,
        color:'#2069C7',
        fontWeight:'700'
    },
    btnSection:{
      width:'100%',
      height:'30%',
      alignItems:'center',
      flexDirection:'column',

    },
    btnInnerSection:{
      flexDirection:'row',
      marginVertical:'2%'
    }
})