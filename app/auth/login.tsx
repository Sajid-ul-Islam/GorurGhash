import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Alert, Image } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/common/Header';
import { Input } from '../../src/components/common/Input';
import { Button } from '../../src/components/common/Button';
import { useAuth } from '../../src/context/AuthContext';
import { isValidBdPhone } from '../../src/utils/formatters';
import { Colors, BorderRadius, Spacing, Typography, Shadows } from '../../src/constants/theme';

export default function LoginScreen() {
  const router = useRouter();
  const { requestOtp, loginWithGoogle, loginWithFacebook } = useAuth();

  const [phone, setPhone] = useState('01713222653');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async () => {
    if (!isValidBdPhone(phone)) {
      setError('Please enter a valid 11-digit Bangladeshi mobile number.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      const res = await requestOtp(phone);
      if (res.success) {
        router.push(`/auth/verify-otp?phone=${encodeURIComponent(phone)}`);
      }
    } catch (e: any) {
      Alert.alert('Error', e.message || 'Could not send verification code.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialGoogle = async () => {
    try {
      await loginWithGoogle();
      router.back();
    } catch (e: any) {
      Alert.alert('Google Sign-In', e.message || 'Failed to sign in.');
    }
  };

  const handleSocialFacebook = async () => {
    try {
      await loginWithFacebook();
      router.back();
    } catch (e: any) {
      Alert.alert('Facebook Sign-In', e.message || 'Failed to sign in.');
    }
  };

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header showBack title="Account Login" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Brand Header */}
          <View style={styles.logoSection}>
            <View style={styles.logoBadge}>
              <Image
                source={require('../../assets/images/gorurghash-cow.png')}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.title}>GORUR GHASH</Text>
            <Text style={styles.subtitle}>Log in or create your account with mobile OTP</Text>
          </View>

          {/* Phone Form Card */}
          <View style={styles.card}>
            <Input
              label="Bangladeshi Mobile Number"
              placeholder="01XXXXXXXXX"
              value={phone}
              onChangeText={(t) => {
                setPhone(t);
                if (error) setError('');
              }}
              error={error}
              keyboardType="phone-pad"
              leftIcon="call-outline"
              helperText="We will send a 4-digit verification code via SMS."
            />

            <Button
              title="Send Verification Code"
              onPress={handleSendOtp}
              loading={loading}
              size="lg"
              style={styles.sendBtn}
            />

            <Text style={styles.disclaimerText}>
              By proceeding, you agree to Gorur Ghash's Terms of Service and Trial & Exchange Policies.
            </Text>
          </View>

          {/* Social Logins */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          <View style={styles.socialButtonsRow}>
            <TouchableOpacity
              style={styles.socialBtn}
              onPress={handleSocialGoogle}
              activeOpacity={0.8}
            >
              <Ionicons name="logo-google" size={18} color="#EA4335" />
              <Text style={styles.socialBtnText}>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialBtn}
              onPress={handleSocialFacebook}
              activeOpacity={0.8}
            >
              <Ionicons name="logo-facebook" size={18} color="#1877F2" />
              <Text style={styles.socialBtnText}>Facebook</Text>
            </TouchableOpacity>
          </View>

          {/* Guest Browsing */}
          <TouchableOpacity
            style={styles.guestLink}
            onPress={() => router.back()}
          >
            <Text style={styles.guestLinkText}>Continue browsing as Guest</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </FullScreenContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: Spacing.lg,
    paddingTop: Spacing.xl,
    paddingBottom: Spacing.xxl,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  logoBadge: {
    width: 64,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#FBDD01',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.sm,
    ...Shadows.md,
    padding: 6,
  },
  logoImage: {
    width: 48,
    height: 48,
  },
  logoText: {
    color: Colors.textPrimary,
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 1,
  },
  title: {
    ...Typography.heading1,
    color: Colors.textPrimary,
    letterSpacing: 1.5,
    fontWeight: '900',
  },
  subtitle: {
    ...Typography.body,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: 4,
  },
  card: {
    backgroundColor: Colors.surface,
    padding: Spacing.lg,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Shadows.sm,
    marginBottom: Spacing.lg,
  },
  sendBtn: {
    marginTop: Spacing.sm,
    width: '100%',
  },
  disclaimerText: {
    ...Typography.caption,
    color: Colors.textMuted,
    textAlign: 'center',
    marginTop: Spacing.md,
    lineHeight: 16,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.border,
  },
  dividerText: {
    ...Typography.caption,
    color: Colors.textMuted,
    marginHorizontal: Spacing.md,
    textTransform: 'uppercase',
  },
  socialButtonsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.lg,
  },
  socialBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    height: 48,
  },
  socialBtnText: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    color: Colors.textPrimary,
    marginLeft: Spacing.sm,
  },
  guestLink: {
    alignItems: 'center',
    paddingVertical: Spacing.sm,
  },
  guestLinkText: {
    ...Typography.bodyMedium,
    color: Colors.textSecondary,
    textDecorationLine: 'underline',
  },
});
