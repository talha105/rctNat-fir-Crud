import React, { Component } from 'react';
import {
    Input,
    Item,
    Text,
    View
} from "native-base";
import {TouchableOpacity} from "react-native";
import {connect} from "react-redux";
import * as actions from "../actions";

class Header extends Component {
    state={
        item:""
    }

  render() {
    return (
          <View style={styles.header}>
          <Item regular style={styles.input}>
              <Input value={this.state.item} onChangeText={v=>this.setState({item:v})} placeholder="Add items"/>
          </Item>
          <TouchableOpacity style={styles.btn} onPress={()=>this.props.add(this.state.item).then(()=>this.setState({item:""}))}>
              <Text style={{color:'white'}}>Add</Text>
          </TouchableOpacity>
          </View>
    );
  }
}

const styles={
    header:{
        flexDirection:'row',
        padding:20,
        backgroundColor: '#7cd541',
    },
    input:{
        width: '70%',
        height: 50,
        backgroundColor:'white'
    },
    btn:{
        backgroundColor:'#2e6200',
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
    }
}


export default connect(null,actions)(Header)