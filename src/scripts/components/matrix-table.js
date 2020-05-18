const headers = [
    // idGrupo
    // nivelSemestre
    {
        text: 'Nivel',
        align: 'center',
        sortable: true,
        value: 'nivelSemestre',
    },
    {
        text: 'Secuencia',
        align: 'center',
        sortable: true,
        value: 'secuencia',
    },
    {
        text: 'UA',
        align: 'center',
        sortable: true,
        value: 'nombreUnidadAprendizaje',
    },
    {
        text: 'Plataforma',
        align: 'center',
        sortable: false,
        value: 'idPlataforma',
    },
    {
        text: 'Medios',
        align: 'center',
        sortable: false,
        value: 'idsMedioComunicacion',
    },
    {
        text: 'Porcentaje',
        align: 'center',
        sortable: false,
        value: 'idPorcentaje',
    }
]


export { headers }