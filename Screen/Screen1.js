import { StyleSheet, Text, View,Image, SafeAreaView,TouchableOpacity, FlatList, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
function Screen1(){
    const navigation = useNavigation();
    const hanldPress = ()=>{
        navigation.navigate("Screen2");
    }
    return(
        <View style={styles.container}>
            <Image source={{uri:'https://thumbs.files.fm/thumb_show.php?i=bne57rmcc&view'}} style={{flex:0.5}}/>
            <View style={styles.body}>
                <View style={{width:"80%",flex:0.5,marginLeft:20,}}>
                    <Text style={{color:"white", fontSize:60,}}>Discover{'\n'}premium coffee around you</Text>
                </View>
                <View style={{alignItems:"center",flex:0.5,}}>
                    <View style={{flex:0.7,width:"100%",justifyContent:'center',}}>
                        <TouchableOpacity onPress={hanldPress} style={{marginRight:20,marginLeft:20,borderWidth:0.2,borderColor:'#FF9933',borderRadius:20,}}>
                            <View style={{display:"flex", flexDirection:"row",height:50,alignItems:'center',justifyContent:"center"}}>
                                <MaterialIcons name="facebook" size={28} color="#0099FF" />
                                <Text style={{color:"white", fontSize:24,marginLeft:20,}}>SIGN IN WITH FACEBOOK</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{marginTop:20,}}></View>
                        <TouchableOpacity onPress={hanldPress} style={{marginRight:20,marginLeft:20,borderWidth:0.2,borderColor:'#FF9933',borderRadius:20,}}>
                            <View style={{display:"flex", flexDirection:"row",height:50,alignItems:'center',justifyContent:"center"}}>
                                <AntDesign name="googleplus" size={28} color="#FF3333" />
                                <Text style={{color:"white", fontSize:24,marginLeft:20,}}>SIGN IN WITH GOOGLE</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:0.3,width:"100%",justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'#CCCCCC',fontSize:16,}}>Don't have an account</Text>
                        <Text style={{color:'#FF9933',fontSize:20,textDecorationLine:'underline'}}>Register</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"black"
    },
    body:{
        flex:0.5,
    }
  });
  
export default Screen1;