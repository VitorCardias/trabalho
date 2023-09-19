import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Initial from '../pages/inicio';
import TabRoutes from './stackRoutes';

export default function Routes() {
  const Tab = createBottomTabNavigator();
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#FFF',
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={Initial}
        options={{
          tabBarLabel: 'Inicio',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: { display: 'none' }, // Isso oculta a tab bar na rota 'Initial'
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="home" size={size} color={color} />
          }
        }}
      />
      <Tab.Screen
        name="Home"
        component={TabRoutes}
        options={{
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="contacts" size={size} color={color} />
          }
        }}
      />
    </Tab.Navigator>

  );
}
