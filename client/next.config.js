const { PHASE_PRODUCTION_SERVER } = process.env.NODE_ENV === 'development' ? {} : require('next-server/constants');

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_PRODUCTION_SERVER) {
        return Object.assign(
            {},
            defaultConfig,
            {
                webpack(config) {
                    config.module.rules.push({
                        test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
                        use: {
                            loader: 'url-loader',
                            options: {
                                limit: 100000,
                                publicPath: './',
                                outputPath: 'static/',
                                name: '[name].[ext]',
                            },
                        },
                    });

                    return config;
                },
            },
        );
    }
    const withCSS = require('@zeit/next-css');
    return withCSS({
        webpack(config) {
            config.module.rules.push({
                test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        publicPath: './',
                        outputPath: 'static/',
                        name: '[name].[ext]',
                    },
                },
            });

            return config;
        },
    });
};
