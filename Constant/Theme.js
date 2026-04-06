// Global Theme Configuration
// Light mode only - No dark mode

const Theme = {
    // Colors - Light Mode Only
    colors: {
        // Primary Colors - Blue Theme
        primary: {
            50: '#e6f0fa',
            100: '#b3d1f0',
            200: '#80b3e6',
            300: '#4d94db',
            400: '#1a75d1',
            500: '#0066cc', // Main primary
            600: '#0052a3',
            700: '#003d7a',
            800: '#002952',
            900: '#001429',
            main: '#0066cc',
            light: '#4d94db',
            dark: '#003d7a',
            contrast: '#ffffff',
        },

        // Secondary Colors - Orange/Amber Theme
        secondary: {
            50: '#fff3e0',
            100: '#ffe0b3',
            200: '#ffcc80',
            300: '#ffb84d',
            400: '#ffa41a',
            500: '#ff9900', // Main secondary
            600: '#cc7a00',
            700: '#995c00',
            800: '#663d00',
            900: '#331f00',
            main: '#ff9900',
            light: '#ffb84d',
            dark: '#cc7a00',
            contrast: '#ffffff',
        },

        // Neutral/Gray Colors
        neutral: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            white: '#ffffff',
            black: '#000000',
        },

        // Semantic Colors
        success: {
            light: '#d4edda',
            main: '#28a745',
            dark: '#1e7e34',
            contrast: '#ffffff',
        },
        warning: {
            light: '#fff3cd',
            main: '#ffc107',
            dark: '#d39e00',
            contrast: '#212529',
        },
        error: {
            light: '#f8d7da',
            main: '#dc3545',
            dark: '#bd2130',
            contrast: '#ffffff',
        },
        info: {
            light: '#d1ecf1',
            main: '#17a2b8',
            dark: '#117a8b',
            contrast: '#ffffff',
        },

        // Background Colors
        background: {
            default: '#ffffff',
            paper: '#ffffff',
            card: '#ffffff',
            body: '#f8f9fa',
            sidebar: '#f8f9fa',
            header: '#ffffff',
        },

        // Text Colors
        text: {
            primary: '#212121',    // Dark gray for primary text
            secondary: '#616161',  // Medium gray for secondary text
            disabled: '#9e9e9e',   // Light gray for disabled text
            hint: '#757575',       // Hint text
            inverse: '#ffffff',    // Text on dark backgrounds
        },

        // Border Colors
        border: {
            light: '#e0e0e0',
            main: '#bdbdbd',
            dark: '#9e9e9e',
            focus: '#0066cc',
        },

        // Status Colors
        status: {
            active: '#0066cc',
            inactive: '#9e9e9e',
            pending: '#ffc107',
            completed: '#28a745',
            cancelled: '#dc3545',
        },

        // Social Media Colors
        social: {
            facebook: '#1877f2',
            twitter: '#1da1f2',
            instagram: '#e4405f',
            linkedin: '#0077b5',
            youtube: '#ff0000',
            whatsapp: '#25d366',
        },

        // Common Colors
        common: {
            white: '#ffffff',
            black: '#000000',
            transparent: 'transparent',
        },
    },

    // Typography - Responsive Font Sizes
    typography: {
        // Font Families
        fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            serif: ['Georgia', 'Times New Roman', 'serif'],
            mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
            heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
            body: ['Inter', 'system-ui', 'sans-serif'],
        },

        // Font Weights
        fontWeight: {
            thin: 100,
            extraLight: 200,
            light: 300,
            regular: 400,
            medium: 500,
            semiBold: 600,
            bold: 700,
            extraBold: 800,
            black: 900,
        },

        // Responsive Font Sizes (Mobile First)
        fontSize: {
            // Extra Small Text (captions, labels)
            xs: {
                xs: '0.625rem',   // 10px - mobile
                sm: '0.625rem',   // 10px - tablet
                md: '0.75rem',    // 12px - desktop
                lg: '0.75rem',    // 12px - large desktop
                xl: '0.75rem',    // 12px - extra large
            },

            // Small Text (helper text, metadata)
            sm: {
                xs: '0.75rem',    // 12px - mobile
                sm: '0.75rem',    // 12px - tablet
                md: '0.875rem',   // 14px - desktop
                lg: '0.875rem',   // 14px - large desktop
                xl: '0.875rem',   // 14px - extra large
            },

            // Base/Body Text
            base: {
                xs: '0.875rem',   // 14px - mobile
                sm: '0.875rem',   // 14px - tablet
                md: '1rem',       // 16px - desktop
                lg: '1rem',       // 16px - large desktop
                xl: '1rem',       // 16px - extra large
            },

            // Large Text (lead paragraphs)
            lg: {
                xs: '1rem',       // 16px - mobile
                sm: '1rem',       // 16px - tablet
                md: '1.125rem',   // 18px - desktop
                lg: '1.125rem',   // 18px - large desktop
                xl: '1.125rem',   // 18px - extra large
            },

            // Extra Large Text
            xl: {
                xs: '1.125rem',   // 18px - mobile
                sm: '1.125rem',   // 18px - tablet
                md: '1.25rem',    // 20px - desktop
                lg: '1.25rem',    // 20px - large desktop
                xl: '1.25rem',    // 20px - extra large
            },

            // 2XL (H6, subtitles)
            '2xl': {
                xs: '1.25rem',    // 20px - mobile
                sm: '1.25rem',    // 20px - tablet
                md: '1.5rem',     // 24px - desktop
                lg: '1.5rem',     // 24px - large desktop
                xl: '1.5rem',     // 24px - extra large
            },

            // 3XL (H5)
            '3xl': {
                xs: '1.5rem',     // 24px - mobile
                sm: '1.5rem',     // 24px - tablet
                md: '1.75rem',    // 28px - desktop
                lg: '1.75rem',    // 28px - large desktop
                xl: '1.875rem',   // 30px - extra large
            },

            // 4XL (H4)
            '4xl': {
                xs: '1.75rem',    // 28px - mobile
                sm: '1.75rem',    // 28px - tablet
                md: '2rem',       // 32px - desktop
                lg: '2.125rem',   // 34px - large desktop
                xl: '2.25rem',    // 36px - extra large
            },

            // 5XL (H3)
            '5xl': {
                xs: '2rem',       // 32px - mobile
                sm: '2rem',       // 32px - tablet
                md: '2.25rem',    // 36px - desktop
                lg: '2.5rem',     // 40px - large desktop
                xl: '2.75rem',    // 44px - extra large
            },

            // 6XL (H2)
            '6xl': {
                xs: '2.25rem',    // 36px - mobile
                sm: '2.5rem',     // 40px - tablet
                md: '2.75rem',    // 44px - desktop
                lg: '3rem',       // 48px - large desktop
                xl: '3.25rem',    // 52px - extra large
            },

            // 7XL (H1)
            '7xl': {
                xs: '2.5rem',     // 40px - mobile
                sm: '2.75rem',    // 44px - tablet
                md: '3rem',       // 48px - desktop
                lg: '3.5rem',     // 56px - large desktop
                xl: '4rem',       // 64px - extra large
            },

            // 8XL (Display)
            '8xl': {
                xs: '3rem',       // 48px - mobile
                sm: '3.5rem',     // 56px - tablet
                md: '4rem',       // 64px - desktop
                lg: '4.5rem',     // 72px - large desktop
                xl: '5rem',       // 80px - extra large
            },
        },

        // Line Heights
        lineHeight: {
            none: 1,
            tight: 1.25,
            snug: 1.375,
            normal: 1.5,
            relaxed: 1.625,
            loose: 2,
        },

        // Letter Spacing
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },

        // Heading Styles (using responsive sizes)
        heading: {
            h1: {
                fontSize: '7xl',
                fontWeight: 'bold',
                lineHeight: 'tight',
                letterSpacing: 'tight',
            },
            h2: {
                fontSize: '6xl',
                fontWeight: 'bold',
                lineHeight: 'tight',
                letterSpacing: 'tight',
            },
            h3: {
                fontSize: '5xl',
                fontWeight: 'semiBold',
                lineHeight: 'snug',
                letterSpacing: 'normal',
            },
            h4: {
                fontSize: '4xl',
                fontWeight: 'semiBold',
                lineHeight: 'snug',
                letterSpacing: 'normal',
            },
            h5: {
                fontSize: '3xl',
                fontWeight: 'medium',
                lineHeight: 'normal',
                letterSpacing: 'normal',
            },
            h6: {
                fontSize: '2xl',
                fontWeight: 'medium',
                lineHeight: 'normal',
                letterSpacing: 'normal',
            },
        },
    },

    // Spacing System
    spacing: {
        0: '0',
        px: '1px',
        0.5: '0.125rem', // 2px
        1: '0.25rem',    // 4px
        1.5: '0.375rem', // 6px
        2: '0.5rem',     // 8px
        2.5: '0.625rem', // 10px
        3: '0.75rem',    // 12px
        3.5: '0.875rem', // 14px
        4: '1rem',       // 16px
        5: '1.25rem',    // 20px
        6: '1.5rem',     // 24px
        7: '1.75rem',    // 28px
        8: '2rem',       // 32px
        9: '2.25rem',    // 36px
        10: '2.5rem',    // 40px
        11: '2.75rem',   // 44px
        12: '3rem',      // 48px
        14: '3.5rem',    // 56px
        16: '4rem',      // 64px
        20: '5rem',      // 80px
        24: '6rem',      // 96px
        28: '7rem',      // 112px
        32: '8rem',      // 128px
        36: '9rem',      // 144px
        40: '10rem',     // 160px
        44: '11rem',     // 176px
        48: '12rem',     // 192px
        52: '13rem',     // 208px
        56: '14rem',     // 224px
        60: '15rem',     // 240px
        64: '16rem',     // 256px
        72: '18rem',     // 288px
        80: '20rem',     // 320px
        96: '24rem',     // 384px
    },

    // Border Radius
    borderRadius: {
        none: '0',
        sm: '0.125rem',  // 2px
        base: '0.25rem',  // 4px
        md: '0.375rem',   // 6px
        lg: '0.5rem',     // 8px
        xl: '0.75rem',    // 12px
        '2xl': '1rem',    // 16px
        '3xl': '1.5rem',  // 24px
        full: '9999px',
    },

    // Shadows
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        none: 'none',
    },

    // Breakpoints
    breakpoints: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        '2xl': 1536,
    },

    // Z-Index Scale
    zIndex: {
        hide: -1,
        auto: 'auto',
        base: 0,
        docked: 10,
        dropdown: 1000,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
    },

    // Transitions
    transitions: {
        duration: {
            fastest: '100ms',
            faster: '200ms',
            fast: '300ms',
            normal: '400ms',
            slow: '500ms',
            slower: '600ms',
            slowest: '700ms',
        },
        easing: {
            linear: 'linear',
            in: 'cubic-bezier(0.4, 0, 1, 1)',
            out: 'cubic-bezier(0, 0, 0.2, 1)',
            inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
    },

    // Animation
    animation: {
        fadeIn: {
            in: 'fadeIn 0.3s ease-in-out',
            out: 'fadeOut 0.3s ease-in-out',
        },
        slideIn: {
            up: 'slideUp 0.4s ease-out',
            down: 'slideDown 0.4s ease-out',
            left: 'slideLeft 0.4s ease-out',
            right: 'slideRight 0.4s ease-out',
        },
        scale: {
            in: 'scaleIn 0.3s ease-out',
            out: 'scaleOut 0.3s ease-in',
        },
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
    },
};

// Utility function to get responsive font size
Theme.getFontSize = (size, breakpoint = 'md') => {
    return Theme.typography.fontSize[size]?.[breakpoint] ||
        Theme.typography.fontSize.base[breakpoint];
};

// Utility function for media queries
Theme.media = {
    up: (breakpoint) => `@media (min-width: ${Theme.breakpoints[breakpoint]}px)`,
    down: (breakpoint) => `@media (max-width: ${Theme.breakpoints[breakpoint] - 1}px)`,
    between: (start, end) =>
        `@media (min-width: ${Theme.breakpoints[start]}px) and (max-width: ${Theme.breakpoints[end] - 1}px)`,
};

// Export theme
export default Theme;