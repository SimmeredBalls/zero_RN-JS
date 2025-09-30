// Colors.js (or theme.js)

import { DefaultTheme } from 'react-native-paper';

// Your original color object (Name is 'Colors')
export const Colors = {
    ftstic: {
        text: "#4A5043",
        background: "#9AC2C9",
        card: "#8AA1B1",
        button: "#FFCB47",
        general: "#B9D8C2",
    }
};

// Map the 'ftstic' palette to a local, short variable for clean code
const AppColorPalette = Colors.ftstic; // <-- This is a common pattern to clean up access

// Create a custom theme based on the RNP DefaultTheme (Material Design 3)
export const CustomTheme = {
    ...DefaultTheme,
    // Set 'dark' to true if you want this to be the dark mode theme
    dark: false, 
    colors: {
        // Inherit base colors from the default theme
        ...DefaultTheme.colors,

        // Map your colors to RNP's standard properties, using the correct local variable
        // RNP uses 'primary' for main buttons/active elements
        primary: AppColorPalette.button,      // CORRECTED: Used AppColorPalette (or Colors.ftstic)
        
        // RNP uses 'background' for screen background
        background: AppColorPalette.background, // CORRECTED
        
        // RNP uses 'surface' for Cards, Sheets, and elevated components
        surface: AppColorPalette.card,          // CORRECTED
        
        // RNP uses 'onSurface' for text/icons placed on a surface/background
        onSurface: AppColorPalette.text,        // CORRECTED

        // Custom property
        general: AppColorPalette.general,
        
        // Optionally set text and surface text for consistency
        onBackground: AppColorPalette.text,
    },
};