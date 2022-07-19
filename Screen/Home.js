
import { View } from "react-native"
import { Text } from "react-native"
import { Image } from "react-native"
import React from "react"
import { StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const profile = useSelector((state) => state.Auth);
    return (
  <View style={styles.showData}>
  <Image source={{uri : profile.userData.picture}} style={styles.img}/>
 <Text>{profile.userData.name}</Text>
  </View>
    )
 
}


const styles = StyleSheet.create({
   showData : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
   },
   img: {
    marginBottom: 40,
    width: 40,
    height:40
   }
});