import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { IMAGES, theme } from '../../constants';
import { Typography } from './Typography';

const ImageUploader = ({title = "Upload Image"}) => {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true, // Enable cropping
    })
      .then(image => {
        setImageUri(image.path); // Set the selected image path
      })
      .catch(error => {
        console.log('User cancelled image selection:', error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.uploadContainer}>
        {imageUri ? (
          // Display the selected image when available
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          // Show camera icon and "Upload Image" text if no image is selected
          <>
             <Image source={IMAGES.cameraIcon} style={{
                width: '20%',
                height: '20%',
                resizeMode:"contain"
             }} />
            <Typography color={theme.color.tgray} align="center" style={styles.uploadText}>{title}</Typography>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
  },
  uploadContainer: {
    width: '100%',
    height: 200,
    borderRadius: 20, // Set borderRadius to 20
    backgroundColor: theme.color.fieldColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    borderStyle: 'dotted',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20, // Apply the same borderRadius to the image
  },
  uploadText: {
    marginTop: 10,
  },
});

export default ImageUploader;
