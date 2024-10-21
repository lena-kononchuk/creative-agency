/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: ['./src/**/*.html', './src/**/*.js'],
  
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFFFFF', // Light mode primary color
          dark: '#0D0D0D',  // Dark mode primary color
        },
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],  // Используем стандартное имя ключа
      },
      container: {
        padding: {
          DEFAULT: '2rem', // Используем padding по умолчанию
          sm: '2rem',      // Можно указать другие значения для разных размеров
          md: '2rem',
          lg: '4rem',      // Пример для больших экранов
          xl: '4rem',      // Пример для очень больших экранов
        },
        center: true,
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px', // Добавляем дополнительные размеры
        xl: '1280px',
      },
      keyframes: {
        pulseBlue: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        pulseRed: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        'pulse-blue': 'pulseBlue 2s infinite',
        'pulse-red': 'pulseRed 2s infinite',
        'slidein': 'slidein 1s ease forwards', // Добавляем анимацию slidein
      },
    },
  },
  plugins: [],
};
