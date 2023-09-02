import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../Services/styles';
import { AntDesign } from '@expo/vector-icons';

export default function Services() {
  const navigation = useNavigation();
  const [expandedService, setExpandedService] = useState(null);

  const handleServiceExpand = (serviceIndex) => {
    if (expandedService === serviceIndex) {
      setExpandedService(null);
    } else {
      setExpandedService(serviceIndex);
    }
  };

  const renderService = (service) => {
    const isExpanded = expandedService === service.id;

    return (
      <TouchableOpacity
        style={styles.serviceContainer}
        activeOpacity={0.9}
        onPress={() => handleServiceExpand(service.id)}
        key={service.id}
      >
        <View style={styles.serviceContent}>
          <Image source={service.image} style={styles.imagemStyle} resizeMode="contain" />
          <View>
            <Text style={styles.titleServiceText}>{service.title}</Text>
            <Text style={styles.serviceValorText}>{service.price}</Text>
          </View>
        </View>
        {isExpanded && (
          <>
            <Text style={styles.serviceDescription}>{service.description}</Text>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Agendamento')}
            >
              <Text style={styles.buttonText}>Agendar</Text>
            </TouchableOpacity>
          </>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.namePage}>Services</Text>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.navigate('Home')}
        >
          <AntDesign name="back" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.containerFiltro}>
          <View style={styles.containerFiltroContent}>
            <TouchableOpacity>
              <Text>FILTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
        {services.map((service) => renderService(service))}
      </ScrollView>
    </View>
  );
}

const services = [
  {
    id: 1,
    title: 'Lavagem Simples',
    price: 'R$ 70,00',
    image: require('../../assets/lavagemSimples.jpg'),
    description: 'Limpeza externa do veículo, remoção de sujeira e poeira',
  },
  {
    id: 2,
    title: 'Lavagem a Seco',
    price: 'R$ 100,00',
    image: require('../../assets/lavagemSeco.jpg'),
    description: 'Limpeza externa sem utilização de água, utilizando produtos especiais',
  },
  {
    id: 3,
    title: 'Polimento',
    price: 'R$ 500,00',
    image: require('../../assets/polimento.jpg'),
    description: 'Remoção de pequenos riscos e imperfeições na pintura, devolvendo o brilho e a aparência de novo',
  },
  {
    id: 4,
    title: 'Polimento Faróis',
    price: 'R$ 120,00',
    image: require('../../assets/polimentoFarol.jpg'),
    description: 'Restauração e polimento dos faróis, melhorando a visibilidade e a aparência',
  },
  {
    id: 5,
    title: 'Enceramento',
    price: 'R$ 150,00',
    image: require('../../assets/enceramento.jpg'),
    description: 'Aplicação de cera protetora para dar brilho e proteção à pintura do veículo',
  },
  {
    id: 6,
    title: 'Higienização interna',
    price: 'R$ 500,00',
    image: require('../../assets/higenizacaoInterna.jpg'),
    description: 'Limpeza profunda dos bancos, carpetes, painel, console e outras superfícies internas',
  },
];
