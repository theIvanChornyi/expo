import { View } from 'react-native';
import { PostOwner } from '../PostOwner/PostOwner';
import { PostBody } from '../PostBody/PostBody';

export const Post = ({ owner, ...other }) => {
  const { avatar: image } = owner;
  const { photo } = other;
  return (
    <View>
      <PostOwner {...{ ...owner, image }} />
      <PostBody {...{ ...other, image: photo }} />
    </View>
  );
};
