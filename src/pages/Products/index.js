import React from 'react';
import { View , Text,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { styles } from '../Products/styles';
import { AntDesign } from '@expo/vector-icons';

export default function Products() {

    const navigation = useNavigation();
    return(
       <View style={styles.container}>
           <View style={styles.containerHeader}>
               <Text style={styles.namePage}>Schedule</Text>
               <TouchableOpacity 
               style={styles.buttonBack}
               onPress={()=> navigation.navigate('Home')}
               >
                   <AntDesign name="back" size={24} color="#fff" />
               </TouchableOpacity>
           </View>

            <View style={styles.helderProducts}>
            
            </View>
       </View>
    );
   
   
}