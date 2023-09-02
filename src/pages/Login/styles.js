import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles=StyleSheet.create({
    container:{
        backgroundColor:theme.color.background,
        width:'100%',
        flex:1,
        
    },
    containerHeader:{
        marginTop:'30%',
        alignSelf:'center',

    },
    containerHeader2:{
        marginTop:'0%',
        marginBottom:'5%',
        alignSelf:'center',

    },
    containerLogo:{
        width:250,
        height:250,
        alignSelf:'center',
    },
    containerLogin:{
        backgroundColor:theme.color.backgroundWhite,
        width:'100%',
        flex:1,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    title:{
        width:'90%',
        alignSelf:'center',
        marginTop:25,
        marginBottom:5,
        fontFamily:theme.fonts.text700,
    },
    input:{
        backgroundColor:theme.color.cinza,
        width:'90%',
        alignSelf:'center',
        height:50,
        borderRadius:15,
        
    },  
    message:{
        color:theme.color.write,
        fontFamily:theme.fonts.text700,
        
    },
    loginBt:{
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor:theme.color.blue,
        marginTop:40,
        marginVertical:14,
        height:'12%',
        width:'70%',
        borderRadius:8,
    },
    textLoginBt:{
        color:theme.color.write,
        alignItems:'center',
        justifyContent:'center',
        fontFamily:theme.fonts.text700,
    },
    registerBt:{
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
    },
    textRegisterBt:{
        fontFamily:theme.fonts.text700,
    },

})