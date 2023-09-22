import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, FlatList, RefreshControl, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { services } from '../Services/StarWarsServices';
import { CharactersContainer, Character } from '../Services/Entities/Character';
import TextCellView from '../Views/TextCellView'; 
import { MainProps } from './AppNavigation';
import ItemsListView from '../Views/ItemsListView'; 

function SWCharactersView() {

  const navigation = useNavigation<MainProps['navigation']>();

    const charactersQuery = useQuery<CharactersContainer>('characters', services.starWars.characters.getAll, {
        onSuccess: (data) => {
          console.log('Fetched characters:', data.count);
        },
        onError(err) {
            console.log('Fetching error:', err);
        },
      });

    const onRefresh = () => {
        charactersQuery.refetch();
      };

    const onSelectCharacter = (character: Character) => {
      navigation.navigate('SWCharacterDetails', {
        character,
      });
    };

    return (
        <View style={starWarsStyles.container}>
            <Text>Star Wars Characters</Text>
            {charactersQuery.isLoading ? (
                <ActivityIndicator size="large" color="#C154C1" />
            ): (
              <ItemsListView 
                items={charactersQuery.data?.results || []}
                onItemSelected={onSelectCharacter}
                onRefresh={onRefresh}
                isFetching={charactersQuery.isFetching}
                renderItemRow={(character, onSelect) => (
                  <TouchableOpacity onPress={() => onSelect(character)}>
                  <TextCellView name={character.name || "not specified"} />
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

export default SWCharactersView;