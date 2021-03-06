
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  StatusBar,
  ScrollView,
  Image,
  Modal,
  Switch,
  TouchableOpacity,
  Linking,
  WebView,
  ListView,
  AsyncStorage,
  TextInput,
  Alert,
  Animated
} from 'react-native';
const base64 = require('base-64');
const utf8 = require('utf8');


import {
  Router,
  Scene,
  Actions
} from 'react-native-router-flux';




const instructions = Platform.select({
});

export default class Login extends Component<{}> {

  constructor(props) {
    console.log(props);
    super(props);
    this.state={
      text:'',
      password:'',
      fadeAnim: new Animated.Value(0),

      }
    }

    login = async () => {
      var data = "Basic "+base64.encode("admin@admin.hu:123456");

      console.log(data)

    var path = "https://dry-mountain-15425.herokuapp.com/auth";

     fetch(path, {  
 headers: new Headers({
     'Authorization': data, 
     'Content-Type': 'application/x-www-form-urlencoded'
   }), 
  method: 'POST',
  
 body: "access_token=e0cAiR20cMQMpSpV1z1DCuLFS3HcArbx",


})
      .then((response) => response.json())
      .then((responseData) => {


      console.log('responseData');
      console.log(responseData);


      Actions.home({
        userName: responseData.user.name,
        token: responseData.token
      });
     

      

 
    })
      .catch((error) => {
      console.log(error)
      Alert.alert(
  'Hiba történt!',
  'Kérjük próbálkozzon újra',
    )
    })
  }

  


    componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 5000,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }



       componentWillMount() {
        
    }

    validate(){
      if (this.state.password === '12345'){
        Actions.home()
        this.setState({password:''})
      } else {
        Alert.alert('Hibás jelszó', 'Kérjük, próbálja újra!')
      }
    }



  render() {
    let { fadeAnim } = this.state;
    var {height, width} = Dimensions.get('window');
    var iWidth = width/240

    
    return (
      <View style={styles.container}>
     
      <View style={{flex:1}}>
      
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        <View style={{alignItems:'center', justifyContent:'center', paddingTop:30}}>
            <Text style={{color:'black', fontSize:30,}}>{'Üdvözlünk!'}</Text>

        </View>
      </Animated.View>


        <View style={{alignItems:'center', justifyContent:'center', marginTop:30 }}>
          <Image source={require('../src/man.png')} style={{width:height/2, height:height/2}}/>
        </View>



        
        <View style={{padding:20, marginTop:height/50, position:'absolute', bottom:10}}>
          <View>
            <View>
              <Text style={{fontSize:12, color:'gray'}}>
                {'E-mail'}
              </Text>
              <TextInput
                ref='SecondInput'
                returnKeyType='go'
                secureTextEntry={true}
                underlineColorAndroid='rgba(0,0,0,0)'
                style={{height: 40}}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}/>
          <View style={{height:1, paddingTop:0.3, backgroundColor:'gray', top:-10}}/> 
            </View>
            <View>
              <Text style={{fontSize:12, color:'gray'}}>
                {'Jelszó'}
              </Text>
              <TextInput
                ref='SecondInput'
                returnKeyType='go'
                secureTextEntry={true}
                underlineColorAndroid='rgba(0,0,0,0)'
                style={{height: 40}}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}/>
          <View style={{height:1, paddingTop:0.3, backgroundColor:'gray', top:-10}}/> 
            </View>
        </View>
        
        <View style={{justifyContent:'center', alignItems:'center', marginTop:10}}>
          <TouchableOpacity onPress={ () => this.login() }>
            <View style={{height:40, backgroundColor:'#2E348B', width:width-40, justifyContent:'center', alignItems:'center', borderRadius:20}}>
              <Text style={{color:'white'}}>{'Bejelentkezés'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }})
  