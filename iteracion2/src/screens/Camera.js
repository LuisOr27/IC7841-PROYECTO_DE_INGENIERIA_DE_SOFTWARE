import React,{useState} from "react"
import { View, Text, SafeAreaView, Button, Image, StyleSheet, TouchableOpacity} from "react-native"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"

const Camera = () => { 
    const [image, setImage] = useState('https://via.placeholder.com/200')

    const selectImage = () => {
        const options = {
            title: 'Selecciona una imagen',
            storageOptions: {
                skipBackuo: true,
                path: 'images',
            }
        }

        launchImageLibrary(options,response=>{
            if(response.errorCode){
                console.log(response.errorMessage)
            }
            else if(response.didCancel){
                console.log('El usuario canceló')
            }else{
                const path = response.assets[0].uri
                setImage(path)
            }
        })

    }



    const takePicture = () =>{
        const options = {
            title: 'Tomar una imagen',
            storageOptions: {
                skipBackuo: true,
                path: 'images',
            }, includeBase64: true,
        }
        launchCamera(options,response =>{
            if(response.errorCode){
                console.log(response.errorMessage)
            }else if(response.didCancel){
                console.log('El usuario canceló.')
            }else{
                const uri = response.assets[0].uri
                setImage(uri)
            }
        })
        
    }
    return(
        <View>
        
            <TouchableOpacity onPress = { selectImage } style={styles.appButtonContainer}>
                <Text style={styles.appButtonText}>{'Cargar Foto'}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress = { takePicture } style={styles.appButtonContainer2}>
                <Text style={styles.appButtonText}>{'Tomar Foto'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.appButtonContainer3}>
                <Text style={styles.appButtonText}>{'Enviar'}</Text>
            </TouchableOpacity>
                
        

        <Image
            style = {{
                alignSelf: 'center',
                height: 400,
                width: 400,
                top: -80

            }}
            source={{uri:image}}
        />
        </View>
    )

}

export default Camera


const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      top: 580,
      elevation: 12,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonContainer2: {
        top: 490,
        elevation: 12,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      appButtonContainer3: {
        top: 400,
        elevation: 12,
        backgroundColor: "#30FF24",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });