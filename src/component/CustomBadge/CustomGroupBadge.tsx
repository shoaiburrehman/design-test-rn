import React, {FC} from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Fonts} from '../../themes';
import {Colors} from '../../themes/Colors';
import {vh, vw} from '../../themes/units';
import {icons} from '../../assets';

type ParticipantsType = {
  data: string[];
  imageStyle: ImageStyle;
};

const CustomGroupBadge: FC<ParticipantsType> = ({
  data = [],
  imageStyle = {},
}) => {
  return (
    <View style={styles.BadgeSec}>
      <View
        style={{
          justifyContent: 'center',
        }}>
        {data &&
          data.length > 0 &&
          data.map((item, i) => {
            return (
              <>
                <View
                  style={[
                    styles.container,
                    {
                      left: i * 25,
                    },
                  ]}
                  key={i}>
                  <Image style={imageStyle} source={item} />
                </View>
                {data.length - 1 == i && (
                  <View
                    style={[
                      styles.container,
                      {
                        left: (i + 1) * 25,
                      },
                    ]}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={[imageStyle, styles.imageStyle]}>
                      <Text style={{...Fonts.Light(10, Colors.WHITE)}}>
                        40+
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addCircle}>
                      <Image source={icons.add} style={styles.addIcon} />
                    </TouchableOpacity>
                  </View>
                )}
              </>
            );
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BadgeSec: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    height: vh * 6,
  },
  peoplePresent: {
    paddingLeft: vw * 3,
    width: '100%',
    ...Fonts.Medium(14, Colors.WHITE),
  },
  container: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    position: 'absolute',
  },
  imageStyle: {
    backgroundColor: Colors.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCircle: {
    position: 'absolute',
    left: vw * 10.5,
    width: vw * 8,
    height: vw * 8,
    borderRadius: vw * 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLACK_CIRCLE2,
  },
  addIcon: {
    width: vw * 5,
    height: vw * 5,
  },
});

export default CustomGroupBadge;
