import { Text, View } from "react-native"
import { styles } from "./styles"
import { Header } from "../../components/Header/index"


function Home(){
    return(
        <View>
            <Text style={styles.title}>JOGOS</Text>

            <Header></Header>
        </View>
    )
}
export default Home