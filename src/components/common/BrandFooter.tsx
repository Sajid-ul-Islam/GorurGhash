import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AppConfig } from '../../constants/config';
import { Colors, Spacing, Typography, BorderRadius } from '../../constants/theme';

export const BrandFooter: React.FC = () => {
  const handleFacebook = () => {
    Linking.openURL(AppConfig.contact.facebookUrl).catch(() => {});
  };

  const handleInstagram = () => {
    Linking.openURL(AppConfig.contact.instagramUrl).catch(() => {});
  };

  const handleWhatsApp = () => {
    Linking.openURL(`https://wa.me/${AppConfig.contact.whatsapp.replace('+', '')}`).catch(() => {});
  };

  const handleCall = () => {
    Linking.openURL(`tel:${AppConfig.contact.helpline1}`).catch(() => {});
  };

  return (
    <View style={styles.footer}>
      {/* Brand Header */}
      <View style={styles.brandRow}>
        <View style={styles.logoBadge}>
          <Image
            source={require('../../../assets/images/gorurghash-cow.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.brandTitle}>GORUR GHASH</Text>
          <Text style={styles.brandTagline}>গরুর ঘাস • DHAKA STREETWEAR</Text>
        </View>
      </View>

      <Text style={styles.bioText}>
        Born on the bustling streets of Dhaka. Crafted with heavyweight fabrics, sharp tailoring, and subversive design. 100% Proudly Made in Bangladesh.
      </Text>

      {/* Social Media Buttons */}
      <View style={styles.socialRow}>
        <TouchableOpacity style={[styles.socialBtn, styles.fbBtn]} onPress={handleFacebook}>
          <Ionicons name="logo-facebook" size={18} color="#FFFFFF" />
          <Text style={styles.socialBtnText}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialBtn, styles.igBtn]} onPress={handleInstagram}>
          <Ionicons name="logo-instagram" size={18} color="#FFFFFF" />
          <Text style={styles.socialBtnText}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialBtn, styles.waBtn]} onPress={handleWhatsApp}>
          <Ionicons name="logo-whatsapp" size={18} color="#FFFFFF" />
          <Text style={styles.socialBtnText}>WhatsApp</Text>
        </TouchableOpacity>
      </View>

      {/* Contact & Support info */}
      <View style={styles.infoBox}>
        <View style={styles.infoRow}>
          <Ionicons name="call-outline" size={16} color="#FBDD01" />
          <TouchableOpacity onPress={handleCall}>
            <Text style={styles.infoText}>Helpline: {AppConfig.contact.helpline1}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="time-outline" size={16} color="#FBDD01" />
          <Text style={styles.infoText}>{AppConfig.contact.supportHours}</Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={16} color="#FBDD01" />
          <Text style={styles.infoText}>{AppConfig.contact.uttaraOffice}</Text>
        </View>
      </View>

      {/* Legal & Trust */}
      <View style={styles.legalBox}>
        <Text style={styles.legalText}>Trade License: {AppConfig.contact.tradeLicense} • TIN: {AppConfig.contact.tin}</Text>
        <Text style={styles.legalText}>© {new Date().getFullYear()} Gorur Ghash. All rights reserved.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#111827',
    padding: Spacing.xl,
    paddingBottom: Spacing.xxxl,
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    marginTop: Spacing.xxl,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: Spacing.md,
  },
  logoBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FBDD01',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  logoImage: {
    width: 34,
    height: 34,
  },
  brandTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1.5,
  },
  brandTagline: {
    fontSize: 11,
    fontWeight: '700',
    color: '#FBDD01',
    letterSpacing: 0.8,
  },
  bioText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#9CA3AF',
    marginBottom: Spacing.lg,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: Spacing.lg,
  },
  socialBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: BorderRadius.md,
    gap: 6,
  },
  fbBtn: {
    backgroundColor: '#1877F2',
  },
  igBtn: {
    backgroundColor: '#E1306C',
  },
  waBtn: {
    backgroundColor: '#25D366',
  },
  socialBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },
  infoBox: {
    backgroundColor: '#1F2937',
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
    gap: 10,
    marginBottom: Spacing.lg,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoText: {
    color: '#E5E7EB',
    fontSize: 12,
    fontWeight: '500',
    flex: 1,
  },
  legalBox: {
    alignItems: 'center',
    gap: 4,
  },
  legalText: {
    fontSize: 11,
    color: '#6B7280',
    textAlign: 'center',
  },
});
