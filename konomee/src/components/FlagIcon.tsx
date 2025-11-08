import { Box } from '@mui/material';

interface FlagIconProps {
  countryCode?: 'US' | 'CA' | 'GB' | 'EU' | 'JP' | 'CN'; // Add more as needed
  size?: number;
}

const flagEmojis: Record<string, string> = {
  US: '🇺🇸',
  CA: '🇨🇦',
  GB: '🇬🇧',
  EU: '🇪🇺',
  JP: '🇯🇵',
  CN: '🇨🇳',
};

const FlagIcon = ({ countryCode = 'US', size = 32 }: FlagIconProps) => {
  return (
    <Box
      sx={{
        fontSize: size,
        lineHeight: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {flagEmojis[countryCode] || '🏳️'}
    </Box>
  );
};

export default FlagIcon;
