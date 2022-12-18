import React from 'react';
import { AppImage, Text } from 'components/common';
import { elapsedTime } from 'helpers/common';
import { useTheme } from 'hooks';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import common from 'theme/common';
import dark from 'theme/dark';
import light from 'theme/light';

interface PostProps {
  post: typeof import('../../../mock/posts.json').posts[0];
}

const PostCard: React.FC<PostProps> = ({ post }) => {
  const { themeMode, theme } = useTheme();

  return (
    <View style={[styles.container, toggledStyles[themeMode].container]}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AppImage source={{ uri: post.user.avatar }} style={styles.avatar} resizeMode={FastImage.resizeMode.contain} />
        </TouchableOpacity>
        <View>
          <Text style={styles.posterName}>{post.user.name}</Text>
          <Text style={styles.elapsedTime}>{elapsedTime(new Date(post.created_at))}</Text>
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <Text style={{ fontSize: common.fontSizes.h3, marginBottom: 6 }}>{post.title}</Text>
        <Text style={{ fontSize: common.fontSizes.regular }}>{post.body}</Text>
      </View>

      <View style={styles.mediaContainer}>
        {post.media.map(media => {
          return <AppImage key={media.id} source={{ uri: media.url }} style={{ flex: 1, aspectRatio: 1 }} resizeMode={FastImage.resizeMode.cover} />;
        })}
      </View>

      <View style={styles.detailsContainer}>
        <Text>1.1K</Text>

        <Text>
          <Text>
            <Text>100</Text>
            <Text> Comment </Text>
          </Text>

          <Text>
            <Text>100</Text>
            <Text> Shares </Text>
          </Text>

          <Text>
            <Text>100</Text>
            <Text> Views</Text>
          </Text>
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.bottomTouchable}>
          <Text>Like</Text>
        </TouchableOpacity>
        <View style={styles.bottomTouchableSeparator} />
        <TouchableOpacity style={styles.bottomTouchable}>
          <Text>Comments</Text>
        </TouchableOpacity>
        <View style={styles.bottomTouchableSeparator} />
        <TouchableOpacity style={styles.bottomTouchable}>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    paddingHorizontal: common.screen.paddingHorizontal,
    width: '100%',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  posterName: {
    fontSize: common.fontSizes.input,
  },
  elapsedTime: {
    fontSize: common.fontSizes.small,
  },

  bodyContainer: {
    marginBottom: 10,
    paddingHorizontal: common.screen.paddingHorizontal,
  },

  mediaContainer: {
    width: '100%',
    backgroundColor: light.colors.gray200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: common.screen.paddingHorizontal,
    marginVertical: 10,
  },

  bottomContainer: {
    borderTopColor: light.colors.gray400,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  bottomTouchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  bottomTouchableSeparator: {
    width: 0.5,
    height: '100%',
    backgroundColor: light.colors.gray400,
  },
});

const toggledStyles = {
  light: StyleSheet.create({
    container: {
      backgroundColor: light.colors.postCard.background,
    },
  }),
  dark: StyleSheet.create({
    container: {
      backgroundColor: dark.colors.postCard.background,
    },
  }),
};

export default PostCard;
