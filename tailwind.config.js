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
                // Indonesian weaving heritage palette
                'terracotta': {
                    50: '#fdf4f3',
                    100: '#fce7e6',
                    200: '#f9d4d2',
                    300: '#f4b5b1',
                    400: '#ec8b84',
                    500: '#e1655d',
                    600: '#cd4a3f',
                    700: '#ab3a32',
                    800: '#8d312b',
                    900: '#762d28',
                },
                'indigo-ikat': {
                    50: '#f1f5fd',
                    100: '#dfe9fa',
                    200: '#c7d8f7',
                    300: '#a0c0f1',
                    400: '#739ee9',
                    500: '#507ce1',
                    600: '#3d60d5',
                    700: '#344dc3',
                    800: '#30419e',
                    900: '#2d3a7d',
                },
                'ochre': {
                    50: '#fffbeb',
                    100: '#fef3c7',
                    200: '#fde68a',
                    300: '#fcd34d',
                    400: '#fbbf24',
                    500: '#f59e0b',
                    600: '#d97706',
                    700: '#b45309',
                    800: '#92400e',
                    900: '#78350f',
                },
                'woven-gold': {
                    50: '#fffdf7',
                    100: '#fffaeb',
                    200: '#fef2cd',
                    300: '#fee7a5',
                    400: '#fdd96c',
                    500: '#fcc332',
                    600: '#eda809',
                    700: '#cc8506',
                    800: '#a3680a',
                    900: '#85550c',
                },
                'batik-brown': {
                    50: '#faf8f5',
                    100: '#f2ede7',
                    200: '#e6d9ce',
                    300: '#d4c0ab',
                    400: '#c0a185',
                    500: '#b18968',
                    600: '#a4795c',
                    700: '#89654e',
                    800: '#6f5344',
                    900: '#5a4338',
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
