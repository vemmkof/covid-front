module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/covid' : '/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Seguimiento de Actividades Académicas a Distancia'
                return args
            })
    }
}