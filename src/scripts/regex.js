
const notempty = v => !!v || 'El campo es requerido'
const boleta = v => /^\d{10,11}$/.test(v) || 'La boleta debe tener 10 u 11 caracteres.'
const curp = v => /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/.test(v) || 'La contraseña debe corresponder a tu CURP'
const selectNotEmpty = v => !!v || 'Seleccione una opción'
const selectMulNotEmpty = v => !!v.length || 'Seleccione una opción'

export default {
    usernameRule: [
        notempty, boleta
    ],
    passwordRule: [
        notempty, curp
    ],
    selectRule: [
        selectNotEmpty
    ],
    selectMulRule: [
        selectMulNotEmpty
    ],
    reasonRule: [
        notempty
    ]
}