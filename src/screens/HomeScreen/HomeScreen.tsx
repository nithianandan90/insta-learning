import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ViewToken,
  ViewabilityConfig,
} from 'react-native';
import React, {useRef, useState} from 'react';
import FeedPost from '../../components/FeedPosts/FeedPost';
import posts from '../../assets/data/post.json';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      console.log('changed');

      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => (
          <FeedPost post={item} isVisible={activePostId === item.id} />
        )} // {item}
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
