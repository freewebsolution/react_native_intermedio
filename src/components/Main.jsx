import {StyleSheet, View} from "react-native";
import{Route,Routes,Navigate} from 'react-router-native'

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from './../../theme';

const styles = StyleSheet.create({
   container: {
       backgroundColor: theme.colors.mainBackground,
       flexGrow: 1,
       flexShrink: 1
   },
});
const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar/>
            <Routes>
                <Route path="/" element={<RepositoryList/>} exact/>
                <Route path="/" element={<Navigate to"/" replace= to={}/>} exact/>
            </Routes>
        </View>
    )

}
export default Main;
