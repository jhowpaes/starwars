import React, { useEffect, useState } from 'react';
import { 
  View,
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ActivityIndicator, 
  SafeAreaView, 
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import { BASE_URL } from '../../utils/consts';

import Header from '../../components/Header';
import { PeopleItem } from '../../models/people';

const PeopleListing: React.FC = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState<PeopleItem[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => getPeople(), []);

  const getPeople = () => {
    setLoading(true);
    fetch(`${BASE_URL}/people/?page= ${page}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setPage(page + 1);
        setDataSource([...dataSource, ...responseJson.results]);
        setLoading(false);
      })
      .catch((error) => {});
  };

  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          testID="btnLoading"
          activeOpacity={0.9}
          onPress={getPeople}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loading ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };

  const ItemView = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer} 
        onPress={() => navigation.navigate('PeopleDetails', { people: item })}
      >
        <MaterialIcons name="arrow-forward-ios" size={20} color="#FFC107" />
        <Text style={styles.itemStyle}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  
  return (
    <View style={styles.container}>
      <Header title="People Listing" />
      <FlatList
        testID="flPeople"
        contentContainerStyle={styles.flatList}
        data={dataSource}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ItemView}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  flatList: {
    paddingHorizontal: 20,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loadMoreBtn: {
    padding: 10,
    backgroundColor: '#FFC107',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#ffffff',
    fontSize: 15,
    textAlign: 'center',
  },
  itemContainer: {
    height: 60,
    borderColor: '#FFC107',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingStart: 10,
  },
  itemStyle: {
    marginStart: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  },
});

export default PeopleListing;