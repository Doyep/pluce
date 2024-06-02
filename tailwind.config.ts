/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,ts}',
    './layouts/**/*.{html,ts}',
    './pages/**/*.{html,ts}',
    './utils/**/*.{html,ts}',
  ],
  safelist: [
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
  ]
}
