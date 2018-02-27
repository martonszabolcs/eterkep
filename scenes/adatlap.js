
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
  DrawerLayoutAndroid
} from 'react-native';


import {
  Router,
  Scene,
  Actions
} from 'react-native-router-flux';


import SearchBar from 'react-native-searchbar';
import Swiper from 'react-native-swiper';
import SideBar from './sidebar';

    var {height, width} = Dimensions.get('window');

//import {OffCanvas3D} from 'react-native-off-canvas-menu'

const items = [
  1337,
  'janeway',
  {
    lots: 'of',
    different: {
      types: 0,
      data: false,
      that: {
        can: {
          be: {
            quite: {
              complex: {
                hidden: [ 'gold!' ],
              },
            },
          },
        },
      },
    },
  },
  [ 4, 2, 'tree' ],
];


const instructions = Platform.select({
});

export default class Bongeszes extends Component<{}> {

  constructor(props) {
    console.log(props);
    super(props);
    this.state={
      text:'',
      password:'',
      results:'',
      menuOpen: false,
      modalVisible: false,
      index: 0,
      tipus: this.props.tipus
      }
    }
handleSwipeIndexChange (index) {
    this.setState({ index });
  };

    componentDidMount() {
   
    }




       componentWillMount() {
        
    }
    _handleResults(results) {
  //this.setState({ results });
}

handleMenu() {
  const {menuOpen} = this.state
  this.setState({
    menuOpen: !menuOpen
  })
}

tipusok(){
  console.log(this.state.tipus)
  if (this.state.tipus === 1){
    return(
      <View style = {{height:height/6, backgroundColor:'#189375', justifyContent:'center', alignItems:'center'}}>
                <Text style = {styles.text}>Humán erőforrások</Text>
          </View>
          )
  }
  if (this.state.tipus === 2){
    return(
      <View style = {{height:height/6, backgroundColor:'#964446', justifyContent:'center', alignItems:'center'}}>
                <Text style = {styles.text}>Tárgyi erőforrások</Text>
          </View>
          )
  }
  if (this.state.tipus === 3){
    return(
      <View style = {{height:height/6, backgroundColor:'#D0B555', justifyContent:'center', alignItems:'center'}}>
                <Text style = {styles.text}>Szolgáltatások</Text>
          </View>
          )
  }
}

leirasokTipus(){
  console.log(this.state.tipus)
  if (this.state.tipus === 1){
    return(
          <ScrollView>

          <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Humán Lorem ispum st'}</Text>
            <Image
              source={require('../src/nyil.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>
          

           <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Humán Lorem ispum st'}</Text>
            <Image
              source={require('../src/nyil.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Humán Lorem ispum st'}</Text>
            <Image
              source={require('../src/nyil.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>


           <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Humán Lorem ispum st'}</Text>
            <Image
              source={require('../src/nyil.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>

          
         
          </ScrollView>


          )
  }
  if (this.state.tipus === 2){
    return(
          <ScrollView>

      <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Tárgyi Lorem ispum st'}</Text>
            <Image
              source={require('../src/nyil2.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>
          

           <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Tárgyi Lorem ispum st'}</Text>
            <Image
              source={require('../src/nyil2.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Tárgyi Lorem ispum st'}</Text>
            <Image
              source={require('../src/nyil2.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>


           <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Tárgyi Lorem ispum st'}</Text>
            <Image
              source={require('../src/nyil2.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Tárgyi Lorem ispum st'}</Text>
            <Image
              source={require('../src/nyil2.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>

          </ScrollView>


          )
  }
  if (this.state.tipus === 3){
    return(
      <ScrollView>

      <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Szakértés és tanácsadás'}</Text>
            <Image
              source={require('../src/nyil3.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>
          

           <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Ifjúsági szolgáltatás'}</Text>
            <Image
              source={require('../src/nyil3.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Helyszín'}</Text>
            <Image
              source={require('../src/nyil3.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>


           <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Rendezvény'}</Text>
            <Image
              source={require('../src/nyil3.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Projektmenedzsment'}</Text>
            <Image
              source={require('../src/nyil3.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Jármű'}</Text>
            <Image
              source={require('../src/nyil3.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'Egyéb'}</Text>
            <Image
              source={require('../src/nyil3.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
          <View style={{height: height/10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20}}>{'STB'}</Text>
            <Image
              source={require('../src/nyil3.png')}
              style={{width:width/15, height:width/15}}/>
          </View>
          </TouchableOpacity>
          </ScrollView>

          )
  }
}


toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }


  render() {
    console.log(this.state.results)
    var {height, width} = Dimensions.get('window');
    var iWidth = width/240
    var cornerLeft = width - 10;  // 10 is the width/height of the corner
        var cornerTop = height - 10;
var navigationView = (
   
               <SideBar/>

    )

    
    return (
      <View style={styles.container}>
      <DrawerLayoutAndroid
      ref="DRAWER"
      drawerWidth={width/2}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <Modal animationType = {"slide"} transparent = {true}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>

               <View style = {styles.modal}>
             
               <View style = {{height:height/6, backgroundColor:'#2E348B', justifyContent:'center', alignItems:'center'}}>
                <Text style = {styles.text}>HELP</Text>
               </View>

               <View style = {{flex:1, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'black'}}>HELP</Text>
               </View>



               <View style = {{position:'absolute', bottom:height/20, left:10, right:10, justifyContent:'center', alignItems:'center'}}>
               <TouchableOpacity onPress = {() => {
                  this.toggleModal(!this.state.modalVisible)}}>
            <View style={{height:40, backgroundColor:'#2E348B', width:width-40, justifyContent:'center', alignItems:'center', borderRadius:20}}>
              <Text style={{color:'white'}}>{'Bezárás'}</Text>
            </View>
          </TouchableOpacity>
               </View>
               </View>
            </Modal>

         <View style={{height: height/6}}>
        {this.tipusok()}
        </View>

        



      <View style={{flex:1, flexDirection:'column', marginLeft:20, marginRight:20}}>
           
    

      </View>
      
    </DrawerLayoutAndroid>

      <View style={[styles.menu, {width:width, height:width/5, justifyContent:'space-around'}]}>
        <TouchableOpacity onPress={ () => this.refs['DRAWER'].openDrawer()  }>
          <View style={[styles.menu1]}>
           <Image
              source={require('../src/menu/menu.png')}
              style={{width:width/6, height:width/6}}/>
          </View>
          </TouchableOpacity>
          

        <TouchableOpacity  onPress={()=> Actions.bongeszes({tipus: 1})}>
          <View style={[styles.menu1]}>
            <Image
              source={require('../src/menu/hum.png')}
              style={{width:width/6, height:width/6}}/>
          </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={()=> Actions.bongeszes({tipus: 2})}>
          <View style={[styles.menu1]}>
            <Image
              source={require('../src/menu/targy.png')}
              style={{width:width/6, height:width/6}}/>
          </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={()=> Actions.bongeszes({tipus: 3})}>
          <View style={[styles.menu1]}>
            <Image
              source={require('../src/menu/szolg.png')}
              style={{width:width/6, height:width/6}}/>
          </View>
          </TouchableOpacity>
          
           <TouchableOpacity onPress = {() => {
            this.toggleModal(!this.state.modalVisible)}}>
          <View style={[styles.menu1]}>
            <Image
              source={require('../src/menu/inf.png')}
              style={{width:width/6, height:width/6}}/>
          </View>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  menu: {
    position:'absolute',
    bottom:0,
    backgroundColor:"white",
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  felirat: {
    color:'black',
    textAlign:'center',
    marginTop:1, 
    fontSize:10,
  },
  felirat2: {
    color:'black',
    textAlign:'center', 
    fontSize:10,
  },
  menu1: {
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center'
  },
  backgroundImage: {
    flex: 1,
    position:'absolute',
    resizeMode: 'cover', // or 'stretch'
  },
  modal: {
      flex:1,
      margin:10,
      borderRadius:10,
      borderWidth:2,
      borderColor:'black',
      backgroundColor: 'white',
   },
   text: {
      textAlign:'center',
      color: 'white',
      fontSize:40,
      //fontWeight: 'bold', 
   }
  })
  