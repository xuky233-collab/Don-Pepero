module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Chilean Flag Red
        primary: {
          DEFAULT: "#D52B1E", // Chilean flag red
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          200: "#FECACA", // red-200
          300: "#FCA5A5", // red-300
          400: "#F87171", // red-400
          500: "#EF4444", // red-500
          600: "#D52B1E", // custom Chilean red
          700: "#B91C1C", // red-700
          800: "#991B1B", // red-800
          900: "#7F1D1D", // red-900
        },
        // Secondary Colors - Chilean Flag Blue
        secondary: {
          DEFAULT: "#0039A6", // Chilean flag blue
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#0039A6", // custom Chilean blue
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
        },
        // Accent Colors - Warm Gold
        accent: {
          DEFAULT: "#FFD700", // warm gold
          50: "#FFFBEB", // yellow-50
          100: "#FEF3C7", // yellow-100
          200: "#FDE68A", // yellow-200
          300: "#FCD34D", // yellow-300
          400: "#FFD700", // custom warm gold
          500: "#F59E0B", // yellow-500
          600: "#D97706", // yellow-600
          700: "#B45309", // yellow-700
          800: "#92400E", // yellow-800
          900: "#78350F", // yellow-900
        },
        // Background Colors
        background: "#FEFEFE", // gray-50
        surface: "#F8F9FA", // gray-100
        // Text Colors
        text: {
          primary: "#2D3748", // gray-700
          secondary: "#718096", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#38A169", // green-600
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          500: "#48BB78", // green-500
        },
        warning: {
          DEFAULT: "#D69E2E", // yellow-600
          50: "#FFFBEB", // yellow-50
          100: "#FEF3C7", // yellow-100
          500: "#F6E05E", // yellow-500
        },
        error: {
          DEFAULT: "#E53E3E", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#F56565", // red-500
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'gentle': 'ease-out',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}