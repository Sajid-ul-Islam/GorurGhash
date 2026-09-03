export const Colors = {
  // Brand Core
  primary: '#0170B9', // Gorur Ghash signature ocean blue
  primaryDark: '#01558E',
  primaryLight: '#3895D3',
  primarySubtle: '#E8F4FD',
  brandYellow: '#FBDD02', // Playful Ghash accent
  brandRed: '#E53935', // Sale / hot drop accent
  
  // Base & Surface
  background: '#F8F9FA',
  surface: '#FFFFFF',
  surfaceAlt: '#F1F3F5',
  card: '#FFFFFF',

  // Text Hierarchy
  textPrimary: '#111827',
  textSecondary: '#4B5563',
  textMuted: '#9CA3AF',
  textWhite: '#FFFFFF',

  // Borders & Dividers
  border: '#E5E7EB',
  borderDark: '#D1D5DB',
  borderSubtle: '#F3F4F6',

  // Feedback & Badges
  success: '#10B981',
  successSubtle: '#D1FAE5',
  warning: '#F59E0B',
  warningSubtle: '#FEF3C7',
  danger: '#EF4444',
  dangerSubtle: '#FEE2E2',
  info: '#0284C7',
  infoSubtle: '#E0F2FE',

  // Payment brand colors
  bkash: '#E2136E',
  nagad: '#F7941D',
  cardPay: '#1A1F71',
  cod: '#059669',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const BorderRadius = {
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

export const Typography = {
  display: {
    fontSize: 26,
    fontWeight: '700' as const,
    lineHeight: 32,
    color: Colors.textPrimary,
  },
  heading1: {
    fontSize: 20,
    fontWeight: '700' as const,
    lineHeight: 26,
    color: Colors.textPrimary,
  },
  heading2: {
    fontSize: 17,
    fontWeight: '600' as const,
    lineHeight: 22,
    color: Colors.textPrimary,
  },
  heading3: {
    fontSize: 15,
    fontWeight: '600' as const,
    lineHeight: 20,
    color: Colors.textPrimary,
  },
  bodyLarge: {
    fontSize: 15,
    fontWeight: '400' as const,
    lineHeight: 22,
    color: Colors.textPrimary,
  },
  body: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
    color: Colors.textSecondary,
  },
  bodyMedium: {
    fontSize: 13,
    fontWeight: '500' as const,
    lineHeight: 18,
    color: Colors.textPrimary,
  },
  caption: {
    fontSize: 11,
    fontWeight: '400' as const,
    lineHeight: 15,
    color: Colors.textMuted,
  },
  badge: {
    fontSize: 10,
    fontWeight: '700' as const,
    letterSpacing: 0.5,
  },
};

export const Shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },
};
