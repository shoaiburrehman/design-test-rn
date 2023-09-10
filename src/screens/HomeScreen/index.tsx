import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from './styles';
import GradientText from '../../component/GradientText/GradientText';
import {icons, images} from '../../assets';
import {vh} from '../../themes/units';

const HomeScreen = (props: any) => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <GradientText style={styles.textStyle}>Your recent videos</GradientText>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.time}>03:24</Text>
            <Text style={styles.day}>Monday</Text>
          </View>
          <TouchableOpacity style={styles.searchView}>
            <Image source={icons.search} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={images.bgImg}
          style={{width: '100%', height: vh * 54}}
          resizeMode="contain"></ImageBackground>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
