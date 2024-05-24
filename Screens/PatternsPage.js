import React, { useState } from 'react';
import {
  Image,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';

import bluesClues from '../assets/patterns/bluesclues.png';
import hypnotize from '../assets/patterns/hypnotize.png';
import party from '../assets/patterns/party.png';
import rainbow from '../assets/patterns/rainbow.png';

const patterns = [
  { id: '1', name: 'bluesClues', source: bluesClues },
  { id: '2', name: 'hypnotize', source: hypnotize },
  { id: '3', name: 'party', source: party },
  { id: '4', name: 'rainbow', source: rainbow },
];

function PatternsPage({ navigation, selectedPhoto, setSelectedPhoto }) {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const borderColor = item.id === selectedId ? 'purple' : 'transparent';

    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedId(item.id);
          setSelectedPhoto(item.source);
        }}
        activeOpacity={1}
        style={{ borderColor, borderWidth: 5, borderRadius: 10 }}
      >
        <Image source={item.source} style={styles.image} />
      </TouchableOpacity>
    );
  };

  const handleGeneration = () => {
    navigation.navigate('Result', { selectedPhoto: selectedPhoto });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> Select A Pattern </Text>
      <FlatList
        data={patterns}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        extraData={selectedId}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => handleGeneration()}
          activeOpacity={1}
        >
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
            Generate
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  image: {
    width: 150,
    height: 200,
    margin: 4,
    borderRadius: 10,
  },
  header: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 0,
  },
  buttonText: {
    margin: 10,
    borderColor: 'purple',
    backgroundColor: 'purple',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 90,
    textAlign: 'center',
    marginBottom: 60,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    padding: 10,
  },
});

export default PatternsPage;
