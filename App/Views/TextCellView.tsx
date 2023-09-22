import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TextCellViewProps {
    name: string;
  }

const TextCellView = ({ name } : TextCellViewProps) => {
  return (
    <View style={styles.cellContainer}>
      <Text style={styles.cellText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cellContainer: {
    height: 60,
    justifyContent: 'center',
    paddingLeft: 20
  },
  cellText: {
    fontSize: 15,
    color: 'black',
  },
});

export default TextCellView;
