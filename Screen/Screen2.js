import { StyleSheet, Text, View,Image, SafeAreaView,TouchableOpacity, FlatList, ImageBackground, Animated} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import OnboardingItem from './OnboardingItem';
function Screen2(){
    const navigation = useNavigation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const ViewableItemsChanged = useRef(({ viewableItems }) => {
      setCurrentIndex(viewableItems[0].index);
    }).current;
  const slides = [
    {id:1,name:"image1", image:require('../assets/image.jpg')},
    {id:2,name:"image2", image:require('../assets/image1.png')},
];
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    return(
        <SafeAreaView style={styles.container}>
           <View style={styles.tabHeader}>
                <View style={{flex:0.8,marginLeft:20,marginRight:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Feather name="menu" size={28} color="black" />
                    <View style={{marginLeft:10,marginRight:10,display:'flex',flexDirection:'row',alignItems:'center'}}>
                        <MaterialCommunityIcons name="map-marker" size={28} color="#F4A460" />
                        <View style={{marginLeft:10,}}>
                            <Text style={{fontSize:20,fontWeight:"bold"}}>Sukarabad,Dhaka</Text>
                            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                                <Text style={{fontSize:18,fontWeight:"bold"}}>Bangladesh</Text>
                                <FontAwesome name="chevron-down" size={10} color="#F4A460" style={{marginLeft:10,}}/>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{display:'flex',flexDirection:'row',flex:0.2,justifyContent:"space-between",marginRight:20,}}>
                    <Feather name="message-square" size={28} color="black" />
                    <AntDesign name="bells" size={28} color="black" />
                </View>
           </View>
           <View style={styles.body}>
                <View style={styles.body_header}>
                    <View style={{marginTop:20,marginLeft:10,marginRight:10,backgroundColor:'red',flex:1,marginBottom:20,borderRadius:15,}}>
                    <FlatList
                            data={slides}
                            renderItem={({ item }) => <OnboardingItem item={item} />}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            bounces={false}
                            keyExtractor={(item) => item.id}
                            onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            {
                                useNativeDriver: false,
                            }
                            )}
                            scrollEventThrottle={32}
                            onViewableItemsChanged={ViewableItemsChanged}
                            viewabilityConfig={viewConfig}
                            ref={slidesRef}
                        />
                    </View>
                </View>
                <View style={styles.body_view}>

                </View>
           </View>
           <View style={styles.footer}>
                <View>
                    <Entypo name="home" size={24} color="#F4A460" />
                    <View style={{marginTop:5,borderWidth:1.5,borderColor:"#F4A460"}}/>
                </View>
                <Feather name="search" size={24} color="#F4A460" />
                <AntDesign name="hearto" size={24} color="#F4A460" />
                <AntDesign name="shoppingcart" size={24} color="#F4A460" />
                <AntDesign name="user" size={24} color="#F4A460" />
           </View>
           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabHeader:{
        display:'flex',
        flexDirection:"row",
        flex:0.1,
        backgroundColor:'#C1CDC1',
        alignItems:'center',
        borderRadius:20,
        justifyContent:'space-between',
    },
    body:{
        flex:0.8,
        backgroundColor:'#EEE9E9'
    },
    footer:{
        flex:0.1,
        backgroundColor:"#000000",
        display:'flex',
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:'center',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
    },
    body_header:{
        flex:0.35,
    },
    body_view:{
        flex:0.65,
        backgroundColor:"blue"
    }
  });
  
export default Screen2;