module.exports = {
    outputDir: '../public/dist/',
    filenameHashing: false,
    runtimeCompiler: true,
    devServer: {
        disableHostCheck: true,
        clientLogLevel: 'warning',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
    }
};
