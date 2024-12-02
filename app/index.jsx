 import { Text, View, StatusBar} from 'react-native';
import  {Link} from 'expo-router';
import '../global.css';

export default function App(){
    return(
        <View className = "flex-1 items-center justify-center bg-white">
            <Text className = "text-2xl" >Arizona5 !!</Text>
            <StatusBar style = "auto" />
            <Link href = "/profile" style = {{color : 'red'}}>Go to Profile Page</Link>
        </View>
    )
}

// const styles = StyleSheet.create({
//     container :{
//         flex : 1,
//         backgroundColor: 'aqua',
//         alignItems:'center',
//         justifyContent :'center'
//     }
// })