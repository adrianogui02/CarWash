import React from 'react';
import { View , Text,Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'

export default function Welcome() {

const navigation = useNavigation();

 return (
   <View style={styles.container}>
    <View style={styles.imagem}>
      <Animatable.Image
        animation="slideInDown"
        source={require('../../assets/logo.png')}
        style={styles.imagemStyle}
        resizeMode="contain"
        />
      {/* <Text style={styles.textoo}>Bem Vindo</Text> */}
    </View>
    <Animatable.View 
    animation="fadeInUp" 
    style={styles.containerText}
    delay={600}
    duration={400}
    >
      <Text style={styles.titleText}>Invista no visual do seu carro!</Text>
      <Text style={styles.subText}>Faça login para começar</Text>
      <TouchableOpacity 
      style={styles.button}
      onPress={()=> navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </Animatable.View>
   </View>
  );
}

