import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../MyCars/styles';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function MyCars() {
  const navigation = useNavigation();

  const cars = [
    {
      id: 1,
      title: 'Fiat Mobi',
      year: '2021',
      plate: 'FFY-9587',
      image: require('../../assets/Mobi.jpg'),
    },
    {
      id: 2,
      title: 'Chevrolet Onix',
      year: '2023',
      plate: 'RAD-2901',
      image: require('../../assets/onix.jpg'),
    },
  ];

  const renderCar = (car) => {
    return (
      <TouchableOpacity
        style={styles.carContainer}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('AddCar')}
        key={car.id}
      >
        <View style={styles.carContent}>
          <Image source={car.image} style={styles.imagemStyle} resizeMode="contain" />
          <View>
            <Text style={styles.titleCarText}>{car.title}</Text>
            <Text style={styles.carText}>{car.year}</Text>
            <Text style={styles.carText}>{car.plate}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.namePage}>My Cars</Text>
        <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.navigate('Home')}>
          <AntDesign name="back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {cars.map((car) => renderCar(car))}
        <TouchableOpacity
          style={styles.addCarContainer}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('AddCar')}
        >
          <View style={styles.addCarContent}>
            <Text style={styles.addCarText}>Add New Car</Text>
            <Ionicons name="add-circle-outline" size={27} color="#fff" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
