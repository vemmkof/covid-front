module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Seguimiento de UAs a dar de baja'
                return args
            })
    }
}