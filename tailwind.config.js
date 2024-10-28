/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', // Enables dark mode by adding a 'class' to the root element.
	content: ['./src/**/*.html', './src/**/*.js'], // Specifies where Tailwind should look for classes.

	theme: {
		extend: {
			colors: {
				customGray: '#E2E2E2',
         },
			spacing: {
				'17': '3.25rem', // Custom spacing option for padding, margin, etc.
				'34': '6.5rem',  // Another custom spacing option
			},
			boxShadow: {
				custom: '0px 0px 24px 0px rgba(0, 0, 0, 0.05)', // Custom shadow style
			},
			colors: {
				primary: {
					light: '#FFFFFF', // Primary color in light mode
					dark: '#0D0D0D',  // Primary color in dark mode
				},
			},
			translate: {
				'-2.375em': '-2.375em', // Custom translate value for transform
			},
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'], // Custom font family
			},
			container: {
				padding: {
					DEFAULT: '2rem', // Default container padding
					sm: '2rem',       // Container padding for small screens
					md: '2rem',       // Container padding for medium screens
					lg: '2rem',       // Container padding for large screens
					xl: '2rem',       // Container padding for extra-large screens
				},
				center: true, // Centers the container horizontally
			},
			screens: {
				sm: '640px',   // Small screen breakpoint
				md: '768px',   // Medium screen breakpoint
				lg: '1024px',  // Large screen breakpoint
				xl: '1280px',  // Extra-large screen breakpoint
			},
			keyframes: {
				pulseBlue: {
					'0%, 100%': { opacity: '0' }, // Sets opacity at start and end
					'50%': { opacity: '1' },      // Sets opacity in the middle
				},
				pulseRed: {
					'0%, 100%': { opacity: '0' },
					'50%': { opacity: '1' },
				},
				slidein: {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)', // Initial position slightly lower
					},
					'60%': {
						opacity: '0.6',              // Partially visible at midpoint
						transform: 'translateY(-10px)', // Moves upward
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',  // Final position
					},
				},
				pulseDots: {
					'0%, 100%': { opacity: '0' },
					'50%': { opacity: '1' },
				},
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(20px)' }, // Initial invisible state
					'100%': { opacity: '1', transform: 'translateY(0)' },  // Fully visible state
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(20px)' }, // Initial slide-up animation
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideDown: {
					'0%': { opacity: '0', transform: 'translateY(-20px)' }, // Initial slide-down animation
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
			},
			animation: {
				'fade-in': 'fadeIn 0.8s ease-out forwards',       // Fade-in animation with smooth easing
				'slide-up': 'slideUp 0.8s ease-out forwards',     // Slide-up animation
				'slide-down': 'slideDown 0.8s ease-out forwards', // Slide-down animation
				'pulse-blue': 'pulseBlue 2s infinite',            // Infinite blue pulse effect
				'pulse-red': 'pulseRed 2s infinite',              // Infinite red pulse effect
				slidein: 'slidein 0.8s ease-out forwards',        // Slide-in animation
			},
		},
	},
	variants: {}, // Customizes responsive variants
	plugins: [require('tailwind-scrollbar')], // Includes a plugin for scrollbar styling
};
