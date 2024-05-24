import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const ConfigPage = ({ navigation, inputText, setInputText }) => {
  const [error, setError] = useState(false);

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
            style={[styles.textInput, error ? styles.errorTextInput : null]}
            placeholder='Enter your hidden text'
            placeholderTextColor='rgba(255, 255, 255, 0.5)'
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
          {error && <Text style={styles.errorText}>Please enter in some text</Text>}
          <TouchableOpacity
            onPress={() => {
              if (inputText) {
                navigation.navigate('TabNavigator', { screen: 'Result' });
                setError(false);
              }
              else setError(true);
            }}
            style={styles.button}
            activeOpacity={1}
          >
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
    width: '100%',
  },
  errorTextInput: {
    borderWidth: 1,
    borderColor: 'red',
    marginVertical: 0,
    marginTop: 30,
  },
  errorText: {
    color: 'white',
    marginVertical: 10,
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
