import Constants from 'expo-constants';
import { Text,StyleSheet,View } from 'react-native';
import BigBlueText from './BigBlueText';

const styles = StyleSheet.create({
    container: {
        marginTop:Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink:1
    }
});
const Main =() => {
    return(
         <View style={styles.container}>
        <Text>Rate repository application</Text>
        <BigBlueText/>
    </View>   
    )

}
export default Main;