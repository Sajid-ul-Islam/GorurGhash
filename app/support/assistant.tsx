import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/common/Header';
import { productService } from '../../src/services';
import { Product } from '../../src/types';
import { Colors, BorderRadius, Spacing, Typography, Shadows } from '../../src/constants/theme';
import { formatPrice } from '../../src/utils/formatters';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  products?: Product[];
  timestamp: string;
}

export default function AssistantScreen() {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: "Yo! I'm GhashBot 🐮, your Gorur Ghash personal style advisor. Looking for cargo trousers, oversized graphic tees, waffle henleys, or sizing tips for Dhaka street style?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [catalog, setCatalog] = useState<Product[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    productService.getProducts().then(setCatalog);
  }, []);

  const presetQuestions = [
    'Best cargo pants under ৳2,000',
    'Recommend oversized graphic tees',
    'Show waffle textured henleys',
    'How does sizing work?',
    'Exchange policy guidelines',
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input.trim();
    if (!textToSend) return;

    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInput('');
    setIsTyping(true);

    setTimeout(async () => {
      const q = textToSend.toLowerCase();
      let reply = '';
      let matchedProducts: Product[] = [];

      if (q.includes('cargo') || q.includes('pant') || q.includes('bottom')) {
        matchedProducts = catalog.filter((p) =>
          p.name.toLowerCase().includes('cargo') || p.categories.some((c) => c.toLowerCase().includes('pant'))
        ).slice(0, 3);
        reply = "Here are our top-rated utilitarian cargo and relaxed pants. Pair them with a boxy tee or Cuban shirt for an effortless silhouette!";
      } else if (q.includes('tee') || q.includes('t-shirt') || q.includes('oversized')) {
        matchedProducts = catalog.filter((p) =>
          p.name.toLowerCase().includes('t-shirt') || p.name.toLowerCase().includes('tee')
        ).slice(0, 3);
        reply = "Check out these heavy-gram graphic drops. Cut with relaxed shoulders and durable necklines that don't sag after washes.";
      } else if (q.includes('henley') || q.includes('waffle') || q.includes('sleeve')) {
        matchedProducts = catalog.filter((p) =>
          p.name.toLowerCase().includes('henley') || p.name.toLowerCase().includes('waffle')
        ).slice(0, 3);
        reply = "Our signature Waffle Textured Henleys! Breathable thermal weave, perfect for layering or solo wear in Dhaka weather.";
      } else if (q.includes('size') || q.includes('fit') || q.includes('measurement')) {
        reply = "Gorur Ghash garments feature a relaxed, contemporary street cut. If you like a true oversized drape, order your regular size. If you prefer a fitted look, consider sizing down one size. Plus, we offer on-spot trial with the courier and 48-hour exchanges!";
      } else if (q.includes('exchange') || q.includes('return') || q.includes('policy')) {
        reply = "We offer an on-spot trial right when the courier rider arrives! If the size isn't right, notify us within 48 hours and we will exchange it for another size or issue equal store credit.";
      } else {
        matchedProducts = catalog.filter((p) =>
          p.name.toLowerCase().includes(q) || p.categories.some((c) => c.toLowerCase().includes(q))
        ).slice(0, 2);
        if (matchedProducts.length > 0) {
          reply = `Found ${matchedProducts.length} drops matching "${textToSend}". Check these out:`;
        } else {
          matchedProducts = catalog.slice(0, 2);
          reply = `Great taste! Check out our trending drops right now:`;
        }
      }

      const botMsg: ChatMessage = {
        id: `bot_${Date.now()}`,
        sender: 'bot',
        text: reply,
        products: matchedProducts.length > 0 ? matchedProducts : undefined,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header
        showBack
        title="GhashBot"
        subtitle="AI Personal Streetwear Advisor"
        showWishlist={false}
      />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.chatContent}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageBubbleContainer,
                item.sender === 'user' ? styles.userContainer : styles.botContainer,
              ]}
            >
              {item.sender === 'bot' && (
                <View style={styles.botAvatar}>
                  <Text style={{ fontSize: 16 }}>🐮</Text>
                </View>
              )}

              <View
                style={[
                  styles.bubble,
                  item.sender === 'user' ? styles.userBubble : styles.botBubble,
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    item.sender === 'user' ? styles.userMessageText : styles.botMessageText,
                  ]}
                >
                  {item.text}
                </Text>

                {/* Product recommendation mini cards */}
                {item.products && (
                  <View style={styles.productRecommendations}>
                    {item.products.map((p: Product) => (
                      <TouchableOpacity
                        key={p.id}
                        activeOpacity={0.8}
                        onPress={() => router.push(`/product/${p.id}`)}
                        style={styles.productMiniCard}
                      >
                        <Image source={{ uri: p.images[0] }} style={styles.miniImage} />
                        <View style={styles.miniDetails}>
                          <Text style={styles.miniTitle} numberOfLines={1}>
                            {p.name}
                          </Text>
                          <Text style={styles.miniPrice}>{formatPrice(p.price)}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={16} color={Colors.primary} />
                      </TouchableOpacity>
                    ))}
                  </View>
                )}

                <Text style={styles.timestamp}>{item.timestamp}</Text>
              </View>
            </View>
          )}
          ListFooterComponent={
            isTyping ? (
              <View style={styles.typingContainer}>
                <Text style={styles.typingText}>GhashBot is cooking a recommendation...</Text>
              </View>
            ) : null
          }
        />

        {/* Quick prompt suggestions */}
        <View style={styles.suggestionsContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={presetQuestions}
            keyExtractor={(item) => item}
            contentContainerStyle={styles.suggestionsList}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.suggestionChip}
                onPress={() => handleSend(item)}
              >
                <Text style={styles.suggestionText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Input Bar */}
        <View style={styles.inputBar}>
          <TextInput
            style={styles.textInput}
            placeholder="Ask GhashBot for sizing, drops, or fits..."
            placeholderTextColor={Colors.textMuted}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={() => handleSend()}
          />
          <TouchableOpacity
            style={[styles.sendBtn, !input.trim() && styles.sendBtnDisabled]}
            disabled={!input.trim()}
            onPress={() => handleSend()}
          >
            <Ionicons name="send" size={18} color={Colors.textWhite} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </FullScreenContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  chatContent: {
    padding: Spacing.lg,
    paddingBottom: Spacing.md,
  },
  messageBubbleContainer: {
    flexDirection: 'row',
    marginBottom: Spacing.md,
  },
  userContainer: {
    justifyContent: 'flex-end',
  },
  botContainer: {
    justifyContent: 'flex-start',
  },
  botAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primarySubtle,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.xs,
    alignSelf: 'flex-end',
  },
  bubble: {
    maxWidth: '82%',
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
    ...Shadows.sm,
  },
  userBubble: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 2,
  },
  botBubble: {
    backgroundColor: Colors.surface,
    borderBottomLeftRadius: 2,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  messageText: {
    ...Typography.body,
    lineHeight: 20,
  },
  userMessageText: {
    color: Colors.textWhite,
  },
  botMessageText: {
    color: Colors.textPrimary,
  },
  timestamp: {
    fontSize: 9,
    color: Colors.textMuted,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  productRecommendations: {
    marginTop: Spacing.sm,
    gap: Spacing.xs,
  },
  productMiniCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceAlt,
    padding: Spacing.xs + 2,
    borderRadius: BorderRadius.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  miniImage: {
    width: 40,
    height: 48,
    borderRadius: BorderRadius.xs,
  },
  miniDetails: {
    flex: 1,
    marginLeft: Spacing.sm,
  },
  miniTitle: {
    ...Typography.caption,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  miniPrice: {
    fontSize: 11,
    fontWeight: '800',
    color: Colors.primary,
    marginTop: 2,
  },
  typingContainer: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
  },
  typingText: {
    ...Typography.caption,
    fontStyle: 'italic',
    color: Colors.textMuted,
  },
  suggestionsContainer: {
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.borderSubtle,
    paddingVertical: Spacing.xs,
  },
  suggestionsList: {
    paddingHorizontal: Spacing.lg,
    gap: Spacing.xs + 2,
  },
  suggestionChip: {
    backgroundColor: Colors.primarySubtle,
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: '#C3E1F7',
  },
  suggestionText: {
    ...Typography.caption,
    fontWeight: '700',
    color: Colors.primaryDark,
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
  textInput: {
    flex: 1,
    height: 44,
    backgroundColor: Colors.surfaceAlt,
    borderRadius: BorderRadius.md,
    paddingHorizontal: Spacing.md,
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: Spacing.sm,
  },
  sendBtnDisabled: {
    opacity: 0.45,
  },
});
