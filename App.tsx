import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import React, {useState} from 'react';

export default function App() {
  const [image, setImage] = useState(
    'https://static-00.iconduck.com/assets.00/dice-1-icon-512x512-fr5yy7n7.png',
  );
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  const images = [
    'https://static-00.iconduck.com/assets.00/dice-1-icon-512x512-fr5yy7n7.png',
    'https://static-00.iconduck.com/assets.00/dice-2-icon-512x512-qqy2ux1a.png',
    'https://static-00.iconduck.com/assets.00/dice-3-icon-512x512-lepd9rnr.png',
    'https://static-00.iconduck.com/assets.00/dice-4-icon-512x512-1o0k2kqo.png',
    'https://static-00.iconduck.com/assets.00/dice-5-icon-512x512-0ps13pr4.png',
    'https://static-00.iconduck.com/assets.00/dice-6-icon-512x512-9n12hr9i.png',
  ];
  const generateRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImage(images[randomIndex]);
    ReactNativeHapticFeedback.trigger('impactLight', options);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
      </View>
      <Pressable onPress={generateRandomImage} style={styles.btnContainer}>
        <Text style={styles.btn}>Roll Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecd9dd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    marginBottom: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#008080',
    padding: 10,
    borderRadius: 5,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
