import React, {Component} from 'react';
import {
  View,
  ListView,
  Text,
} from 'react-native';

//components
import FoodItem from '../presentations/FoodItem';

//component to hold a list of FoodItems
export default class FoodList extends Component {

  constructor(props){
    super(props);

    this.state = {
      dataSource: props.data
    }
  }

  render(){
    return(
      <View>
        <Text>Food:</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={ (data) => <FoodItem data={data}/> }
          />
    </View>
    )
  }
}
