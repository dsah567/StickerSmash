import { StyleSheet } from "react-native";
import { Image, type ImageSource } from 'expo-image';

type props = { 
    source: ImageSource;
    selectedImage?: string;
}

export default function ImageViewer({ source,selectedImage }: props) {

    const imageSource = selectedImage ? { uri: selectedImage } : source;
    return (
        <Image source={imageSource} style={styles.image} />
    );
}

const styles = StyleSheet.create({
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
  });