import React from 'react';
import { View , Text, TextInput, TouchableOpacity ,KeyboardAvoidingView} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../Login/styles';


export default function Login() {

const navigation = useNavigation();
 return (
  
   <View style={styles.container}>
    <Animatable.View 
    animation='fadeInLeft' 
    delay={500}
    style={styles.containerHeader}
    >
      <Text style={styles.message}>Bem-Vindo(a)</Text>
    </Animatable.View>

    <Animatable.Image 
    source={require('../../assets/logo.png')}
    animation='fadeInRight' 
    delay={500}
    style={styles.containerLogo}
    
    resizeMode="contain"
    />
         
    <Animatable.View 
    animation='zoomIn' 
    delay={1400}
    style={styles.containerHeader2}
    >
      <Text style={styles.message}>Faça login para começar!</Text>
    </Animatable.View>


  
    <Animatable.View 
    animation='fadeInUp' 
    style={styles.containerLogin}
    delay={1700}
    >
      <Text style={styles.title}>Email</Text>
      <TextInput
      placeholder='Digite um email...'
      style={styles.input}
      />

      <Text style={styles.title}>Senha</Text>
      <TextInput
      placeholder='Senha...'
      
      style={styles.input}
      />

      <TouchableOpacity 
      style={styles.loginBt}
      onPress={()=> navigation.navigate('Home')}
      >
        <Text style={styles.textLoginBt}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerBt}>
        <Text style={styles.textRegisterBt}>Não possui uma conta? Cadastre-se</Text>
      </TouchableOpacity>

    </Animatable.View>

   </View>
  );
}