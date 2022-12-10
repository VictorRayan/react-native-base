import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme, Button } from 'react-native-paper';

function BookScreen ({navigation}) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="This is Books Screen" />
      </Card>
      <Button onPress={()=>navigation.navigate('Home')}>Navigate to HomeScreen</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DefaultTheme.colors.background,
    alignItems: 'center',
    paddingTop: 10
  },
  card: {
    width: '90%'
  }
});

export default BookScreen;