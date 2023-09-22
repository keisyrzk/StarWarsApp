import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, FlatList, RefreshControl } from 'react-native';


type ItemsListViewProps<ItemType> = {
    items: ItemType[];
    onItemSelected: (item: ItemType) => void;
    onRefresh: () => void;
    isFetching: boolean;
    renderItemRow: (item: ItemType, onSelect: (item: ItemType) => void) => React.ReactElement | null;
    keyExtractor: (item: ItemType) => string;
  };
  
  const ItemsListView = <ItemType,>({
    items,
    onItemSelected,
    onRefresh,
    isFetching,
    renderItemRow,
    keyExtractor
  }: ItemsListViewProps<ItemType>) => {
  
    const separator = () => (
      <View style={styles.containerSeparator} />
    );
  
    return (
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={({item}) => renderItemRow(item, onItemSelected)}
          ItemSeparatorComponent={separator}
          keyExtractor={keyExtractor}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={onRefresh}
              tintColor="#C154C1"
              colors={["#C154C1"]}
            />
          }
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    containerSeparator: {
      height: 1, 
      backgroundColor: 'gray', 
      marginLeft: 50
    },
    container: {
      flex: 1,
      marginTop: 20,
    },
  });
  
  export default ItemsListView;
  