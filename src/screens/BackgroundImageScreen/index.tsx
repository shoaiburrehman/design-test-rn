import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {styles} from './styles';
import {icons} from '../../assets';
import {removeBackground} from '../../api/imageAPI';

const blobToBase64 = blob => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise(resolve => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
};

const BackgroundImageScreen = (props: any) => {
  const [selectedImages, setSelectedImages] = useState<any>(null);

  const handleImageSelect = () => {
    setTimeout(() => {
      ImagePicker.openPicker({
        cropping: true,
        mediaType: 'photo',
        multiple: false,
      })
        .then(async image => {
          const imageFile = {
            uri: image.path,
            name: image.path,
            type: image.mime,
          };
          const imageBlob = await removeBackground(imageFile);
          //   const objectURL = URL.createObjectURL(imageBlob);
          // console.log('objectURL: ', objectURL);
          //setSelectedImages(objectURL);

          const base64 = await blobToBase64(imageBlob);

          setSelectedImages(base64);
        })
        .catch(err => {});
    }, 650);
  };

  const handleCameraPress = () => {
    setTimeout(async () => {
      ImagePicker.openCamera({
        mediaType: 'photo',
        multiple: false,
      })
        .then(image => {
          setSelectedImages({
            // isLoading: true,
            uri: image.path,
            type: image.mime,
          });
        })
        .catch(err => {
          console.log('err: ', err);
        });
    }, 650);
  };

  console.log('selectedImages: ', selectedImages);
  return (
    <View style={styles.container}>
      <View style={styles.ImageView}>
        <Image
          source={selectedImages ? {uri: selectedImages} : icons.placeholder}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.flexRow}>
        <TouchableOpacity style={styles.btnStyle} onPress={handleCameraPress}>
          <Text style={styles.btnStyleText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle} onPress={handleImageSelect}>
          <Text style={styles.btnStyleText}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BackgroundImageScreen;
