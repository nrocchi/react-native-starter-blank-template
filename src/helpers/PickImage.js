import * as ImagePicker from 'expo-image-picker'

export const openImagePicker = async (setImage) => {
  let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

  if (permissionResult.granted === false) {
    alert("L'application a besoin de l'accès à vos photos pour sélectionner une photo.")
    return
  }

  let pickerResult = await ImagePicker.launchImageLibraryAsync({base64: true})
  setImage({uri: pickerResult.uri, base64: pickerResult.base64})

  if (pickerResult.cancelled) {
    setImage(null)
  }
}

export const openCameraPicker = async (setImage) => {
  let permissionResult = await ImagePicker.requestCameraPermissionsAsync()

  if (permissionResult.granted === false) {
    alert("L'application a besoin de l'accès à votre caméra pour sélectionner une photo.")
    return
  }

  let pickerResult = await ImagePicker.launchCameraAsync({base64: true})
  setImage({uri: pickerResult.uri, base64: pickerResult.base64})

  if (pickerResult.cancelled) {
    setImage(null)
  }
}
