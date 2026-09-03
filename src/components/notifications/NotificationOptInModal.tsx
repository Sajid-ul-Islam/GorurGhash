import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing, Typography, BorderRadius, Shadows } from '../../constants/theme';

interface NotificationOptInModalProps {
  visible: boolean;
  onAccept: () => void;
  onDismiss: () => void;
}

export const NotificationOptInModal: React.FC<NotificationOptInModalProps> = ({
  visible,
  onAccept,
  onDismiss,
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onDismiss}>
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <View style={styles.iconCircle}>
            <Ionicons name="notifications" size={32} color="#000000" />
          </View>

          <Text style={styles.title}>Never Miss a Dhaka Drop</Text>
          <Text style={styles.subtitle}>
            Gorur Ghash collections drop in limited runs. Enable alerts to get notified the second fresh drops, restocks, and order tracking milestones happen.
          </Text>

          <View style={styles.benefitList}>
            <View style={styles.benefitItem}>
              <Ionicons name="checkmark-circle" size={18} color="#10B981" />
              <Text style={styles.benefitText}>Real-time courier & on-spot trial updates</Text>
            </View>
            <View style={styles.benefitItem}>
              <Ionicons name="checkmark-circle" size={18} color="#10B981" />
              <Text style={styles.benefitText}>First access to Friday 8 PM drop launches</Text>
            </View>
            <View style={styles.benefitItem}>
              <Ionicons name="checkmark-circle" size={18} color="#10B981" />
              <Text style={styles.benefitText}>Secret flash coupons & archive sales</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.85} onPress={onAccept}>
            <Text style={styles.primaryBtnText}>Enable Notifications</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryBtn} activeOpacity={0.7} onPress={onDismiss}>
            <Text style={styles.secondaryBtnText}>Maybe Later</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    padding: Spacing.xl,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
    ...Shadows.lg,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FBDD01',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  title: {
    ...Typography.heading2,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 18,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: Spacing.lg,
  },
  benefitList: {
    width: '100%',
    gap: 10,
    marginBottom: Spacing.xl,
    backgroundColor: Colors.surfaceAlt,
    padding: Spacing.md,
    borderRadius: BorderRadius.lg,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  benefitText: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textPrimary,
    flex: 1,
  },
  primaryBtn: {
    backgroundColor: '#000000',
    width: '100%',
    paddingVertical: 14,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    marginBottom: 8,
  },
  primaryBtnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },
  secondaryBtn: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  secondaryBtnText: {
    color: Colors.textMuted,
    fontSize: 13,
    fontWeight: '600',
  },
});
