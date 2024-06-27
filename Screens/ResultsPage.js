import React, { useRef, useEffect, useState } from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Alert,
  Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import ViewShot from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';

function ResultsPage({ route, inputText }) {
  const viewShotRef = useRef(null);
  const [permission, setPermission] = useState(false)
  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
      else{
        setPermission(true)
      }
    })();
  }, [permission]);
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

const onCapture = async () => {
  if (viewShotRef.current) {
    const uri = await viewShotRef.current.capture();
    const asset = await MediaLibrary.createAssetAsync(uri);
    await MediaLibrary.saveToLibraryAsync(asset.uri);
  }
};
  const handleLongPress = () => {
    Alert.alert(
      'Image Options',
      'Choose an option',
      [
        { text: 'Save', onPress: saveImage },
        {
          text: 'Exit',
          onPress: () => console.log('Exit Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  const saveImage = async () => {
    if (viewShotRef.current) {
      try {
        const uri = await viewShotRef.current.capture();
        const asset = await MediaLibrary.createAssetAsync(uri);
        await MediaLibrary.saveToLibraryAsync(asset.uri);
        Alert.alert('Success', 'Image saved to camera roll');
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Failed to save image');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ViewShot ref={viewShotRef} style={styles.webviewContainer}>
        <TouchableWithoutFeedback
          style={styles.touchable}
          onLongPress={handleLongPress}
        >
          <WebView
            key={inputText}
            source={{ html: htmlContent }}
            style={styles.webview}
            javaScriptEnabled={true}
          />
        </TouchableWithoutFeedback>
      </ViewShot>
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
  touchable: {
    flex: 1,
  },
});

export default ResultsPage;
