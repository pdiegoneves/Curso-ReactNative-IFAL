import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Animated } from 'react-native'
import * as Animatable from 'react-native-animatable'

const App = () => {
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="slideInDown"
        iterationCount="infinite"
        direction="alternate"
      >
        Sobe⬆ e desde⬇
      </Animatable.Text>
      <Animatable.Text
        animation="pulse"
        easing="ease-in-out"
        iterationCount="infinite"
        style={{ textAlign: 'center', fontSize: 50 }}
      >
        ❤️
      </Animatable.Text>
      <Animatable.Text
        animation="swing"
        easing="ease-in-out"
        duration='5000'
        style={{ textAlign: 'center', fontSize: 50 }}
      >
        🖐
      </Animatable.Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
