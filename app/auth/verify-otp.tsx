import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import FullScreenContainer from '../../src/components/FullScreenContainer';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/common/Header';
import { Button } from '../../src/components/common/Button';
import { useAuth } from '../../src/context/AuthContext';
import { Colors, BorderRadius, Spacing, Typography, Shadows } from '../../src/constants/theme';

export default function VerifyOtpScreen() {
  const { phone } = useLocalSearchParams<{ phone: string }>();
  const router = useRouter();
  const { verifyOtp, requestOtp } = useAuth();

  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [countdown]);

  const handleVerify = async () => {
    if (otp.trim().length !== 4) {
      setError('Please enter the 4-digit verification code.');
      return;
    }
    setError('');
    setLoading(true);

    try {
      await verifyOtp(phone || '01713222653', otp.trim());
      router.replace('/(tabs)/profile');
    } catch (e: any) {
      setError(e.message || 'Invalid code. Use code 1234 for demo.');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (countdown > 0) return;
    try {
      await requestOtp(phone || '01713222653');
      setCountdown(60);
      setError('');
      Alert.alert('Code Resent', 'A fresh verification code was sent to your phone. Use 1234.');
    } catch (e: any) {
      Alert.alert('Error', e.message);
    }
  };

  return (
    <FullScreenContainer style={styles.safeArea}>
      <Header showBack title="Verify Number" />

      <View style={styles.container}>
        <View style={styles.iconCircle}>
          <Ionicons name="chatbubble-ellipses-outline" size={36} color={Colors.primary} />
        </View>

        <Text style={styles.title}>Enter Verification Code</Text>
        <Text style={styles.subtitle}>
          We sent a 4-digit code to <Text style={styles.phoneText}>{phone}</Text>
        </Text>

        {/* Demo Hint Banner */}
        <View style={styles.demoHintBox}>
          <Ionicons name="information-circle" size={16} color={Colors.primary} />
          <Text style={styles.demoHintText}>
            Prototype Demo Code: <Text style={{ fontWeight: '900' }}>1234</Text>
          </Text>
        </View>

        {/* 4-digit input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.otpInput}
            value={otp}
            onChangeText={(t) => {
              setOtp(t);
              if (error) setError('');
            }}
            keyboardType="number-pad"
            maxLength={4}
            placeholder="• • • •"
            placeholderTextColor={Colors.textMuted}
            autoFocus
          />
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Button
          title="Verify & Continue"
          onPress={handleVerify}
          loading={loading}
          size="lg"
          style={styles.verifyBtn}
        />

        {/* Countdown & Resend */}
        <View style={styles.resendRow}>
          {countdown > 0 ? (
            <Text style={styles.countdownText}>
              Resend code in <Text style={{ fontWeight: '700' }}>{countdown}s</Text>
            </Text>
          ) : (
            <TouchableOpacity onPress={handleResend}>
              <Text style={styles.resendText}>Didn't receive code? Resend Code</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </FullScreenContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    padding: Spacing.xl,
    alignItems: 'center',
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.primarySubtle,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  title: {
    ...Typography.heading1,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  subtitle: {
    ...Typography.body,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.md,
  },
  phoneText: {
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  demoHintBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primarySubtle,
    paddingHorizontal: Spacing.md,
    paddingVertical: 6,
    borderRadius: BorderRadius.full,
    borderWidth: 1,
    borderColor: '#C3E1F7',
    marginBottom: Spacing.lg,
  },
  demoHintText: {
    ...Typography.caption,
    color: Colors.primaryDark,
    marginLeft: 6,
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  otpInput: {
    backgroundColor: Colors.surface,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: BorderRadius.lg,
    width: 200,
    height: 56,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 16,
    color: Colors.textPrimary,
    ...Shadows.sm,
  },
  errorText: {
    ...Typography.caption,
    color: Colors.danger,
    marginBottom: Spacing.sm,
  },
  verifyBtn: {
    width: '100%',
    marginTop: Spacing.sm,
  },
  resendRow: {
    marginTop: Spacing.lg,
  },
  countdownText: {
    ...Typography.body,
    color: Colors.textMuted,
  },
  resendText: {
    ...Typography.bodyMedium,
    color: Colors.primary,
    fontWeight: '700',
  },
});
