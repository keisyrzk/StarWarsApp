import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { services } from '../Services/StarWarsServices';
import { PlanetsContainer, Planet } from '../Services/Entities/Planet';

function SWPlanetsView() {
    const planetsQuery = useQuery<PlanetsContainer>('planets', services.starWars.planets.getAll, {
        onSuccess: (data) => {
          console.log('Fetched planets:', data.count);
        },
        onError(err) {
            console.log('Fetching error:', err);
        },
      });

    const renderItem = ({ item }: { item: Planet }) => (
        <Text>{item.name}</Text>
    );

    const onRefresh = () => {
        planetsQuery.refetch();
      };

    return (
        <View style={starWarsStyles.container}>
            <Text>Star Wars Planets</Text>
            {planetsQuery.isLoading ? (
                <ActivityIndicator size="large" color="#C154C1" />
            ) : (
                <FlatList
                    data={planetsQuery.data?.results}
                    renderItem={renderItem}
                    refreshControl={
                        <RefreshControl
                          refreshing={planetsQuery.isFetching}
                          onRefresh={onRefresh}
                          tintColor="#C154C1"   // iOS
                          colors={["#C154C1"]} // Android
                        />
                      }
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