let path = require('path');
const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('assets/js')
    .setPublicPath('/plugins/winter/builder/assets')
    .setManifestKeyPrefix('')
    .addEntry('build-min', './assets/js/build.js')
    .enableSingleRuntimeChunk()
    .enableBuildNotifications()
    // .enableSourceMaps(!Encore.isProduction())
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(false)
    .enableSassLoader()
;

module.exports = Encore.getWebpackConfig();
