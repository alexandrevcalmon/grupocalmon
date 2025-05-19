/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        // Main headings
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h1': ['2.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em', fontWeight: '600' }],
        
        // Body text
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        
        // Special cases
        'quote': ['1.25rem', { lineHeight: '1.6', fontStyle: 'italic' }],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            fontSize: '1rem',
            lineHeight: '1.6',
            letterSpacing: '-0.01em',
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              lineHeight: '1.6',
            },
            h1: {
              fontSize: '2.75rem',
              lineHeight: '1.2',
              fontWeight: '700',
              letterSpacing: '-0.01em',
              marginTop: '2.5rem',
              marginBottom: '1.5rem',
            },
            h2: {
              fontSize: '2rem',
              lineHeight: '1.3',
              fontWeight: '700',
              letterSpacing: '-0.01em',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              fontSize: '1.5rem',
              lineHeight: '1.4',
              fontWeight: '600',
              letterSpacing: '-0.01em',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            h4: {
              fontSize: '1.25rem',
              lineHeight: '1.5',
              fontWeight: '600',
              letterSpacing: '-0.01em',
              marginTop: '1.25rem',
              marginBottom: '0.5rem',
            },
            ul: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            'ul > li': {
              paddingLeft: '1.75rem',
              position: 'relative',
            },
            'ul > li::before': {
              content: '""',
              width: '0.375rem',
              height: '0.375rem',
              borderRadius: '50%',
              backgroundColor: '#6B7280',
              position: 'absolute',
              left: '0.25rem',
              top: '0.6875rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};