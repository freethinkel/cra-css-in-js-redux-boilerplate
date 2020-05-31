import { rgba, rgb, darken, saturate, setHue } from 'polished';

const baseColors = {
  primary: '#fbd469',
  black: '#1B1B1B',
  accent: '#f5a123',
};

export const theme = {
  vars: {
    borderRadius: '10px',
    transiton: '0.3s',
  },
  colors: {
    primary: baseColors.primary,
    primary50: rgba(baseColors.primary, 0.5),
    primary12: rgba(baseColors.primary, 0.12),
    primaryGradient: `linear-gradient(to right, ${baseColors.primary}, ${baseColors.accent} 70%)`,
    accent100: baseColors.accent,
    background: '#f5f5f5',
    black100: baseColors.black,
    black50: rgba(baseColors.black, 0.5),
    black12: rgba(baseColors.black, 0.12),
  },
};
