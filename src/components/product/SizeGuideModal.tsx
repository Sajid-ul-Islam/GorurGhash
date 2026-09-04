import React from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, BorderRadius, Spacing, Typography } from '../../constants/theme';
import { Button } from '../common/Button';

interface SizeGuideModalProps {
  visible: boolean;
  onClose: () => void;
  productCategory?: string;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({
  visible,
  onClose,
  productCategory = 'Tops & Shirts',
}) => {
  const isPants = productCategory.toLowerCase().includes('pant') || productCategory.toLowerCase().includes('cargo');

  const topMeasurements = [
    { size: 'XS', chest: '36"', length: '26"', sleeve: '7.5"' },
    { size: 'S', chest: '38"', length: '27"', sleeve: '8"' },
    { size: 'M', chest: '40"', length: '28"', sleeve: '8.5"' },
    { size: 'L', chest: '42"', length: '29"', sleeve: '9"' },
    { size: 'XL', chest: '44"', length: '30"', sleeve: '9.5"' },
    { size: 'XXL', chest: '46"', length: '31"', sleeve: '10"' },
  ];

  const pantMeasurements = [
    { size: 'S (28-30)', waist: '28-30"', length: '39"', thigh: '24"' },
    { size: 'M (31-32)', waist: '31-32"', length: '40"', thigh: '25"' },
    { size: 'L (33-34)', waist: '33-34"', length: '41"', thigh: '26"' },
    { size: 'XL (35-36)', waist: '35-36"', length: '42"', thigh: '27"' },
    { size: 'XXL (37-38)', waist: '37-38"', length: '43"', thigh: '28"' },
  ];

  return (
    <Modal visible={visible} animationType="slide" transparent statusBarTranslucent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.sheetContainer}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Official Size Guide</Text>
              <Text style={styles.subtitle}>All measurements in inches (Gorur Ghash Relaxed Fit)</Text>
            </View>
            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Ionicons name="close" size={24} color={Colors.textPrimary} />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
            {isPants ? (
              <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                  <Text style={[styles.tableCell, styles.headerCell]}>Size</Text>
                  <Text style={[styles.tableCell, styles.headerCell]}>Waist</Text>
                  <Text style={[styles.tableCell, styles.headerCell]}>Length</Text>
                  <Text style={[styles.tableCell, styles.headerCell]}>Thigh</Text>
                </View>
                {pantMeasurements.map((m, idx) => (
                  <View key={idx} style={[styles.tableRow, idx % 2 === 1 && styles.tableRowAlt]}>
                    <Text style={[styles.tableCell, styles.sizeCell]}>{m.size}</Text>
                    <Text style={styles.tableCell}>{m.waist}</Text>
                    <Text style={styles.tableCell}>{m.length}</Text>
                    <Text style={styles.tableCell}>{m.thigh}</Text>
                  </View>
                ))}
              </View>
            ) : (
              <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                  <Text style={[styles.tableCell, styles.headerCell]}>Size</Text>
                  <Text style={[styles.tableCell, styles.headerCell]}>Chest</Text>
                  <Text style={[styles.tableCell, styles.headerCell]}>Length</Text>
                  <Text style={[styles.tableCell, styles.headerCell]}>Sleeve</Text>
                </View>
                {topMeasurements.map((m, idx) => (
                  <View key={idx} style={[styles.tableRow, idx % 2 === 1 && styles.tableRowAlt]}>
                    <Text style={[styles.tableCell, styles.sizeCell]}>{m.size}</Text>
                    <Text style={styles.tableCell}>{m.chest}</Text>
                    <Text style={styles.tableCell}>{m.length}</Text>
                    <Text style={styles.tableCell}>{m.sleeve}</Text>
                  </View>
                ))}
              </View>
            )}

            <View style={styles.notesCard}>
              <Ionicons name="information-circle-outline" size={20} color={Colors.primary} />
              <View style={styles.notesTextContainer}>
                <Text style={styles.notesTitle}>Fit & Trial Guarantee</Text>
                <Text style={styles.notesDesc}>
                  Gorur Ghash garments are designed with a contemporary, slightly relaxed Dhaka streetwear fit.
                  Every delivery supports an on-spot fitting trial with the courier. Exchanges are honored within 48 hours!
                </Text>
              </View>
            </View>

            <Button
              title="Got It"
              onPress={onClose}
              style={{ marginTop: Spacing.lg, marginBottom: Spacing.xl }}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    backgroundColor: Colors.surface,
    borderTopLeftRadius: BorderRadius.xl,
    borderTopRightRadius: BorderRadius.xl,
    maxHeight: '80%',
    paddingTop: Spacing.lg,
    paddingHorizontal: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  title: {
    ...Typography.heading2,
    color: Colors.textPrimary,
  },
  subtitle: {
    ...Typography.caption,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  closeBtn: {
    padding: Spacing.xs,
  },
  body: {
    paddingTop: Spacing.md,
  },
  table: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.md,
    overflow: 'hidden',
    marginBottom: Spacing.md,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  tableRowAlt: {
    backgroundColor: Colors.surfaceAlt,
  },
  tableHeader: {
    backgroundColor: Colors.primarySubtle,
  },
  tableCell: {
    flex: 1,
    ...Typography.bodyMedium,
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  headerCell: {
    fontWeight: '700',
    color: Colors.primaryDark,
  },
  sizeCell: {
    fontWeight: '700',
    color: Colors.textPrimary,
  },
  notesCard: {
    flexDirection: 'row',
    backgroundColor: Colors.primarySubtle,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginTop: Spacing.sm,
  },
  notesTextContainer: {
    marginLeft: Spacing.sm,
    flex: 1,
  },
  notesTitle: {
    ...Typography.bodyMedium,
    fontWeight: '700',
    color: Colors.primaryDark,
    marginBottom: 2,
  },
  notesDesc: {
    ...Typography.caption,
    color: Colors.textSecondary,
    lineHeight: 16,
  },
});
