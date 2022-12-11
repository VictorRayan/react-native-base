//Import needed libraryes from react and react native to this class for its correct execution.
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Button, Menu, Provider } from 'react-native-paper';

//define the MenuExample function (optionally, it should be defined as simple function or arrow function not as constant)
const MenuExample = () => {

    //constants which carries the state of menu visibility
    const [visible, setVisible] = useState(false);
    const closeMenu = () => setVisible(false);
    const openMenu = () => setVisible(true);

    return (
        //<Provider> --> default component needed
        /*
            defines a View with a menu and its props like as its visibility, action atfer click (onDimiss) and anchor what calls the menu.
            each Menu.Item is a menu option that contains onPress methos and a descriptive title to be displayed for user after his choice.
        */
        <Provider> 
            <View style={styles.container}>
                <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <Button onPress={openMenu} mode="outlined">
                    Show menu
                    </Button>
                }>
                    <Menu.Item
                        onPress={() => {
                        Alert.alert('Action : ', 'Print');
                        }}
                        title="Print"
                    />
                    <Menu.Item
                        onPress={() => {
                        Alert.alert('Action : ', 'Forward');
                        }}
                        title="Forward"
                    />
                    <Menu.Item
                        onPress={() => {
                        Alert.alert('Action : ', 'Backward');
                        }}
                        title="Backward"
                    />
                    <Menu.Item
                        onPress={() => {
                        Alert.alert('Action :', 'Save');
                        }}
                        title="Save"
                    />
                </Menu>
            </View>
        </Provider>
    );
};

export default MenuExample; //makes the const function defined above acessible for other classes.

//styling for men and its option components.
const styles = StyleSheet.create({
container: {
	padding: 50,
	flexDirection: 'row',
	justifyContent: 'center',
	height: 200,
},
});
