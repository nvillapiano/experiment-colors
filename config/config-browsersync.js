/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 */
module.exports = {
    files: [
        'dist/css/*.css',
        'dist/js/*.js',
        '**/*.twig',
        '***/*.html',
        '!node_modules/**/*.html',
    ],
    notify: false,
    open: false,
    proxy: 'http://localhost:9999',
    serveStatic: ['/dist'],
};
