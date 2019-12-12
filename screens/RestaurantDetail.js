import React, { Component } from 'react'
import {Container, Body,  Text, List, ListItem, Content, Left, Thumbnail, CardItem} from 'native-base';
import {View} from 'react-native'
import { Image } from 'react-native';


export default class RestaurantDetail extends Component {

    static navigationOptions =  ({navigation})=>{
        return{
            
            title: navigation.state.params.restaurant.name
        }
    }
   
    render(){
        const restaurant =  this.props.navigation.state.params.restaurant
       
        return(
            
            <Container >

            <Content>

            <List >
            
            <ListItem  style={{flex: 1, flexDirection:'column'}}>

                <View>
                <Image source={{uri:restaurant.image_url}} style={{ width: 100, flex: 1}}/>
                </View>
                
               
                <View style={{paddingTop: 10}} >

                  <Text style={{fontSize:26, color:'#0073BB'}}> {JSON.stringify(restaurant.name)}</Text>

                  <Text style={{fontSize:16, color:'#0073BB'}}> Phone: {JSON.stringify(restaurant.display_phone)}</Text>

                  <Text style={{fontSize:14, color:'#0073BB'}}> Distance: {JSON.stringify(restaurant.distance)}</Text>

                  <Text style={{fontSize:14, color:'#0073BB'}}> Price: {JSON.stringify(restaurant.price)}</Text>

                  <Text style={{fontSize:14, color:'#0073BB'}}> Rating: {JSON.stringify(restaurant.rating)}</Text>

                  <Text style={{fontSize:14, color:'#0073BB'}}> Reviews: {JSON.stringify(restaurant.review_count)}</Text>

             </View>
          

           </ListItem>

           </List>

           </Content>
            
        </Container>
        )
    }


}