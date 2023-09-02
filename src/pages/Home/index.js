import React from 'react';
import { View , Text, TextInput, TouchableOpacity, Image} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { styles } from '../Home/styles';
import {Feather} from '@expo/vector-icons'
import { theme } from '../../global/theme';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {

const navigation = useNavigation();
 return (
   <View style={styles.container}>
    <View style={styles.containerHeader}>
      
        <Text style={styles.nameUser}>Adriano Nobre</Text>

        <TouchableOpacity style={styles.buttonUser}>
          <Feather name = 'user' size= {27} color="#FFF"/>
        </TouchableOpacity>
        
    </View>

  

    <View style={styles.helderOptions}>
    
      <TouchableOpacity 
      style={styles.contOptions}
      onPress={()=> navigation.navigate('MyCars')}
      >
        <View>
        <Ionicons name="md-car-sport" size={24} color="#FFF" />
        </View>
        <Text style={styles.optionsText}>My Cars</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.contOptions}
      onPress={()=> navigation.navigate('Services')}
      >
      <View>
      <Entypo name="magnifying-glass" size={24} color="#FFF"  />
        </View>
        <Text style={styles.optionsText}>Services</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.contOptions}
      onPress={()=> navigation.navigate('Products')}
      >
      <View>
      <AntDesign name="calendar" size={24} color="#fff" />
        </View>
        <Text style={styles.optionsText}>Schedule</Text>
      </TouchableOpacity>
    </View>

    


    <View style={styles.overlay}>
    <Text>Welcome</Text>
    </View>

   </View>
  );
}