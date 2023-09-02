import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles=StyleSheet.create({
    
    container:{
        backgroundColor:theme.color.backgroundWhite,
        flex:1,
        zIndex:5,
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
    
    },
    containerHeader:{
        backgroundColor:theme.color.darkblue,
        paddingTop:50,
        paddingBottom:20,
        height:160,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingStart:20,
        paddingEnd:20,
        zIndex:2,
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
    helderProducts:{
        backgroundColor:theme.color.blue2,
        zIndex:1,
        flex:1,
        width:"100%",
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        alignSelf:'center',
        marginTop:-30,
        paddingTop:30,
        borderBottomRightRadius:-20,
        borderBottomLeftRadius:-20,
        paddingBottom:20,  
    },


})