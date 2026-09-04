import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  Linking,
} from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/common/Header';
import { productService } from '../../src/services';
import { Product } from '../../src/types';
import { AppConfig } from '../../src/constants/config';
import { Colors, BorderRadius, Spacing, Typography, Shadows } from '../../src/constants/theme';
import { formatPrice } from '../../src/utils/formatters';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  products?: Product[];
  timestamp: string;
}

export default function ChatScreen() {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-1',
      sender: 'bot',
      text: "Yo! I'm GhashBot 🐮, your official Gorur Ghash style & support advisor. How can I help you rock Dhaka streetwear today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [catalog, setCatalog] = useState<Product[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    productService.getProducts().then(setCatalog);
  }, []);

  const presetQuestions = [
    '📏 Sizing & fit guide',
    '👕 Best oversized tees',
    '👖 Corduroy & cargo drops',
    '🔄 48-hr exchange & courier trial',
    '💬 Talk to human support',
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input.trim();
    if (!textToSend) return;

    if (textToSend.includes('human') || textToSend.includes('support') || textToSend.includes('talk')) {
      const userMsg: ChatMessage = {
        id: `usr_${Date.now()}`,
        sender: 'user',
        text: textToSend,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, userMsg]);
      if (!queryText) setInput('');
      setIsTyping(true);

      setTimeout(() => {
        const botMsg: ChatMessage = {
          id: `bot_${Date.now()}`,
          sender: 'bot',
          text: `Connecting you to our Dhaka support team! You can reach us directly on WhatsApp (${AppConfig.contact.whatsapp}) or call our hotline (${AppConfig.contact.helpline1}) during support hours (Sat-Thu 10 AM - 7 PM).`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setIsTyping(false);
        setMessages((prev) => [...prev, botMsg]);
      }, 700);
      return;
    }

    const userMsg: ChatMessage = {
      id: `usr_${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const q = textToSend.toLowerCase();
      let reply = '';
      let matchedProducts: Product[] = [];

      if (q.includes('size') || q.includes('fit') || q.includes('sizing')) {
        reply = "Gorur Ghash garments feature an oversized street drape. For a relaxed aesthetic, order your true size. If you prefer a trimmer silhouette, size down one step. Every delivery comes with an on-spot courier trial!";
      } else if (q.includes('exchange') || q.includes('trial') || q.includes('policy')) {
        reply = "We offer a 48-hour exchange window! Try your items on when the courier arrives. If the fit isn't 100%, let us know within 48 hours and we'll swap sizes or grant equal store credit.";
      } else if (q.includes('cargo') || q.includes('pant')) {
        matchedProducts = catalog.filter((p) =>
          p.name.toLowerCase().includes('cargo') || p.categories.some((c) => c.toLowerCase().includes('pant'))
        ).slice(0, 3);
        reply = "Here are our signature multi-pocket cargo pants and trousers. Cut for maximum ease with deep pockets:";
      } else if (q.includes('tee') || q.includes('oversized') || q.includes('graphic')) {
        matchedProducts = catalog.filter((p) =>
          p.name.toLowerCase().includes('tee') || p.name.toLowerCase().includes('shirt')
        ).slice(0, 3);
        reply = "Check out these 260 GSM combed cotton heavyweight drops:";
      } else if (q.includes('corduroy') || q.includes('jacket') || q.includes('winter')) {
        matchedProducts = catalog.filter((p) =>
          p.name.toLowerCase().includes('corduroy') || p.name.toLowerCase().includes('henley')
        ).slice(0, 3);
        reply = "Here are our trending layered garments and corduroy overshirts:";
      } else {
        matchedProducts = catalog.slice(0, 2);
        reply = `Found great items matching your vibe:`;
      }

      const botMsg: ChatMessage = {
        id: `bot_${Date.now()}`,
        sender: 'bot',
        text: reply,
        products: matchedProducts.length > 0 ? matchedProducts : undefined,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  const handleWhatsApp = () => {
    Linking.openURL(`https://wa.me/${AppConfig.contact.whatsapp.replace('+', '')}`).catch(() => {});
  };

  const handleCall = () => {
    Linking.openURL(`tel:${AppConfig.contact.helpline1}`).catch(() => {});
  };

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header title="AI Style & Support" subtitle="GhashBot • Online 24/7" />

      {/* Human Escalation Bar */}
      <View style={styles.escalationBar}>
        <View style={styles.escalationLeft}>
          <View style={styles.statusDot} />
          <Text style={styles.escalationText}>Need human help?</Text>
        </View>
        <View style={styles.escalationActions}>
          <TouchableOpacity style={styles.escalationBtn} onPress={handleWhatsApp}>
            <Ionicons name="logo-whatsapp" size={14} color="#25D366" />
            <Text style={styles.escalationBtnText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.escalationBtn} onPress={handleCall}>
            <Ionicons name="call-outline" size={14} color="#000000" />
            <Text style={styles.escalationBtnText}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
          renderItem={({ item }) => {
            const isBot = item.sender === 'bot';
            return (
              <View
                style={[
                  styles.msgWrapper,
                  isBot ? styles.msgWrapperBot : styles.msgWrapperUser,
                ]}
              >
                {isBot && (
                  <View style={styles.botAvatar}>
                    <Image
                      source={require('../../assets/images/gorurghash-cow.png')}
                      style={{ width: 22, height: 22 }}
                      resizeMode="contain"
                    />
                  </View>
                )}

                <View style={{ maxWidth: '80%' }}>
                  <View
                    style={[
                      styles.bubble,
                      isBot ? styles.bubbleBot : styles.bubbleUser,
                    ]}
                  >
                    <Text
                      style={[
                        styles.bubbleText,
                        isBot ? styles.bubbleTextBot : styles.bubbleTextUser,
                      ]}
                    >
                      {item.text}
                    </Text>
                    <Text
                      style={[
                        styles.timestamp,
                        isBot ? styles.timestampBot : styles.timestampUser,
                      ]}
                    >
                      {item.timestamp}
                    </Text>
                  </View>

                  {/* Recommendation Product Cards */}
                  {item.products && item.products.length > 0 && (
                    <View style={styles.productsContainer}>
                      {item.products.map((p: Product) => (
                        <TouchableOpacity
                          key={p.id}
                          style={styles.productCard}
                          activeOpacity={0.85}
                          onPress={() => router.push(`/product/${p.id}`)}
                        >
                          <Image source={{ uri: p.images[0] }} style={styles.productImg} />
                          <View style={styles.productInfo}>
                            <Text style={styles.prodName} numberOfLines={1}>
                              {p.name}
                            </Text>
                            <Text style={styles.prodPrice}>{formatPrice(p.price)}</Text>
                          </View>
                          <View style={styles.viewDropBtn}>
                            <Text style={styles.viewDropText}>View Drop</Text>
                            <Ionicons name="arrow-forward" size={12} color="#000000" />
                          </View>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            );
          }}
          ListFooterComponent={
            isTyping ? (
              <View style={styles.typingIndicator}>
                <View style={styles.botAvatar}>
                  <Image
                    source={require('../../../assets/images/gorurghash-cow.png')}
                    style={{ width: 20, height: 20 }}
                    resizeMode="contain"
                  />
                </View>
                <View style={[styles.bubble, styles.bubbleBot, { paddingVertical: 10 }]}>
                  <Text style={styles.typingText}>GhashBot is typing...</Text>
                </View>
              </View>
            ) : null
          }
        />

        {/* Quick Suggestion Chips */}
        <View style={styles.chipsContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={presetQuestions}
            keyExtractor={(item) => item}
            contentContainerStyle={styles.chipsScroll}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.chip}
                activeOpacity={0.7}
                onPress={() => handleSend(item)}
              >
                <Text style={styles.chipText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Input Bar */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Ask GhashBot about sizing, drops, or orders..."
            placeholderTextColor={Colors.textMuted}
            value={input}
            onChangeText={setInput}
            onSubmitEditing={() => handleSend()}
            returnKeyType="send"
          />
          <TouchableOpacity
            style={[styles.sendBtn, !input.trim() && styles.sendBtnDisabled]}
            onPress={() => handleSend()}
            disabled={!input.trim()}
          >
            <Ionicons name="send" size={18} color="#000000" />
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
  escalationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: Spacing.lg,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  escalationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
  },
  escalationText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  escalationActions: {
    flexDirection: 'row',
    gap: 8,
  },
  escalationBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceAlt,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: BorderRadius.full,
    gap: 4,
  },
  escalationBtnText: {
    fontSize: 11,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  listContent: {
    padding: Spacing.md,
    paddingBottom: Spacing.lg,
  },
  msgWrapper: {
    flexDirection: 'row',
    marginBottom: Spacing.md,
    alignItems: 'flex-end',
  },
  msgWrapperBot: {
    justifyContent: 'flex-start',
  },
  msgWrapperUser: {
    justifyContent: 'flex-end',
  },
  botAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FBDD01',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.xs,
  },
  bubble: {
    borderRadius: BorderRadius.lg,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    ...Shadows.sm,
  },
  bubbleBot: {
    backgroundColor: Colors.surface,
    borderBottomLeftRadius: BorderRadius.xs,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  bubbleUser: {
    backgroundColor: '#000000',
    borderBottomRightRadius: BorderRadius.xs,
  },
  bubbleText: {
    ...Typography.body,
    lineHeight: 20,
  },
  bubbleTextBot: {
    color: Colors.textPrimary,
  },
  bubbleTextUser: {
    color: '#FFFFFF',
  },
  timestamp: {
    fontSize: 9,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  timestampBot: {
    color: Colors.textMuted,
  },
  timestampUser: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  productsContainer: {
    marginTop: 8,
    gap: 8,
  },
  productCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Shadows.sm,
  },
  productImg: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.xs,
    backgroundColor: Colors.surfaceAlt,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  prodName: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  prodPrice: {
    fontSize: 11,
    fontWeight: '900',
    color: Colors.brandRed,
    marginTop: 2,
  },
  viewDropBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBDD01',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: BorderRadius.full,
    gap: 4,
  },
  viewDropText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#000000',
  },
  typingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  typingText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: Colors.textMuted,
  },
  chipsContainer: {
    backgroundColor: Colors.surface,
    paddingVertical: Spacing.xs,
    borderTopWidth: 1,
    borderTopColor: Colors.borderSubtle,
  },
  chipsScroll: {
    paddingHorizontal: Spacing.md,
    gap: 8,
  },
  chip: {
    backgroundColor: Colors.surfaceAlt,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  chipText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    gap: 8,
  },
  textInput: {
    flex: 1,
    backgroundColor: Colors.surfaceAlt,
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: Platform.OS === 'ios' ? 10 : 8,
    fontSize: 14,
    color: Colors.textPrimary,
  },
  sendBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FBDD01',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnDisabled: {
    backgroundColor: Colors.border,
    opacity: 0.5,
  },
});
