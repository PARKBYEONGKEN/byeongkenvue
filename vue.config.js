module.exports = {
    devServer : {
         historyApiFallback: true,
        proxy : {
             '/board' : {
                 target : 'http://127.0.0.1:3000',
                 changeOrigin : true,
                 logLevel : 'debug'
             },
        }
    }
};
