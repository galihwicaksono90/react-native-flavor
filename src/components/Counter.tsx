import React from 'react';
import { View, Button, Text, StyleSheet, Pressable } from 'react-native';
import Config from 'react-native-config';

export default function Counter() {
  const [count, setCount] = React.useState(0);

  const decrement = () => {
    setCount(o => o - 1);
  };
  const increment = () => {
    setCount(o => o + 1);
  };
  return (
    <View style={styles.main}>
      <Pressable onPress={decrement} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.title}>{count}</Text>
      <Pressable onPress={increment} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    paddingVertical: 30,
  },
  title: {
    fontSize: 60,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    paddingHorizontal: 50,
    backgroundColor: Config.MAIN_COLOR,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  },
});
