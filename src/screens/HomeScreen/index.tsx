import React, {useState} from 'react';
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
import {tabData} from '../../data';

const HomeScreen = (props: any) => {
  const [tabLabel, setTabLabel] = useState(tabData[0].label);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
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
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.tabView}>
            {tabData.map((item, index) => (
              <TouchableOpacity style={styles.tabListingView}>
                <Text style={styles.tabTextStyle}>{item.title}</Text>
                <View style={styles.numberView}>
                  <Text style={styles.numberText}>{item.number}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View>
          <View style={[styles.cardView1, styles.cardView2]} />
          <View style={styles.cardView1} />

          <ImageBackground
            source={images.bgImg}
            style={{width: '100%', height: vh * 54}}
            resizeMode="contain"></ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
