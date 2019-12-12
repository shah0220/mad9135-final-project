import React, { Component } from 'react'
import * as Font from 'expo-font'
import { FlatList } from 'react-native'
import {Container, ListItem, Right,Left, Thumbnail, Body, Button, Text, Icon} from 'native-base';

export default class ListView extends Component {

  static navigationOptions = {

    name: 'Restaurant List'
}

  state = {
    restaurants:[],
  }

  componentDidMount(){
    this.setState({restaurants:this.props.navigation.state.params.restaurants})
  
  }

    render() { 
      if (this.state.isLoading) return <Spinner color='hsl(180, 60%, 90%)' />
        return (
          <Container>
           <FlatList

               data = {this.state.restaurants.businesses}
               keyExtractor ={({id}, index) => id}
               renderItem={({item}) => (
              <ListItem transparent onPress={() => this.props.navigation.navigate('RestaurantDetail', { restaurant:item })}> 
                <Left>
                <Thumbnail circle source={{uri:item.image_url}} />
                </Left>
                 <Body>
                   <Text style={{fontSize: 20}}>{item.name}</Text>
                   <Text note style={{fontSize: 14, color: '#777'}}>{(item.distance/1000).toFixed(2) + " km"}</Text>
                 </Body>
                 <Right>
                  <Button transparent onPress={() => this.props.navigation.navigate('RestaurantDetail', { restaurant:item})}>
                  <Icon name="arrow-forward"/>
                  </Button> 
                 </Right>
              </ListItem>
    
              )}
              />

          </Container>
        )
      }
}
