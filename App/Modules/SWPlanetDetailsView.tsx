import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text
} from 'react-native';
import styles from '../Resources/Styles';
import { SWPlanetDetailsProps } from './AppNavigation';

function SWPlanetDetailsView({route}: SWPlanetDetailsProps) {
  const navigation = useNavigation<SWPlanetDetailsProps['navigation']>();
  const {planet} = route.params;

  return (
    <View style={styles.container}>
         <Text>"Planet: "{planet.name}</Text>
    </View>
  );
}

export default SWPlanetDetailsView;
