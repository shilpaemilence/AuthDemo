import React,{Component} from 'react';
import { StyleSheet, View, Text, Platform} from 'react-native';


class HomeScreen extends Component{
    render(){
        return (
            <View style={styles.container}>

            <View style={styles.innerView}>
            <Text style={styles.text}>Hey</Text>
            <Text style={styles.text}>welcome to the app</Text>
            </View>
            </View>
        );
    }
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 128, 250)',
    flex:1,
  },
  text: {
    fontSize:25,
    fontFamily:'Muli-ExtraBold',
    color:'rgb(6 ,204, 131)'
  },
  innerView:{
      alignItems:'center',
      backgroundColor:'#ffffff',
      elevation:2,
      height:'40%',
      width:'90%',
      borderRadius:10,
      justifyContent:'center',
      borderWidth:Platform.OS==='ios'?1:0,
      borderColor:'#dedede'
    
  }
});
