import { Button , View } from "react-native"

import React, { useEffect } from 'react';
import { mainAuth } from "../Redux/Auth/AuthAction";

import { useDispatch, useSelector } from "react-redux";

export const Login  = ({navigation}) => {
  const dispatch = useDispatch();

  const profile = useSelector((state) => state.Auth);
  
console.log(profile)
  
    return (
        <View>
             <Button title='Sign with google' onPress={() => {
               dispatch(mainAuth())
               navigation.navigate('Home')
             }}></Button>
        </View>
    )
}