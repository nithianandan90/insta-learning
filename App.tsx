import {FlatList, ScrollView, View} from 'react-native';
import {StyleSheet} from 'react-native';
import FeedPost from './src/components/FeedPosts';
import posts from './src/assets/data/post.json';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <CommentsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
