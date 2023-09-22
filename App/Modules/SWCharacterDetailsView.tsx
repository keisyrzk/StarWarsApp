import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text
} from 'react-native';
import styles from '../Resources/Styles';
import { SWCharacterDetailsProps } from './AppNavigation';

function SWCharacterDetailsView({route}: SWCharacterDetailsProps) {
  const navigation = useNavigation<SWCharacterDetailsProps['navigation']>();
  const {character} = route.params;

  return (
    <View style={styles.container}>
         <Text>"Character: "{character.name}</Text>
    </View>
  );
}

export default SWCharacterDetailsView;
