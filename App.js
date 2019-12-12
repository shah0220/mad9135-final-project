import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ListView from './screens/ListView'
import Home from './screens/Home'
import RestaurantDetail from './screens/RestaurantDetail'

const AppNavigator = createStackNavigator(
  {
  Home: {
    screen: Home,
    navigationOptions: { 
      title: 'Home',
    }
  },
  ListView:{
    screen: ListView,
    navigationOptions: { 
      title: 'List',
    }
    
  },
  RestaurantDetail:{screen: RestaurantDetail}
 
}, 
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: 'hsl(200, 60%, 80%)'}
  }
})

export default createAppContainer(AppNavigator)
