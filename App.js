import React from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const LotOfStyle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.orange}>just orange</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  orange: {
    color: 'orange',
  }
});

export default LotOfStyle;