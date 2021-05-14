import React from 'react';
import { Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ButtonHomeProps {
  title: string;
  image: any;
  routeName: string;
}

const ButtonHome: React.FC<ButtonHomeProps> = ({ title, image, routeName }) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => navigation.navigate(routeName)}
    >
      <Image source={image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 40,
    backgroundColor: '#FFC107',
    flexBasis: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default ButtonHome;