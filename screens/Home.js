import React, { Component } from 'react'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { Container,Text, Content, Spinner, Button } from 'native-base'
import { StyleSheet} from 'react-native'


export default class Home extends Component {
    state = {
        restaurantList: [],
        isLoading: true,
        location: {
            latitude: null,
            longitude: null
          }
      }

      getLocation = () =>{
        this.setState({isLoading: true})

        let params = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };
        navigator.geolocation.getCurrentPosition((position) =>{
          let pos = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          this.setState({location: pos})
          this.loadData()
        }, (error)=>{
          let errors = {
            1: "Permission denied",
            2: "Position unavailable",
            3: "Request timeout"
          };
          alert("Error: " + errors[error.code])
        }, params);
      }

      loadData = () => {
        
        const myKey = 'wns1PtfYaQL_3BvYbPmIPeNLVNmmf6dMuOzCxu4xFnwh-v-a-RWBHGkMMoV_YHXUgrA3E2zFy_b52V_5Bv7PbLJsSnKOHsIKPHJXH_asQQ2r0w0jevdRq6p_GF3hXXYx'
        let url = `https://api.yelp.com/v3/businesses/search?term=restaurant&latitude=${this.state.location.latitude}&longitude=${this.state.location.longitude}&sort_by=distance`;

        const newHeader = new Headers()
        newHeader.append('Authorization', 'Bearer ' + myKey)

        let request = new Request(url, {
            headers:newHeader,
        })


        fetch(request)
        .then(response => response.json())
        .then(data => {
           this.setState({restaurantList:data})
           this.props.navigation.navigate('ListView', {restaurants: this.state.restaurantList})
           this.setState({isLoading: false})
        })
      }
    
      componentDidMount () {
        Font.loadAsync({
          Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font
        }) 
        .then( ()=> this.setState({isLoading: false})) 
      }

    render() { 

        if (this.state.isLoading) return <Spinner color='hsl(200, 60%, 60%)' />
        
        return (
          <Container>
            <Content>
              <Button style={s.button} onPress={this.getLocation}>
                  <Text style={s.text}>
                      Search restaurants
                  </Text>
              </Button>
            </Content>
          </Container>
        )
      }


}

const s = StyleSheet.create({
   button: {marginTop: 180,
  backgroundColor: 'hsl(200, 60%, 60%)',
  alignSelf:"center"
  
  },
  text:{fontSize: 24,
    fontWeight:'600',
    }
})