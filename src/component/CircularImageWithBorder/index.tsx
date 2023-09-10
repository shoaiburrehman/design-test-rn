import React from 'react';
import {View, Image} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {vw} from '../../themes/units';

type Props = {
  imageUrl: string;
  colors: string[];
};

export const CircularImageWithBorder: React.FC<Props> = ({
  imageUrl,
  colors,
}) => {
  const borderWidth = 10; // Adjust the border width as needed

  return (
    <View
      style={{
        width: 40 + 2 * borderWidth, // Adjust the size of your circular container
        height: 40 + 2 * borderWidth, // Adjust the size of your circular container
        borderRadius: 20 + borderWidth, // Half of the width and height plus the border width
        overflow: 'hidden', // Clip the content to the circular shape
      }}>
      <LinearGradient
        colors={colors} // An array of colors for the gradient
        style={{
          flex: 1, // Make the gradient fill the entire circular container
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={imageUrl} // URL to your image
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 75, // Half of the width and height for a perfect circle
          }}
        />
      </LinearGradient>
    </View>
  );
};
