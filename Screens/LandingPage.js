import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import LandingPageImage from '../assets/landing-page.png';

export default function LandingPage({navigation}) {
  return (
    <View style={styles.container}>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NewScreen')}
          activeOpacity={1}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
    fontSize: 20
  },
  text: {
    color: 'white',
    marginVertical: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#B427F1',
    padding: 15,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
