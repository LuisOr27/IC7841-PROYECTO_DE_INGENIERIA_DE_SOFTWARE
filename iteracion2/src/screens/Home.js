import React from "react"
import { View, Text, Image,StyleSheet,Dimensions,Button,BackHandler} from "react-native"
import { useNavigation } from '@react-navigation/native';



const Home = () =>{
  

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.nameText}>Gestor de proyectos</Text>
        </View>
        <Image
          style={{ width: 310, height: 350, marginBottom: 150 }}
          source={require("../assets/inicio.png")}
        />
        <View style={styles.footer}>
          <Text>
            <Text style={styles.nameText}>{`Hola de nuevo! \n`}</Text>
             Gestor de proyectos y tareas del área de investigación de ingeniería química de la universidad de costa rica, sede caribe
          </Text>
        </View>
      </View>
    </View>
  )
}


export default Home

const screen = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: screen.width * 0.8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    height: screen.width * 0.8,
  },
  footer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  nameText: {
    fontWeight: "bold",
    color: "#20232a",
    fontSize: 28,
  },
  followText: {
    fontWeight: "bold",
    color: "#0095f6",
  },
});