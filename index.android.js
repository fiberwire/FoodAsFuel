/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

import FoodList from './app/components/containers/FoodList';

class FoodAsFuel extends Component {

  constructor(props){
    super(props);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      food: ds.cloneWithRows([
        {name: 'carrots'},
        {name: 'soylent'}
      ])
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FoodList data={this.state.food}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FoodAsFuel', () => FoodAsFuel);
