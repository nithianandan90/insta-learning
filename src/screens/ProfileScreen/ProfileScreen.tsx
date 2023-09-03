import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import React from 'react';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import FeedGridView from '../../components/FeedGridView';
import {
  UserProfileNavigationProp,
  UserProfileRouteProp,
  MyProfileNavigationProp,
  MyProfileRouteProp,
} from '../../types/navigation';

const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();

  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();
  const userId = route.params?.userId;

  navigation.setOptions({title: user[0].username});

  return (
    <FeedGridView data={user[0].posts} ListHeaderComponent={ProfileHeader} />
  );
};

export default ProfileScreen;
