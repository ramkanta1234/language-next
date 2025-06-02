'use client';

export const theme = {
    colors: {
        primary: '#0070f3',
        accent:process.env.NEXT_PUBLIC_COLOR_ACCENT ||  '#F0F8FF',
        secondaryAccent: '#ffcc00',
        background: process.env.NEXT_PUBLIC_COLOR_BACKGROUND || '#ffffff',
        textPrimary: '#333333',
        // textLight: '#666666',
        rawIndigo: process.env.NEXT_PUBLIC_COLOR_INDIGO || '#4b0082',
        rawTurquoise: process.env.NEXT_PUBLIC_COLOR_TURQUOISE || '#40e0d0',
        rawPurple: process.env.NEXT_PUBLIC_COLOR_PURPLE || '#800080',
        rawAliceBlue: process.env.NEXT_PUBLIC_COLOR_ALICE_BLUE || '#f0f8ff',
        rawDarkText: process.env.NEXT_PUBLIC_COLOR_DARK_TEXT || '#000000',
        rawWhiteText: process.env.NEXT_PUBLIC_COLOR_WHITE_TEXT || '#ffffff',
        textPrimary: process.env.NEXT_PUBLIC_COLOR_ACCENT || '#1a1a1a',
        textLight: process.env.NEXT_PUBLIC_COLOR_TEXT_LIGHT || '#FFFFFF',
        rawMediumslateBlue: process.env.NEXT_PUBLIC_COLOR_MEDIUM_SLATE_BLUE || "7b68ee",
        onlyWhiteText: process.env.NEXT_PUBLIC_COLOR_ONLY_TEXT_WHITE || '#fff',
        onlybBlackText: process.env.NEXT_PUBLIC_COLOR_ONLY_TEXT_BLACK || '#000',
        onlyWhiteBg: process.env.NEXT_PUBLIC_COLOR_ONLY_WHITE_BG || '#fff',
        onlyBlackBg: process.env.NEXT_PUBLIC_COLOR_ONLY_BLACK_BG || '#000',



      },
      fonts: {
        primary: process.env.NEXT_PUBLIC_FONT || 'Roboto, sans-serif',
      },
      spacing: {
        md: '16px',
        sm: '8px',
        lg: '24px',
        xl: '32px',
        xxl: '40px',
      },
      breakpoints: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
      },
      borderRadius:{
        small: '4px',
        medium: '8px',
        large: '16px',
        xlarge: '24px',
        xxlarge: '32px',
      }
};

// Helper for media queries (optional but useful)
export const devices = {
    sm: `(min-width: ${theme.breakpoints.sm})`,
    md: `(min-width: ${theme.breakpoints.md})`,
    lg: `(min-width: ${theme.breakpoints.lg})`,
    xl: `(min-width: ${theme.breakpoints.xl})`,
};