import React,{useState} from "react"
import { View, Text, SafeAreaView, Button, Image} from "react-native"
import { launchImageLibrary } from "react-native-image-picker"

const ImageScreen = () => { 
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

    return(
        <View>
            <Button 
                title = "Seleccionar Imagen"
                onPress = { selectImage }
            />
        

        <Image
            style = {{
                alignSelf: 'center',
                height: 400,
                width: 400,

            }}
            source={{uri:image}}
        />
        </View>
    )

}

export default ImageScreen