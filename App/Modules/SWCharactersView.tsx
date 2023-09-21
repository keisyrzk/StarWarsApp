import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { services } from '../Services/StarWarsServices';
import { CharactersContainer, Character } from '../Services/Entities/Character';

function SWCharactersView() {
    const charactersQuery = useQuery<CharactersContainer>('characters', services.starWars.characters.getAll, {
        onSuccess: (data) => {
          console.log('Fetched characters:', data.count);
        },
        onError(err) {
            console.log('Fetching error:', err);
        },
      });

    const renderItem = ({ item }: { item: Character }) => (
        <Text>{item.name}</Text>
    );

    const onRefresh = () => {
        charactersQuery.refetch();
      };

    return (
        <View style={starWarsStyles.container}>
            <Text>Star Wars Characters</Text>
            {charactersQuery.isLoading ? (
                <ActivityIndicator size="large" color="#C154C1" />
            ) : (
                <FlatList
                    data={charactersQuery.data?.results}
                    renderItem={renderItem}
                    refreshControl={
                        <RefreshControl
                          refreshing={charactersQuery.isFetching}
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

export default SWCharactersView;