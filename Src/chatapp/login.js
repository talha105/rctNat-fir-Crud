import React, { Component } from 'react';
import {
    Body,
    Button,
    Container,
    H1,
    Input,
    Item,
    View,
    Text
} from "native-base";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class Login extends Component {

  render() {
    return (
      <Container style={styles.container}>
          
          <View style={styles.view}>
              <Item rounded style={styles.field}>
                  <EvilIcons name="user" size={30} color="grey" />
                  <Input placeholder="Name"/>
              </Item>
              <Item rounded style={styles.field}>
                  <Ionicons name="key-outline" size={30} color="grey" />
                  <Input placeholder="Password" secureTextEntry/>
              </Item>
              <Button block rounded style={{...styles.field,padding:0}}>
                  <Text>
                      Login
                  </Text>
              </Button>
          </View>
      </Container>
    );
  }
}
const styles={
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    view:{
        width: '85%',
    },
    field:{
        marginTop:10,
        marginBottom:10,
        paddingLeft:10,
        paddingRight:10,
    }
}
