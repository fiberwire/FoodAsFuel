import React, {Component} from 'react';
import {
  View, Text
} from 'react-native';

export default class FoodItem extends Component {

  render(){
    return (
      <View>
        <Text>{this.props.data.name}</Text>
      </View>
    )
  }
}
