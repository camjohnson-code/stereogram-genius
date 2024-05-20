import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [showStereogram, setShowStereogram] = useState(false);

  const handlePress = () => {
    if (inputText) setShowStereogram(true);
  };

  const handleReset = () => {
    setShowStereogram(false); // Hide the stereogram
    setInputText(''); // Clear the input text
  };

  return (
    <View style={styles.container}>
      {!showStereogram? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter text"
            value={inputText}
            onChangeText={setInputText}
          />
          <Button title="Show Stereogram" onPress={handlePress} />
        </>
      ) : (
        <>
          <WebView
            originWhitelist={['*']}
            source={{ html: `
              <!DOCTYPE html>
              <html>
                <head>
                  <title>Stereogram</title>
                  <script src="https://unpkg.com/stereogram.js"></script>
                  <script src="https://unpkg.com/text-depth-mapper.js"></script>
                </head>
                <body>
                  <div id="stereogram" style="width: 100%; height: 300px;"></div>
                  <script>
                    Stereogram.render({
                      el: 'stereogram',
                      depthMapper: new Stereogram.TextDepthMapper('${inputText}')
                    });
                  </script>
                </body>
              </html>
            ` }}
          />
          <Button title="Reset" onPress={handleReset} />
          <Button title="Save" onPress={handleReset} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
});

export default App;
