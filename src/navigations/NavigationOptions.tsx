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
        <Image
          source={icons.notification}
          style={{width: vw * 7.5, height: vw * 7.5}}
        />
        <View
          style={{
            position: 'absolute',
            right: 0,
            width: vw * 3.5,
            height: vw * 3.5,
            borderRadius: vw * 3.5,
            backgroundColor: Colors.NOTIF_COLOR,
          }}>
          <Text style={{...Fonts.Regular(10), textAlign: 'center'}}>5</Text>
        </View>
      </TouchableOpacity>
      <LinearGradient
        start={{x: 0, y: 0}} // Start at the top-left corner (0, 0)
        end={{x: 1, y: 1}} // End at the bottom-right corner (1, 1)
        colors={Colors.TEXT_LINEAR}
        style={{
          height: vw * 11,
          width: vw * 11,
          borderRadius: vw * 5.5,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: vw * 5,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Colors.BG_COLOR,
            height: vw * 10.4,
            width: vw * 10.4,
            borderRadius: vw * 5.2,
          }}>
          <Image
            source={images.profImg}
            style={{width: vw * 9, height: vw * 9, borderRadius: vw * 4.5}}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default navigationOptions;
