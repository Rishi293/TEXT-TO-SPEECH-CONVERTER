import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
import Alert from 'react-alert';


export default class App extends React.Component {
  constructor(){
    super()
    this.state={
wordToSay:""
    }
  }
  speak=()=>{
var word=this.state.wordToSay

word===""?alert('Input your text in the input box and then click the button to hear it'):Speech.speak(word)
  }

  render() {
    return (
      <View style = {styles.container}>
        <Header
            backgroundColor={'#56A3BF'}
            centerComponent={{
              text: ' Text to Hear',
              style: { color: '#fff', fontSize: 28 },
            }}
          />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128//2016/06/11/779043_multimedia_512x512.png',
          }}
        />
          
         <TextInput style={styles.inputBox}
       onChangeText=
       {(text)=>{this.setState({wordToSay:text})}}
     value={this.state.wordToSay}/>


        <TouchableOpacity style = {styles.speechButton}
        onPress = {() => {
          this.speak()
        }}>
          <Text style = {styles.displayText}>Click to Hear</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    fontSize: 20,
    borderColor: '#566B73',
    color: '#2C5361',
    borderRadius: 10
  },
  displayText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black'
  },
  speechButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 50,
    backgroundColor: '#2E5866'
  },
  imageIcon: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: 'center'
  }
});
