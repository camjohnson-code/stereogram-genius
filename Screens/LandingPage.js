import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import LandingPageImage from '../assets/landing-page.png';

export default function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.imageContainer}>
        <Image
          source={LandingPageImage}
          style={styles.image}
          resizeMode='contain'
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Unveil hidden images</Text>
        <Text style={styles.text}>
          Discover mesmerizing stereogram patterns, customize your viewing
          experience & dive into the world of 3D illusions...
        </Text>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
            activeOpacity={1}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL('https://youtu.be/Dh6wmaF9NhY?si=loBF6vtBtSmsQMVY')}
            activeOpacity={1}
          >
            <Text style={styles.buttonText}>Learn How Stereograms Work</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '90%',
    height: '50%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '90%',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    color: 'white',
    marginVertical: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#B427F1',
    padding: 15,
    marginVertical: 5,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
