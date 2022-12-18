import React, { useRef } from 'react';
import { Screen, Text } from 'components/common';
import { PostCard } from 'components/listItems';
import { useTheme } from 'hooks';
import { StyleSheet, View } from 'react-native';
import Animated, { Extrapolate } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import common from 'theme/common';
import postsData from '../../mock/posts.json';

export default function HomeScreen() {
  const { theme } = useTheme();
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampScrollY = Animated.diffClamp(scrollY, 0, 115);
  const headerHeight = Animated.interpolateNode(diffClampScrollY, {
    inputRange: [0, 65],
    outputRange: [65, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  const translateY = Animated.interpolateNode(diffClampScrollY, {
    inputRange: [0, 65],
    outputRange: [0, -65],
    extrapolate: Extrapolate.CLAMP,
  });
  const headerOpacity = Animated.interpolateNode(diffClampScrollY, {
    inputRange: [0, 65],
    outputRange: [65, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  function renderItem({ item }: { item: typeof postsData.posts[0] }): JSX.Element {
    return <PostCard post={item} />;
  }

  return (
    <Screen edges={['top']} style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            height: headerHeight,
            opacity: headerOpacity,
            transform: [{ translateY: translateY }],
          },
        ]}>
        <Icon name="navicon" size={30} color={theme.colors.primary} />
        <Text style={styles.headerText}>Socialy</Text>
      </Animated.View>

      <View style={{ flexGrow: 1, backgroundColor: theme.colors.gray300 }}>
        <Animated.FlatList
          data={postsData.posts}
          bounces={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: common.list.distanceBetweenItems }} />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // paddingHorizontal: common.screen.paddingHorizontal,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: common.screen.paddingHorizontal,
  },
  headerText: {
    fontSize: common.fontSizes.h1,
    marginLeft: 20,
  },
  listContentContainer: {
    backgroundColor: 'red',
  },
});
