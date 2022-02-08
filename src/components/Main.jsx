import Constants from 'expo-constants';
import { Text,StyleSheet,View } from 'react-native';

const styles = StyleSheet({
    container: {
        marginTop:Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink:1
    }
});
const Main =() => {
    <View style={styles.container}>
        <Text>Rate repository application</Text>
    </View>
}
export default Main;