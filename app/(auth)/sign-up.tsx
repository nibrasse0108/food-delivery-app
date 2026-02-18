import { View, Text, Button } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function SignUp() {
  return (
    <View>
        <Text>SignUp</Text>
        <Button title='Sign Up' onPress={() => router.push("/(auth)/sign-in")}/>
    </View>
  )
}