import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Switch,
  Modal,
  InteractionManager,
  ScrollView,
  Platform,
  BackHandler,
  Alert
} from 'react-native';
//import SplashScreen from 'react-native-splash-screen'


import {
  Router,
  Scene,
  Actions
} from 'react-native-router-flux';

import SplashScreen from 'react-native-smart-splash-screen';




import login from './scenes/login';
import home from './scenes/home';



export default class Flux extends Component {
  constructor(props) {
    super(props);
    console.log('component created');
    this.state={
    }
  }
  componentDidMount(){
       console.log('myView loaded');
      /*if (Platform.OS === 'android'){
        SplashScreen.close({
        animationType: SplashScreen.animationType.scale,
        duration: 850,
        delay: 500,
     })}*/
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
        console.log('addEventListener')
             console.log(Actions.state.index)

      }
        componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }
   
  backPressed = () => {
    if (Actions.state.index != 0) {
    Actions.pop();
    return true;
  } else {
    Alert.alert(
  'Alkalmazás bezárása',
  'Biztosan bezárod az alkalmazást?',
  [
    {text: 'Mégse', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'Igen', onPress: () => BackHandler.exitApp()},
  ],
  { cancelable: false }
)
  return true;
}
};
    


       //SplashScreen.hide();
   
   
   handleLogout(){
       console.log('User logged out');
   }

  render() {
    // Lekerekitett sarkok pozicioja
        var {height, width} = Dimensions.get('window');
        var cornerLeft = width - 10;  // 10 is the width/height of the corner
        var cornerTop = height - 10;

        return (
            <View style={{backgroundColor: 'black', flex:1, paddingTop: 10, flexDirection: 'column'}}>
                {/* Lekerekitett sarok */}
                <View style={[styles.roundedCorner, {top: 10, left: 0}]}>
                    <Image style={styles.roundedCornerImage} source={require('./src/images/style/corner-top-left.png')} />
                </View>
                <View style={[styles.roundedCorner, {top: 10, left: cornerLeft}]}>
                    <Image style={styles.roundedCornerImage} source={require('./src/images/style/corner-top-right.png')} />
                </View>
                <View style={[styles.roundedCorner, {top: cornerTop, left: 0}]}>
                    <Image style={styles.roundedCornerImage} source={require('./src/images/style/corner-bottom-left.png')} />
                </View>
                <View style={[styles.roundedCorner, {top: cornerTop, left: cornerLeft}]}>
                    <Image style={styles.roundedCornerImage} source={require('./src/images/style/corner-bottom-right.png')} />
                </View>

      <StatusBar hidden={true} transparent={true}/>

        <Router>
          <Scene key="root" hideNavBar={true} duration={10}>
            <Scene key="login" hideNavBar={true} component={login} title="E-Térkép" initial={true}
            onRight={() => { BackHandler.exitApp() }} rightTitle="Kilépés"/>
            <Scene key="home" component={home} title="home"/>
          </Scene>
        </Router>

      </View>
    );
  }
}

const styles = StyleSheet.create({

    // lekerekitett sarkok
    roundedCorner: {
        width: 10,
        height: 10,
        position: 'absolute',
        zIndex: 10
    },

    roundedCornerImage: {
        width: 10,
        height: 10
    }
});
