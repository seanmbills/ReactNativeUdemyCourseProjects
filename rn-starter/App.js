import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorsScreen from './src/screens/ColorsScreen';
import ColorAdjusterScreen from './src/screens/ColorAdjusterScreenReduced';
import TextInputScreen from './src/screens/TextInputScreen';
import BoxScreen from './src/screens/BoxScreen';
import BoxDemo from './src/screens/BoxDemo';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorsScreen,
    Adjuster: ColorAdjusterScreen,
    Input: TextInputScreen,
    Box: BoxScreen,
    BoxDemo: BoxDemo,
    
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
