import React from 'react';
import {Image, TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
import {icons, images} from '../assets/index';
import {vh, vw} from '../themes/units';
import CustomGroupBadge from '../component/CustomBadge/CustomGroupBadge';
import {headerImgs} from '../data';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../themes/Colors';
import {CircularImageWithBorder} from '../component/CircularImageWithBorder';
import {Fonts} from '../themes';

const navigationOptions = (navProps: any) => {
  return {
    headerTitle: () => getTitle(navProps),
    headerLeft: () => renderHeaderLeft(navProps),
    headerRight: () => renderHeaderRight(navProps),
    headerTitleAlign: 'center',
    headerTransparent: true,
    headerLeftContainerStyle: {paddingLeft: 4 * vw},
    headerRightContainerStyle: {paddingRight: 4 * vw},
    headerStyle: getHeaderStyle(navProps),
  };
};

const getHeaderStyle = (props: any) => {
  return {
    shadowColor: 'transparent',
    backgroundColor: 'transparent',
    maxHeight: 20 * vh,
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
  };
};

const getTitle = (props: any) => {
  const categoryName: string = props?.route?.params?.item?.CategoryName;
  return (
    <View style={styles.logoView}>
      <Text style={styles.titleTextStyle}>{''}</Text>
    </View>
  );
};

const renderHeaderLeft = (props: any) => {
  return (
    <View style={styles.row}>
      {props?.route?.name !== 'HOME' && (
        <TouchableOpacity
          onPress={() => props?.navigation.goBack()}
          style={styles.textButton}>
          <Image source={icons.arrowLeft} style={styles.leftIconStyle} />
        </TouchableOpacity>
      )}
      <CustomGroupBadge data={headerImgs} imageStyle={styles.headImgs} />
    </View>
  );
};

const renderHeaderRight = (props: any) => {
  return (
    <View style={styles.row}>
      <TouchableOpacity>
        <Image source={icons.notification} style={styles.notifImg} />
        <View style={styles.notifCount}>
          <Text style={styles.notifText}>5</Text>
        </View>
      </TouchableOpacity>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={Colors.TEXT_LINEAR}
        style={styles.linearText}>
        <View style={styles.profView}>
          <Image source={images.profImg} style={styles.profImg} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default navigationOptions;
