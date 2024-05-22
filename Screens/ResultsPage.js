import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, Alert } from 'react-native';
import blueClue from '../assets/patterns/bluesclues.png';

function ResultsPage(){
  return (
    <SafeAreaView style={styles.container} >
      <TouchableWithoutFeedback 
        onLongPress={() => 
          Alert.alert(
            'Image Options',
            'Choose an option',
            [
              {text: 'Save', onPress: () => console.log('Save Pressed')},
              {text: 'Exit', onPress: () => console.log('Exit Pressed'), style: 'cancel'},
            ],
            { cancelable: true }
          )
        }
      >
        <Image 
          source={blueClue}
          style={styles.resultImage}
        />
      </TouchableWithoutFeedback>
    </ SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'top',
  },
  resultImage: {
    width: '90%',
    height: '95%',
  },
});

export default ResultsPage