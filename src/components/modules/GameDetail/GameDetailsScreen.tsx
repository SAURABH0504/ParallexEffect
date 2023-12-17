import * as React from 'react';
import {
  Animated,
  Dimensions,
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import Header from '../Home/components/Header';
import {COLORS} from '../../../color';
const {width, height} = Dimensions.get('screen');

interface Item {
  key?: string;
  photo?: string;
}

interface GameDetailScreenProps {
  route: {
    params: {
      item: Item;
    };
  };
}

function GameDetailsScreen(props: GameDetailScreenProps) {
  const animation = React.useRef(new Animated.Value(0)).current;

  const translate = animation.interpolate({
    inputRange: [0, 1, 1],
    outputRange: [0, 1.2, 1],
  });

  const translateButton = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0],
  });

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  return (
    <View style={styles.container}>
      <SharedElement id={`item.${props.route.params.item.key}`}>
        <>
          <Header color={COLORS.BLACK} />
          <ImageBackground
            style={styles.image}
            source={{
              uri: props.route.params.item.photo,
            }}
            resizeMode={'stretch'}>
            <Animated.Image
              style={[
                styles.gamesLogo,
                {
                  transform: [{scaleX: translate}, {scaleY: translate}],
                },
              ]}
              source={require('../../../assets/Games.png')}
            />
            <Animated.View
              style={[
                styles.orderButon,
                {transform: [{translateY: translateButton}]},
              ]}>
              <TouchableOpacity style={{flex: 1}}>
                <View>
                  <Text style={styles.primarytext}>{'Pre order now'}</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          </ImageBackground>
        </>
      </SharedElement>
    </View>
  );
}

GameDetailsScreen.sharedElements = (route: any) => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.key}`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: 'orderButton',
      animation: 'move',
      resize: 'clip',
    },
  ];
};

export default GameDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gamesLogo: {
    borderRadius: 30,
    width: 60,
    height: 60,
    alignSelf: 'flex-end',
    margin: 20,
  },
  image: {
    height: height * 0.9,
    width: width,
  },
  orderButon: {
    width: '90%',
    backgroundColor: COLORS.BLUE,
    position: 'absolute',
    alignSelf: 'center',
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
    bottom: 80,
  },
  primarytext: {
    color: COLORS.WHITE,
    fontSize: 16,
  },
});
