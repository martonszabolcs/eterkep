
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
  TextInput
} from 'react-native';


import {
  Router,
  Scene,
  Actions
} from 'react-native-router-flux';

import SearchBar from 'react-native-searchbar';

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

export default class Login extends Component<{}> {

  constructor(props) {
    console.log(props);
    super(props);
    this.state={
      text:'',
      password:'',
      results:''
      }
    }


    componentDidMount() {
   
    }




       componentWillMount() {
        
    }
    _handleResults(results) {
  //this.setState({ results });
}



  render() {
    console.log(this.state.results)
    var {height, width} = Dimensions.get('window');
    var iWidth = width/240

    
    return (
      <View style={styles.container}>
      
      <View style={{flex:1}}>
      
        <SearchBar
  ref={(ref) => this.searchBar = ref}
  data={items}
  handleResults={this._handleResults}
  showOnLoad
  placeholder='Keresés'
/>
        </View>


      <View style={{flex:2, flexDirection:'row', justifyContent:'space-around'}}>
        <View style={{width:width/6, backgroundColor:'#fcba50', justifyContent:'center', alignItems:'center', borderRadius:20,}}>
          <Text style={styles.felirat2}>{'H'}</Text>
          <Text style={styles.felirat2}>{'U'}</Text>
          <Text style={styles.felirat2}>{'M'}</Text>
          <Text style={styles.felirat2}>{'Á'}</Text>
          <Text style={styles.felirat2}>{'N'}</Text>
          <Text style={styles.felirat2}>{''}</Text>
          <Text style={styles.felirat2}>{'E'}</Text>
          <Text style={styles.felirat2}>{'R'}</Text>
          <Text style={styles.felirat2}>{'Ő'}</Text>
          <Text style={styles.felirat2}>{'F'}</Text>
          <Text style={styles.felirat2}>{'O'}</Text>
          <Text style={styles.felirat2}>{'R'}</Text>
          <Text style={styles.felirat2}>{'R'}</Text>
          <Text style={styles.felirat2}>{'Á'}</Text>
          <Text style={styles.felirat2}>{'S'}</Text>
        </View>
        <View style={{width:width/6, backgroundColor:'#7ec7ce', justifyContent:'center', alignItems:'center', borderRadius:20,}}>
          <Text style={styles.felirat2}>{'T'}</Text>
          <Text style={styles.felirat2}>{'Á'}</Text>
          <Text style={styles.felirat2}>{'R'}</Text>
          <Text style={styles.felirat2}>{'G'}</Text>
          <Text style={styles.felirat2}>{'Y'}</Text>
          <Text style={styles.felirat2}>{'I'}</Text>
          <Text style={styles.felirat2}>{''}</Text>
          <Text style={styles.felirat2}>{'E'}</Text>
          <Text style={styles.felirat2}>{'R'}</Text>
          <Text style={styles.felirat2}>{'Ő'}</Text>
          <Text style={styles.felirat2}>{'F'}</Text>
          <Text style={styles.felirat2}>{'O'}</Text>
          <Text style={styles.felirat2}>{'R'}</Text>
          <Text style={styles.felirat2}>{'R'}</Text>
          <Text style={styles.felirat2}>{'Á'}</Text>
          <Text style={styles.felirat2}>{'S'}</Text>
        </View>
        <View style={{width:width/6, backgroundColor:'#c7eb67', justifyContent:'center', alignItems:'center', borderRadius:20,}}>
          <Text style={styles.felirat2}>{'S'}</Text>
          <Text style={styles.felirat2}>{'Z'}</Text>
          <Text style={styles.felirat2}>{'O'}</Text>
          <Text style={styles.felirat2}>{'L'}</Text>
          <Text style={styles.felirat2}>{'G'}</Text>
          <Text style={styles.felirat2}>{'Á'}</Text>
          <Text style={styles.felirat2}>{'L'}</Text>
          <Text style={styles.felirat2}>{'T'}</Text>
          <Text style={styles.felirat2}>{'A'}</Text>
          <Text style={styles.felirat2}>{'T'}</Text>
          <Text style={styles.felirat2}>{'Á'}</Text>
          <Text style={styles.felirat2}>{'S'}</Text>
        </View>
        <View style={{width:width/4, marginTop:height/3, backgroundColor:'#dd5758', justifyContent:'center', alignItems:'center', borderRadius:20,}}>
          <Text style={[styles.felirat2, {top:-height/20}]}>{'I'}</Text>
          <Text style={[styles.felirat2, {top:-height/20}]}>{'N'}</Text>
          <Text style={[styles.felirat2, {top:-height/20}]}>{'F'}</Text>
          <Text style={[styles.felirat2, {top:-height/20}]}>{'O'}</Text>
        </View>
      </View>
      

      <View style={[styles.menu, {width:width, height:width/5, justifyContent:'space-around'}]}>
        <TouchableOpacity  onPress={()=> Actions.home()
          }>
          <View style={[styles.menu1, {backgroundColor:'#fcba50' , borderRadius:100}]}>
           <Image
              source={require('../src/human.png')}
              style={{width:width/6, height:width/6}}/>
          <Text style={styles.felirat}>{'HUMÁN'}</Text>
          </View>
          </TouchableOpacity>
          

        <TouchableOpacity  onPress={()=> Actions.home()}>
          <View style={[styles.menu1, {backgroundColor:'#7ec7ce' , borderRadius:100}]}>
            <Image
              source={require('../src/material.png')}
              style={{width:width/6, height:width/6}}/>
          <Text style={styles.felirat}>{'TÁRGYI'}</Text>

          </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={()=> Actions.home()}>
          <View style={[styles.menu1, {backgroundColor:'#c7eb67' , borderRadius:100}]}>
            <Image
              source={require('../src/service.png')}
              style={{width:width/6, height:width/6}}/>
          <Text style={styles.felirat}>{'SZOLGÁLTATÁS'}</Text>

          </View>
          </TouchableOpacity>

          <TouchableOpacity  onPress={()=> Actions.home()}>
          <View style={{width:width/4, height:width/4, borderRadius:100, justifyContent:'center', backgroundColor:'#dd5758', alignItems:'center'}}>
            <Image
              source={require('../src/info.png')}
              style={{width:width/6, height:width/6}}/>
          <Text style={styles.felirat}>{'INFO'}</Text>

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
  }
  })
  