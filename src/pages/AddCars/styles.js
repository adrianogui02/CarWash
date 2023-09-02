import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles=StyleSheet.create({

    container:{
        backgroundColor:theme.color.blue2,
        flex:1,
        zIndex:5,
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
    
    },
    containerHeader:{
        backgroundColor:theme.color.darkblue,
        paddingTop:60,
        paddingBottom:20,
        height:120,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingStart:20,
        paddingEnd:20,
        zIndex:2,
    },
    containerForm:{
        backgroundColor:theme.color.blue2,
        zIndex:1,
        flex:1,
        height:'100%'
    },
    namePage:{
        color:theme.color.write,
        fontFamily:theme.fonts.text700,
        fontSize:18,
        
        
    },
    buttonBack:{
        width:44,
        height:44,
        color:theme.color.write,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:44/2,
        backgroundColor:'rgba(255,255,255, 0.5)',
    },
    inputBox:{
        marginTop:20,
        width:'80%',
        justifyContent:'center',
        alignSelf:'center',
        
    },
    inputName:{
        
        color:theme.color.write,
        fontFamily:theme.fonts.text700,
        marginBottom:10,
    },
    inputStyle:{
        height:50,
        backgroundColor:theme.color.write,
        borderColor:theme.color.cinza,
        
        
    },
    inputPlaca:{
        marginTop:20,

        width:'55%',
        justifyContent:'center',
        alignSelf:'center',
        
        
    },
    inputAno:{
        marginTop:20,
        width:'35%',
        justifyContent:'center',
        alignSelf:'center',
        
        
    },
    view:{
        width:'80%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'center'
    },
    addCarContainer:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:theme.color.blue,
        width:'50%',
        paddingVertical:20,
        marginTop:60,
        marginVertical:25,
        borderRadius:20,
    },
    addCarContent:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
    },
    addCarText:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        fontFamily:theme.fonts.text500,
        color:theme.color.write,
        paddingBottom:5,
        fontSize:12,
    },
})