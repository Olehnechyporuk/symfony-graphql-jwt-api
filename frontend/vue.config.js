module.exports = {
    outputDir: '../public/dist/',
    filenameHashing: false,
    runtimeCompiler: true,
    devServer: {
        disableHostCheck: true,
        port: 8080,
        clientLogLevel: 'warning',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
    }
};
