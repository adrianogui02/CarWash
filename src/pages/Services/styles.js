import { StyleSheet } from 'react-native'
import { theme } from '../../global/theme'

export const styles=StyleSheet.create({
    
    container:{
        backgroundColor:theme.color.blue2,
        flex:1,
        zIndex:5,
    },
    containerHeader:{
        backgroundColor:theme.color.darkblue,
        paddingTop:50,
        paddingBottom:20,
        height:120,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingStart:20,
        paddingEnd:20,
        //marginBottom:20,
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

    containerFiltro:{
        width:'90%',
        alignSelf: 'center',
    },

    containerFiltroContent:{
        backgroundColor:'rgba(255, 255, 255, 1)',
        width:'35%',
        alignSelf:'flex-start',
        alignItems:'center',
        justifyContent:'center',
        height:40,
        borderRadius:20,
        marginVertical:20,
    },

    serviceContainer: {
        position: 'relative',
        justifyContent: 'flex-start',
        alignSelf: 'center',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        width: '90%',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 10,
      },
      serviceContent: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      titleServiceText: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        fontFamily: theme.fonts.text500,
        color:'#000',
        paddingBottom: 5,
        fontSize: 17,
        paddingStart: 20,
      },
      serviceText: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        fontFamily: theme.fonts.text500,
        color: '#000',
        paddingBottom: 5,
        fontSize: 14,
        paddingStart: 20,
      },
      serviceValorText: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        fontFamily: theme.fonts.text700,
        color: '#228B22',
        paddingBottom: 5,
        fontSize: 14,
        paddingStart: 20,
      },
      imagemStyle: {
        width: 80,
        height: 80,
        borderRadius: 10,
      },
      serviceDescription: {
        fontFamily: theme.fonts.text400,
        color: '#000',
        fontSize: 14,
        marginTop: 10,
      },
      button: {
        backgroundColor:theme.color.darkblue,
        width:'40%',
        alignSelf:'flex-end',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginTop: 10,
      },
      buttonText: {
        fontFamily: theme.fonts.text500,
        padding:10,
        borderRadius:20,
        color:theme.color.backgroundWhite,
        fontSize: 14,
        textAlign: 'center',
      },
    

})