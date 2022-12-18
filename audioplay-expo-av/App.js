import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import { getNativeSourceAndFullInitialStatusForLoadAsync } from 'expo-av/build/AV';

export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');

    //On function below, could be used the following line below to get some file from ./assets folder, from device storage using require()
    //method, or using loadAsync({uri:url}) to get the file from web by its url, what can be noticed in the delimited block with "*** ***"
    //const { sound } = await Audio.Sound.createAsync( require('./assets/Hello.mp3')

    //***
    const sound = new Audio.Sound();
    await sound.loadAsync({
      uri: 'https://sound-library.net/wp-content/uploads/2022/08/oneheart-reidenshi-snowfall.mp3',
    });
    //***
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={playSound} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
