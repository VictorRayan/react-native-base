//Does needed importations for resources and components from 
import { StyleSheet, Text, View, SafeAreaView, Image, Button, FlatList} from 'react-native'; //Does the needed components (also known as widgets in Android SDK) from react-native (mobile library)

//Creates a constant that carry the values which will be shown into FlatView (a ListView with Performance Improvement) - JSON format
const DataTest = [
  {
    'id':0,
    'uri':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB',
    'text':'Google LLC or as it known Google, is a company under of Alpabhet Company, that is responsible for the bigger search enginer.',
  },
  {
    'id':1,
    'uri':'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/150px-Tux.svg.png',
    'text':'Linux is a kernel based on Unix written and created by Linus Torvalds and today is used as basis of most of the operating system from programmers and server, known as Operating Systems based on Linux',
  }
];

//a const that defines a function on clicking on the button 'Learn More' of each item from FlatView
const onPressLearnMore = id => () => console.log("pressed learn more! item:" + id);

//a const that contains the whole HomeScreen page structure
const HomeScreen = () =>{

  //a item constant what is rendered with item data received from FlatList object methods
  const Item = ({img_uri, text, element_id }) => (
    <View style={styles.item}>
        <View style={styles.imageStyle}>
          <Image source={{uri:img_uri, height:50, width:50}}/>
        </View>
        <Text numberOfLines={2} style={styles.textStyle}>{text}</Text>
        <Button style={styles.buttonLearnMore}onPress={onPressLearnMore(element_id)} title="Learn more" color="blue" />
      </View>
  );
  
  //constant which carry values of each item passed by FlatList, used to carry data to Item const.
  const renderItem = ({item}) => (
    <Item text = {item.text} img_uri={item.uri} element_id={item.id}/>
  );
  
  //method to return data to be shown by call method.
  return(
    /*returns the view container with the FlatList and its another views and data for list rendering
    as well as, styling for them.
    */
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

//default app method to return a view with others views and components such as its data to be shown.
export default function App() {
  
  return (
    <HomeScreen/>
  );
}

//const that is responsible for styling components.
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
