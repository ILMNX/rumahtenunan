import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
            },
            colors: {
                primary: {
                    DEFAULT: '#FE7743',
                    light: '#FF9C70',   // lighter orange (optional, adjust as needed)
                    dark: '#D95D2B',    // darker orange (optional, adjust as needed)
                    contrast: '#FFFFFF',
                },
                secondary: {
                    DEFAULT: '#273F4F',
                    light: '#3B5366',   // lighter blue/gray (optional)
                    dark: '#182733',    // darker blue/gray (optional)
                    contrast: '#FFFFFF',
                },
                accent: {
                    DEFAULT: '#447D9B',
                    light: '#6CA3C2',   // lighter blue (optional)
                    dark: '#2C5872',    // darker blue (optional)
                    contrast: '#FFFFFF',
                },
                muted: {
                    DEFAULT: '#D7D7D7',
                    dark: '#B0B0B0',    // darker gray (optional)
                    light: '#F5F5F5',   // lighter gray (optional)
                },
                info: {
                    DEFAULT: '#447D9B',
                },
                success: {
                    DEFAULT: '#4ade80', // green-400 (Tailwind default)
                },
                warning: {
                    DEFAULT: '#FE7743',
                },
                danger: {
                    DEFAULT: '#FE7743',
                },
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },

    plugins: [forms],
};
