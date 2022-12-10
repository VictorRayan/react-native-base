import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const DataTest = [
  {
    'id':'id1',
    'uri':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB',
    'text':'Google LLC or as it known Google, is a company under of Alpabhet Company, that is responsible for the bigger search enginer.',
  },
  {
    'id':'id2',
    'uri':'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/150px-Tux.svg.png',
    'text':'Linux is a kernel based on Unix written and created by Linus Torvalds and today is used as basis of most of the operating system from programmers and server, known as Operating Systems based on Linux',
  }
];


const onPressLearnMore = () => console.log("pressed learn more!");

const HomeScreen = () =>{
  const Item = ({img_uri, text }) => (
    <View style={styles.item}>
        <View style={styles.imageStyle}>
          <Image source={{uri:img_uri, height:50, width:50}}/>
        </View>
        <Text numberOfLines={2} style={styles.textStyle}>{text}</Text>
        <Button style={styles.buttonLearnMore}onPress={onPressLearnMore} title="Learn more" color="blue" />
      </View>
  );
  
  const renderItem = ({item}) => (
    <Item text = {item.text} img_uri={item.uri}/>
  );
  
  return(
    <View style={styles.background}>
      <SafeAreaView style={styles.container}>
        <FlatList 
          data={DataTest}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
}

export default function App() {
  
  return (
    <HomeScreen/>
  );
}

const styles = StyleSheet.create({
  background:{backgroundColor:'black', height:'100%', width:'100%'},
  container:{
    flex:1,
    flexDirection:'column',
    top:10,
    backfaceVisibility:'hidden',
  },

  textStyle:{
    color:'white',
  }
});
