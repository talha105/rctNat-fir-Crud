import {
  Card,
Body,
Text,
Button,
View,
Item,
Input
} from 'native-base';
import React, { Component ,useEffect} from 'react';
import {FlatList,TouchableOpacity} from "react-native";
import { connect } from 'react-redux';
import * as actions from "../actions";
class ItemList extends Component {
  state={
    isEdit:false,
    editValue:''
  }


  isEdit=()=>{
    this.setState({isEdit:true});
  }
  update=async(id)=>{
    await this.props.editItem(id,this.state.editValue)
    this.setState({isEdit:false});
  }


  RenderItem=({item})=>{
    return (
      <Card>
          <View style={styles.body}>
            {this.state.isEdit?(
              <Item regular style={styles.text}>
              <Input defaultValue={item.item}  onChangeText={(v)=>this.setState({editValue:v})}/>
              </Item>
            ):(
              <View style={styles.text}>
              <Text>
                  {item.item}
              </Text>
            </View>
            )}
              {this.state.isEdit?(
                <View style={{...styles.btns}}>
                <TouchableOpacity style={styles.upd}>
                <Text style={{color:'white'}} onPress={()=>this.update(item.id)}>Update</Text>
                </TouchableOpacity>
                </View>
              ):(
              <View style={styles.btns}>
              <TouchableOpacity style={styles.del} onPress={()=>this.props.deleteItem(item.id)}>
                <Text style={{color:'white'}}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.edit} onPress={this.isEdit}>
                <Text style={{color:'white'}}>Edit</Text>
              </TouchableOpacity>
              </View>
              )}
              
          </View>
      </Card>
    );
  }

  

  render() {
    const items=this.props.itemsList;
    const itemsArray=[];
    for(let id in this.props.itemsList){
      itemsArray.push({id,...items[id]});
    }

    return (
      <FlatList
      style={styles.flatList}
      data={itemsArray}
      renderItem={this.RenderItem}
      keyExtractor={item=>item.id}
      />
    );
  }
}

const styles={
  body:{
    flexDirection:'row',
    justifyContent: 'center',
  },
  del:{
    height:40,
    width: "50%",
    backgroundColor: '#a11717',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upd:{
    height:40,
    width: "100%",
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  edit:{
    height:40,
    width: "50%",
    backgroundColor: '#4bbcd8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    height:40,
    width: '60%',
    justifyContent: 'center',
  },
  btns:{
    width: '40%',
    flexDirection:'row'
  },
  flatList:{
    padding: 10,
}
}
export default connect(null,actions)(ItemList)