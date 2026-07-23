/*
 * AURIN brand tokens — single source of truth for all Cloudflare error pages.
 * Values from the AURIN Brand Guidelines (colour palette + fonts).
 * Load AFTER the Tailwind CDN script:
 *   <script src="https://cdn.tailwindcss.com"></script>
 *   <script src="aurin-brand.js"></script>
 */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'aurin-dark-cobalt': '#14384c',
        'aurin-cobalt': '#205975',
        'aurin-orange': '#f5822b',
        'aurin-gold': '#e1b82e',
        'aurin-green': '#91ae3b',
        'aurin-blue': '#005baa',
        'aurin-turquoise': '#27a3a0',
        'aurin-light-cobalt': '#5c7e92',
        'aurin-olive': '#397f65',
        'aurin-grey': '#666666',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
};
