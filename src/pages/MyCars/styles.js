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

    carContainer:{
        justifyContent:'flex-start',
        alignSelf:'center',
        backgroundColor:'rgba(255,255,255,1)',
        width:'85%',
        paddingVertical:20,
        paddingHorizontal:20,
        marginVertical:20,
        borderRadius:20,
        
    },
    carContent:{
        flexDirection:'row',
    },
    titleCarText:{
        flexDirection:'row',
        alignItems: 'flex-start',
        fontFamily:theme.fonts.text700,
        color:'#000',
        paddingBottom:5,
        fontSize:17,
        paddingStart:20,
    },
    carText:{
        flexDirection:'row',
        alignItems: 'flex-start',
        fontFamily:theme.fonts.text500,
        color:'#000',
        paddingBottom:5,
        fontSize:14,
        paddingStart:20,
    },
    imagemStyle:{
        width:100,
        height:100,
        borderRadius:10,
        
    },
    CarContent:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    addCarContainer:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:'rgba(255,255,255, 0.5)',
        width:'50%',
        paddingVertical:20,
        marginVertical:25,
        borderRadius:20,
    },
    addCarContent:{
        alignItems:'center',
    },
    addCarText:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        fontFamily:theme.fonts.text500,
        color:theme.color.write,
        paddingBottom:5,
        fontSize:14,
    },
})