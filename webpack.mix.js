const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css', [
       // Additional PostCSS plugins if needed
   ])
   .vue(); // Add this line to enable Vue.js compilation
