import React, { Component } from 'react';
import {
    Container,
    Text
} from "native-base";
import Header from "./header";
import * as actions from "../actions"
import { connect } from 'react-redux';
import ItemList from './itemList';

class Todo extends Component {

    componentDidMount(){
        this.props.fetchItems();

    }
  render() {
    return (
      <Container style={styles.container}>
          <Header/>
          <ItemList itemsList={this.props.items}/>
      </Container>
    );
  }
}

const styles={
    container:{
        flex: 1,
    }
}
function mapStateToProps({items}){
    return {items}
}

export default connect(mapStateToProps, actions)(Todo);