//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image,FlatList} from 'react-native';
import { connect } from 'react-redux';
import StatusBar from '../../Component/StatusBar';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import imagePath from "../../constants/imagePath";
import SearchBar1 from '../../Component/SearchBar1';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../redux/actions'
import actions from '../../redux/actions';
import Loader from '../../Component/Loader';


// create a component
class Search extends Component {
constructor(props){
    super(props);
    this.state={
        search:'',
        searchData:[],
        isLoading:false,
        timeout:null,
    }
}

apicall=()=>{
    const{ search}=this.state
    this.setState({isLoading:true})
    actions.search(search)
    .then(res=>{
        console.log(res.data,"search")
        this.setState({searchData:[...res.data],isLoading:false})
      })
      .catch(err=>{
        console.log(err)
      })
}

getSearchValue =(search) =>
{
  this.setState({search:search})
  console.log(search)
}

_renderItem = searchData =>{
   const{themeColor}=this.props
    console.log(searchData.item.bio,"render")

    return (
        <View style={styles.cardView}>
                   <TouchableOpacity>
             <View
              style={{
                flex: 1,
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'space-between',
                // borderBottomWidth: 1,
                // borderBottomColor: colors.lightGrey,
              }}>
              <View style={{padding: 5, flexDirection: 'row'}}>
                <Image
                  style={{
                    height: 150,
                    width: 150,
                    resizeMode: 'contain',
                    borderRadius: 5,
                  }}
                  source={{uri: searchData.item.profileImg[0].original}}
                />
                <View
                  style={{flexDirection: 'row', paddingTop: 6, marginLeft: 5}}>
                  <View>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>
                      {' '}
                      {searchData.item.fullName}
                    </Text>
                    <View style={{marginTop: 5, width: 180}}>
                      <Text numberOfLines={1} style={{color: themeColor}}>
                        {searchData.item.email}
                      </Text>
                    </View>
                    <View style={{marginTop: 8, width: 180}}>
                      <Text numberOfLines={1} style={{color: colors.darkGrey}}>
                        {searchData.item.bio}
                      </Text>
                    </View>
  
                    <View style={{marginTop: 15, flexDirection: 'row',alignItems:"center"}}>
                      <TouchableOpacity>
                        <Image
                          style={{height: 30, width: 30}}
                          source={imagePath.sentImage}
                        />
                      </TouchableOpacity>
  
                      <TouchableOpacity>
                        <Image
                          style={{height: 33, width: 33, marginHorizontal: 10}}
                          source={imagePath.heartImage}
                        />
                      </TouchableOpacity>
  
  
  <TouchableOpacity>
  <Text style={{paddingHorizontal:10,paddingVertical:5,borderRadius:15,
    backgroundColor:themeColor,color:colors.white}}>More Info</Text>
  
  </TouchableOpacity>
  
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
      
          
  
        </View>
      );
}


    render() {
        const {themeColor}=this.props
         const {search,searchData,isLoading}=this.state
        return (
            <View style={styles.container}>
               <StatusBar bgColor={themeColor}/>

<View style={styles.navSignup}>
          
          <Text style={{ fontFamily:fontFamily.bold,
    fontSize: 20,color:themeColor}}>{strings.SEARCH}</Text>
         
         <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
          <Image
            style={styles.arrowImage}
            source={imagePath.crossImage}
          />
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor:colors.white,paddingVertical:10}}>
  <SearchBar1 onChangeText={this.getSearchValue} value={search} onPress={this.apicall}/>
          </View>

<Loader isLoading={isLoading}/>
<FlatList
 data={searchData}
 renderItem={item => this._renderItem(item)}
/>

            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },

    navSignup: {
      backgroundColor: colors.white,
      height: 50,
      alignItems: 'center',
      paddingHorizontal: 10,
      flexDirection: 'row',
      justifyContent:"space-between"
    },
    arrowImage: {
      height: 20,
      width: 20,
      tintColor:colors.black,
    },
    cardView: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 10,
        margin: 8,
        borderWidth: 1,
        borderColor: colors.lightGrey,
      },
})
const mapStateToProps = state =>{
    return(
      {
      themeColor:state.themeReducer.themeColor
  
      }
    )
  }
  
  //make this component available to the app
  export default connect(mapStateToProps)(Search);