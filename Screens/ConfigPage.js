import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const ConfigPage = () => {
  const [inputText, setInputText] = useState('');
  const [showStereogram, setShowStereogram] = useState(false);

  const handlePress = () => {
    if (inputText) setShowStereogram(true);
  };

  const handleReset = () => {
    setShowStereogram(false);
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Create Your Hidden Message</Text>
        <Text style={styles.descriptionText}>
          Type your hidden message in the box below. On the next page, you’ll
          choose a pattern to create your unique stereogram.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder='Enter your hidden text'
            placeholderTextColor='rgba(255, 255, 255, 0.5)'
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
          <TouchableOpacity style={styles.button} activeOpacity={1}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <Text style={styles.dividerText}>or</Text>
          <TouchableOpacity style={styles.button} activeOpacity={1}>
            <Text style={styles.buttonText}>Random Stereogram</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    backgroundColor: '#161616',
    paddingVertical: 40,
  },
  contentContainer: {
    width: '100%',
    padding: 20,
  },
  headerText: {
    color: '#F6F7F8',
    fontSize: 40,
    fontWeight: 'bold',
  },
  descriptionText: {
    color: '#F6F7F8',
    fontSize: 16,
    marginVertical: 10,
  },
  inputContainer: {
    alignItems: 'center',
  },
  textInput: {
    color: '#F6F7F8',
    fontSize: 16,
    backgroundColor: '#323232',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    marginVertical: 30,
    width: '100%'
  },
  button: {
    backgroundColor: '#B427F1',
    padding: 15,
    marginVertical: 5,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dividerText: {
    color: '#F6F7F8',
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default ConfigPage;
