import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

export default StyleSheet.create({

    container:{flex:1},
  image: {
    flex: 1,
    resizeMode: "contain",
    
  },
 buttonView:{
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop:500,
  marginHorizontal:15
},
renderImageView:{
    // backgroundColor:'red',
    borderRadius: 5,
    height: 300,
    width:'100%',
    alignItems:"center",
    justifyContent:"center",
    marginVertical:130
  //   marginLeft: 25,
  //   marginRight: 25,
     },
     renderImage:{resizeMode:"cover",
     height:300,width:300},
     renderTextView:{padding:15,width:290,
        
        justifyContent:"center",},
        renderText:{color:colors.white,
            fontSize:25,textAlign:"center"},
            paginationDot:{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: colors.white,
                
      
            },
})