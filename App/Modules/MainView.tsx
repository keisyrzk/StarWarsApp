import React, { useState } from 'react';
import { View } from 'react-native';
import TabBarView, { TabType } from './TabBarView';
import styles from '../Resources/Styles';
import { useNavigation } from '@react-navigation/native';
import { MainProps } from './AppNavigation';
import SWCharactersView from './SWCharactersView';
import SWPlanetsView from './SWPlanetsView';

const MainView = ({route}: MainProps) => {
  const [tabType, setTabType] = useState<keyof typeof TabType>('characters');
  const navigation = useNavigation<MainProps['navigation']>();

  const handleTabBarPress = async (tabType: keyof typeof TabType) => {
    switch (tabType) {
      case 'characters':
        break;

      case 'planets':
        break

      default:
        break;
    }

    setTabType(tabType);
  };

  let tabContent;
  switch (tabType) {
    case 'characters':
      tabContent = (
        <SWCharactersView />
      );

      break;

    case 'planets':
      tabContent = (
        <SWPlanetsView />
      );

    break;
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>{tabContent}</View>
      <TabBarView onTabPress={handleTabBarPress} />
    </View>
  );
};

export default MainView;
