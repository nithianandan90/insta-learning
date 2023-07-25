import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IPost} from '../../types/models';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';

const FeedGridItem = ({item}: {item: IPost}) => {
  return (
    <View
      style={{
        flex: 1,
        margin: 1,
        aspectRatio: 1,
        maxWidth: '33.33%',
        padding: 1,
      }}>
      <Image source={{uri: item.image || item.images[0]}} style={{flex: 1}} />

      {item.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color={colors.white}
          style={{position: 'absolute', top: 5, right: 5}}
        />
      )}
    </View>
  );
};

export default FeedGridItem;

const styles = StyleSheet.create({});
