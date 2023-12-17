import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Drawer, PlayStation} from '../../../../assets';
import {COLORS} from '../../../../color';

type Props = {
  color: string;
};

const Header = (props: Props): JSX.Element => {
  return (
    <View
      style={[
        styles.mainContainer,
        {backgroundColor: props.color || COLORS.WHITE},
      ]}>
      <View>
        <Drawer />
      </View>
      <View style={styles.iconContainer2}>
        <PlayStation />
      </View>
      <View>
        <Drawer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  iconContainer2: {
    alignSelf: 'center',
  },
});

export default Header;
