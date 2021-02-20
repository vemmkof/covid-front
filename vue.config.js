module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Solicitud de Boleta Global'
                return args
            })
    }
}