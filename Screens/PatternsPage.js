import React, { useState } from 'react';
import {
  Image,
  TouchableHighlight,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  View
} from "react-native";

import bluesClues from "../assets/patterns/bluesclues.png";
import hypnotize from "../assets/patterns/hypnotize.png";
import party from "../assets/patterns/party.png";
import rainbow from "../assets/patterns/rainbow.png";

const patterns = [
  { id: '1', source: bluesClues },
  { id: '2', source: hypnotize },
  { id: '3', source: party },
  { id: '4', source: rainbow },
];

function PatternsPage() {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const borderColor = item.id === selectedId ? 'purple' : 'transparent';

    return (
      <TouchableHighlight onPress={() => setSelectedId(item.id)} style={{borderColor, borderWidth: 5, borderRadius: 10}}>
        <Image source={item.source} style={styles.image} />
      </TouchableHighlight>
    );
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
        <TouchableHighlight
          style={styles.buttonText}
          onPress={() => console.log("Generate Pattern")}
        >
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
            Generate
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 200,
    margin: 4,
    borderRadius: 10,
  },
  header: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 0
  },
  buttonText: {
    margin: 10,
    borderColor: "purple",
    backgroundColor: "purple",
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 90,
    textAlign: "center",
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