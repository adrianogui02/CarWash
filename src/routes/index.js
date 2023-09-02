import {createNativeStackNavigator} from "@react-navigation/native-stack"

import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Register from '../pages/Register'
import MyCars from '../pages/MyCars'
import Services from '../pages/Services'
import Products from '../pages/Products'
import AddCars from "../pages/AddCars"




const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name ="Welcome"
            component={Welcome}
            options={{headerShown: false}}
            />


            <Stack.Screen
            name ="Login"
            component={Login}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name ="Home"
            component={Home}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name ="Register"
            component={Register}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name ="MyCars"
            component={MyCars}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name ="Services"
            component={Services}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name ="Products"
            component={Products}
            options={{headerShown: false}}
            />

            <Stack.Screen
            name ="AddCar"
            component={AddCars}
            options={{headerShown: false}}
            />

        </Stack.Navigator>
    )
}