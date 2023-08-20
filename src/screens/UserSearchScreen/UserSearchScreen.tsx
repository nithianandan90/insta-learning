import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import UserListItem from '../../components/UserListItem/UserListItem';

const UserSearchScreen = () => {
  console.log(user);

  return (
    <FlatList
      data={user}
      renderItem={({item}) => <UserListItem user={item} />}
    />
  );
};

export default UserSearchScreen;
