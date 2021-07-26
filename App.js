import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";
import {SearchBar} from 'react-native-elements'
import db from '../config.js'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allStories:[],
      dataSource:[],
      search:''
    }
  }

  componentDidMount() {
    this.retrieveStories()
  }

  updateSearch = search => {
    this.setState({search});
  };

  retrieveStories=()=>{
    try{ 
    var allStories=[]
    var stories = db.collections("stories").get().then((querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        allStories.push(doc.data())
        console.log('these are the stories',allStories)
      });
     this.setState({allStories})
    }
    }
  }
  render(){ 
   return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
