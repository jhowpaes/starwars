import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../../components/Header';

const PeopleDetails: React.FC = () => {
  const router = useRoute();
  const { people } = router.params;

  return (
    <View style={styles.container}>
      <Header title="People Details" />
      <View style={styles.card}>
      <MaterialIcons name="arrow-forward-ios" size={20} color="#FFC107" />

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Name:</Text>
          <Text style={styles.detailText}>{people.name}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Height:</Text>
          <Text style={styles.detailText}>{people.height}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Mass:</Text>
          <Text style={styles.detailText}>{people.mass}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Hair Color:</Text>
          <Text style={styles.detailText}>{people.hair_color}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Skin Color:</Text>
          <Text style={styles.detailText}>{people.skin_color}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>eye Color:</Text>
          <Text style={styles.detailText}>{people.eye_color}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Birth year:</Text>
          <Text style={styles.detailText}>{people.birth_year}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Gender:</Text>
          <Text style={styles.detailText}>{people.gender}</Text>
        </View>
      </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  card: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  details: {
    width: '90%',
    borderColor: '#FFC107',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  detailText: {
    fontSize: 16,
    color: '#ffffff'
  },
});

export default PeopleDetails;