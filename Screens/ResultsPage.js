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
          width: 100vw;
          height: 100vh;
        }
        p {
          font-size: 4rem;
          font-family: sans-serif;
          text-align: center;
          width: 75%;
          font-weight: bold;
        }
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      </style>
    </head>
    <body>
      <script src="${process.env.EXPO_PUBLIC_STEREOGRAM_SCRIPT_URL}" type="text/javascript"></script>
      <script src="${process.env.EXPO_PUBLIC_TEXT_DEPTHMAPPER_SCRIPT_URL}" type="text/javascript"></script>
      ${
        inputText
          ? '<img id="stereogram" src />'
          : '<div><p>You have not entered your hidden word or picked a pattern.</p><p>Please go back and try again.</p></div>'
      }
      <script>
        ${
          inputText
            ? `
          Stereogram.render({
            el: 'stereogram',
            depthMapper: new Stereogram.TextDepthMapper('${inputText}')
          });
        `
            : ''
        }
      </script>
    </body>
  </html>
`;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.webviewContainer}>
        <TouchableWithoutFeedback
          style={styles.touchable}
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
            key={inputText}
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
    backgroundColor: '#161616',
  },
  webviewContainer: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default ResultsPage;
