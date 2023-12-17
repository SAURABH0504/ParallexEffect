import * as React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../../color';
import {SCREENS} from '../../../navigation/constants';
import {SharedElement} from 'react-navigation-shared-element';
import Header from './components/Header';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = 480;
const ITEM_HEIGHT2 = 400;

interface Item {
  key: string;
  photo: string;
}

const images = [
  'https://static.displate.com/857x1200/displate/2021-04-21/0f0fc4d1caa37e1874c10f1c52a3da92_66be1a6b3b90f34c72f8f3499dace92e.jpg',
  'https://cdn.europosters.eu/image/750/posters/the-last-of-us-black-and-white-portrait-i23152.jpg',
  'https://static.displate.com/857x1200/displate/2021-04-21/0f0fc4d1caa37e1874c10f1c52a3da92_66be1a6b3b90f34c72f8f3499dace92e.jpg',
  'https://i.ebayimg.com/images/g/iSYAAOSw0thjf5bo/s-l500.jpg',
  'https://static.displate.com/857x1200/displate/2021-04-21/0f0fc4d1caa37e1874c10f1c52a3da92_66be1a6b3b90f34c72f8f3499dace92e.jpg',
  'https://static.displate.com/857x1200/displate/2021-04-21/0f0fc4d1caa37e1874c10f1c52a3da92_66be1a6b3b90f34c72f8f3499dace92e.jpg',
  'https://i.ebayimg.com/images/g/iSYAAOSw0thjf5bo/s-l500.jpg',
  'https://static.displate.com/857x1200/displate/2021-04-21/0f0fc4d1caa37e1874c10f1c52a3da92_66be1a6b3b90f34c72f8f3499dace92e.jpg',
  'https://i.ebayimg.com/images/g/iSYAAOSw0thjf5bo/s-l500.jpg',
  'https://static.displate.com/857x1200/displate/2021-04-21/0f0fc4d1caa37e1874c10f1c52a3da92_66be1a6b3b90f34c72f8f3499dace92e.jpg',
];
const data = images.map((image, index) => ({
  key: String(index),
  photo: image,
}));

export default function HomeScreen({navigation}: {navigation: any}) {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const renderItem = ({item, index}: {item: Item; index: number}) => {
    const {photo} = item;

    const inputRange = [
      (index - 1) * ITEM_HEIGHT2,
      index * ITEM_HEIGHT2,
      (index + 1) * ITEM_HEIGHT2,
    ];

    const translateY = scrollY.interpolate({
      inputRange,
      outputRange: [-ITEM_HEIGHT * 0.1, 0, ITEM_HEIGHT * 0.1],
    });

    return (
      <View style={styles.listTile}>
        <View style={styles.imageTile}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS.GAME_DETAIL_SCREEN, {
                item: data[index],
              });
            }}>
            <SharedElement id={`item.${item.key}`}>
              <Animated.Image
                source={{uri: photo}}
                resizeMode={'stretch'}
                style={[styles.image, {transform: [{translateY}]}]}
              />
            </SharedElement>
          </TouchableOpacity>
          <View style={styles.detailsContainer}>
            <Text style={[styles.primaryText, styles.fs16]}>
              {'Predator Hundting ground'}
            </Text>
            <Text style={[styles.primaryText, styles.fs14]}>
              {'Exclusive Playstation'}
            </Text>
          </View>
        </View>
        {index % 2 === 0 && (
          <Animated.View
            style={[
              styles.leftIcon,
              {
                transform: [{translateY}],
              },
            ]}>
            <Image
              style={styles.leftArrowImage}
              source={require('../../../assets/Arrow.png')}
            />
            <Image
              style={styles.leftCircleImage}
              source={require('../../../assets/ring.png')}
            />
          </Animated.View>
        )}
        {index % 2 !== 0 && (
          <Animated.View
            style={[
              styles.rightIcon,
              {
                transform: [{translateY}],
              },
            ]}>
            <Image
              style={styles.arrowImage}
              source={require('../../../assets/Arrow.png')}
            />
            <Image
              style={styles.circleImage}
              source={require('../../../assets/ring.png')}
            />
          </Animated.View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header color={COLORS.WHITE} />
      <FlatList
        showsVerticalScrollIndicator={false}
        onLayout={event => {
          console.log(event.nativeEvent.layout.height);
        }}
        data={data}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {y: scrollY},
              },
            },
          ],
          {useNativeDriver: false},
        )}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listTile: {width: width, alignItems: 'center'},
  primaryText: {
    color: COLORS.WHITE,
  },
  arrowImage: {height: 80, width: 100, right: 20},
  leftArrowImage: {height: 80, width: 100, left: 20},
  leftCircleImage: {height: 80, width: 120},
  circleImage: {height: 80, width: 120, right: 20},
  imageTile: {
    marginVertical: 20,
    borderRadius: 20,
    justifyContent: 'center',
    height: ITEM_HEIGHT2,
    width: ITEM_WIDTH,
    overflow: 'hidden',
  },
  leftIcon: {position: 'absolute', left: -10},
  rightIcon: {position: 'absolute', right: -10},
  fs14: {
    fontSize: 14,
  },
  fs16: {
    fontSize: 16,
  },
  detailsContainer: {
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  image: {
    height: ITEM_HEIGHT,
    width: ITEM_WIDTH,
  },
});
