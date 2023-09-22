import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { services } from '../Services/StarWarsServices';
import { PlanetsContainer, Planet } from '../Services/Entities/Planet';
import { MainProps } from './AppNavigation';
import TextCellView from '../Views/TextCellView'; 
import ItemsListView from '../Views/ItemsListView'; 

function SWPlanetsView() {

  const navigation = useNavigation<MainProps['navigation']>();


    const planetsQuery = useQuery<PlanetsContainer>('planets', services.starWars.planets.getAll, {
        onSuccess: (data) => {
          console.log('Fetched planets:', data.count);
        },
        onError(err) {
            console.log('Fetching error:', err);
        },
      });

    const onRefresh = () => {
        planetsQuery.refetch();
      };

      const onSelectPlanet = (planet: Planet) => {
        navigation.navigate('SWPlanetDetails', {
          planet,
        });
      };

    return (
        <View style={starWarsStyles.container}>
            <Text>Star Wars Planets</Text>
            {planetsQuery.isLoading ? (
                <ActivityIndicator size="large" color="#C154C1" />
            ) : (
              <ItemsListView 
                items={planetsQuery.data?.results || []}
                onItemSelected={onSelectPlanet}
                onRefresh={onRefresh}
                isFetching={planetsQuery.isFetching}
                renderItemRow={(planet, onSelect) => (
                  <TouchableOpacity onPress={() => onSelect(planet)}>
                  <TextCellView name={planet.name || "not specified"} />
                  </TouchableOpacity>
                )}
                keyExtractor={character => character.name}
            />
            )}
        </View>
    );
}

const starWarsStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  }
});

export default SWPlanetsView;