import React from 'react';
import { Button, View, Text, Pressable, StyleSheet } from 'react-native';
import Config from 'react-native-config';

const Home = ({ navigation }) => {
  const toCounter = () => {
    navigation.navigate('Counter');
  };
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Flavors {Config.APP_TYPE}</Text>
      <Pressable onPress={toCounter} style={styles.button}>
        <Text style={styles.text}>Start</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingVertical: 30,
    display: 'flex',
    gap: 30,
  },
  title: { fontSize: 40, textAlign: 'center', color: 'black' },
  button: {
    backgroundColor: Config.MAIN_COLOR,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  text: {
    fontSize: 25,
    color: 'white',
  },
});

export default Home;
