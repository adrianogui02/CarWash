import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles=StyleSheet.create({
  container:{
    backgroundColor:theme.color.background,
    height:'100%',
    flex:1,
  },
  imagem:{
    alignSelf:'center',
    paddingTop:110,
    flex:2,
  },
  imagemStyle:{
    width:320, 
    height:320
  },
  textoo:{
    fontFamily:theme.fonts.text700,
    color:theme.color.writeFont,
    alignSelf:'center',
    fontSize:14
  },
  containerText:{
    alignSelf:'center',
    backgroundColor:theme.color.backgroundWhite,
    width:'100%',
    flex:1,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    paddingStart:'5%',
    paddingEnd:'5%',
  },
  titleText:{
    fontFamily:theme.fonts.text500,
    color:theme.color.blue,
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'center',
    marginTop:28,
    marginBottom:12,


  },
  subText:{
    fontFamily:theme.fonts.text500,
    color:theme.color.grayFont,
    fontSize:16,
    fontWeight:'500',
    alignSelf:'center',
    paddingTop:7

    
  },
  button:{
    backgroundColor:theme.color.writeFont,
    width:'60%',
    borderRadius:22,
    alignSelf:'center',
    justifyContent:'center',
    position:'absolute',
    backgroundColor:theme.color.blue,
    bottom:'20%',
    paddingVertical:10,
  },
  buttonText:{
    fontFamily:theme.fonts.text500,
    color:theme.color.grayFont,
    fontSize:16,
    fontWeight:'500',
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    alignContent:'center',
    
  }
})