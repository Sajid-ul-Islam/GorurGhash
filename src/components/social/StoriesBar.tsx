import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { SocialStory } from '../../services/social/ISocialService';
import { socialService } from '../../services/social/MockSocialService';
import { StoryViewerModal } from './StoryViewerModal';
import { Colors, Spacing } from '../../constants/theme';

export const StoriesBar: React.FC = () => {
  const [stories, setStories] = useState<SocialStory[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    socialService.getStories().then(setStories);
  }, []);

  if (stories.length === 0) return null;

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {stories.map((story, index) => (
          <TouchableOpacity
            key={story.id}
            style={styles.storyItem}
            activeOpacity={0.8}
            onPress={() => setSelectedIndex(index)}
          >
            <View
              style={[
                styles.avatarRing,
                story.hasUnseen ? styles.unseenRing : styles.seenRing,
              ]}
            >
              <Image
                source={{ uri: story.thumbnailUrl }}
                style={styles.avatarImage}
              />
            </View>
            <Text style={styles.storyTitle} numberOfLines={1}>
              {story.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {selectedIndex !== null && (
        <StoryViewerModal
          visible={selectedIndex !== null}
          stories={stories}
          initialIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    paddingVertical: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  scrollContent: {
    paddingHorizontal: Spacing.md,
    gap: 14,
  },
  storyItem: {
    alignItems: 'center',
    width: 68,
  },
  avatarRing: {
    width: 62,
    height: 62,
    borderRadius: 31,
    padding: 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  unseenRing: {
    borderColor: '#FBDD01',
    backgroundColor: '#000000',
  },
  seenRing: {
    borderColor: Colors.border,
    backgroundColor: 'transparent',
  },
  avatarImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: Colors.borderSubtle,
  },
  storyTitle: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginTop: 4,
    textAlign: 'center',
  },
});
