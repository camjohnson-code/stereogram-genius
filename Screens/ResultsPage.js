import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

function ResultsPage({ route, inputText }) {
  // const { selectedPhoto } = route.params;
  const htmlContent = `
  <html>
    <head>
      <style>
        body {
          background-color: #161616;
          color: white;
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      </style>
    </head>
    <body>
      <script src="${EXPO_PUBLIC_STEREOGRAM_SCRIPT_URL}" type="text/javascript"></script>
      <script src="${EXPO_PUBLIC_TEXT_DEPTHMAPPER_SCRIPT_URL}" type="text/javascript"></script>
      <img id="stereogram" width="800" height="600" src />
      <script>
        Stereogram.render({
          el: 'stereogram',
          depthMapper: new Stereogram.TextDepthMapper('${inputText}')
        });
      </script>
    </body>
  </html>
`;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.webviewContainer}>
        <TouchableWithoutFeedback
          onLongPress={() =>
            Alert.alert(
              'Image Options',
              'Choose an option',
              [
                { text: 'Save', onPress: () => console.log('Save Pressed') },
                {
                  text: 'Exit',
                  onPress: () => console.log('Exit Pressed'),
                  style: 'cancel',
                },
              ],
              { cancelable: true }
            )
          }
        >
          <WebView
            source={{ html: htmlContent }}
            style={styles.webview}
            javaScriptEnabled={true}
          />
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webviewContainer: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default ResultsPage;
