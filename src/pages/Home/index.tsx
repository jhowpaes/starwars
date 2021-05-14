import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

import ButtonHome from '../../components/ButtonHome';

import Logo from '../../assets/logo.png';
import Cepo from '../../assets/icons/C3PO.png';
import Chewbacca from '../../assets/icons/chewbacca.png';
import DarthVader from '../../assets/icons/darth-vader.png';
import DeathStar from '../../assets/icons/death-star.png';
import Millennium from '../../assets/icons/millennium-falcon.png';
import Stormtrooper from '../../assets/icons/stormtrooper.png';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Image style={styles.tinyLogo} source={Logo} resizeMode="cover" />
      </View>
        <View style={{ flex: 2, padding: 10, alignItems: 'center', width: '90%', }}>
          <View style={styles.menu}>
            <ButtonHome title="Peoples" image={DarthVader} routeName="PeopleListing" />
            <ButtonHome title="Planets" image={DeathStar} routeName="PeopleListing" />
            <ButtonHome title="Films" image={Cepo} routeName="PeopleListing" />
            <ButtonHome title="Species" image={Chewbacca} routeName="PeopleListing" />
            <ButtonHome title="Vehicles" image={Millennium} routeName="PeopleListing" />
            <ButtonHome title="Starships" image={Stormtrooper} routeName="PeopleListing" />
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  tinyLogo: {
    marginVertical: 10,
    width: 200,
    height: 100,
  },
  menu: {
    width: '100%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'stretch'
  }
});

export default Home;